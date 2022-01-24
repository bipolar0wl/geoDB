import { FC, useState, useEffect } from "react";
import { Chip, Autocomplete, TextField } from "@mui/material";
import { IMineral, IMinerals } from "../types/types";
import { fetchTextures } from "../API/textures.api";

const TexturesDropList = () => {
  // * Известные структуры
  const [variants, setVariants] = useState<IMineral[]>([]);
  useEffect(() => {
    fetchTextures().then((response) => {
      setVariants(response);
    });
  }, []);
  return (
    <Autocomplete
      multiple
      id="textures"
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
          label="Текстура"
          placeholder="Текстура"
        />
      )}
    />
  );
};

export default TexturesDropList;
