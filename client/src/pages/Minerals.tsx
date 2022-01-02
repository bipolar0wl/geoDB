import React, { useEffect, useState } from "react";
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

import Table from "../components/Table";

import { fetchMaterialCompositions } from "../http/materialCompositionAPI";

const columns: GridColDef[] = [
  { field: "id", headerName: "ID", width: 90, hide: true },
  {
    field: "name",
    headerName: "№",
    width: 150,
    editable: true,
  },
  {
    field: "minerals",
    headerName: "Минеральный состав",
    flex: 1,
    editable: true,
  },
  {
    field: "texture",
    headerName: "Текстура",
    type: "string",
    width: 150,
    editable: true,
  },
  {
    field: "structure",
    headerName: "Структура",
    type: "string",
    width: 150,
    editable: true,
  },
  {
    field: "sectionWithGlass",
    headerName: "Шлифы со стеклом",
    type: "number",
    width: 200,
    filterable: false,
  },
  {
    field: "sectionWithoutGlass",
    headerName: "Шлифы без стекла",
    type: "number",
    width: 200,
    filterable: false,
  },
  {
    field: "polishedSection",
    headerName: "Аншлиф",
    type: "number",
    width: 200,
    filterable: false,
  },
];

const Minerals = () => {
  const [rows, setRows] = useState([]);
  useEffect(() => {
    fetchMaterialCompositions().then((response) => {
      setRows(response);
    });
  }, []);

  return (
    <div style={{ height: 400, width: "100%" }}>
      <Table
        post={{
          columns: columns,
          rows: rows,
        }}
      />
    </div>
  );
};

export default Minerals;
