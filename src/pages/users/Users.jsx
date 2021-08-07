import React, { useState } from "react";
import { Button, makeStyles } from "@material-ui/core";
import TablePagination from "@material-ui/core/TablePagination";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableContainer from "@material-ui/core/TableContainer";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import SearchBar from "material-ui-search-bar";
import Avatar from "@material-ui/core/Avatar";
import EditIcon from "@material-ui/icons/Edit";
import DeleteForeverIcon from "@material-ui/icons/DeleteForever";
import { NavLink } from "react-router-dom";
import AddIcon from "@material-ui/icons/Add";
// import profileimage from "../../assets/images/2.jpg";
import Section from "../../components/Section";
import Navbar from "../../components/Navbar";
const useStyles = makeStyles((theme) => ({
  root: {
    minHeight: "100vh",
    display: "flex",
    [theme.breakpoints.down("sm")]: {
      flexDirection: "column",
    },
  },
  bgrow: {
    "& th": {
      backgroundColor: "#fff",
      fontWeight: "600",
      color: "#333",
      fontSize: "15px",
      borderRight: "2px solid rgb(217, 217, 217)",
      lineHeight: "0",
      padding: "16px",
      textTransform: "capitalize",
      borderBottom: "0",
      fontFamily: theme.typography.fontFamily,
      "&:last-child": {
        borderRight: "0px",
      },
    },
  },
  tbody: {
    "& tr": {
      "& td": {
        textAlign: "left",
        fontWeight: "500",
        color: "#333",
        fontSize: "15px",
        textTransform: "capitalize",
        "&:last-child": {
          padding: "0",
        },
      },
    },
  },
  tableicon: {
    width: "25px",
    height: "25px",
    fontSize: "20px",
    padding: "0",
    minWidth: "25px",
    marginRight: theme.spacing(1),
    borderRadius: "100%",
    "& svg": {
      fontSize: "21px",
      color: "#888",
    },
  },
  searchbar: {
    boxShadow: "none",
    maxWidth: "440px",
    marginBottom: theme.spacing(5),
    [theme.breakpoints.only("sm")]: {
      marginBottom: "0",
    },
    [theme.breakpoints.only("xs")]: {
      maxWidth: "100%",
      minWidth: "100%",
      marginBottom: theme.spacing(3),
    },
    border: "1px solid #cfcfcf",
    borderRadius: "2px",
    "& input": {
      "&::placeholder": {
        color: "#333",
        fontSize: "14px",
        fontWeight: "600",
      },
    },
    "& button": {
      "& span": {
        "& svg": {
          fontSize: "25px",
          color: "#888",
        },
      },
    },
  },
  adborder: {
    border: "1px solid #888",
  },
  searchflex: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    [theme.breakpoints.only("xs")]: {
      flexDirection: "column",
    },
  },
  addserlink: {
    color: theme.palette.primary.main,
    display: "flex",
    alignItems: "center",
    fontWeight: "700",
    fontSize: "15px",
    textTransform: "capitalize",
    textDecoration: "none",
    "& svg": {
      fontSize: "14px",
      fontWeight: "700",
    },
    [theme.breakpoints.only("xs")]: {
      marginBottom: theme.spacing(3),
    },
  },
  paginition: {
    "& p": {
      fontWeight: "500",
      color: "#888",
      fontSize: "15px",
      textTransform: "capitalize",
    },
    "& button": {
      padding: "0",
    },
    "& input[value]": {
      fontWeight: "500",
      color: "#888",
      fontSize: "15px",
      textTransform: "capitalize",
    },
  },
  table: {
    position: "relative",
    [theme.breakpoints.only("sm")]: {
      marginTop: "50px",
    },
  },
  iconclrdanger: {
    "&:hover": {
      "& span": {
        "& svg": {
          color: theme.palette.primary.main,
          transition: "all .4s ease",
        },
      },
    },
  },
  iconclrsuccess: {
    "&:hover": {
      "& span": {
        "& svg": {
          color: "#00802b",
          transition: "all .4s ease",
        },
      },
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
}));
const originalRows = [
  {
    avatar: "2.jpg",
    name: "john doe",
    role: "super admin",
    email: "john@example.com",
    phone: "(123) 456 - 7890",
  },
  {
    avatar: "2.jpg",
    name: "jane doe",
    role: "admin",
    email: "john@example.com",
    phone: "(123) 456 - 7890",
  },
  {
    avatar: "2.jpg",
    name: "john doe",
    role: "tech support",
    email: "john@example.com",
    phone: "(123) 456 - 7890",
  },
  {
    avatar: "2.jpg",
    name: "john doe",
    role: "admin",
    email: "john@example.com",
    phone: "(123) 456 - 7890",
  },
  {
    avatar: "2.jpg",
    name: "john doe",
    role: "sales",
    email: "john@example.com",
    phone: "(123) 456 - 7890",
  },
  {
    avatar: "2.jpg",
    name: "john doe",
    role: "super admin",
    email: "john@example.com",
    phone: "(123) 456 - 7890",
  },
  {
    avatar: "2.jpg",
    name: "john doe",
    role: "super admin",
    email: "john@example.com",
    phone: "(123) 456 - 7890",
  },
  {
    avatar: "2.jpg",
    name: "avatar",
    role: "super admin",
    email: "john@example.com",
    phone: "(123) 456 - 7890",
  },
];
const Users = () => {
  const [page, setPage] = React.useState(0);
  const [rowsPerPage, setRowsPerPage] = React.useState(6);
  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(+event.target.value);
    setPage(0);
  };

  const [rows, setRows] = useState(originalRows);
  const [searched, setSearched] = useState("");

  const requestSearch = (searchedVal) => {
    const filteredRows = originalRows.filter((row) => {
      return row.name.toLowerCase().includes(searchedVal.toLowerCase());
    });
    setRows(filteredRows);
  };

  const cancelSearch = () => {
    setSearched("");
    requestSearch(searched);
  };
  const classes = useStyles();
  return (
    <>
      <div className={classes.root}>
        <Navbar />
        <div className={classes.contentWrapper}>
          <Section variant="h6" title="Users">
            <div className={classes.searchflex}>
              <SearchBar
                className={classes.searchbar}
                value={searched}
                onChange={(searchVal) => requestSearch(searchVal)}
                onCancelSearch={() => cancelSearch()}
              />

              <NavLink to="/users/create" className={classes.addserlink}>
                <AddIcon /> add users
              </NavLink>
            </div>

            <TableContainer style={{ width: "100%" }}>
              <Table className={classes.table} aria-label="simple table">
                <div
                  style={{
                    border: "1px solid rgb(217, 217, 217)",
                    opacity: ".5",
                    width: "100%",
                    marginTop: "10px",
                    position: "absolute",
                    maxWidth: "100%",
                  }}
                ></div>
                <TableHead>
                  <TableRow className={classes.bgrow}>
                    <TableCell style={{ minWidth: "100px" }}>avatar</TableCell>
                    <TableCell style={{ minWidth: "170px" }}>name</TableCell>
                    <TableCell style={{ minWidth: "170px" }}>role</TableCell>
                    <TableCell style={{ minWidth: "170px" }}>email</TableCell>
                    <TableCell style={{ minWidth: "170px" }}>phone</TableCell>
                    <TableCell>actions</TableCell>
                  </TableRow>
                </TableHead>
                <div style={{ marginTop: "10px" }}></div>
                <TableBody className={classes.tbody}>
                  {rows
                    .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
                    .map((row, i) => (
                      <TableRow key={row.i}>
                        <TableCell component="th" scope="row">
                          <Avatar alt="Remy Sharp" src="avatar1" />
                        </TableCell>
                        <TableCell>{row.name}</TableCell>
                        <TableCell>{row.role}</TableCell>
                        <TableCell style={{ color: "#888" }}>
                          {row.email}
                        </TableCell>
                        <TableCell style={{ color: "#888" }}>
                          {row.phone}
                        </TableCell>
                        <TableCell
                          style={{ color: "#888", paddingLeft: "20px" }}
                        >
                          <Button
                            className={
                              classes.tableicon + " " + classes.iconclrsuccess
                            }
                          >
                            <EditIcon />
                          </Button>
                          <Button
                            className={
                              classes.tableicon + " " + classes.iconclrdanger
                            }
                          >
                            <DeleteForeverIcon />
                          </Button>
                        </TableCell>
                      </TableRow>
                    ))}
                </TableBody>
              </Table>
            </TableContainer>
            <TablePagination
              className={classes.paginition}
              rowsPerPageOptions={[6, 10, 25, 100]}
              component="div"
              count={rows.length}
              rowsPerPage={rowsPerPage}
              page={page}
              onPageChange={handleChangePage}
              onRowsPerPageChange={handleChangeRowsPerPage}
            />
          </Section>
        </div>
      </div>
    </>
  );
};

export default Users;
