import { ThemeProvider } from "styled-components";
import { MuiThemeProvider } from "@material-ui/core/styles";
import { ConnectedRouter } from "connected-react-router";
import { Provider } from "react-redux";
import { theme, muiTheme } from "config/theme";
import configureStore, { history } from "configureStore";

export const parameters = {
  actions: { argTypesRegex: "^on[A-Z].*" },
  controls: {
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/,
    },
  },
}

const store = configureStore({});

export const decorators = [
  (Story) => (
    <MuiThemeProvider theme={muiTheme}>
      <ThemeProvider theme={theme}>
        <Provider store={store}>
          <ConnectedRouter history={history}>
            <Story />
          </ConnectedRouter>
        </Provider>
      </ThemeProvider>
    </MuiThemeProvider>
  )
];
