import { makeStyles } from "@material-ui/core/styles";
import loader from "../assets/images/Logomark_Red.svg";

const useStyles = makeStyles((theme) => ({
  root: {},

  animatedCircle: {
    width: theme.spacing(20),
    animation: `$keepRotating infinite 5s linear`,
    position: "absolute",
    left: 0,
    right: 0,
    top: 0,
    bottom: 0,
    marginTop: "auto",
    marginRight: "auto",
    marginBottom: "auto",
    marginLeft: "auto",
  },
  "@keyframes keepRotating": {
    from: {
      transform: "rotate(0deg)",
    },
    to: {
      transform: "rotate(360deg)",
    },
  },
  logoMarkWrapper: {},
}));

const Loader = () => {
  const classes = useStyles();

  return (
    <div className={classes.logoMarkWrapper}>
      <img className={classes.animatedCircle} alt="" src={loader} />
    </div>
  );
};

export default Loader;
