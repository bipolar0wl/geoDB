import { useEffect, useState } from "react";
import { GridColDef } from "@mui/x-data-grid";

import TableDataGrid from "../components/TableDataGrid";
import SampleForm from "../components/SampleForm";

import { fetchSamples } from "../API/samples.api";
import { Button } from "@mui/material";

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

const Samples = () => {
  const [rows, setRows] = useState([]);
  useEffect(() => {
    fetchSamples().then((response) => {
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
      <SampleForm />
      <TableDataGrid
        post={{
          columns: columns,
          rows: rows,
        }}
      />
    </>
  );
};

export default Samples;
