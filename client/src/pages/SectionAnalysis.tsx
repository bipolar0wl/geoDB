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
    { id: number; name: string; substance2section: { percent: number } }
  ];
  analysisType: { id: number; name: string };
}

const SectionAnalysis = () => {
  const location = useLocation();
  const page = location.pathname.split(`/`);
  const id = parseInt(page[page.length - 1]) || 0;

  const [data, setData] = useState<IData>({} as IData);
  useEffect(() => {
    fetchOneSectionAnalysis(id).then((response) => {
      console.log(response);
      setData(response);
    });
  }, []);

  const [possibleSubstances, setPossibleSubstances] = useState([]);
  useEffect(() => {
    fetchSubstances().then((response) => {
      setPossibleSubstances(response);
    });
  }, []);

  const [analysisType, setAnalysisType] = useState([]);
  useEffect(() => {
    fetchAnalysisType().then((response) => {
      setAnalysisType(response);
    });
  }, []);

  if (data.name === null) return null;

  console.log(data.analysisType);
  return (
    <Grid container spacing={2}>
      <Grid item xs={12} sm={7} md={8} lg={9} xl={10}>
        <TextField
          id="name"
          label="Название"
          defaultValue={data.name}
          size="small"
          fullWidth
        />
      </Grid>
      <Grid item xs={12} sm={5} md={4} lg={3} xl={2}>
        <Autocomplete
          id="analysisType"
          size="small"
          freeSolo
          options={analysisType}
          defaultValue={
            data.analysisType ? analysisType[data.analysisType.id] : null
          }
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
        <SubstanceList />
      </Grid>
    </Grid>
  );
};

export default SectionAnalysis;
