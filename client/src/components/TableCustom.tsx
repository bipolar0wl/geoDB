import { useState } from "react";
import {
  Paper,
  TextField,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Collapse,
  Button,
} from "@mui/material";

import PreviewIcon from "@mui/icons-material/Preview";
import DeleteForeverIcon from "@mui/icons-material/DeleteForever";

function createData(
  name: string,
  calories: number,
  fat: number,
  carbs: number,
  protein: number
) {
  return { name, calories, fat, carbs, protein };
}

export default function TableCustom(props: any) {
  console.log(props.post.rows);
  return (
    <TableContainer component={Paper}>
      <Table
        sx={{ minWidth: 650 }}
        stickyHeader
        size="small"
        aria-label="simple table"
      >
        <TableHead>
          <TableRow>
            {props.post.columns.map((column: any) => (
              <TableCell key={column.id}>{column.label}</TableCell>
            ))}
            <TableCell align="center">Действие</TableCell>
          </TableRow>
          <TableRow>
            {props.post.columns.map((column: any) => (
              <TableCell key={column.id} component="th">
                <TextField
                  id={`${column.id}Searh`}
                  size="small"
                  fullWidth
                  label={column.label}
                  variant="standard"
                />
              </TableCell>
            ))}
            <TableCell align="center">
              <Button variant="contained" size="small">
                Сброс
              </Button>
            </TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {props.post.rows.map((row: any) => (
            <TableRow
              key={row.id}
              sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
            >
              {/* {row.map((column: any) => console.log(column))} */}
              {[`gay`, `sex`].map((id) => console.log(row))}
              <TableCell component="th" scope="row">
                {row.name}
              </TableCell>
              {/* <TableCell align="right">{row.calories}</TableCell>
              <TableCell align="right">{row.fat}</TableCell>
              <TableCell align="right">{row.carbs}</TableCell>
              <TableCell align="right">{row.protein}</TableCell> */}
              <TableCell align="center">
                <Button variant="contained" size="small">
                  <PreviewIcon />
                </Button>
                <Button variant="contained" size="small">
                  <DeleteForeverIcon />
                </Button>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}
