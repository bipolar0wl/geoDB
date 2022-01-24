import { FC, useState, useEffect } from "react";
import { Autocomplete, TextField } from "@mui/material";
import { fetchTextTypes } from "../API/textTypes.api";
import { IBase } from "../types/types";

interface IProps {
  textType?: IBase | null;
  setTextType: Function;
}

const TextTypeDropList: FC<IProps> = ({ textType = null, setTextType }) => {
  // * Известные типы
  const [variants, setVariants] = useState<IBase[]>([]);
  useEffect(() => {
    fetchTextTypes().then((response) => {
      setVariants(response);
    });
  }, []);
  return (
    <Autocomplete
      id="textType"
      size="small"
      options={variants}
      value={textType}
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
        setTextType(value);
      }}
      renderInput={(params) => (
        <TextField
          {...params}
          variant="outlined"
          label="Тип"
          placeholder="Тип"
        />
      )}
    />
  );
};

export default TextTypeDropList;
