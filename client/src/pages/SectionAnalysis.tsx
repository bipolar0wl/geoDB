import { Grid, TextField, Button, Autocomplete } from "@mui/material";
import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import { fetchAnalysisType } from "../API/analysisType.api";
import { fetchOneSectionAnalysis } from "../API/sectionAnalysis.api";
import { fetchSubstances } from "../API/substances.api";
import SubstanceList from "../components/SubstanceList";

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

const SectionAnalysis = () => {
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
  useEffect(() => {
    fetchOneSectionAnalysis(id).then((response) => {
      setData(response);
    });
  }, [data.name]);

  const [analysisType, setAnalysisType] = useState([]);
  useEffect(() => {
    fetchAnalysisType().then((response) => {
      setAnalysisType(response);
    });
  }, []);

  if (data.name === null) return null;

  const substances = data.Substance.map((substance) => {
    return {
      id: substance.id,
      name: substance.name,
      formula: substance.formula,
      percent: substance.substance2section.percent,
    };
  });

  return (
    <Grid container spacing={2}>
      <Grid item xs={12} sm={7} md={8} lg={9} xl={10}>
        <TextField
          id="name"
          label="Название"
          size="small"
          fullWidth
        >
          {data.name}
        </TextField>
      </Grid>
      <Grid item xs={12} sm={5} md={4} lg={3} xl={2}>
        <Autocomplete
          id="analysisType"
          size="small"
          freeSolo
          options={analysisType}
          // defaultValue={
          //   data.analysisType ? analysisType.id == data.analysisType.id : null
          // }
          getOptionLabel={(option: any) => option.name}
          // options={analysisType.map((option: any) => option.name)}
          renderInput={(params) => (
            <TextField {...params} label="Тип анализа" />
          )}
          onChange={(event, newValue) => {
            console.log(JSON.stringify(newValue, null, " "));
          }}
        />
      </Grid>
      <Grid item xs={12} sm={12} md={12} lg={12} xl={12}>
        <Button variant="outlined">
          {id ? "Сохранить изменения" : "Добавить анализ шлифа"}
        </Button>
      </Grid>
      <Grid item xs={12}>
        <SubstanceList substances={substances} />
      </Grid>
    </Grid>
  );
};

export default SectionAnalysis;
