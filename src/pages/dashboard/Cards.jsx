import {
  Grid,
  makeStyles,
  Typography,
  CardActionArea,
  CardContent,
  Card,
} from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  root: {
    minHeight: "100vh",
  },
  grid: {
    minHeight: "100%",
  },
  pageTitle: {
    fontSize: "16px",
    fontWeight: 700,
  },
  contentArea: {
    padding: theme.spacing(4),
    width: "100%",
    paddingTop: "100px",
  },
  cardWrapper: {
    padding: "25px",
  },
  mainCard: {
    [theme.breakpoints.up("xs")]: {
      height: "80px",
      boxShadow: theme.shadow,
    },
    [theme.breakpoints.up("lg")]: {
      height: "100px",
      boxShadow: theme.shadow,
    },
  },

  cardTitle: {
    fontSize: "14px",
    fontWeight: 500,
  },
  cardInteger: {
    fontSize: "30px",
    fontWeight: 700,
    color: theme.palette.primary.main,
  },
}));

const Cards = () => {
  const classes = useStyles();
  return (
    <Grid container>
      <Grid item={true} xs={12} md={6} lg={3} className={classes.cardWrapper}>
        <Card className={classes.mainCard}>
          <CardActionArea>
            <CardContent>
              <Typography
                gutterBottom
                variant="h5"
                component="h2"
                className={classes.cardTitle}
              >
                APPROVED LEADS PER WEEK
              </Typography>
              <Typography
                variant="body2"
                className={classes.cardInteger}
                component="p"
              >
                1200
              </Typography>
            </CardContent>
          </CardActionArea>
        </Card>
      </Grid>
      <Grid item={true} xs={12} md={6} lg={3} className={classes.cardWrapper}>
        <Card className={classes.mainCard}>
          <CardActionArea>
            <CardContent>
              <Typography
                gutterBottom
                variant="h5"
                component="h2"
                className={classes.cardTitle}
              >
                WEEKLY EARNINGS
              </Typography>
              <Typography
                variant="body2"
                className={classes.cardInteger}
                component="p"
              >
                $25k
              </Typography>
            </CardContent>
          </CardActionArea>
        </Card>
      </Grid>
      <Grid item={true} xs={12} md={6} lg={3} className={classes.cardWrapper}>
        <Card className={classes.mainCard}>
          <CardActionArea>
            <CardContent>
              <Typography
                gutterBottom
                variant="h5"
                component="h2"
                className={classes.cardTitle}
              >
                TOTAL EARNED
              </Typography>
              <Typography
                variant="body2"
                className={classes.cardInteger}
                component="p"
              >
                $150K
              </Typography>
            </CardContent>
          </CardActionArea>
        </Card>
      </Grid>
      <Grid item={true} xs={12} md={6} lg={3} className={classes.cardWrapper}>
        <Card className={classes.mainCard}>
          <CardActionArea>
            <CardContent>
              <Typography
                gutterBottom
                variant="h5"
                component="h2"
                className={classes.cardTitle}
              >
                OPEN TICKETS
              </Typography>
              <Typography
                variant="body2"
                className={classes.cardInteger}
                component="p"
              >
                1200
              </Typography>
            </CardContent>
          </CardActionArea>
        </Card>
      </Grid>
    </Grid>
  );
};

export default Cards;
