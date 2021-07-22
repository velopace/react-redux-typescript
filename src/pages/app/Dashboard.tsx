/* eslint-disable no-nested-ternary */

import React, { useState, useEffect, useMemo } from "react";
import styled from "styled-components";
import { useParams, Link } from "react-router-dom";
import { connect } from "react-redux";
import Switch from "@material-ui/core/Switch";
import InputLabel from "@material-ui/core/InputLabel";
import Select from "@material-ui/core/Select";
import FormControl from "@material-ui/core/FormControl";
import MenuItem from "@material-ui/core/MenuItem";
import Grid from "@material-ui/core/Grid";

import {
  Head,
  Spinner,
  Divider,
  Card,
  EventTable,
  SearchBarAndSubmit,
} from "components/atoms";
import {
  DeleteDashboard,
  NewWidget,
  DeleteWidget,
  EditWidget,
  Chart,
} from "components";
import {
  getAvailableMetrics,
  getDashboard,
  postBatchWidgetData,
  getEvents,
  setTimeframe,
  setSearchTerm,
  fetchDashboardData,
} from "store/app/actions";
import {
  DashboardType,
  GetDashboardRequestParams,
  GetEventsRequestParams,
  IMetricDataValue,
} from "types";
import {
  selectAvailableMetrics,
  selectDashboard,
  selectEventData,
  selectMetricData,
  selectSearchTerm,
  selectTimeframe,
} from "store/app/selectors";

const HeadContainer = styled.div`
  background: white;
  padding: 10px;
`;

const StyledLink = styled(Link)`
  color: {(props) => props.theme.colors.primary};
  text-decoration: none;
  &:hover {
    text-decoration: underline;
    cursor: pointer;
  }
`;

const Widget = ({
  availableMetrics,
  dashboard,
  chartData,
  lineData,
  eventData,
  widget,
  showEvents,
  highlightEvent,
}) => (
  <Grid item xs={showEvents ? 12 : 6} sm={showEvents ? 12 : 6}>
    <Card height="300px">
      <div>
        <Grid container justify="space-between" alignItems="center">
          <Grid item>
            <div style={{ fontSize: "1rem" }}>
              {/* TODO move this out of ternary to component */}
              {widget.group_by_tags && widget.group_by_tags.length > 0
                ? widget.filter_tags && widget.filter_tags.length > 0
                  ? `${widget.metric_name} [${widget.filter_tags}] by ${widget.group_by_tags}`
                  : `${widget.metric_name} by ${widget.group_by_tags}`
                : widget.filter_tags && widget.filter_tags.length > 0
                ? `${widget.metric_name} [${widget.filter_tags}]`
                : widget.metric_name}
            </div>
          </Grid>
          <Grid item>
            <div style={{ width: "150px" }}>
              <Grid container direction="row" style={{ gap: "0.25rem" }}>
                <div style={{ flex: 1 }}>
                  <EditWidget
                    availableMetrics={availableMetrics}
                    dashboard={dashboard}
                    widget={widget}
                  />
                </div>
                <div style={{ flex: 1 }}>
                  <DeleteWidget dashboard={dashboard} widget={widget} />
                </div>
              </Grid>
            </div>
          </Grid>
        </Grid>
      </div>
      <Divider />
      {!!lineData && !!eventData ? (
        <Chart
          eventData={eventData}
          lines={lineData}
          chartData={chartData}
          showEvents={showEvents}
          highlightData={highlightEvent}
        />
      ) : (
        <Spinner center />
      )}
    </Card>
  </Grid>
);

