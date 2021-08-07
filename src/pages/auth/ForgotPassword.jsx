import { Button, Grid, TextField, Typography } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";
import Loader from "../../components/Loader";
import Logo from "../../components/Logo";

const useStyles = makeStyles((theme) => ({
  root: {
    height: "100vh",
    [theme.breakpoints.down("xs")]: {
      paddingLeft: theme.spacing(4),
      paddingRight: theme.spacing(4),
    },
  },
  authBoxWrapper: {
    marginTop: theme.spacing(30),
  },
  logoWrapper: {
    textAlign: "center",
  },
  authBox: {
    boxShadow: theme.shadow,
    borderRadius: theme.sectionRadius,
    maxWidth: "550px",
    margin: "auto",
    backgroundColor: theme.bgWhite,
    padding: theme.spacing(8),
    [theme.breakpoints.down("xs")]: {
      paddingLeft: theme.spacing(4),
      paddingRight: theme.spacing(4),
    },
  },
  field: {
    marginBottom: theme.marginBottomInput,
  },
  heading: {
    fontWeight: 600,
    fontSize: 35,
    textAlign: "center",
    marginBottom: theme.spacing(3),
  },
  description: {
    marginBottom: theme.spacing(3),
    fontWeight: 500,
    fontSize: 16,
  },
  button: {
    paddingTop: theme.spacing(1),
    paddingBottom: theme.spacing(1),
    marginTop: theme.spacing(4),
  },
  forgotPassword: {
    textAlign: "center",
    marginTop: theme.spacing(5),
  },
  link: {
    color: theme.palette.primary.main,
    textDecoration: "none",
    fontWeight: 500,
  },
  copyrights: {
    color: "#888",
    textAlign: "center",
  },
}));

const ForgotPassword = () => {
  const classes = useStyles();

  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    setIsLoading(false);
  }, []);

  if (isLoading) {
    return <Loader />;
  }

  return (
    <Grid
      container
      direction="row"
      alignItems="center"
      alignContent="space-between"
      className={classes.root}
    >
      <Grid item xl={12} lg={12} md={12} sm={12}>
        <div className={classes.authBoxWrapper}>
          <div className={classes.logoWrapper}>
            <Logo style={{ maxWidth: "300px" }} />
          </div>
          <div className={classes.authBox}>
            <div className={classes.header}>
              <Typography className={classes.heading} variant="h1">
                Recover Password
              </Typography>
              <Typography className={classes.description}>
                Enter your email address to get password reset link.
              </Typography>
            </div>
            <div className={classes.fieldWrapper}>
              <TextField
                className={classes.field}
                label="Email address"
                fullWidth
              />

              <Button
                className={classes.button}
                variant="contained"
                size="large"
                color="primary"
                fullWidth
              >
                Send password link
              </Button>
            </div>
          </div>
        </div>
        <div className={classes.forgotPassword}>
          <p>
            Already know your password?{" "}
            <NavLink className={classes.link} to="/">
              Log In
            </NavLink>
          </p>
        </div>
      </Grid>
      <Grid item xl={12} lg={12} md={12} sm={12}>
        <div className={classes.copyrights}>
          <p>
            &copy; {new Date().getFullYear()} {process.env.REACT_APP_FULL_NAME}{" "}
            | All rights reserved
          </p>
        </div>
      </Grid>
    </Grid>
  );
};

export default ForgotPassword;
