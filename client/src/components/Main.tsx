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
      <Outlet />
    </Box>
  );
};

export default Main;
