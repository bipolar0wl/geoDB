import { Autocomplete, TextField } from "@mui/material";
import React, { useEffect, useState } from "react";
import { fetchAnalysisType } from "../API/analysisType.api";

interface IRow {
  id: number;
  name: string;
}

const AnalysisTypeForm = () => {
  const [rows, setRows] = useState([]);
  useEffect(() => {
    fetchAnalysisType().then((response) => {
      setRows(response);
    });
  }, []);

  return (
    <Autocomplete
      id="AnalysisType"
      freeSolo
      options={rows.map((option: IRow) => option.name)}
      renderInput={(params) => (
        <TextField {...params} label="Тип анализа" size="small" />
      )}
    />
  );
};

export default AnalysisTypeForm;
