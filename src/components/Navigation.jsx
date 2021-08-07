import { makeStyles, Typography } from "@material-ui/core";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import ListItemText from "@material-ui/core/ListItemText";
import { NavLink } from "react-router-dom";
import HomeIcon from "@material-ui/icons/HomeOutlined";
import FormatListNumberedIcon from "@material-ui/icons/FormatListNumberedOutlined";
import UsersIcon from "@material-ui/icons/PeopleAltOutlined";
import TaskIcon from "@material-ui/icons/PlaylistAddCheckOutlined";
import ReportsIcon from "@material-ui/icons/AssessmentOutlined";
import CloseIcon from "@material-ui/icons/ClearOutlined";

const useStyles = makeStyles((theme) => ({
  root: {
    paddingRight: theme.spacing(3),
  },
  leftMargin: {
    marginLeft: "100px",
  },

  heading: {
    color: "#898989",
    fontWeight: 500,
    textTransform: "uppercase",
    fontSize: "14px",
    marginLeft: theme.spacing(2),
    marginTop: theme.spacing(4),
  },
  navLink: {
    display: "flex",
    alignItems: "center",
    color: theme.textDark,
    textDecoration: "none",
    textTransform: "capitalize",
  },
  listItemIcon: {
    minWidth: "40px",
  },
  listIcon: {
    color: theme.palette.primary.main,
    fontSize: "27px",
  },
  label: {
    "& span": {
      fontWeight: "400 !important",
      fontSize: "14px",
    },
  },
  closeIconWrapper: {
    textAlign: "right",
    paddingTop: theme.spacing(2),
  },
  active: {
    color: theme.palette.primary.main,
    "& svg": {
      color: theme.palette.primary.main,
    },
  },
}));

const Navigation = (props) => {
  const classes = useStyles();

  const handlCloseMenu = (e) => {
    props.onclose();
  };

  let rootClass = classes.root;

  if (props.leftMargin) {
    rootClass = `${classes.root} ${classes.leftMargin}`;
  } else {
    rootClass = classes.root;
  }

  return (
    <div className={rootClass}>
      {!props.leftMargin ? (
        <div className={classes.closeIconWrapper}>
          <CloseIcon onClick={handlCloseMenu} />
        </div>
      ) : null}
      <List component="nav">
        <Typography className={classes.heading}>home</Typography>
        <ListItem className={classes.listitem}>
          <NavLink
            to="/"
            className={classes.navLink}
            exact
            activeClassName={classes.active}
          >
            <ListItemIcon className={classes.listItemIcon}>
              <HomeIcon className={classes.listIcon} />
            </ListItemIcon>
            <ListItemText className={classes.label}>dashboard</ListItemText>
          </NavLink>
        </ListItem>
        <Typography className={classes.heading}>personal</Typography>
        <ListItem className={classes.listitem}>
          <NavLink
            to="/todos"
            className={classes.navLink}
            exact
            activeClassName={classes.active}
          >
            <ListItemIcon className={classes.listItemIcon}>
              <FormatListNumberedIcon className={classes.listIcon} />
            </ListItemIcon>
            <ListItemText className={classes.label}>todo list</ListItemText>
          </NavLink>
        </ListItem>
        <Typography className={classes.heading}>employees</Typography>
        <ListItem className={classes.listitem}>
          <NavLink
            to="/users"
            className={classes.navLink}
            exact
            activeClassName={classes.active}
          >
            <ListItemIcon className={classes.listItemIcon}>
              <UsersIcon className={classes.listIcon} />
            </ListItemIcon>
            <ListItemText className={classes.label}>users</ListItemText>
          </NavLink>
        </ListItem>
        <Typography className={classes.heading}>tasks</Typography>
        <ListItem className={classes.listitem}>
          <NavLink
            to="/tasks"
            className={classes.navLink}
            exact
            activeClassName={classes.active}
          >
            <ListItemIcon className={classes.listItemIcon}>
              <TaskIcon className={classes.listIcon} />
            </ListItemIcon>
            <ListItemText className={classes.label}>tasks</ListItemText>
          </NavLink>
        </ListItem>
        <Typography className={classes.heading}>reports</Typography>
        <ListItem className={classes.listitem}>
          <NavLink
            to="/reports"
            className={classes.navLink}
            exact
            activeClassName={classes.active}
          >
            <ListItemIcon className={classes.listItemIcon}>
              <ReportsIcon className={classes.listIcon} />
            </ListItemIcon>
            <ListItemText className={classes.label}>reports</ListItemText>
          </NavLink>
        </ListItem>
      </List>
    </div>

  );
};

export default Navigation;
