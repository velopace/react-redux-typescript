import React from "react";
import clsx from "clsx";
import { Switch, Route, Link } from "react-router-dom";

import Drawer from "@material-ui/core/Drawer";
import Divider from "@material-ui/core/Divider";
import { makeStyles } from "@material-ui/core/styles";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import ListItemText from "@material-ui/core/ListItemText";
import DashboardIcon from "@material-ui/icons/Dashboard";
import NotificationsIcon from "@material-ui/icons/Notifications";
import CalendarTodayIcon from "@material-ui/icons/CalendarToday";
import ShoppingCartIcon from "@material-ui/icons/ShoppingCart";
import SettingsIcon from "@material-ui/icons/Settings";

import { LogoutButton } from "components/atoms";
import {
  Alert,
  Dashboards,
  Dashboard,
  Events,
  Products,
  Integrations,
  Home,
  // FakeDashboard
} from "pages";

const drawerWidth = 160;

const useStyles = makeStyles((theme) => ({
  formControl: {
    margin: theme.spacing(1),
    minWidth: 240,
  },
  root: {
    display: "flex",
  },
  listitem: {
    display: "flex",
  },
  title: {
    flexGrow: 1,
  },
  drawerPaper: {
    background: "#f6f6f6",
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

export const Router = React.memo(() => {
  const classes = useStyles();

  return (
    <>
      <Drawer
        variant="permanent"
        classes={{
          paper: clsx(classes.drawerPaper),
        }}
      >
        <Divider />
        <List>
          <a href="/">
            <img
              alt="Snowball_BrandLogoMark"
              style={{ width: "50%", marginLeft: "25%" }}
              src={`${process.env.PUBLIC_URL}/Snowball_BrandLogoMark.png`}
            />
          </a>
          <ListItem button>
            <Link to="/dashboards" className={classes.listitem}>
              <ListItemIcon style={{ minWidth: "40px" }}>
                <DashboardIcon />
              </ListItemIcon>
              <ListItemText primary="Dashboards" />
            </Link>
          </ListItem>
          <ListItem button>
            <Link to="/events" className={classes.listitem}>
              <ListItemIcon style={{ minWidth: "40px" }}>
                <CalendarTodayIcon />
              </ListItemIcon>
              <ListItemText primary="Events" />
            </Link>
          </ListItem>
          <ListItem button>
            <Link to="/alerts" className={classes.listitem}>
              <ListItemIcon style={{ minWidth: "40px" }}>
                <NotificationsIcon />
              </ListItemIcon>
              <ListItemText primary="Alerts" />
            </Link>
          </ListItem>
          <ListItem button>
            <Link to="/products" className={classes.listitem}>
              <ListItemIcon style={{ minWidth: "40px" }}>
                <ShoppingCartIcon />
              </ListItemIcon>
              <ListItemText primary="Products" />
            </Link>
          </ListItem>
          <ListItem button>
            <Link to="/integrations" className={classes.listitem}>
              <ListItemIcon style={{ minWidth: "40px" }}>
                <SettingsIcon />
              </ListItemIcon>
              <ListItemText primary="Integrations" />
            </Link>
          </ListItem>
          <LogoutButton />
        </List>
      </Drawer>
      <main className={classes.content}>
        <Switch>
          <Route
            path="/dashboards"
            render={({ match: { url } }) => (
              <>
                <Route path={`${url}/`} component={Dashboards} exact />
                <Route
                  path={`${url}/:dashboardId/:dashboardName`}
                  component={Dashboard}
                />
              </>
            )}
          />
          <Route path="/events">
            <Events />
          </Route>
          <Route path="/alerts">
            <Alert />
          </Route>
          <Route path="/products">
            <Products />
          </Route>
          <Route path="/integrations">
            <Integrations />
          </Route>
          <Route exact path="/">
            <Home />
          </Route>
        </Switch>
      </main>
    </>
  );
});
