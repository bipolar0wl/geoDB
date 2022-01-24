import { Grid, TextField, Button, Autocomplete } from "@mui/material";
import { FC, useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import SubstanceList from "../components/SubstanceList";

import { fetchAnalysisType } from "../API/analysisType.api";
import {
  addSampleAnalysis,
  fetchOneSampleAnalysis,
} from "../API/sampleAnalysis.api";

import { ISample, IAnalysisType } from "../types/types";

interface IData {
  id: number;
  name: string;
  sample: { id: number; name: string };
  Substance: [
    {
      id: number;
      name: string;
      formula: string;
      substance2sample: { percent: number };
    }
  ];
  analysisType: { id: number; name: string };
}

const SampleAnalysis: FC<any> = ({ id }) => {
  const location = useLocation();
  if (!id) {
    const page = location.pathname.split(`/`);
    id = parseInt(page[page.length - 1]) || 0;
  }
  // * Название анализа
  const [analysis, setAnalysis] = useState("");
  // * Название образца
  // const [sample, setSample] = useState<ISample>({ id: 0, name: "" });
  // * Тип анализа
  const [analysisType, setAnalysisType] = useState<IAnalysisType>({
    id: 0,
    name: "",
  });
  // * Элементы в анализе
  const [substances, setSubstances] = useState([]);
  useEffect(() => {
    fetchOneSampleAnalysis(id).then((response) => {
      setAnalysis(response.name);
      console.log(response.analysisType);
      if (response.analysisType) {
        setAnalysisType({
          id: response.analysisType.id,
          name: response.analysisType.name,
        });
      }
      //     // setSample({ id: response.sample.id, name: response.sample.name });
      if (response.Substance) {
        const data = response.Substance.map((substance: any) => {
          return {
            id: substance.id,
            name: substance.name,
            formula: substance.formula,
            percent: substance.substance2sample.percent,
          };
        });
      }
      //     setSubstances(data);
    });
  }, []);
  // * Известные типы анализов
  const [analysisTypes, setAnalysisTypes] = useState([]);
  useEffect(() => {
    fetchAnalysisType().then((response) => {
      console.log(response);
      setAnalysisTypes(response);
    });
  }, []);

  return (
    <Grid container spacing={2}>
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
      </Grid>
      <Grid item xs={12} sm={12} md={12} lg={12} xl={12}>
        <Button
          variant="outlined"
          onClick={() => addSampleAnalysis(analysis, analysisType, substances)}
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

export default SampleAnalysis;
