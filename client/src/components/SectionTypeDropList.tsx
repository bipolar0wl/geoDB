import { FC, useState, useEffect } from "react";
import { Chip, Autocomplete, TextField } from "@mui/material";
import { IMineral, IMinerals } from "../types/types";
import { fetchStructures } from "../API/structures.api";

const SectionTypeDropList: FC = () => {
  // * Известные типы шлифов
  const [variants, setVariants] = useState<IMineral[]>([]);
  useEffect(() => {
    fetchStructures().then((response) => {
      setVariants(response);
    });
  }, []);
  return (
    <Autocomplete
      id="SectionType"
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
          label="Тип шлифа"
          placeholder="Тип шлифа"
        />
      )}
    />
  );
};

export default SectionTypeDropList;
