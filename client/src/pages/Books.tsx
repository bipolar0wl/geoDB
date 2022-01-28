import { useEffect, useState } from "react";
import { fetchBooks } from "../API/books.api";
import TableCustom from "../components/TableCustom/TableCustom";
import { IHeadCell } from "../types/types";

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

export default function Books() {
  const columns: readonly IHeadCell[] = [
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
  const [page, setPage] = useState(1);
  const [rowsPerPage, setRowsPerPage] = useState(10);
  const [allCount, setAllCount] = useState(0);
  const [rows, setRows] = useState([]);
  useEffect(() => {
    fetchBooks().then((response) => {
      let data: any = [];
      response.data.map((row: any) =>
        data.push(
          createData(
            row.id,
            row.name,
            row.author[0] ? row.author[0].name : "",
            row.year,
            row.textType ? row.textType.name : "",
            row.publisher,
            row.doi
          )
        )
      );
      setRows(data);
      setAllCount(response.allCount);
    });
  }, []);

  return (
    <TableCustom
      post={{
        page: page,
        rowsPerPage: rowsPerPage,
        allCount: allCount,
        columnsGroups: null,
        columns: columns,
        rows: rows,
      }}
    />
  );
}
