import { useState } from "react";
import {
  Button,
  Grid,
  makeStyles,
  TextField,
  useTheme,
  useMediaQuery,
} from "@material-ui/core";
import Section from "../../components/Section";
import Select from "@material-ui/core/Select";
import MenuItem from "@material-ui/core/MenuItem";
import KeyboardArrowDownIcon from "@material-ui/icons/KeyboardArrowDown";
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
  smallFormWrapper: {
    maxWidth: "747px",
    marginLeft: "auto",
    marginRight: "auto",
  },
  textField: {
    marginBottom: theme.marginBottomInput,
    "& label": {
      color: "#888",
      fontSize: "13px",
      fontWeight: "500",
      textTransform: "capitalize",
      display: "inline-block",
    },
  },
  buttonWrapper: {
    textAlign: "right",
    marginTop: theme.spacing(2),
  },
  fieldrole: {
    color: "#888",
    fontSize: "13px",
    fontWeight: "500",
    textTransform: "capitalize",
    display: "inline-block",
  },
  textselect: {
    marginTop: theme.spacing(1.9),
  },
  userdetailhead: {
    color: "#333",
    fontSize: "16px",
    textTransform: "capitalize",
    fontWeight: "500",
    marginBottom: theme.spacing(2),
    [theme.breakpoints.only("xs")]: {
      marginBottom: theme.spacing(2),
    },
  },
}));

const AddUser = () => {
  const [role, setRole] = useState("");
  const classes = useStyles();
  const theme = useTheme();
  const sm = useMediaQuery(theme.breakpoints.down("sm"));
  const submitForm = (e) => {
    e.preventDefault();
  };

  const handleChange = (event) => {
    setRole(event.target.value);
  };
  return (
    <div className={classes.root}>
      <Navbar />
      <div className={classes.contentWrapper}>
        <Section variant="h6" title="Add Users">
          <div className={classes.smallFormWrapper}>
            <form onSubmit={submitForm}>
              <Grid container spacing={sm ? 0 : 5}>
                <Grid item xl={6} lg={6} md={6} sm={12}>
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
                    label="Password"
                  />
                </Grid>
                <Grid item xl={6} lg={6} md={6} sm={12}>
                  <TextField
                    className={classes.textField}
                    fullWidth
                    label="Last Name"
                  />
                  <Select
                    labelId="demo-simple-select-label"
                    value={role}
                    onChange={handleChange}
                    fullWidth
                    className={classes.textField + " " + classes.textselect}
                    displayEmpty
                    IconComponent={() => (
                      <KeyboardArrowDownIcon style={{ color: "#888" }} />
                    )}
                  >
                    <MenuItem selected value="">
                      <span className={classes.fieldrole}>select role</span>
                    </MenuItem>
                    <MenuItem value={1}>admin</MenuItem>
                    <MenuItem value={0}>user</MenuItem>
                  </Select>

                  <TextField
                    className={classes.textField}
                    fullWidth
                    label="Confirm Password"
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
  );
};

export default AddUser;
