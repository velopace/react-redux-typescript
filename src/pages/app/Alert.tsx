import React from "react";
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
import Button from "@material-ui/core/Button";
import TextField from "@material-ui/core/TextField";

import { FakeChart } from "components/atoms";

import * as data from "../../fakeData";

const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
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
  media: {
    width: "25%",
    marginTop: "auto",
    marginLeft: "auto",
    marginRight: "auto",
    marginBottom: "auto",
  },
  formControl: {
    margin: theme.spacing(1),
    minWidth: 140,
  },
  mathbar: {
    margin: theme.spacing(1),
  },
  title: {
    marginTop: "auto",
    marginLeft: "auto",
    marginRight: "auto",
    marginBottom: "auto",
  },
  ads: {
    display: "flex",
  },
}));

export function Alert() {
  const classes = useStyles();
  const fixedHeightPaper = clsx(classes.paper, classes.fixedHeight);

  return (
    <>
      <Container maxWidth="lg" className={classes.container}>
        <Grid container spacing={1}>
          <Grid item xs={4}>
            <Typography className={classes.formControl} variant="h5">
              Create New Alert
            </Typography>
          </Grid>
        </Grid>
      </Container>
      <Container maxWidth="lg" className={classes.container}>
        <Grid container spacing={2}>
          <Grid item xs={1} sm={1} md={1} lg={1} xl={1} />
          <Grid item xs={10} sm={10} md={10} lg={10} xl={10}>
            <Paper className={fixedHeightPaper}>
              <FakeChart
                chartData={data.inputData1Day}
                showAlert
                lines={data.lines1}
                title="Sales by Marketplace"
              />
            </Paper>
          </Grid>
        </Grid>
      </Container>
      <Divider />
      <div>
        <Container maxWidth="lg" className={classes.container}>
          <Grid container spacing={1} alignItems="flex-end">
            <Grid item xs={false}>
              <Typography variant="h6">If</Typography>
            </Grid>
            <Grid item xs={2}>
              <FormControl variant="outlined" className={classes.formControl}>
                <InputLabel>Select Metric</InputLabel>
                <Select name="metric" value={0} label="Select Metric">
                  <MenuItem value={0}>sales.revenue</MenuItem>
                  <MenuItem value={1}>sales.orders</MenuItem>
                  <MenuItem value={2}>sales.returns</MenuItem>
                  <MenuItem value={3}>costs.fees</MenuItem>
                  <MenuItem value={4}>advertising.clicks</MenuItem>
                  <MenuItem value={5}>inventory.count</MenuItem>
                </Select>
              </FormControl>
            </Grid>
            <Grid item>
              <Typography variant="h6">From</Typography>
            </Grid>
            <Grid item xs>
              <FormControl variant="outlined" className={classes.formControl}>
                <InputLabel>Select Filter</InputLabel>
                <Select
                  name="filter"
                  displayEmpty
                  value={0}
                  label="Select Filter"
                >
                  <MenuItem value={0}>None</MenuItem>
                  <MenuItem value={1}>marketplace="amazon"</MenuItem>
                  <MenuItem value={2}>marketplace="shopify"</MenuItem>
                  <MenuItem value={3}>sku="spatula"</MenuItem>
                  <MenuItem value={4}>sku="mousepad"</MenuItem>
                </Select>
              </FormControl>
            </Grid>
            <Grid item>
              <Typography variant="h6">By</Typography>
            </Grid>
            <Grid item xs={2}>
              <FormControl variant="outlined" className={classes.formControl}>
                <InputLabel>Select Grouping</InputLabel>
                <Select
                  name="breakdown"
                  displayEmpty
                  value={1}
                  label="Select Grouping"
                >
                  <MenuItem value={0}>None</MenuItem>
                  <MenuItem value={1}>marketplace</MenuItem>
                  <MenuItem value={2}>sku</MenuItem>
                  <MenuItem value={3}>region</MenuItem>
                  <MenuItem value={4}>variant</MenuItem>
                </Select>
              </FormControl>
            </Grid>
            <Grid item xs={2}>
              <FormControl variant="outlined" className={classes.formControl}>
                <Select name="math" displayEmpty value={0}>
                  <MenuItem value={0}>decreases by</MenuItem>
                  <MenuItem value={1}>increases by</MenuItem>
                  <MenuItem value={2}>is above</MenuItem>
                  <MenuItem value={3}>is below</MenuItem>
                </Select>
              </FormControl>
            </Grid>
            <Grid item xs={1}>
              <FormControl className={classes.mathbar}>
                <TextField
                  variant="outlined"
                  label="value"
                  defaultValue="50%"
                />
              </FormControl>
            </Grid>
            <Grid item xs>
              <FormControl variant="outlined" className={classes.formControl}>
                <InputLabel>Select Timeframe</InputLabel>
                <Select
                  name="timeframe"
                  displayEmpty
                  value={0}
                  label="Select Timeframe"
                >
                  <MenuItem value={0}>hour over hour</MenuItem>
                  <MenuItem value={1}>day over day</MenuItem>
                  <MenuItem value={2}>month over month</MenuItem>
                  <MenuItem value={3}>at any time</MenuItem>
                </Select>
              </FormControl>
            </Grid>
          </Grid>
        </Container>
        <Container>
          <Grid container spacing={1} alignItems="center">
            <Grid item xs={2}>
              <FormControl variant="outlined" className={classes.formControl}>
                <InputLabel>Notify Via</InputLabel>
                <Select
                  name="timeframe"
                  displayEmpty
                  value={0}
                  label=">Notify Via"
                >
                  <MenuItem value={0}>Slack</MenuItem>
                  <MenuItem value={1}>Email</MenuItem>
                  <MenuItem value={2}>SmS</MenuItem>
                </Select>
              </FormControl>
            </Grid>
            <Grid item xs={2}>
              <Button variant="contained" size="small">
                Set Alert
              </Button>
            </Grid>
          </Grid>
        </Container>
      </div>
    </>
  );
}
