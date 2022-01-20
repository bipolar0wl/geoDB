import { useEffect, useState } from "react";
import { GridColDef } from "@mui/x-data-grid";
import { fetchBooks } from "../API/books.api";
import TableCustom from "../components/TableCustom/TableCustom";

interface Data {
  id: number;
  name: string;
  author: string;
  year: number;
  textType: string;
  publisher: string;
  doi: string;
}

function createData(
  id: number,
  name: string,
  author: string,
  year: number,
  textType: string,
  publisher: string,
  doi: string
): Data {
  return {
    id,
    name,
    author,
    year,
    textType,
    publisher,
    doi,
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
      let data: any = [];
      response.map((row: any) =>
        data.push(
          createData(
            row.id,
            row.name,
            row.author[0].name,
            row.year,
            row.textType.name,
            row.publisher,
            row.DOI
          )
        )
      );
      setRows(data);
    });
  }, []);

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
