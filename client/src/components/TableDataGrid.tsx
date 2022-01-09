import React from "react";

import {
  DataGrid,
  GridColDef,
  GridValueGetterParams,
  GridToolbar,
  GridToolbarContainer,
  GridToolbarExport,
  gridClasses,
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
        rows={props.post.rows}
        columns={props.post.columns}
        pageSize={10}
        rowsPerPageOptions={[10]}
        //   checkboxSelection
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

export default TableDataGrid