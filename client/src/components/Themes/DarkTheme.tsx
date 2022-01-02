import React from "react";
import { createTheme, ThemeProvider, styled } from "@mui/material/styles";

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

const DarkTheme = createTheme({
  palette: {
    mode: "dark",
    primary: {
      main: "#0066ff",
    },
    text: {
      primary: "#fff",
    },
    secondary: {
      main: "#00ff00",
    },
    info: {
      main: "#e25d95",
    },
  },
  status: {
    danger: "#666",
  },
});

export default DarkTheme;
