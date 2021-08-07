import { makeStyles } from "@material-ui/core";
import Navbar from "../../components/Navbar";
import Profiledata from "./Profiledata";
import Tabdata from "./Tabdata";

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
  contentWrapper: {
    width: "100%",
    paddingLeft: theme.spacing(6),
    paddingRight: theme.spacing(6),
    [theme.breakpoints.down("sm")]: {
      paddingLeft: theme.spacing(3),
      paddingRight: theme.spacing(3),
    },
  },
}));

const Test = () => {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Navbar />
      <div className={classes.contentWrapper}>
        <Profiledata />
        <Tabdata />
      </div>
    </div>
  );
};

export default Test;
