import { Grid, makeStyles, Paper } from "@material-ui/core";
import {Chart} from "react-google-charts";
import LeedsTable from "./LeedsTable";

const useStyles = makeStyles((theme) => ({
  rowWrapper: {
    padding: "25px",
  },
  chart: {
    height: "100%",
    boxShadow: theme.shadow,
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
  curveType: "function",
  legend: { position: "top" }
};

const Leeds = () => {
  const classes = useStyles();
  return (
    <Grid container className={classes.rowWrapper}>
      <Grid item={true} xs={12} lg={6} className={classes.firstColumn}>
        <Paper className={classes.chart}>
        <Chart
          chartType="LineChart"
          width="100%"
          height="400px"
          data={data}
          options={options}
        />

        </Paper>
      </Grid>
      <Grid item={true} xs={12} lg={6} className={classes.secondColumn}>
        <LeedsTable />
      </Grid>
    </Grid>
  );
};

export default Leeds;
