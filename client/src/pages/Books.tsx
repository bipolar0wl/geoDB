import { useEffect, useState } from "react";
import { GridColDef } from "@mui/x-data-grid";
import { fetchBooks } from "../API/books";
import TableCustom from "../components/TableCustom";

interface Data {
  name: string;
  calories: number;
  carbs: number;
  fat: number;
  protein: number;
}

function createData(
  name: string,
  calories: number,
  fat: number,
  carbs: number,
  protein: number,
): Data {
  return {
    name,
    calories,
    fat,
    carbs,
    protein,
  };
}
interface HeadCell {
  disablePadding: boolean;
  id: string;
  label: string;
  numeric: boolean;
}

export default function Books() {
  const columns: readonly HeadCell[] = [
    {
      id: "name",
      numeric: false,
      disablePadding: true,
      label: "Название",
    },
    {
      id: "author",
      numeric: false,
      disablePadding: false,
      label: "Автор",
    },
    {
      id: "year",
      numeric: true,
      disablePadding: false,
      label: "Год",
    },
    {
      id: "textType",
      numeric: true,
      disablePadding: false,
      label: "Тип",
    },
    {
      id: "publisher",
      numeric: true,
      disablePadding: false,
      label: "Издательство",
    },
    {
      id: "doi",
      numeric: true,
      disablePadding: false,
      label: "DOI",
    },
  ];
  const [rows, setRows] = useState([]);
  useEffect(() => {
    fetchBooks().then((response) => {
      setRows(response);
    });
  }, []);

  console.log(rows)
  return (
    <TableCustom
      post={{
        page: 1,
        columns: columns,
        rows: rows,
      }}
    />
  );
}
