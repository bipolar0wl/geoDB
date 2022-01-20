import { useState, useEffect } from "react";
import {
  Accordion,
  AccordionSummary,
  AccordionDetails,
  Typography,
  Grid,
  Button,
} from "@mui/material";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";

import { fetchSubstances } from "../API/substances.api";
import SubstanceRow from "../components/SubstanceRow";
// * Интерфейс данных
interface IProps {
  name: string;
  type: string;
}

const SubstanceList = (props: any) => {
  const [possibleSubstances, setPossibleSubstances] = useState([]);
  useEffect(() => {
    fetchSubstances().then((response) => {
      setPossibleSubstances(response);
    });
  }, []);
  const [substances, setSubstances] = useState<any>([]);
  // Добавление элемента
  const addNewSubstance = () => {
    const newSubstance = {
      id: Date.now(),
    };
    setSubstances([...substances, newSubstance]);
  };
  // Удаление элемента
  const removeSubstance = (substance: any) => {
    setSubstances(substances.filter((p: any) => p.id !== substance.id));
  };
  console.log(props);
  return (
    <Accordion>
      <AccordionSummary expandIcon={<ExpandMoreIcon />} id="panel1a-header">
        <Typography>
          Элементы (Всего элементов: {substances.length}, общий процент: {0})
        </Typography>
      </AccordionSummary>
      <AccordionDetails>
        <Grid container spacing={1}>
          <Grid item xs={12}>
            <Button variant="outlined" onClick={addNewSubstance}>
              Добавить элемент
            </Button>
          </Grid>
          {substances.map((substance: any, index: number) => (
            <Grid item xs={12} key={substance.id}>
              <SubstanceRow
                number={index + 1}
                post={possibleSubstances}
                substance={substance}
                remove={removeSubstance}
              />
            </Grid>
          ))}
        </Grid>
      </AccordionDetails>
    </Accordion>
  );
};

export default SubstanceList;
