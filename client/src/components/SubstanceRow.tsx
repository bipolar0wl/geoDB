import { FC } from "react";
import { Grid, Autocomplete, Button, TextField } from "@mui/material";
import DeleteIcon from "@mui/icons-material/Delete";
import { ISubstance } from "../types/types";

interface IProps {
  number: number;
  substance: ISubstance;
  variants: [
    {
      id: number;
      formula: string;
      name: string;
    }
  ];
  remove: Function;
}

const SubstanceRow: FC<IProps> = ({ number, substance, variants, remove }) => {
  return (
    <Grid container spacing={2}>
      <Grid item xs={12} sm={4} md={5} lg={5} xl={5}>
        <Autocomplete
          freeSolo
          options={variants.map((option: any) => option.formula)}
          defaultValue={substance.formula}
          renderInput={(params) => (
            <TextField {...params} label={`Элемент ${number}`} size="small" />
          )}
        />
        {/* <Autocomplete
          freeSolo
          options={variants}
          defaultValue={
            data.analysisType ? analysisType.id == data.analysisType.id : null
          }
          getOptionLabel={(option: any) => option.formula}
          renderInput={(params) => (
            <TextField {...params} label={`Элемент ${number}`} size="small" />
          )}
        /> */}
      </Grid>
      <Grid item xs={12} sm={5} md={5} lg={5} xl={6}>
        <TextField
          label="Процент содержания"
          size="small"
          defaultValue={substance.percent}
          fullWidth
          onChange={(event) => console.log(event.target.value)}
        />
      </Grid>
      <Grid item xs={12} sm={3} md={2} lg={2} xl={1}>
        <Button
          variant="outlined"
          startIcon={<DeleteIcon />}
          fullWidth
          onClick={() => remove(substance)}
        >
          Удалить
        </Button>
      </Grid>
    </Grid>
  );
};

export default SubstanceRow;
