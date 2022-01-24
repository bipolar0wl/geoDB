import { FC, useState, useEffect } from "react";
import { Chip, Autocomplete, TextField } from "@mui/material";
import { fetchMinerals } from "../API/minerals.api";
import { IMineral, IMinerals } from "../types/types";

// const MineralsDropList: FC<IMineral> = (minerals) => {
const MineralsDropList = (minerals?: any) => {
  // * Известные минералы
  const [variants, setVariants] = useState<IMineral[]>([]);
  useEffect(() => {
    fetchMinerals().then((response) => {
      setVariants(response);
    });
  }, []);
  console.log(minerals);
  console.log(variants);
  return (
    <Autocomplete
      multiple
      id="minerals"
      size="small"
      options={variants.map((option) => option.name)}
      // defaultValue={[top100Films[13].title]}
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
          label="Минеральный состав"
          placeholder="Минеральный состав"
          rows={4}
        />
      )}
    />
  );
};

export default MineralsDropList;
