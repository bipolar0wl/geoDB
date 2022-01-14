import { useEffect, useState } from "react";
import { GridColDef } from "@mui/x-data-grid";
import { fetchBooks } from "../API/books";
import TableDataGrid from "../components/TableDataGrid";
import TableCustom from "../components/TableCustom";

const columns: GridColDef[] = [
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

const rows = [
  { id: 1, lastName: "Snow", firstName: "Jon", age: 35 },
  { id: 2, lastName: "Lannister", firstName: "Cersei", age: 42 },
  { id: 3, lastName: "Lannister", firstName: "Jaime", age: 45 },
  { id: 4, lastName: "Stark", firstName: "Arya", age: 16 },
  { id: 5, lastName: "Targaryen", firstName: "Daenerys", age: null },
  { id: 6, lastName: "Melisandre", firstName: null, age: 150 },
  { id: 7, lastName: "Clifford", firstName: "Ferrara", age: 44 },
  { id: 8, lastName: "Frances", firstName: "Rossini", age: 36 },
  { id: 9, lastName: "Roxie", firstName: "Harvey", age: 65 },
];

export default function Books() {
  const [rows, setRows] = useState([]);
  useEffect(() => {
    fetchBooks().then((response) => {
      setRows(response);
    });
  }, []);

  return (
    <>
      <TableCustom
        post={{
          columns: columns,
          rows: rows,
        }}
      />
      <TableDataGrid
        post={{
          columns: columns,
          rows: rows,
        }}
      />
    </>
  );
}
