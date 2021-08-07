import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableContainer from "@material-ui/core/TableContainer";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import Paper from "@material-ui/core/Paper";

const useStyles = makeStyles((theme) => ({
  table: { padding: "20px", boxShadow: theme.shadow },
  tableTitle: {
    fontWeight: 700,
    fontSize: "16px",
    marginBottom: theme.spacing(2)
  },
  tableHeading: {},
  tableHeadingCellFirst: {
    width: "40%",
    padding: "4px",
    fontSize: "14px",
    fontWeight: 600,
    marginTop: theme.spacing(2),
    marginBottom: theme.spacing(2),
  },
  tableHeadingCellSec: {
    width: "35%",
    padding: "4px",
    fontSize: "14px",
    fontWeight: 600,
  },
  tableHeadingCellThird: {
    width: "25%",
    padding: "4px",
    fontSize: "14px",
    fontWeight: 600,
  },
  tableRow: {
    fontSize: "14px",
    fontWeight: 400,
  },
  tableCell: {
    fontSize: "14px",
    fontWeight: 400,
    padding: "14px 0",
  },
  green: { color: "green", fontWeight: "bold" },
  red: { color: "red", fontWeight: "bold" },
  orange: { color: "orange", fontWeight: "bold" },
}));

function createData(name, groupName, closeProbability) {
  return { name, groupName, closeProbability };
}

const rows = [
  createData("Denton Smiles Dentistry", "MB2 Dental Solutions", 100),
  createData("Salt Lake Dental Cooperative", "MB2 Dental Solutions", 50),
  createData("Fast Paced Health", "MB2 Dental Solutions", 25),
  createData("Denton Smiles Dentistry", "MB2 Dental Solutions", 10),
  createData("Denton Smiles Dentistry", "MB2 Dental Solutions", 50),
];

const LeedsTable = () => {
  const classes = useStyles();

  return (
    <TableContainer component={Paper} className={classes.table}>
      <div className={classes.tableTitle}>Leeds</div>
      <Table aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell className={classes.tableHeadingCellFirst}>
              Prospect Name
            </TableCell>
            <TableCell className={`${classes.tableHeadingCellSec}`}>
              Group Name
            </TableCell>
            <TableCell className={`${classes.tableHeadingCellThird}`}>
              Close Probability
            </TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row, index) => (
            <TableRow key={index} className={classes.tableRow}>
              <TableCell
                component="th"
                scope="row"
                className={classes.tableCell}
              >
                {row.name}
              </TableCell>
              <TableCell className={classes.tableCell}>
                {row.groupName}
              </TableCell>
              <TableCell
                className={`${classes.tableCell} ${
                  row.closeProbability < 26 && classes.red
                } ${
                  row.closeProbability > 25 &&
                  row.closeProbability < 100 &&
                  classes.orange
                } 
              ${row.closeProbability === 100 && classes.green}  }`}
              >{`${row.closeProbability}%`}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
};

export default LeedsTable;
