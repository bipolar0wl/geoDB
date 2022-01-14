import React, { useEffect, useState } from "react";
import { Autocomplete, TextField } from "@mui/material";
import { fetchSubstance } from "../API/substance";

interface IRow {
  id: number;
  formula: string;
  name: string;
}

const SubstanceForm = () => {
  const [rows, setRows] = useState([]);
  useEffect(() => {
    fetchSubstance().then((response) => {
      setRows(response);
    });
  }, []);

  return (
    <Autocomplete
      id="substance"
      freeSolo
      options={rows.map((option: IRow) => `${option.formula} (${option.name})`)}
      renderInput={(params) => (
        <TextField {...params} label="Элемент" size="small" />
      )}
    />
  );
};

export default SubstanceForm;
