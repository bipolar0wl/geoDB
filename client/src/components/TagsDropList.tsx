import { FC, useState, useEffect } from "react";
import { Chip, Autocomplete, TextField } from "@mui/material";
import { IBase, ITag } from "../types/types";
import { fetchTags } from "../API/tags.api";

interface IProps {
  tags?: IBase[];
  setTags: Function;
}

const TagsDropList: FC<IProps> = ({ tags, setTags }) => {
  // * Известные теги
  const [variants, setVariants] = useState<IBase[]>([]);
  useEffect(() => {
    fetchTags().then((response) => {
      setVariants(response);
    });
  }, []);
  return (
    <Autocomplete
      multiple
      id="tags"
      size="small"
      freeSolo
      options={variants}
      isOptionEqualToValue={(option: any, value: any) => option.id === value.id}
      value={tags}
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
        setTags(value);
      }}
      renderInput={(params) => (
        <TextField
          {...params}
          variant="outlined"
          label="Теги"
          placeholder="Теги"
        />
      )}
    />
  );
};

export default TagsDropList;
