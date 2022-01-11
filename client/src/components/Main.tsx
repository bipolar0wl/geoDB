import { Outlet } from "react-router-dom";
import Box from "@mui/material/Box";

const Main = () => {
  return (
    <Box
      sx={{
        p: 2,
        height: "100vh",
        display: "flex",
        flexDirection: "column",
        gap: 2,
      }}
    >
      <img
        src="https://c.tenor.com/D9g51P1Cq6kAAAAi/ricardo-milos-sexy.gif"
        alt="Ricardo"
      />
      <Outlet />
    </Box>
  );
};

export default Main;
