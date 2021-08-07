import { Grid, makeStyles, Typography, Paper, Radio } from "@material-ui/core";
import TasksTable from "./TasksTable";
import CheckIcon from "@material-ui/icons/Check";
import DatePick from "./DatePick";

const useStyles = makeStyles((theme) => ({
  rowWrapper: {
    padding: "25px",
  },
  calender: {
    // display: "flex",
    // alignItems: "center",
    // margin: "0 auto",
    textAlign: "cener",
    [theme.breakpoints.up("xs")]: {
      marginTop: "20px",
      height: "100%",
      textAlign: "center",
      boxShadow: theme.shadow,
      paddingTop: "20px",
    },
    [theme.breakpoints.up("md")]: {
      paddingTop: "20px",
      marginTop: "0",
      height: "100%",
      textAlign: "center",
      boxShadow: theme.shadow,
    },
  },
  firstColumn: {
    [theme.breakpoints.up("sm")]: {
      paddingRight: "0px",
    },
    [theme.breakpoints.up("lg")]: {
      paddingRight: "25px",
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
  tasksTable: {
    paddingBottom: "20px",
  },
  todoTitle: {
    fontSize: "14px",
    fontWeight: 700,
    paddingLeft: "14px",
    marginBottom: theme.spacing(2)
  },
  todoText: {
    fontSize: "15px",
    fontWeight: 400,
    marginBottom: theme.spacing(2),
    "& span" : {
      fontSize: "14px",
      fontWeight: 500,
      color: "#333"
    }
  },
  checkedRadio: {
    padding: "0",
    marginLeft: theme.spacing(1.4),
    transform: "scale(0.6)",
  },
  uncheckedRadio: {
    color: "white",
    backgroundColor: "green",
    padding: "0",
    transform: "scale(0.6)",
    marginLeft: theme.spacing(1.4),
    "&:hover": {
      backgroundColor: "green",
      transform: "scale(0.7)",
    },
  },
}));

const Tasks = () => {
  const classes = useStyles();
  return (
    <Grid container className={classes.rowWrapper}>
      <Grid item={true} xs={12} lg={8} xl={7} className={classes.firstColumn}>
        <Grid className={classes.tasksTable}>
          <TasksTable />
        </Grid>
        <Grid>
          <Paper style={{ padding: "10px" , marginTop: "30px" }}>
            <Typography className={classes.todoTitle}>Todo List</Typography>
            <Typography className={classes.todoText}>
              <Radio
                checkedIcon={
                  <CheckIcon
                    size="small"
                    style={{
                      color: "white",
                      fontSize: "12px",
                    }}
                  />
                }
                name="radio-button-demo"
                size="small"
                className={classes.checkedRadio}
              />
              <span style={{ marginLeft: "9px" }}>
                Have a meeting at 12am with Bucky
              </span>
            </Typography>
            <Typography className={classes.todoText}>
              <Radio
                checked={true}
                value="asdfasdfasd"
                name="radio-button-demo"
                aria-label="A"
                size="small"
                className={classes.uncheckedRadio}
              />
              <span style={{ marginLeft: "9px" }}>
                Have a meeting at 12am with Bucky
              </span>
            </Typography>
            <Typography className={classes.todoText}>
              <Radio
                // checked={true}
                value="asdfasdfasd"
                name="radio-button-demo"
                aria-label="A"
                size="small"
                className={classes.uncheckedRadio}
              />
              <span style={{ marginLeft: "9px" }}>
                Have a meeting at 12am with Bucky
              </span>
            </Typography>
            <Typography className={classes.todoText}>
              <Radio
                value="asdfasdfasd"
                name="radio-button-demo"
                aria-label="A"
                size="small"
                className={classes.uncheckedRadio}
              />
              <span style={{ marginLeft: "9px" }}>
                Have a meeting at 12am with Bucky
              </span>
            </Typography>
          </Paper>
        </Grid>
      </Grid>
      <Grid
        item={true}
        xs={12}
        sm={12}
        md={12}
        lg={4}
        xl={5}
        className={classes.secondColumn}
      >
        <Paper className={classes.calender}>
          <DatePick />
        </Paper>
      </Grid>
    </Grid>
  );
};

export default Tasks;
