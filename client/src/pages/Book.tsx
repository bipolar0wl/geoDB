import React from "react";
import {
  Button,
  ButtonGroup,
  FormControl,
  FormGroup,
  FormLabel,
  Grid,
  Input,
  InputAdornment,
  InputLabel,
  MenuItem,
  Select,
  SelectChangeEvent,
  Stack,
  TextField,
  Typography,
} from "@mui/material";

const Book = () => {
  const [age, setAge] = React.useState("");

  const handleChange = (event: SelectChangeEvent) => {
    setAge(event.target.value);
  };

  const [value, setValue] = React.useState<Date | null>(new Date());

  return (
    <FormControl variant="standard" sx={{ minWidth: 120 }} fullWidth>
      <Grid container spacing={2}>
        <Grid item xs={12} sm={12} md={8} lg={6} xl={6}>
          <TextField
            required
            id="name"
            label="Название книги"
            size="small"
            fullWidth
          />
        </Grid>
        <Grid item xs={8} sm={6} md={4} lg={3} xl={2}>
          <FormControl fullWidth size="small">
            <InputLabel id="demo-simple-select-label">
              Оригинал или перевод
            </InputLabel>
            <Select
              labelId="langType"
              id="langType"
              value={age}
              label="Оригинал или перевод"
              onChange={handleChange}
            >
              <MenuItem value="">
                <em>Не определено</em>
              </MenuItem>
              <MenuItem value={1}>Оригинал</MenuItem>
              <MenuItem value={2}>Перевод</MenuItem>
            </Select>
          </FormControl>
        </Grid>
        <Grid item xs={4} sm={6} md={3} lg={3} xl={2}>
          <FormControl fullWidth size="small">
            <InputLabel id="textType">Тип</InputLabel>
            <Select
              labelId="textType"
              id="textType"
              value={age}
              label="Тип"
              onChange={handleChange}
            >
              <MenuItem value="">
                <em>Не определено</em>
              </MenuItem>
              <MenuItem value={1}>Статья</MenuItem>
              <MenuItem value={2}>Книга</MenuItem>
            </Select>
          </FormControl>
        </Grid>
        <Grid item xs={12} sm={12} md={3} lg={6} xl={2} display="flex">
          <TextField
            type="number"
            id="year"
            label="Дата публикации"
            size="small"
            fullWidth
          />
          {/* <FormGroup>
            <FormLabel>Дата публикации</FormLabel>
            <Stack direction="row" spacing={0}>
              <TextField id="day" label="День" size="small" fullWidth />
              <TextField id="monst" label="Месяц" size="small" fullWidth />
              <TextField id="year" label="Год" size="small" fullWidth />
            </Stack>
          </FormGroup> */}
        </Grid>
        <Grid item xs={12} sm={12} md={6} lg={6} xl={4}>
          <TextField
            id="publisher"
            label="Издательство"
            size="small"
            fullWidth
          />
        </Grid>
        <Grid item xs={12} sm={12} md={6} lg={6} xl={4}>
          <TextField id="source" label="Источник" size="small" fullWidth />
        </Grid>
        <Grid item xs={12} sm={12} md={6} lg={6} xl={4}>
          <TextField id="ref" label="Ссылка" size="small" fullWidth />
        </Grid>
        <Grid item xs={12} sm={6} md={4} lg={4} xl={4}>
          <TextField
            id="doi"
            label="DOI"
            size="small"
            fullWidth
            multiline
            rows={4}
          />
        </Grid>
        <Grid item xs={12} sm={6} md={4} lg={4} xl={4}>
          <TextField
            id="gost"
            label="ГОСТ"
            size="small"
            fullWidth
            multiline
            rows={4}
          />
        </Grid>
        <Grid item xs={12} sm={6} md={4} lg={4} xl={4}>
          <TextField
            id="mla"
            label="MLA"
            size="small"
            fullWidth
            multiline
            rows={4}
          />
        </Grid>
        <Grid item xs={12} sm={6} md={4} lg={4} xl={4}>
          <TextField
            id="apa"
            label="APA"
            size="small"
            fullWidth
            multiline
            rows={4}
          />
        </Grid>
        <Grid item xs={12} sm={6} md={4} lg={4} xl={4}>
          <TextField
            id="description"
            label="Описание"
            size="small"
            fullWidth
            multiline
            rows={4}
          />
        </Grid>
        <Grid item xs={12} sm={6} md={4} lg={4} xl={4}>
          <TextField
            id="notice"
            label="Заметка"
            size="small"
            fullWidth
            multiline
            rows={4}
          />
        </Grid>
        <Grid item xs={12} sm={12} md={6} lg={6} xl={6}>
          <TextField
            id="authors"
            label="Авторы"
            size="small"
            fullWidth
            multiline
            rows={4}
          />
        </Grid>
        <Grid item xs={12} sm={12} md={6} lg={6} xl={6}>
          <TextField
            id="tags"
            label="Теги"
            size="small"
            fullWidth
            multiline
            rows={4}
          />
        </Grid>
        <Grid
          item
          xs={12}
          sm={12}
          md={12}
          lg={12}
          xl={12}
          display="flex"
          justifyContent="end"
        >
          <Button variant="outlined">Сохранить изменения</Button>
        </Grid>
      </Grid>
    </FormControl>
  );
};

export default Book;
