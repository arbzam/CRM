import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableContainer from "@material-ui/core/TableContainer";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import { Box, Avatar } from "@material-ui/core";
import Navbar from "../../components/Navbar";
import Section from "../../components/Section";
const useStyles = makeStyles((theme) => ({
    root: {
        minHeight: "100vh",
        display: "flex",
        [theme.breakpoints.down("sm")]: {
          flexDirection: "column",
        },
      },
    contentWrapper: {
        width: "100%",
        paddingLeft: theme.spacing(6),
        paddingRight: theme.spacing(6),
        [theme.breakpoints.only("sm")]: {
          paddingLeft: theme.spacing(3),
          paddingRight: theme.spacing(3),
        },
        [theme.breakpoints.only("xs")]: {
          paddingLeft: theme.spacing(3),
          paddingRight: theme.spacing(3),
        },
      },
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
    <div className={classes.root}>
    <Navbar />
    <div className={classes.contentWrapper}>
        <Section title="Tasks">
    <TableContainer component={Box} className={classes.table}>
      <div className={classes.tableTitle}>Task</div>
      <Table aria-label="simple table">
        <TableHead>
          <TableRow className={classes.tableRow}>
            <TableCell
              className={classes.tableHeading}
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
    </Section>
    </div>
    </div>
  );
}
