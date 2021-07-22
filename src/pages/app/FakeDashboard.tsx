import * as React from "react";
import clsx from "clsx";

import { makeStyles } from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";
import Divider from "@material-ui/core/Divider";
import Container from "@material-ui/core/Container";
import Grid from "@material-ui/core/Grid";
import Paper from "@material-ui/core/Paper";
import InputLabel from "@material-ui/core/InputLabel";
import Select from "@material-ui/core/Select";
import MenuItem from "@material-ui/core/MenuItem";
import FormControl from "@material-ui/core/FormControl";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import ButtonBase from "@material-ui/core/ButtonBase";
import Chip from "@material-ui/core/Chip";

import { EventTable, FakeTopList, FakeChart } from "components/atoms";
// import { useApi } from "hooks/use-api";

import * as data from "../../fakeData";

const drawerWidth = 190;

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
  drawerPaper: {
    background: "#041f35",
    position: "relative",
    whiteSpace: "nowrap",
    width: drawerWidth,
    transition: theme.transitions.create("width", {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen,
    }),
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

export const AppContext = React.createContext({});

export default function Dashboard() {
  const classes = useStyles();
  const fixedHeightPaper = clsx(classes.paper, classes.fixedHeight);
  const cardClass = clsx(classes.fixedHeight, classes.fullWidth);

  const [inputData, setChartData] = React.useState({
    inputData1: data.inputData0 as any,
    lines1: data.lines0,
    inputData2: data.inputData2,
    lines2: data.lines2,
    inputData3: data.inputData3,
    lines3: data.lines3,
    inputData4: data.inputData4Month,
    lines4: data.lines4,
    eventData: data.eventData,
  });

  // const [widgetData, setWidgetData] = React.useState({
  //   chartData: [],
  //   lines: [],
  //   title: "",
  // });

  const [timeframe, setTimeframe] = React.useState({
    timeframe1: 0,
    timeframe2: 0,
    timeframe3: 0,
  });

  // const [eventData, setEventData] = React.useState({
  //   eventData1: data.eventData,
  // });

  const [highlightEvent, setHighlightEvent] = React.useState({
    highlightEvent: "",
  });

  const callbackFunction = (rowInfo) => {
    const eventId = rowInfo.id;
    console.log("in here");
    setHighlightEvent({
      highlightEvent: eventId,
    });
  };

  const pivotCallbackFunction = (_pivotInfo) => {
    setChartData({
      ...inputData,
      inputData1: data.inputData1,
      lines1: data.lines1,
    });
  };

  const [additionalGraphs, setAdditionalGraphs] = React.useState({
    additionalNumberShown: 0,
    graph1: false,
    graph2: false,
    graph3: false,
  });

  function addNewGraph() {
    const counter = additionalGraphs.additionalNumberShown + 1;
    const whichGraph = `graph${counter}`;
    const obj = { ...additionalGraphs };
    obj[whichGraph] = true;
    obj.additionalNumberShown = counter;
    setAdditionalGraphs(obj);
  }

  const handleChange = (event) => {
    const { value } = event.target;
    const { name } = event.target;
    setTimeframe({
      ...timeframe,
      [event.target.name]: value,
    });

    switch (true) {
      case name === "timeframe1" && value === 0:
        setChartData({
          ...inputData,
          inputData1: data.inputData1,
          inputData2: data.inputData2,
          inputData3: data.inputData3,
        });
        break;
      case name === "timeframe1" && value === 1:
        setChartData({
          ...inputData,
          inputData1: data.inputData1Day,
          inputData2: data.inputData2Day,
          inputData3: data.inputData3Day,
        });
        break;
      case name === "timeframe1" && value === 2:
        setChartData({
          ...inputData,
          inputData1: data.inputData1Week,
          inputData2: data.inputData2Week,
          inputData3: data.inputData3Week,
        });
        break;
      case name === "timeframe1" && value === 3:
        setChartData({
          ...inputData,
          inputData1: data.inputData1Month,
          inputData2: data.inputData2Month,
          inputData3: data.inputData3Month,
        });
        break;
      case name === "timeframe1" && value === 4:
        setChartData({
          ...inputData,
          inputData1: data.inputData1Year,
          inputData2: data.inputData2Year,
          inputData3: data.inputData3Year,
        });
        break;
      case name === "timeframe2" && value === 3:
        console.log("cmon");
        setChartData({
          ...inputData,
          inputData1: data.inputData1DayMonthHistorical,
          lines1: data.lines1MonthHistorical,
          inputData2: data.inputData2DayMonthHistorical,
          lines2: data.lines2MonthHistorical,
          inputData3: data.inputData3DayMonthHistorical,
        });
        break;
      case name === "timeframe2" && value === 0:
        console.log("cmon2");
        setChartData({
          ...inputData,
          inputData1: data.inputData1Day,
          inputData2: data.inputData2Day,
          inputData3: data.inputData3Day,
          lines1: data.lines1,
          lines2: data.lines2,
        });
        break;
      default:
        break;
    }
  };

  const [showEvents, setShowEvents] = React.useState(false);

  function toggleEvents() {
    setShowEvents(!showEvents);
  }

  // function setDataCallback(query_data, body) {
  //   console.log("in htere");
  //   console.log(query_data);
  //   const title = JSON.stringify(body);
  //   const lines = [];
  //   for (const [key, value] of Object.entries(query_data[0])) {
  //     if (key != "time") lines.push(key);
  //   }
  //   setWidgetData({
  //     chartData: query_data,
  //     lines,
  //     title,
  //   });
  // }

  // const opts = {
  //   audience: "https://i1dsfne3l4.execute-api.us-east-1.amazonaws.com/dev/",
  //   headers: { "content-type": "application/json" },
  //   body: {
  //     metric_name: "inventory.quantity",
  //     timeframe: "-1h",
  //     every: "5m",
  //     group_by_tags: "name",
  //     filter_tags: "",
  //     fn: "last",
  //   },
  // };
  // const {
  //   loading,
  //   error,
  //   refresh,
  //   data: query_data,
  // } = useApi(
  //   "https://i1dsfne3l4.execute-api.us-east-1.amazonaws.com/dev/",
  //   opts,
  //   setDataCallback
  // );

  return (
    <>
      <Container maxWidth={false} className={classes.container}>
        <Grid container spacing={1}>
          <Grid item xs={4}>
            <Typography variant="h5">Overview Dashboard</Typography>
          </Grid>
          <Grid item xs={3}>
            <FormControl className={classes.formControl}>
              <InputLabel shrink id="timeframe-dropdown">
                Select timeframe
              </InputLabel>
              <Select
                value={timeframe.timeframe1}
                name="timeframe1"
                onChange={handleChange}
                displayEmpty
              >
                <MenuItem value={0}>Past Hour</MenuItem>
                <MenuItem value={1}>Past 24 hours</MenuItem>
                <MenuItem value={2}>Past 1 week</MenuItem>
                <MenuItem value={3}>Past 1 month</MenuItem>
                <MenuItem value={4}>Past 1 year</MenuItem>
                <MenuItem value={5}>Custom</MenuItem>
              </Select>
            </FormControl>
          </Grid>
          <Grid item xs={3}>
            <FormControl className={classes.formControl}>
              <InputLabel shrink id="historical-dropdown">
                View same timeframe historically
              </InputLabel>
              <Select
                value={timeframe.timeframe2}
                name="timeframe2"
                onChange={handleChange}
              >
                <MenuItem value={0}>None</MenuItem>
                <MenuItem value={1}>Yesterday</MenuItem>
                <MenuItem value={2}>Last Week</MenuItem>
                <MenuItem value={3}>Last Month</MenuItem>
                <MenuItem value={4}>Last Year</MenuItem>
                <MenuItem value={5}>Exact Date</MenuItem>
              </Select>
            </FormControl>
          </Grid>
          {/* }
              <FormControl className={classes.formControl}>
              <InputLabel shrink id="overlay-dropdown">Overlay last [x] periods</InputLabel>
                <Select
                  displayEmpty
                  value={timeframe.timeframe3}
                  name="timeframe3"
                  onChange={handleChange}
                  className={classes.selectEmpty}>
                  <MenuItem value="">0</MenuItem>
                  <MenuItem value={1}>1</MenuItem>
                  <MenuItem value={2}>2</MenuItem>
                  <MenuItem value={3}>3</MenuItem>
                </Select>
              </FormControl>
          */}
          <Grid item xs={2}>
            <Chip
              label="Toggle Events"
              onClick={toggleEvents}
              color="primary"
            />
          </Grid>
        </Grid>
      </Container>
      <Divider />
      <Container maxWidth="lg" className={classes.container}>
        <Grid container spacing={2}>
          {showEvents && (
            <Grid item xs={12}>
              <EventTable
                eventData={inputData.eventData}
                parentCallback={callbackFunction}
              />
            </Grid>
          )}
          {/* <Grid item xs={12} sm={12} md={6} lg={6} xl={6}>
              <Paper className={fixedHeightPaper}>
                <AppContext.Provider>
                  <Chart parentCallback = {pivotCallbackFunction} showEvents = {showEvents} highlightData={highlightEvent.highlightEvent} eventData={inputData.eventData} lines={widgetData.lines} chartData={widgetData.chartData} title={widgetData.title}/>
                </AppContext.Provider>
              </Paper>
              </Grid> */}
          <Grid item xs={12} sm={12} md={6} lg={6} xl={6}>
            <Paper className={fixedHeightPaper}>
              {/* <AppContext.Provider> */}
              <FakeChart
                parentCallback={pivotCallbackFunction}
                showEvents={showEvents}
                highlightData={highlightEvent.highlightEvent}
                eventData={inputData.eventData}
                chartData={inputData.inputData1}
                lines={inputData.lines1}
                title="Total Sales"
              />
              {/* </AppContext.Provider> */}
            </Paper>
          </Grid>
          {additionalGraphs.graph1 ? (
            <Grid item xs={12} sm={12} md={6} lg={6} xl={6}>
              <Paper className={fixedHeightPaper}>
                {/* <AppContext.Provider> */}
                <FakeChart
                  showEvents={showEvents}
                  highlightData={highlightEvent.highlightEvent}
                  eventData={inputData.eventData}
                  chartData={inputData.inputData2}
                  lines={inputData.lines2}
                  title="Shopify Sales by Sku"
                />
                {/* </AppContext.Provider> */}
              </Paper>
            </Grid>
          ) : null}
          {additionalGraphs.graph2 ? (
            <Grid item xs={12} sm={12} md={6} lg={6} xl={6}>
              <Paper className={fixedHeightPaper}>
                {/* <AppContext.Provider> */}
                <FakeTopList
                  chartData={inputData.inputData3}
                  lines={inputData.lines3}
                  title="Top Selling Skus"
                />
                {/* </AppContext.Provider> */}
              </Paper>
            </Grid>
          ) : null}
          {additionalGraphs.graph3 ? (
            <Grid item xs={12} sm={12} md={6} lg={6} xl={6}>
              <Paper className={fixedHeightPaper}>
                {/* <AppContext.Provider> */}
                <FakeChart
                  showEvents={showEvents}
                  highlightData={highlightEvent.highlightEvent}
                  eventData={inputData.eventData}
                  chartData={inputData.inputData4}
                  lines={inputData.lines4}
                  title="Ad Spend vs.Inventory: Acme Grills "
                />
                {/* </AppContext.Provider> */}
              </Paper>
            </Grid>
          ) : null}
          <Grid item xs={12} sm={12} md={6} lg={6} xl={6}>
            {/* <AppContext.Provider> */}
            <Card>
              <ButtonBase
                className={cardClass}
                onClick={(_event) => {
                  addNewGraph();
                }}
              >
                <CardContent>Insert New Graph</CardContent>
              </ButtonBase>
            </Card>
            {/* </AppContext.Provider> */}
          </Grid>
        </Grid>
      </Container>
    </>
  );
}
