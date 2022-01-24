import { FC, useState, useEffect } from "react";
import { Autocomplete, TextField } from "@mui/material";
import { fetchLangTypes } from "../API/langTypes.api";
import { IBase } from "../types/types";

interface IProps {
  langType?: IBase | null;
  setLangType: Function;
}

const LangTypeDropList: FC<IProps> = ({ langType = null, setLangType }) => {
  // * Известные типы
  const [variants, setVariants] = useState<IBase[]>([]);
  useEffect(() => {
    fetchLangTypes().then((response) => {
      setVariants(response);
    });
  }, []);
  return (
    <Autocomplete
      id="langType"
      size="small"
      options={variants}
      value={langType}
      isOptionEqualToValue={(option: any, value: any) => option.id === value.id}
      getOptionLabel={(option: any) => option.name || option}
      freeSolo
      onChange={(event, value) => {
        if (typeof value == "string") {
          value = {
            id: -1,
            name: `${value}`,
          };
        }
        setLangType(value);
      }}
      renderInput={(params) => (
        <TextField
          {...params}
          variant="outlined"
          label="Оригинал или перевод"
          placeholder="Тип"
        />
      )}
    />
  );
};

export default LangTypeDropList;
