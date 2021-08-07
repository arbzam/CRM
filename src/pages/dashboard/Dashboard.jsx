import {makeStyles, Typography } from "@material-ui/core";
import Cards from "./Cards";
import Leeds from "./Leeds";
import Tasks from "./Tasks";
import "./dashboard.css";
import Navbar from "../../components/Navbar";

const useStyles = makeStyles((theme) => ({
  root: {
    minHeight: "100vh",
    display: "flex",
    [theme.breakpoints.down("sm")]: {
      flexDirection: "column",
    },
  },
  grid: {
    minHeight: "100%",
  },
  pageTitle: {
    fontSize: "16px",
    fontWeight: 700,
    paddingLeft: "25px",
    marginTop: theme.spacing(5),
    marginBottom: theme.spacing(2)
  },
  contentArea: {
    [theme.breakpoints.up("xs")]: {
      padding: theme.spacing(4),
      width: "100%",
      paddingTop: "100px",
      paddingLeft: "65px",
    },
    [theme.breakpoints.up("lg")]: {
      padding: theme.spacing(4),
      width: "100%",
      paddingTop: "100px",
    },
  },
}));

const Dashboard = () => {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Navbar />
      {/* <Grid container alignContent="stretch" className={classes.grid}> */}
        {/* <Grid item={true} xl={2} lg={2}> */}
        <div className={classes.contentWrapper}>

 
          {/* <Sidebar /> */}
        {/* </Grid> */}
        {/* <Grid item={true} xs={12} lg={10} className={`${classes.contentArea}`}> */}
          {/* Page Title */}
          <Typography className={classes.pageTitle}>Dashboard</Typography>
          {/* Cards Row start */}
          <Cards />
          {/* Cards Row End */}
          {/* Leeds Row Start */}
          <Leeds />
          {/* Leeds Row End */}
          {/* Tasks Row Start */}
          <Tasks />
          </div>
          {/* Tasks Row End */}
        {/* </Grid> */}
      {/* </Grid> */}
    </div>
  );
};

export default Dashboard;
