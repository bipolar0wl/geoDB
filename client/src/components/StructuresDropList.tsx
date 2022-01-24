import { FC, useState, useEffect } from "react";
import { Chip, Autocomplete, TextField } from "@mui/material";
import { IMineral, IMinerals } from "../types/types";
import { fetchStructures } from "../API/structures.api";

const StructuresDropList: FC = () => {
  // * Известные структуры
  const [variants, setVariants] = useState<IMineral[]>([]);
  useEffect(() => {
    fetchStructures().then((response) => {
      setVariants(response);
    });
  }, []);
  return (
    <Autocomplete
      multiple
      id="structures"
      size="small"
      options={variants.map((option) => option.name)}
      freeSolo
      renderTags={(value: readonly string[], getTagProps) =>
        value.map((option: string, index: number) => (
          <Chip variant="outlined" label={option} {...getTagProps({ index })} />
        ))
      }
      renderInput={(params) => (
        <TextField
          {...params}
          variant="outlined"
          label="Структура"
          placeholder="Структура"
        />
      )}
    />
  );
};

export default StructuresDropList;
