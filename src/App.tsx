import React, { useEffect, useState } from "react";
import { useAuth0 } from "@auth0/auth0-react";
import axios from "axios";
import { connect } from "react-redux";
import { Auth0Client } from "auth0-spa-js";
import CssBaseline from "@material-ui/core/CssBaseline";
import { makeStyles } from "@material-ui/core/styles";

import { LoginButton, OrgInput } from "components/atoms";
import { getUser } from "store/auth/actions";
import { User } from "types";
import { Router } from "./Router";

export * from "./configureAxios";

const auth0 = new Auth0Client({
  domain: process.env.REACT_APP_AUTH0_DOMAIN,
  client_id: process.env.REACT_APP_AUTH0_CLIENT_ID,
  redirect_uri: process.env.REACT_APP_AUTH0_REDIRECT_URI,
});

axios.interceptors.request.use(
  async (config) => {
    const audience = process.env.REACT_APP_API_AUTH0_AUDIENCE_URI;
    const scope = "";

    const accessToken = await auth0.getTokenSilently({ audience, scope });
    const configWithAuthorization = config;
    configWithAuthorization.headers.Authorization = `Bearer ${accessToken}`;
    return configWithAuthorization;
  },
  (error) => {
    if (error.error === "login_required") {
      auth0.loginWithRedirect();
    } else {
      Promise.reject(error);
    }
  }
);

axios.interceptors.response.use(
  (response) => response,
  async (error) => {
    if (error.error === "login_required") {
      auth0.loginWithRedirect();
    }
    if (error.error === "consent_required") {
      const opts = {
        audience: process.env.REACT_APP_API_AUTH0_AUDIENCE_URI,
        scope: "",
      };
      auth0.loginWithRedirect(opts);
    } else {
      return Promise.reject(error);
    }
  }
);

const useStyles = makeStyles(() => ({
  root: {
    display: "flex",
  },
}));

interface AppProps {
  userLoading: boolean;
  user: User;
  onGetUser: () => void;
}
const App = ({ userLoading, user, onGetUser }: AppProps) => {
  const classes = useStyles();
  const { isLoading, isAuthenticated, error } = useAuth0();
  const [hasOrgAssigned, setHasOrgAssigned] = useState(false);

  useEffect(() => {
    if (isAuthenticated) {
      onGetUser();
    }
  }, [isAuthenticated]);

  useEffect(() => {
    if (user) {
      setHasOrgAssigned(user.organizations.length > 0);
    }
  }, [user]);

  if (isLoading || userLoading) {
    return <></>;
  }

  if (error) {
    return <div>Oops... {error.message}</div>;
  }

  if (isAuthenticated && !hasOrgAssigned) {
    return <OrgInput />;
  }

  if (isAuthenticated && hasOrgAssigned) {
    return (
      <div className={classes.root}>
        <CssBaseline />
        <Router />
      </div>
    );
  }

  return <LoginButton />;
};

const mapStateToProps = (state) => ({
  userLoading: state.auth.loading,
  user: state.auth.user,
});

const mapDispatchToProps = {
  onGetUser: getUser,
};

export default connect(mapStateToProps, mapDispatchToProps)(App);
