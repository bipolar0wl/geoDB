import * as React from "react";
import { InputLabel, MenuItem, FormControl } from "@mui/material";

import Select, { SelectChangeEvent } from "@mui/material/Select";

// for(let j=1900, j < 2022, j++){
//     // (<MenuItem value={i}>i</MenuItem>)
//     }

const YearSelect = (props: any) => {
  const [age, setAge] = React.useState("");
  const [value, setValue] = React.useState<Date | null>(new Date());

  const handleChange = (event: SelectChangeEvent) => {
    setAge(event.target.value);
  };

  let items = [];
  for (var i = 1900; i < new Date().getFullYear(); i++) {
    items.push(<MenuItem value={i}>{i}</MenuItem>);
  }
  console.log(items);

  return (
    <FormControl sx={{ m: 1, minWidth: 120 }}>
      <InputLabel id="demo-simple-select-standard-label">
        {props.post.text}
      </InputLabel>
      <Select
        size="small"
        sx={{ m: 1, maxWidth: 240 }}
        labelId="demo-simple-select-standard-label"
        id="demo-simple-select-standard"
        value={age}
        onChange={handleChange}
        label={props.post.text}
      >
        <MenuItem value="">
          <em>Не выбран</em>
        </MenuItem>
        {items}
      </Select>
    </FormControl>
  );
};

export default YearSelect;
