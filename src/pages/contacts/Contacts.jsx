import { makeStyles} from "@material-ui/core";
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
  grid: {
    minHeight: "100%",
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
  smallFormWrapper: {
    maxWidth: "747px",
    marginLeft: "auto",
    marginRight: "auto",
  },
  textField: {
    marginBottom: theme.marginBottomInput,
  },
  buttonWrapper: {
    textAlign: "right",
    marginTop: theme.spacing(2),
  },
}));

const Contacts = () => {
  const classes = useStyles();

  return (
    <>
      <div className={classes.root}>
        <Navbar />
        <div className={classes.contentWrapper}>
          <Section variant="h6" title="Contacts"></Section>
        </div>
      </div>
    </>
  );
};

export default Contacts;
