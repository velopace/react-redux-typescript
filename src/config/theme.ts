import { createMuiTheme } from "@material-ui/core/styles";

const colors = {
  /**
   * Old colors
   */
  primary: "#855CF8",
  destructive: "#D73A49",
  warning: "#FFFBDD",
  background: {
    primary: "#fff",
    secondary: "#f5f5f7",
  },
  headerTextColor: "#545754",
  paragraphTextColor: "#545754",

  /**
   * New colors
   */
  primaryBrand: {
    main: "#3053F8",
    dark: "#0524B2",
    inactive: "#A0B0FF",
    inactive2: "#CED7FF",
  },
  secondaryBrand: "#FF715B",
  dark: "#27282C",
  subtitleText: "#656576",
  accents: {
    main: "#C4C4C4",
    secondary: "#E3E3E3",
  },
  backgroundColor: "#F6F6F6",
  light: "#FFFFFF",
  error: "#D80000",
  orange: {
    main: "#FD8C3A",
    light: "#FFCCA7",
  },
  yellow: {
    main: "#FFB627",
    light: "#FFD88C",
  },
  purple: {
    main: "#5733E8",
    light: "#BEB0F5",
  },
  green: {
    main: "#38E07B",
    light: "#BBE9CD",
  },
  turquoise: {
    main: "#38E0C2",
    light: "#99E4D7",
  },
  blue: {
    main: "#30A6FF",
    light: "#90D0FF",
  },
};

export const theme = {
  colors,
};

export const muiTheme = createMuiTheme({
  typography: {
    fontFamily: "Work Sans",
    h1: {
      fontStyle: "normal",
      color: colors.dark,
      fontWeight: 600,
      fontSize: "40px",
      lineHeight: "60px",
      letterSpacing: "-0.02em",
    },
    h2: {
      fontStyle: "normal",
      color: colors.dark,
      fontWeight: 600,
      fontSize: "32px",
      lineHeight: "48px",
      letterSpacing: "-0.02em",
    },
    subtitle1: {
      fontStyle: "normal",
      color: colors.dark,
      fontWeight: 500,
      fontSize: "24px",
      lineHeight: "36px",
      letterSpacing: "-0.02em",
    },
    body1: {
      fontStyle: "normal",
      color: colors.dark,
      fontSize: "16px",
      lineHeight: "24px",
    },
    button: {
      fontStyle: "normal",
      color: colors.subtitleText,
      fontWeight: 600,
      fontSize: "14px",
      lineHeight: "21px",
      textTransform: "none",
    },
  },
  spacing: [0, 8, 16, 24, 32, 40, 48, 56, 64, 72, 80],
});
