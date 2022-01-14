import { createTheme } from "@mui/material/styles";
import { ruRU } from "@mui/x-data-grid";
import { ruRU as coreRuRU } from "@mui/material/locale";

const Theme = createTheme(
  {
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
  },
  ruRU,
  coreRuRU
);

export default Theme;
