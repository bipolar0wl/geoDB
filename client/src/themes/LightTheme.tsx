import { createTheme } from "@mui/material/styles";

declare module "@mui/material/styles" {
  interface Theme {
    status: {
      danger: string;
    };
  }
  // allow configuration using `createTheme`
  interface ThemeOptions {
    status?: {
      danger?: string;
    };
  }
}

const LightTheme = createTheme({
  palette: {
    mode: "light",
    primary: {
      main: "#0066ff",
    },
    secondary: {
      main: "#ffff00",
    },
    info: {
      main: "#e25d95",
    },
  },
  status: {
    danger: "#666",
  },
});

export default LightTheme;
