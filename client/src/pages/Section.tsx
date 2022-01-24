import { FC, useEffect, useState } from "react";
import { Grid, TextField, Button, Autocomplete } from "@mui/material";
import { useLocation } from "react-router-dom";
import MineralsDropList from "../components/MineralsDropList";

import { fetchOneSection } from "../API/sections.api";
import { IMineral, IMinerals } from "../types/types";
import TexturesDropList from "../components/TexturesDropList";
import StructuresDropList from "../components/StructuresDropList";
import ImageCarousel from "../components/ImageCarousel";
import SectionAnalysis from "./SectionAnalysis";

const Section = () => {
  const location = useLocation();
  const page = location.pathname.split(`/`);
  const id = parseInt(page[page.length - 1]) || 0;

  const addSection = () => {};

  const [data, setData] = useState<any>({});
  const [minerals, setMinerals] = useState<IMinerals>();
  useEffect(() => {
    fetchOneSection(id).then((response) => {
      console.log(response);
      setData({
        name: response.name,
        description: response.description,
        notice: response.notice,
        section: response.section,
        mineral: response.mineral,
        structure: response.structure,
        texture: response.texture,
        sectionPhoto: response.sectionPhoto,
        sectionAnalysis: response.sectionAnalysis,
      });
      let mineral = response.mineral.map((mineral: IMineral) => {
        return {
          id: mineral.id,
          name: mineral.name,
        };
      });
      setMinerals(mineral);
    });
  }, []);
  return (
    <Grid container spacing={2}>
      <Grid item xs={12}>
        <TextField
          fullWidth
          label="Наименование шлифа"
          size="small"
          defaultValue={data.name}
        />
      </Grid>
      <Grid item xs={12}>
        <TextField
          fullWidth
          label="Тип шлифа"
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
        {/* <SectionAnalysis id={0} /> */}
      </Grid>
      <Grid item xs={12}>
        <TextField fullWidth label="Книги по образцу" size="small"></TextField>
      </Grid>
      <Grid item xs={12}>
        <Button variant="outlined" onClick={() => addSection()}>
          {id ? "Сохранить изменения" : "Добавить шлиф"}
        </Button>
      </Grid>
    </Grid>
  );
};

export default Section;
