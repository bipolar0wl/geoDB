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
  Stack,
  IconButton,
} from "@mui/material";

import PreviewIcon from "@mui/icons-material/Preview";
import DeleteForeverIcon from "@mui/icons-material/DeleteForever";

export default function TableCustom(props: any) {
  console.log(props.post.columns);
  console.log(props.post.rows);
  return (
    <TableContainer component={Paper}>
      <Table
        sx={{ minWidth: 650 }}
        stickyHeader
        size="small"
        aria-label="table"
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
                  id={`${column.id}Search`}
                  className="search"
                  size="small"
                  fullWidth
                  label={column.label}
                  variant="standard"
                />
              </TableCell>
            ))}
            <TableCell align="center">
              <Button
                variant="contained"
                size="small"
                onClick={() => console.log(`Сброс фильтров`)}
              >
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
              {[`gay`, `sex`].map((id) => console.log(row))}
              {props.post.columns.map((column: any) => (
                <TableCell key={column.id}>{row[column.id]}</TableCell>
              ))}
              <TableCell align="center">
                <Stack direction="row">
                  <IconButton
                    color="primary"
                    aria-label="Посмотреть"
                    component="span"
                    size="small"
                    onClick={() => console.log(row.id)}
                  >
                    <PreviewIcon />
                  </IconButton>
                  <IconButton
                    color="primary"
                    aria-label="Удалить"
                    component="span"
                    size="small"
                    onClick={() => console.log(row.id)}
                  >
                    <DeleteForeverIcon />
                  </IconButton>
                </Stack>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}
