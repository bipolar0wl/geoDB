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
}

const SubstanceList: FC<IProps> = ({ substances }) => {
  // * Уже имеющиеся в базе элементы
  const [variants, setVariants] = useState<any>([]);
  useEffect(() => {
    fetchSubstances().then((response) => {
      setVariants(response);
    });
  }, []);
  // * Элементы для отображения в списке
  let [elements, setElements] = useState(substances);
  // ! Добавление элемента
  const addNewSubstance = () => {
    const newSubstance = {
      id: Date.now(),
      formula: "",
      name: "",
      percent: 0,
    };
    setElements([...elements, newSubstance]);
  };
  // ! Удаление элемента
  const removeSubstance = (substance: any) => {
    setElements(elements.filter((p: any) => p.id !== substance.id));
  };
  console.log(elements);
  console.log(substances);
  const sumPercent = substances.reduce((sum: number, current) => {
    return sum + Number(current.percent);
  }, 0);
  return (
    <Accordion>
      <AccordionSummary expandIcon={<ExpandMoreIcon />} id="panel1a-header">
        <Typography>
          Элементы (Всего элементов: {elements.length}, общий процент:{" "}
          {sumPercent.toFixed(2)}%)
        </Typography>
      </AccordionSummary>
      <AccordionDetails>
        <Grid container spacing={1}>
          <Grid item xs={12}>
            <Button variant="outlined" onClick={addNewSubstance}>
              Добавить элемент
            </Button>
          </Grid>
          {elements.map((substance: any, index: number) => (
            <Grid item xs={12} key={substance.id}>
              <SubstanceRow
                number={index + 1}
                variants={variants}
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
