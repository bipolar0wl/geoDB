import { useState } from "react";

import AppRouter from "./components/AppRouter";

import DarkTheme from "./themes/DarkTheme";
import LightTheme from "./themes/LightTheme";

import { ThemeProvider } from "@mui/material/styles";
import { Paper } from "@mui/material";

function App() {
  const [theme, setTheme] = useState(`light`);
  const themeToggler = () =>
    theme === `light` ? setTheme(`dark`) : setTheme(`light`);
  return (
    <ThemeProvider theme={theme === `light` ? LightTheme : DarkTheme}>
      <Paper sx={{ height: "100vh", display: `flex`, flexDirection: `column` }}>
        <AppRouter />
      </Paper>
    </ThemeProvider>
  );
}

export default App;
