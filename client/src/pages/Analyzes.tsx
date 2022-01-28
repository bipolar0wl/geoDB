import { useEffect, useState } from "react";
import { fetchAnalysis } from "../API/analysis.api";
import TableCustom from "../components/TableCustom/TableCustom";
import { IHeadCell } from "../types/types";

interface Data {
  id: number;
  name: string;
  substance: string;
}

function createData(id: number, name: string, substance: string): Data {
  return {
    id,
    name,
    substance,
  };
}

const Analyzes = () => {
  const columns: readonly IHeadCell[] = [
    {
      id: "name",
      numeric: false,
      disablePadding: true,
      label: "Название",
    },
    {
      id: "substances",
      numeric: false,
      disablePadding: false,
      label: "Хим",
    },
  ];
  const [page, setPage] = useState(1);
  const [rowsPerPage, setRowsPerPage] = useState(10);
  const [allCount, setAllCount] = useState(0);
  const [rows, setRows] = useState([]);
  useEffect(() => {
    fetchAnalysis().then((response) => {
      let data: any = [];
      response.data.map((row: any) =>
        data.push(createData(row.id, row.name, row.substance))
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
};

export default Analyzes;
