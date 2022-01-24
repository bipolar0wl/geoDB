import { useState, useEffect, FC } from "react";
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

import { ISubstance } from "../types/types";

// * Интерфейс данных
interface IProps {
  substances: ISubstance[];
  setSubstances: Function;
}

const SubstanceList: FC<IProps> = ({ substances, setSubstances }) => {
  // * Уже имеющиеся в базе элементы
  const [variants, setVariants] = useState<any>([]);
  useEffect(() => {
    fetchSubstances().then((response) => {
      setVariants(response);
    });
  }, []);
  // ! Добавление элемента
  const addNewSubstance = () => {
    const newSubstance = {
      id: Date.now(),
      formula: "",
      name: "",
      percent: 0,
    };
    setSubstances([...substances, newSubstance]);
  };
  // ! Удаление элемента
  const removeSubstance = (substance: any) => {
    setSubstances(substances.filter((p: any) => p.id !== substance.id));
  };
  const updateSubstances = (substance: any) => {
    setSubstances([...substances]);
  };
  // * Общий процент содержания
  const sumPercent = substances.reduce((sum: number, current) => {
    return sum + Number(current.percent);
  }, 0);
  return (
    <Accordion>
      <AccordionSummary expandIcon={<ExpandMoreIcon />} id="panel1a-header">
        <Typography>
          Элементы (Всего элементов: {substances.length}, общий процент:&nbsp;
        </Typography>
        <Typography style={sumPercent > 100 ? { color: "red" } : {}}>
          {sumPercent.toFixed(2)}%
        </Typography>
        <Typography>)</Typography>
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
                variants={variants}
                substance={substance}
                remove={removeSubstance}
                updateSubstances={updateSubstances}
              />
            </Grid>
          ))}
        </Grid>
      </AccordionDetails>
    </Accordion>
  );
};

export default SubstanceList;
