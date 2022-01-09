import { AppBar, Container, Tab, Tabs } from "@mui/material";
import { Outlet, Link, useMatch, useLocation } from "react-router-dom";
import React from "react";

const Header = () => {
  const location = useLocation();

  return (
    <AppBar position="sticky" sx={{ height: `fitContent` }}>
      <Container>
        <Tabs
          value={`/${location.pathname.split(`/`)[1]}`}
          textColor="secondary"
          indicatorColor="secondary"
        >
          <Tab
            label="Образцы"
            value="/samples"
            to="/samples"
            component={Link}
          />
          <Tab
            label="Шлифы"
            value="/sections"
            to="/sections"
            component={Link}
          />
          <Tab
            label="Анализы"
            value="/analyzes"
            to="/analyzes"
            component={Link}
          />
          <Tab label="Книги" value="/books" to="/books" component={Link} />
        </Tabs>
      </Container>
    </AppBar>
  );
};

export default Header;
