import { makeStyles, Typography, Radio } from "@material-ui/core";
import CheckIcon from "@material-ui/icons/Check";
import Navbar from "../components/Navbar";
import Section from "../components/Section";

const useStyles = makeStyles((theme) => ({
  root: {
    minHeight: "100vh",
    display: "flex",
    [theme.breakpoints.down("sm")]: {
      flexDirection: "column",
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

const Tasks = () => {
  const classes = useStyles();
  return (
          <div className={classes.root}>
              <Navbar />
              <div className={classes.contentWrapper}>
                  <Section title="Todos">
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
          </Section>
          </div>
   </div>
  );
};

export default Tasks;
