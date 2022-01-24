import { FC, useState, useEffect } from "react";
import { Chip, Autocomplete, TextField } from "@mui/material";
import { fetchAuthors } from "../API/authors.api";
import { IBase } from "../types/types";

interface IProps {
  authors?: IBase[];
  setAuthors: Function;
}

const AuthorsDropList: FC<IProps> = ({ authors, setAuthors }) => {
  // * Известные авторы
  const [variants, setVariants] = useState<IBase[]>([]);
  useEffect(() => {
    fetchAuthors().then((response) => {
      setVariants(response);
    });
  }, []);
  return (
    <Autocomplete
      multiple
      id="authprs"
      size="small"
      freeSolo
      options={variants}
      isOptionEqualToValue={(option: any, value: any) => option.id === value.id}
      value={authors}
      getOptionLabel={(option: any) => option.name || option}
      renderTags={(value: any, getTagProps) =>
        value.map((option: any, index: number) => (
          <Chip
            variant="outlined"
            label={option.name || option}
            {...getTagProps({ index })}
          />
        ))
      }
      onChange={(event, value) => {
        if (typeof value[value.length - 1] == "string") {
          value[value.length - 1] = {
            id: -new Date(),
            name: `${value[value.length - 1]}`,
          };
        }
        setAuthors(value);
      }}
      renderInput={(params) => (
        <TextField
          {...params}
          variant="outlined"
          label="Авторы"
          placeholder="Авторы"
        />
      )}
    />
  );
};

export default AuthorsDropList;
