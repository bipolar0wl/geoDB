import { Button } from "@mui/material";
import { GridColDef } from "@mui/x-data-grid";
import React, { useEffect, useState } from "react";
import { fetchAnalysis } from "../API/analysis.api";
import TableDataGrid from "../components/TableDataGrid";

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

const Analyzes = () => {
  const [rows, setRows] = useState([]);
  useEffect(() => {
    fetchAnalysis().then((response) => {
      setRows(response);
    });
  }, []);

  return (
    <>
      <div>
        <Button variant="contained" color="primary">
          Добавить образец
        </Button>
      </div>
      <TableDataGrid
        post={{
          columns: columns,
          rows: rows,
        }}
      />
    </>
  );
};

export default Analyzes;
