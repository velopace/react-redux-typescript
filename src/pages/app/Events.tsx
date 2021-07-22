import React, { useEffect } from "react";
import { connect } from "react-redux";

import { makeStyles } from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";
import Divider from "@material-ui/core/Divider";
import Container from "@material-ui/core/Container";
import Grid from "@material-ui/core/Grid";
import InputLabel from "@material-ui/core/InputLabel";
import Select from "@material-ui/core/Select";
import MenuItem from "@material-ui/core/MenuItem";
import FormControl from "@material-ui/core/FormControl";

import { Spinner, EventTable, SearchBarAndSubmit } from "components/atoms";
import {
  selectEventData,
  selectLoading,
  selectSearchTerm,
  selectTimeframe,
} from "store/app/selectors";
import { getEvents, setSearchTerm, setTimeframe } from "store/app/actions";
import { GetEventsRequestParams } from "types";

const useStyles = makeStyles((theme) => ({
  formControl: {
    margin: theme.spacing(1),
    minWidth: 240,
  },
  root: {
    display: "flex",
  },
  title: {
    flexGrow: 1,
  },
  content: {
    flexGrow: 1,
    height: "100vh",
    overflow: "auto",
  },
  container: {
    paddingTop: theme.spacing(2),
    paddingBottom: theme.spacing(2),
  },
  paper: {
    padding: theme.spacing(1),
    display: "flex",
    overflow: "auto",
    flexDirection: "column",
  },
  fixedHeight: {
    height: 300,
  },
  fullWidth: {
    width: "100%",
  },
}));

export function EventsComponent({
  timeframe,
  searchTerm,
  eventData,
  isLoading,
  onSetTimeframe,
  onSetSearchTerm,
  onGetEvents,
}: EventsComponentProps) {
  const classes = useStyles();

  const handleGetEventData = () => {
    onGetEvents({ timeframe, searchTerm });
  };

  const searchEventsCallback = (searchTermCallback) => {
    onSetSearchTerm(searchTermCallback);
  };

  function updateTimeframe(event) {
    onSetTimeframe(event.target.value);
  }

  useEffect(() => {
    handleGetEventData();
  }, [timeframe, searchTerm]);

  useEffect(() => {
    onSetTimeframe("-1h");
    onSetSearchTerm("");
  }, []);

  return (
    <>
      <Container maxWidth={false} className={classes.container}>
        <Grid container spacing={1}>
          <Grid item xs={9}>
            <Typography variant="h5">Events</Typography>
          </Grid>
          <Grid item xs={3}>
            <FormControl className={classes.formControl}>
              <InputLabel shrink id="timeframe-dropdown">
                Select timeframe
              </InputLabel>
              <Select
                name="timeframe"
                onChange={updateTimeframe}
                defaultValue="-1h"
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
        <Divider />
        <SearchBarAndSubmit callback={searchEventsCallback} />
        {eventData ? (
          <Container maxWidth="lg" className={classes.container}>
            <Grid container spacing={1}>
              <Grid item xs={12}>
                <EventTable isLoading={isLoading} eventData={eventData} />
              </Grid>
            </Grid>
          </Container>
        ) : (
          <Spinner center />
        )}
      </Container>
    </>
  );
}

interface EventsComponentProps {
  timeframe: string;
  searchTerm?: string;
  eventData: any[];
  isLoading: boolean;
  onSetTimeframe: (timeframe: string) => void;
  onSetSearchTerm: (searchTerm?: string) => void;
  onGetEvents: (params: GetEventsRequestParams) => void;
}

const mapStateToProps = (state) => ({
  timeframe: selectTimeframe(state),
  searchTerm: selectSearchTerm(state),
  eventData: selectEventData(state),
  isLoading: selectLoading(state),
});
const mapDispatchToProps = {
  onSetTimeframe: setTimeframe,
  onSetSearchTerm: setSearchTerm,
  onGetEvents: getEvents,
};
export const Events = connect(
  mapStateToProps,
  mapDispatchToProps
)(EventsComponent);
