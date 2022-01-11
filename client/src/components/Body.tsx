import { Outlet } from "react-router-dom";
import Box from "@mui/material/Box";

const Body = () => {
  return (
    <Box
      sx={{
        p: 2,
        minHeight: "50vh",
        display: "flex",
        flexDirection: "column",
        gap: 2,
      }}
    >
      <Outlet />
    </Box>
  );
};

export default Body;
