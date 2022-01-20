import React from "react";
import { Grid, Autocomplete, Button, TextField } from "@mui/material";
import DeleteIcon from "@mui/icons-material/Delete";

interface IProps {
  name: string;
  type: string;
}

const SubstanceRow = (props: any) => {
  console.log(props);
  return (
    <Grid container spacing={2}>
      <Grid item xs={12} sm={4} md={5} lg={5} xl={5}>
        <Autocomplete
          freeSolo
          options={props.post.map((option: any) => option.formula)}
          renderInput={(params) => (
            <TextField
              {...params}
              label={`Элемент ${props.number}`}
              size="small"
            />
          )}
        />
      </Grid>
      <Grid item xs={12} sm={5} md={5} lg={5} xl={6}>
        <TextField label="Процент содержания" size="small" fullWidth />
      </Grid>
      <Grid item xs={12} sm={3} md={2} lg={2} xl={1}>
        <Button
          variant="outlined"
          startIcon={<DeleteIcon />}
          fullWidth
          onClick={() => props.remove(props.substance)}
        >
          Удалить
        </Button>
      </Grid>
    </Grid>
  );
};

export default SubstanceRow;
