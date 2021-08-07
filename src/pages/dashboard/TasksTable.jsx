import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableContainer from "@material-ui/core/TableContainer";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import { Paper, Avatar } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  table: { boxShadow: theme.shadow, padding: "20px" },
  tableTitle: {
    fontWeight: 700,
    paddingLeft: "15px",
    fontSize: "16px",
    marginBottom: theme.spacing(2)
  },
  tableHeading: {
    fontSize: "16px",
    fontWeight: 600,
    textAlign: "left",
    border: "0",
  },

  tableRow: {
    fontSize: "15px",
    marginBottom: theme.spacing(3),
    display: "inline-block",
    width: "100%",
  },
  tableCell: {
    backgroundColor: "#fafafa",
    padding: "4px 12px",
    border: "0",
  },
  done: { color: "green", fontWeight: "bold" },
  pending: { color: "orange", fontWeight: "bold" },
  overDue: { color: "red", fontWeight: "bold" },
}));

function createData(assignedTo, descripton, status, dueDate) {
  return { assignedTo, descripton, status, dueDate };
}

const rows = [
  createData("image", "Meeting with XYZ & Co", "Done", "08/12/2021"),
  createData("image", "Meeting with XYZ & Co", "Pending", "08/12/2021"),
  createData("image", "Meeting with XYZ & Co", "Over Due", "08/12/2021"),
];

export default function TasksTable() {
  const classes = useStyles();

  return (
    <TableContainer component={Paper} className={classes.table}>
      <div className={classes.tableTitle}>Tasks</div>
      <Table aria-label="simple table">
        <TableHead>
          <TableRow className={classes.tableRow}>
            <TableCell
              className={classes.tableHeading}
              // style={{ width: "150px" }}
            >
              Assigned To
            </TableCell>
            <TableCell
              className={classes.tableHeading}
              style={{ width: "250px" }}
            >
              Description
            </TableCell>
            <TableCell className={classes.tableHeading} style={{ width: "250px" }}>
              Status
            </TableCell>
            <TableCell className={classes.tableHeading}>
              Due Date
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
                // style={{width:"22%"}}
                style={{width: "133px"}}
                
              >
                <Avatar alt={row.descripton} src={row.assignedTo} />
              </TableCell>
              <TableCell className={classes.tableCell} style={{ width: "254px" }}>
                {row.descripton}
              </TableCell>
              <TableCell
              style={{ width: "250px" }}
                className={` ${classes.tableCell} 
               ${row.status === "Done" && classes.done}
               ${row.status === "Pending" && classes.pending}
               ${row.status === "Over Due" && classes.overDue}
               
               `}
                // width="15%"
              >
                {row.status}
              </TableCell>
              <TableCell className={classes.tableCell}>
                {row.dueDate}
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}
