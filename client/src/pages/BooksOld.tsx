import { useEffect, useState } from "react";
import { GridColDef } from "@mui/x-data-grid";
import { fetchBooks } from "../API/books";
import TableDataGrid from "../components/TableDataGrid";
import TableCustom from "../components/TableCustom";

const gcolumns: GridColDef[] = [
  { field: "id", headerName: "ID", width: 90, hide: true },
  {
    field: "name",
    headerName: "Название",
    width: 150,
    editable: true,
  },
  {
    field: "author",
    headerName: "Автор",
    width: 150,
    editable: true,
  },
  {
    field: "year",
    headerName: "Дата публикации",
    type: "date",
    width: 110,
    editable: true,
  },
  {
    field: "langTypeId",
    headerName: "Оригинал или перевод",
    sortable: false,
    width: 160,
  },
  {
    field: "textTypeId",
    headerName: "Тип",
    sortable: false,
    width: 160,
  },
  {
    field: "publisher",
    headerName: "Издательство",
    sortable: false,
    width: 160,
  },
  {
    field: "DOI",
    headerName: "DOI",
    sortable: false,
    width: 160,
  },
  {
    field: "GOST",
    headerName: "ГОСТ",
    sortable: false,
    width: 160,
  },
  {
    field: "fullName",
    headerName: "MLA",
    sortable: false,
    width: 160,
  },
  {
    field: "fullName",
    headerName: "APA",
    sortable: false,
    width: 160,
  },
];

export default function Books() {
  const [rows, setRows] = useState([]);
  useEffect(() => {
    fetchBooks().then((response) => {
      setRows(response);
    });
  }, []);

  return (
    <TableDataGrid
      post={{
        columns: gcolumns,
        rows: rows,
      }}
    />
  );
}
