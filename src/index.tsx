import React from "react";
import ReactDOM from "react-dom";
import { Auth0Provider } from "@auth0/auth0-react";
import { ThemeProvider } from "styled-components";
import { MuiThemeProvider } from "@material-ui/core/styles";
import { Provider } from "react-redux";
import { ConnectedRouter } from "connected-react-router";

import { theme, muiTheme } from "config/theme";
import App from "./App";
import configureStore, { history } from "./configureStore";

const store = configureStore({
  /* provide initial state if any */
});

ReactDOM.render(
  <Auth0Provider
    domain={process.env.REACT_APP_AUTH0_DOMAIN}
    clientId={process.env.REACT_APP_AUTH0_CLIENT_ID}
    redirectUri={window.location.origin}
  >
    <MuiThemeProvider theme={muiTheme}>
      <ThemeProvider theme={theme}>
        <Provider store={store}>
          <ConnectedRouter history={history}>
            <App />
          </ConnectedRouter>
        </Provider>
      </ThemeProvider>
    </MuiThemeProvider>
  </Auth0Provider>,
  document.getElementById("root")
);
