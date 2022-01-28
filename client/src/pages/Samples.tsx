import { useEffect, useState } from "react";

import TableDataGrid from "../components/TableDataGrid";

import { fetchSamples } from "../API/samples.api";
import TableCustom from "../components/TableCustom/TableCustom";
import { IBase, IHeadCell } from "../types/types";

interface Data {
  id: number;
  name: string;
  minerals: IBase[];
  texture: number;
  structure: string;
  sections: IBase[];
  analyzes: IBase[];
}

function createData(
  id: number,
  name: string,
  minerals: IBase[],
  texture: number,
  structure: string,
  sections: IBase[],
  analyzes: IBase[]
): Data {
  return {
    id,
    name,
    minerals,
    texture,
    structure,
    sections,
    analyzes,
  };
}

const Samples = () => {
  const columns: readonly IHeadCell[] = [
    {
      id: "name",
      numeric: false,
      disablePadding: true,
      label: "№",
    },
    {
      id: "minerals",
      numeric: false,
      disablePadding: false,
      label: "Минеральный состав",
    },
    {
      id: "texture",
      numeric: true,
      disablePadding: false,
      label: "Текстура",
    },
    {
      id: "structure",
      numeric: true,
      disablePadding: false,
      label: "Структура",
    },
    {
      id: "sections",
      numeric: true,
      disablePadding: false,
      label: "Шлифы",
    },
    {
      id: "analyzes",
      numeric: true,
      disablePadding: false,
      label: "Анализы",
    },
  ];
  const [page, setPage] = useState(1);
  const [rowsPerPage, setRowsPerPage] = useState(10);
  const [allCount, setAllCount] = useState(0);
  const [rows, setRows] = useState([]);
  useEffect(() => {
    fetchSamples().then((response) => {
      let data: any = [];
      response.data.map((row: any) =>
        data.push(
          createData(
            row.id,
            row.name,
            row.minerals,
            row.texture ? row.texture.name : "",
            row.structure ? row.structure.name : "",
            row.sections,
            row.analyzes
          )
        )
      );
      setRows(data);
      setAllCount(response.allCount);
    });
  }, []);

  const [columnsGroups, setColumnsGroups] = useState([
    { length: 4, label: "" },
    { length: 3, label: "Шлифы" },
    { length: 3, label: "Анализы" },
  ]);

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
};

export default Samples;
