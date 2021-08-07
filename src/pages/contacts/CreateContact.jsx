import {
  Button,
  Grid,
  makeStyles,
  useTheme,
  useMediaQuery,
  TextField,
} from "@material-ui/core";
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

const CreateContact = () => {
  const classes = useStyles();

  const theme = useTheme();
  const sm = useMediaQuery(theme.breakpoints.down("sm"));

  return (
    <>
      <div className={classes.root}>
        <Navbar />
        <div className={classes.contentWrapper}>
          <Section variant="h6" title="Create Contact">
            <div className={classes.smallFormWrapper}>
              <form>
                <Grid container spacing={sm ? 0 : 5}>
                  <Grid item xl={6} lg={6} md={6} xs={12}>
                    <TextField
                      className={classes.textField}
                      fullWidth
                      label="First Name"
                    />
                    <TextField
                      className={classes.textField}
                      fullWidth
                      label="Email"
                    />
                    <TextField
                      className={classes.textField}
                      fullWidth
                      label="Phone Extension"
                    />
                  </Grid>
                  <Grid item xl={6} lg={6} md={6} xs={12}>
                    <TextField
                      className={classes.textField}
                      fullWidth
                      label="Last Name"
                    />
                    <TextField
                      className={classes.textField}
                      fullWidth
                      label="Phone"
                    />
                  </Grid>
                </Grid>
                <div className={classes.buttonWrapper}>
                  <Button type="submit" color="primary" variant="contained">
                    Submit
                  </Button>
                </div>
              </form>
            </div>
          </Section>
        </div>
      </div>
    </>
  );
};

export default CreateContact;
