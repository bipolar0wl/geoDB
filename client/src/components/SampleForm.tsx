import React, { useState } from "react";
import { Box, TextField, Button } from "@mui/material";

const SampleForm = () => {
  const [sections, setSections] = useState([]);

  return (
    <Box component="form">
      <TextField required id="name" label="Название образца" size="small" />
      <TextField
        id="description"
        label="Описание образца"
        size="small"
        multiline
        rows={4}
      />
      <TextField
        id="notice"
        label="Заметка"
        size="small"
        multiline
        rows={4}
      />
      <Button>Добавить шлиф</Button>
      <Button>Добавить анализ</Button>
    </Box>
  );
};

export default SampleForm;
