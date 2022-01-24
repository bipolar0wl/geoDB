import { FC, useEffect, useState } from "react";
import { Grid, TextField, Button, Autocomplete } from "@mui/material";
import { useLocation } from "react-router-dom";
import MineralsDropList from "../components/MineralsDropList";

import { fetchOneSample } from "../API/samples.api";
import { IMineral, IMinerals } from "../types/types";
import TexturesDropList from "../components/TexturesDropList";
import StructuresDropList from "../components/StructuresDropList";
import ImageCarousel from "../components/ImageCarousel";
import SampleAnalysis from "./SampleAnalysis";

const Sample: FC = () => {
  const location = useLocation();
  const page = location.pathname.split(`/`);
  const id = parseInt(page[page.length - 1]) || 0;

  const addSample = () => {};

  const [data, setData] = useState<any>({});
  const [minerals, setMinerals] = useState<IMinerals>();
  useEffect(() => {
    fetchOneSample(id).then((response) => {
      console.log(response);
      setData({
        name: response.name,
        description: response.description,
        notice: response.notice,
        section: response.section,
        mineral: response.mineral,
        structure: response.structure,
        texture: response.texture,
        samplePhoto: response.samplePhoto,
        sampleAnalysis: response.sampleAnalysis,
      });
      let mineral = response.mineral.map((mineral: IMineral) => {
        return {
          id: mineral.id,
          name: mineral.name,
        };
      });
      setMinerals(mineral);
      console.log(minerals);
      // setAnalysis(response.name);
      // setAnalysisType({
      //   id: response.analysisType.id,
      //   name: response.analysisType.name,
      // });
      // setSection({ id: response.section.id, name: response.section.name });
      // const data = response.Substance.map((substance: any) => {
      //   return {
      //     id: substance.id,
      //     name: substance.name,
      //     formula: substance.formula,
      //     percent: substance.substance2section.percent,
      //   };
      // });
      // setSubstances(data);
    });
  }, []);
  return (
    <Grid container spacing={2}>
      <Grid item xs={12}>
        <TextField
          fullWidth
          label="Наименование образца"
          size="small"
          defaultValue={data.name}
        />
      </Grid>
      <Grid item xs={12}>
        <MineralsDropList minerals={minerals} />
      </Grid>
      <Grid item xs={12}>
        <TexturesDropList />
      </Grid>
      <Grid item xs={12}>
        <StructuresDropList />
      </Grid>
      <Grid item xs={12} md={6}>
        <TextField
          fullWidth
          label="Описание образца"
          multiline
          rows={4}
          size="small"
        ></TextField>
      </Grid>
      <Grid item xs={12} md={6}>
        <TextField
          fullWidth
          label="Заметка к образцу"
          multiline
          rows={4}
          size="small"
        ></TextField>
      </Grid>
      <Grid item xs={12}>
        <ImageCarousel />
      </Grid>
      <Grid item xs={12}>
        <TextField fullWidth label="Шлифы" size="small"></TextField>
      </Grid>
      <Grid item xs={12}>
        <SampleAnalysis id={0} />
      </Grid>
      <Grid item xs={12}>
        <TextField fullWidth label="Книги по образцу" size="small"></TextField>
      </Grid>
      <Grid item xs={12}>
        <Button variant="outlined" onClick={() => addSample()}>
          {id ? "Сохранить изменения" : "Добавить образец"}
        </Button>
      </Grid>
    </Grid>
  );
};

export default Sample;
