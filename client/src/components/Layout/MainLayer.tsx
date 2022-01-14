import { Outlet } from "react-router-dom";
import Box from "@mui/material/Box";

import NavBar from "./NavBar";

const MainLayer = () => {
  return (
    <>
      <NavBar>
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
      </NavBar>
    </>
  );
};

export default MainLayer;
