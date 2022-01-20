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
  id: number;
  formula: string;
  name: string;
  percent: number;
}

const SubstanceList = (props: { substances: IProps[] }) => {
  console.log(props);
  const [variants, setVariants] = useState<any>([]);
  useEffect(() => {
    fetchSubstances().then((response) => {
      setVariants(response);
    });
  }, []);
  const [substances, setSubstances] = useState<any>(props.substances);
  // Добавление элемента
  const addNewSubstance = () => {
    const newSubstance = {
      id: Date.now(),
      formula: "",
      name: "",
      substance2section: { percent: 0 },
    };
    setSubstances([...substances, newSubstance]);
  };
  // Удаление элемента
  const removeSubstance = (substance: any) => {
    setSubstances(substances.filter((p: any) => p.id !== substance.id));
  };
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
