import React from "react";

import {
  DataGrid,
  GridToolbar,
  ruRU,
} from "@mui/x-data-grid";

import { ThemeProvider } from "@mui/material/styles";
import CustomTheme from "./CustomTheme";

const RuRU: { [index: string]: any } = { ruRU }; // Костыль, иначе не работают props

const TableDataGrid = (props: any) => {
  console.log(props.post.rows);
  return (
    <ThemeProvider theme={CustomTheme}>
      <DataGrid
        showCellRightBorder
        showColumnRightBorder
        sortingMode="server"
        paginationMode="server"
        rows={props.post.rows}
        columns={props.post.columns}
        pageSize={10}
        rowsPerPageOptions={[10]}
        localeText={RuRU.ruRU.props.MuiDataGrid.localeText}
        density={"compact"}
        disableSelectionOnClick
        disableColumnMenu
        components={{
          Toolbar: GridToolbar,
        }}
      />
    </ThemeProvider>
  );
};

export default TableDataGrid;
