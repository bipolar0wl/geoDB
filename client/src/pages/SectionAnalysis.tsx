import { Grid, TextField, Button, Autocomplete } from "@mui/material";
import { FC, useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import SubstanceList from "../components/SubstanceList";

import { fetchAnalysisType } from "../API/analysisType.api";
import {
  addSectionAnalysis,
  fetchOneSectionAnalysis,
} from "../API/sectionAnalysis.api";

import { ISection, IAnalysisType } from "../types/types";

interface IData {
  id: number;
  name: string;
  section: { id: number; name: string };
  Substance: [
    {
      id: number;
      name: string;
      formula: string;
      substance2section: { percent: number };
    }
  ];
  analysisType: { id: number; name: string };
}

const SectionAnalysis: FC = () => {
  const location = useLocation();
  const page = location.pathname.split(`/`);
  const id = parseInt(page[page.length - 1]) || 0;

  const [data, setData] = useState<IData>({
    id: 0,
    name: "",
    section: { id: 0, name: "" },
    Substance: [
      {
        id: 0,
        name: "",
        formula: "",
        substance2section: { percent: 0 },
      },
    ],
    analysisType: { id: 0, name: "" },
  });
  // * Название анализа
  const [analysis, setAnalysis] = useState("");
  // * Название шлифа
  const [section, setSection] = useState<ISection>({ id: 0, name: "" });
  // * Тип анализа
  const [analysisType, setAnalysisType] = useState<IAnalysisType>({
    id: 0,
    name: "",
  });
  // * Элементы в анализе
  const [substances, setSubstances] = useState([]);
  useEffect(() => {
    fetchOneSectionAnalysis(id).then((response) => {
      setAnalysis(response.name);
      setAnalysisType({
        id: response.analysisType.id,
        name: response.analysisType.name,
      });
      setSection({ id: response.section.id, name: response.section.name });
      const data = response.Substance.map((substance: any) => {
        return {
          id: substance.id,
          name: substance.name,
          formula: substance.formula,
          percent: substance.substance2section.percent,
        };
      });
      setSubstances(data);
    });
  }, []);
  // * Известные типы анализов
  const [analysisTypes, setAnalysisTypes] = useState([]);
  useEffect(() => {
    fetchAnalysisType().then((response) => {
      setAnalysisTypes(response);
    });
  }, []);

  if (data.name === null) return null;

  return (
    <Grid container spacing={2}>
      <Grid item xs={12}>
        <TextField id="parent" label="Название шлифа" size="small" fullWidth>
          {section.name}
        </TextField>
      </Grid>
      <Grid item xs={12} sm={7} md={8} lg={9} xl={10}>
        <TextField
          id="name"
          label="Название анализа"
          size="small"
          fullWidth
          value={analysis}
        />
      </Grid>
      <Grid item xs={12} sm={5} md={4} lg={3} xl={2}>
        <Autocomplete
          id="analysisType"
          size="small"
          freeSolo
          options={analysisTypes.map((option: any) => option.name)}
          value={analysisType.name}
          renderInput={(params) => (
            <TextField {...params} label="Тип анализа" />
          )}
          onChange={(event, newValue) => {
            console.log(JSON.stringify(newValue, null, " "));
          }}
        />
        {/* <Autocomplete
          id="analysisType"
          size="small"
          options={analysisType}
          // defaultValue={
          //   data.analysisType ? analysisType.id == data.analysisType.id : null
          // }
          getOptionLabel={(option: any) => option.name}
          freeSolo
          // options={analysisType.map((option: any) => option.name)}
          renderInput={(params) => (
            <TextField {...params} label="Тип анализа" />
          )}
          onChange={(event, newValue) => {
            console.log(JSON.stringify(newValue, null, " "));
          }}
        /> */}
      </Grid>
      <Grid item xs={12} sm={12} md={12} lg={12} xl={12}>
        <Button
          variant="outlined"
          onClick={() => addSectionAnalysis(analysis, analysisType, substances)}
        >
          {id ? "Сохранить изменения" : "Добавить анализ шлифа"}
        </Button>
      </Grid>
      <Grid item xs={12}>
        <SubstanceList substances={substances} setSubstances={setSubstances} />
      </Grid>
    </Grid>
  );
};

export default SectionAnalysis;
