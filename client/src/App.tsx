import { useState } from "react";
import logo from "./logo.svg";
import "./App.scss";
import { BrowserRouter } from "react-router-dom";

import AppRouter from "./components/AppRouter";
import Theming from "./components/Theming";

import LightTheme from "./components/Themes/LightTheme";
import DarkTheme from "./components/Themes/DarkTheme";

import { ThemeProvider } from "@mui/material/styles";
import { Paper, Box } from "@mui/material";

function App() {
  const [theme, setTheme] = useState(`light`);
  const themeToggler = () =>
    theme === `light` ? setTheme(`dark`) : setTheme(`light`);
  return (
    <ThemeProvider theme={theme === `light` ? LightTheme : DarkTheme}>
      <Paper>
        <Box sx={{ height: "100vh" }}>
          <AppRouter />
        </Box>
      </Paper>
    </ThemeProvider>
  );
}

export default App;
