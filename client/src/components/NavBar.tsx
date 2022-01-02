import * as React from "react";
import { Outlet, Link, useMatch, useLocation } from "react-router-dom";
import AppBar from "@mui/material/AppBar";
import { Tab, Tabs } from "@mui/material";
import Container from "@mui/material/Container";
import Box from "@mui/material/Box";

import ThemeSwitcher from "./ThemeSwitch";
import Loader from "./Loader";

export default function App() {
  const routeMatch = ["/minerals", "/books", "/sections"];
  const currentTab = routeMatch;

  const location = useLocation();

  return (
    <Box sx={{ height: "100%" }}>
      <AppBar
        position="sticky"
        // color="secondary"
        // style={{ background: "#2E3B55" }}
      >
        <Container>
          <Tabs
            value={location.pathname}
            textColor="secondary"
            indicatorColor="secondary"
          >
            <Tab
              label="Минералы"
              value="/minerals"
              to="/minerals"
              component={Link}
            />
            <Tab
              label="Шлифы"
              value="/sections"
              to="/sections"
              component={Link}
            />
            <Tab label="Книги" value="/books" to="/books" component={Link} />
          </Tabs>
        </Container>
        {/* <ThemeSwitcher /> */}
      </AppBar>
      <Box
        sx={{
          p: 2,
          height: "100%",
        }}
      >
        {/* <Container> */}
        <Outlet />
        {/* <Loader /> */}
        {/* </Container> */}
      </Box>
    </Box>
  );
}
