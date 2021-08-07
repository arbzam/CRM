import { makeStyles, Typography } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  root: {
    backgroundColor: "#fff",
    padding: theme.spacing(5),
    borderRadius: theme.sectionRadius,
    boxShadow: theme.shadow,
    width: "100%",
    [theme.breakpoints.down("sm")]: {
      padding: theme.spacing(3),
    },
  },
  heading: {
    fontWeight: theme.weight600,
    marginTop: theme.spacing(4),
    marginBottom: theme.spacing(4),
  },
}));

const Section = (props) => {
  const classes = useStyles();

  return (
    <>
      {typeof props.title !== "undefined" ? (
        <Typography className={classes.heading} variant={props.variant}>
          {props.title}
        </Typography>
      ) : null}
      <div className={classes.root}>{props.children}</div>
    </>
  );
};

export default Section;