const DashboardComponent = ({
  dashboard,
  availableMetrics,
  timeframe,
  searchTerm,
  metricData,
  eventData,
  onGetDashboard,
  onFetchDashboardData,
  onGetEvents,
  onSetTimeframe,
  onSetSearchTerm,
}: DashboardComponentProps) => {
  const { dashboardId, dashboardName } = useParams();
  const [highlightEvent, setHighlightEvent] = useState<string | null>(null);
  const [showEvents, setShowEvents] = useState<boolean>(false);
  const handleGetEventData = () => {
    if (!dashboard) return;
    onGetEvents({ timeframe, searchTerm });
  };

  const searchEventsCallback = (searchTermCallback) => {
    onSetSearchTerm(searchTermCallback);
  };

  const highlightCallbackFunction = (rowInfo) => {
    setHighlightEvent(rowInfo.id);
  };

  useEffect(() => {
    onGetDashboard({ id: dashboardId });

    return () => {
      onSetTimeframe("-1h");
      onSetSearchTerm("");
    };
  }, []);

  useEffect(() => {
    if (!dashboard) return;
    onFetchDashboardData();
    const refreshDataInterval = setInterval(
      () => onFetchDashboardData(),
      60000
    );
    return () => clearInterval(refreshDataInterval);
  }, [dashboard, timeframe]);

  useEffect(() => {
    handleGetEventData();
  }, [searchTerm]);

  const title = useMemo(() => {
    if (dashboard) return dashboard.name;
    if (dashboardName) return dashboardName;
    return "My Dashboard";
  }, [dashboard]);

  const lineData = useMemo(() => {
    if (!metricData) return null;

    const linesObject = {};
    metricData.forEach((value) => {
      const lines =
        value.data && value.data.length > 0
          ? Object.keys(value.data[0]).filter((key) => key !== "time")
          : [];
      linesObject[value.id] = lines;
    });

    return linesObject;
  }, [JSON.stringify(metricData)]);

  const onUpdateTimeframe = (event) => {
    onSetTimeframe(event.target.value);
  };

  const renderWidgets = () => {
    if (!dashboard) return [];
    const { widgets } = dashboard;
    // FIXME:
    // After the dashboard "widgets" are loaded, the batch query fetches the "metricData" for each widget.
    //
    // However, the "metricData" that is returned has no reference back to the widget it's associated with.
    // If we assume that the order the "metricData" is returned is the order as the widgets, we can assign
    // Each widget's metricData based on the widget index as we do below.
    //
    // This may break in unexpected ways. We should at the least have a reference id that ties the metricData
    // to its widget, or have each widget be responsible for fetching its own data rather than having a batchquery.
    // -JS
    return widgets.map((widget, index) => (
      <Widget
        availableMetrics={availableMetrics}
        dashboard={dashboard}
        lineData={
          metricData &&
          lineData &&
          metricData[index] &&
          lineData[metricData[index].id]
        }
        eventData={eventData}
        chartData={metricData && metricData[index] && metricData[index].data}
        widget={widget}
        key={widget.id}
        showEvents={showEvents}
        highlightEvent={highlightEvent}
      />
    ));
  };

  return (
    <>
      <HeadContainer>
        <Grid container justify="space-between" alignItems="center">
          <StyledLink to="/dashboards">« All Dashboards</StyledLink>
          {dashboard && <DeleteDashboard dashboard={dashboard} />}
        </Grid>
        {dashboard && (
          <Grid
            style={{ marginTop: "1rem" }}
            container
            justify="flex-start"
            alignItems="flex-start"
          >
            <Grid item xs={8}>
              <Head large>{title}</Head>
            </Grid>
            <Grid item xs={2}>
              <InputLabel shrink id="Show Events">
                {showEvents ? "Hide" : "Show"} Events
              </InputLabel>
              <Switch
                checked={showEvents}
                onChange={() => setShowEvents(!showEvents)}
              />
            </Grid>
            <Grid item xs={2}>
              <FormControl fullWidth>
                <InputLabel shrink id="timeframe-dropdown">
                  Select timeframe
                </InputLabel>
                <Select
                  name="timeframe"
                  onChange={onUpdateTimeframe}
                  defaultValue="-1h"
                  value={timeframe}
                >
                  <MenuItem value="-15m">Past 15 Minutes</MenuItem>
                  <MenuItem value="-1h">Past Hour</MenuItem>
                  <MenuItem value="-1d">Past 24 hours</MenuItem>
                  <MenuItem value="-1w">Past 1 week</MenuItem>
                  <MenuItem value="-1mo">Past 1 month</MenuItem>
                  <MenuItem value="-1y">Past 1 year</MenuItem>
                </Select>
              </FormControl>
            </Grid>
          </Grid>
        )}
      </HeadContainer>
      {dashboard && (
        <div>
          <Grid
            style={{ padding: "10px", margin: 0, width: "100%" }}
            container
            spacing={1}
            direction="row"
            justify="flex-start"
            alignItems="stretch"
          >
            <Grid item xs={showEvents ? 6 : 12}>
              <Grid container spacing={1}>
                {renderWidgets()}
                <Grid item xs={showEvents ? 12 : 6}>
                  <NewWidget
                    availableMetrics={availableMetrics}
                    dashboard={dashboard}
                  />
                </Grid>
              </Grid>
            </Grid>
            {showEvents && (
              <Grid item xs={6}>
                <Card height="100%">
                  <Grid
                    container
                    justify="space-between"
                    alignItems="flex-start"
                  >
                    <Grid item>
                      <Head
                        tiny
                        style={{
                          marginBottom: "1rem",
                        }}
                      >
                        Events
                      </Head>
                    </Grid>
                    <Grid item>
                      <SearchBarAndSubmit callback={searchEventsCallback} />
                    </Grid>
                    <EventTable
                      isLoading={!eventData}
                      eventData={eventData ?? []}
                      parentCallback={highlightCallbackFunction}
                    />
                  </Grid>
                </Card>
              </Grid>
            )}
          </Grid>
        </div>
      )}
    </>
  );
};

interface DashboardComponentProps {
  dashboard: DashboardType;
  availableMetrics: string[];
  timeframe: string;
  searchTerm?: string;
  metricData: IMetricDataValue[] | null;
  eventData: any[];
  onGetDashboard: (params: GetDashboardRequestParams) => void;
  onFetchDashboardData: () => void;
  onGetEvents: (params: GetEventsRequestParams) => void;
  onSetTimeframe: (timeframe: string) => void;
  onSetSearchTerm: (searchTerm?: string) => void;
}
const mapStateToProps = (state) => ({
  dashboard: selectDashboard(state),
  availableMetrics: selectAvailableMetrics(state),
  timeframe: selectTimeframe(state),
  searchTerm: selectSearchTerm(state),
  metricData: selectMetricData(state),
  eventData: selectEventData(state),
});
const mapDispatchToProps = {
  onGetDashboard: getDashboard,
  onFetchDashboardData: fetchDashboardData,
  onGetAvailableMetrics: getAvailableMetrics,
  onPostBatchWidgetData: postBatchWidgetData,
  onGetEvents: getEvents,
  onSetTimeframe: setTimeframe,
  onSetSearchTerm: setSearchTerm,
};
export const Dashboard = connect(
  mapStateToProps,
  mapDispatchToProps
)(DashboardComponent);
