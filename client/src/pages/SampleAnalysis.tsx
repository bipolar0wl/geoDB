import { Grid, TextField, Button } from "@mui/material";
import React, { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import { fetchOneSampleAnalysis } from "../API/sampleAnalysis.api";

interface IData {
  formula: string | null;
  name: string | null;
  mass: number | null;
}

const SampleAnalysis = () => {
  const location = useLocation();
  const page = location.pathname.split(`/`);
  const id = parseInt(page[page.length - 1]) || 0;

  const [data, setData] = useState<IData>({
    formula: null,
    name: null,
    mass: null,
  });
  useEffect(() => {
    fetchOneSampleAnalysis(id).then((response) => {
      console.log(data);
      setData(response);
    });
  }, []);

  if (data.name === null) return null;

  return (
    <>
      <Grid container spacing={2}>
        <Grid item xs={12} sm={12} md={12} lg={12} xl={12}>
          <TextField id="name" label="Название" defaultValue={data.name} />
        </Grid>
        <Grid item xs={12} sm={12} md={12} lg={12} xl={12}>
          <Button variant="outlined">
            {id ? "Сохранить изменения" : "Отправить"}
          </Button>
        </Grid>
      </Grid>
    </>
  );
};

export default SampleAnalysis;
