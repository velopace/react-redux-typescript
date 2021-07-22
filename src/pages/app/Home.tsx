import React from "react";
import clsx from "clsx";

import { makeStyles } from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";
import Divider from "@material-ui/core/Divider";
import Container from "@material-ui/core/Container";
import Grid from "@material-ui/core/Grid";
import Card from "@material-ui/core/Card";
import CardMedia from "@material-ui/core/CardMedia";

import { MiniTable } from "components/atoms";
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
    height: 250,
  },
  fullWidth: {
    width: "100%",
  },
  media: {
    width: "25%",
    marginTop: "auto",
    marginLeft: "auto",
    marginRight: "auto",
    marginBottom: "auto%",
  },
  title: {
    marginTop: "auto",
    marginLeft: "auto",
    marginRight: "auto",
    marginBottom: "auto%",
  },
  ads: {
    display: "flex",
  },
}));

export function Home() {
  const classes = useStyles();
  const fixedHeightPaper = clsx(classes.paper, classes.fixedHeight);

  return (
    <>
      <Container maxWidth="lg" className={classes.container}>
        <Grid container spacing={2}>
          <Grid item xs={12}>
            <Typography variant="h5">Acme Co eCommerce Operations</Typography>
          </Grid>
        </Grid>
      </Container>
      <Divider />
      <Container maxWidth="lg" className={classes.container}>
        <Grid container spacing={2}>
          <Grid item xs={12} sm={12} md={4} lg={4} xl={4}>
            <Card className={fixedHeightPaper}>
              <CardMedia
                component="img"
                className={classes.media}
                image="/amazon-logo.png"
                title="Amazon"
              />
              <Typography
                variant="h5"
                component="h2"
                color="textSecondary"
                className={classes.title}
              >
                Total Sales: Past 24 Hours
              </Typography>
              <Typography variant="h4" component="h3" className={classes.title}>
                $2,500
              </Typography>
            </Card>
          </Grid>
          <Grid item xs={12} sm={12} md={4} lg={4} xl={4}>
            <Card className={fixedHeightPaper}>
              <CardMedia
                component="img"
                className={classes.media}
                image="/shopify-logo.png"
                title="Shopify"
              />
              <Typography
                gutterBottom
                variant="h5"
                component="h2"
                color="textSecondary"
                className={classes.title}
              >
                Total Sales: Past 24 Hours
              </Typography>
              <Typography variant="h4" component="h3" className={classes.title}>
                $2,000
              </Typography>
            </Card>
          </Grid>
          <Grid item xs={12} sm={12} md={4} lg={4} xl={4}>
            <Card className={fixedHeightPaper}>
              <CardMedia
                component="img"
                className={classes.media}
                image="/walmart-logo.png"
                title="Walmart Logo"
              />
              <Typography
                gutterBottom
                variant="h5"
                component="h2"
                color="textSecondary"
                className={classes.title}
              >
                Total Sales: Past 24 Hours
              </Typography>
              <Typography variant="h4" component="h3" className={classes.title}>
                $500
              </Typography>
            </Card>
          </Grid>
          <Grid item xs={12} sm={12} md={6} lg={6} xl={6}>
            <Card className={fixedHeightPaper}>
              <Typography
                gutterBottom
                variant="h5"
                component="h2"
                color="textSecondary"
                className={classes.title}
              >
                Recent Events
              </Typography>
              <MiniTable eventData={data.miniEventData} />
            </Card>
          </Grid>
          <Grid item xs={12} sm={12} md={3} lg={3} xl={3}>
            <Card className={fixedHeightPaper}>
              <div className={classes.ads}>
                <CardMedia
                  component="img"
                  className={classes.media}
                  image="/facebook-logo.png"
                  title="Facebook Logo"
                />
                <CardMedia
                  component="img"
                  className={classes.media}
                  image="/google-logo.png"
                  title="Google Logo"
                />
              </div>
              <Typography
                gutterBottom
                variant="h5"
                component="h2"
                color="textSecondary"
                className={classes.title}
              >
                Total Ad Spend <br /> Past 24 Hours
              </Typography>
              <Typography variant="h4" component="h3" className={classes.title}>
                $1,000
              </Typography>
            </Card>
          </Grid>
          <Grid item xs={12} sm={12} md={3} lg={3} xl={3}>
            <Card className={fixedHeightPaper}>
              <Typography
                gutterBottom
                variant="h5"
                component="h2"
                color="textSecondary"
                className={classes.title}
              >
                Inventory Levels <br /> End of Prior day
              </Typography>
              <Typography variant="h4" component="h3" className={classes.title}>
                500 units
              </Typography>
            </Card>
          </Grid>
        </Grid>
      </Container>
    </>
  );
}
