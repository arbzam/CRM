import { makeStyles} from "@material-ui/core";
import {Chart} from "react-google-charts";
import Navbar from "../../components/Navbar";
import Section from "../../components/Section";
const useStyles = makeStyles((theme) => ({
    root: {
        // minHeight: "100vh",
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
  rowWrapper: {
    padding: "25px",
  },
  firstColumn: {
    [theme.breakpoints.up("xs")]: {
      paddingBottom: "20px",
    },
    [theme.breakpoints.up("sm")]: {
      paddingRight: "0px",
      paddingBottom: "20px",
    },
    [theme.breakpoints.up("lg")]: {
      paddingRight: "25px",
      paddingBottom: "0",
    },
  },
  secondColumn: {
    [theme.breakpoints.up("sm")]: {
      paddingLeft: "0px",
    },
    [theme.breakpoints.up("lg")]: {
      paddingLeft: "25px",
    },
  },
}));
const data = [
  ["Year", "Sales", "Expenses"],
  ["2018", 1000, 400],
  ["2019", 1170, 460],
  ["2020", 660, 1120],
  ["2021", 1030, 540]
];
const options = {
  title: "Sales & Expense Report",
  curveType: "function",
  legend: { position: "Bottom" }
};

const Leeds = () => {
  const classes = useStyles();
  return (
    <div className={classes.root}>
    <Navbar />
    <div className={classes.contentWrapper}>
        <Section title="Reports">
        <Chart
          chartType="LineChart"
          width="100%"
          height="400px"
          data={data}
          options={options}
        />
        </Section>
        </div>
        </div>
  );
};

export default Leeds;
