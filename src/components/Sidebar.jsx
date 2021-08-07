import {
  Avatar,
  IconButton,
  makeStyles,
  Menu,
  MenuItem,
} from "@material-ui/core";
import BellIcon from "@material-ui/icons/NotificationsOutlined";
import MailIcon from "@material-ui/icons/MailOutlineOutlined";
import { NavLink } from "react-router-dom";
import LogoMark from "./LogoMark";
// import image from "../assets/images/2.jpg";
import { useState } from "react";
import Navigation from "./Navigation";

const useStyles = makeStyles((theme) => ({
  root: {
    background: "#fff",
    display: "flex",
    minHeight: "100vh",

    width: "300px",

    position: "relative",
  },
  redBar: {
    [theme.breakpoints.up("xs")]: {
      backgroundColor: theme.palette.primary.main,
      width: "100%",
      position: "fixed",
    },
    [theme.breakpoints.up("xl")]: {
      backgroundColor: theme.palette.primary.main,
      width: theme.spacing(9),
      height: "100%",
      position: "fixed",
      textAlign: "center",
    },
    [theme.breakpoints.up("lg")]: {
      backgroundColor: theme.palette.primary.main,
      width: theme.spacing(9),
      height: "100%",
      position: "fixed",
      textAlign: "center",
    },
    [theme.breakpoints.up("md")]: {
      backgroundColor: theme.palette.primary.main,
      width: theme.spacing(9),
      height: "100%",
      position: "fixed",
      textAlign: "center",
    },
    [theme.breakpoints.up("sm")]: {
      backgroundColor: theme.palette.primary.main,
      width: theme.spacing(9),
      height: "100%",
      position: "fixed",
      textAlign: "center",
    },
  },
  iconWrapper: {
    [theme.breakpoints.up("xs")]: {
      textAlign: "center",
      marginTop: "-45px",
      paddingBottom: "10px",
    },
    [theme.breakpoints.up("sm")]: {
      textAlign: "center",
      marginTop: theme.spacing(1),
    },
  },
  link: {
    [theme.breakpoints.up("xs")]: {
      display: "inline",
      color: "#fff",
    },
    [theme.breakpoints.up("sm")]: {
      display: "block",
      color: "#fff",
    },
  },
  bellIcon: {
    [theme.breakpoints.up("xs")]: {
      fontSize: "30px",
      marginTop: "0",
    },
    [theme.breakpoints.up("sm")]: {
      marginTop: theme.spacing(2),
      fontSize: "30px",
    },
  },
  mailIcon: {
    [theme.breakpoints.up("xs")]: {
      fontSize: "25px",
    },
    [theme.breakpoints.up("sm")]: {
      marginTop: theme.spacing(2),
      fontSize: "25px",
    },
  },
  avatarWrapper: {
    [theme.breakpoints.up("xs")]: {
      position: "absolute",
      bottom: theme.spacing(0),
      textAlign: "right",
      left: 0,
      right: 0,
      marginLeft: "auto",
      marginRight: "auto",
    },
    [theme.breakpoints.up("sm")]: {
      position: "absolute",
      bottom: theme.spacing(2),
      textAlign: "center",
      left: 0,
      right: 0,
      marginLeft: "auto",
      marginRight: "auto",
    },
  },
  avatar: {
    border: "solid 2px #fff",
  },
  profilelinks: {
    color: theme.palette.primary.main,
    textDecoration: "none",
    "&:hover": {
      color: "#333",
      transition: "all .3s ease",
    },
  },
}));

const Sidebar = () => {
  const classes = useStyles();

  const [anchorEl, setAnchorEl] = useState(null);
  const open = Boolean(anchorEl);

  const handleMenu = (e) => {
    setAnchorEl(e.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <div className={classes.root}>
      <div className={classes.redBar}>
        <NavLink to="/">
          <LogoMark width="66px" />
        </NavLink>
        <div className={classes.iconWrapper}>
          <NavLink className={classes.link} to="/notifications">
            <BellIcon className={classes.bellIcon} />
          </NavLink>
          <NavLink className={classes.link} to="/notifications">
            <MailIcon className={classes.mailIcon} />
          </NavLink>
        </div>
        <div className={classes.avatarWrapper}>
          <IconButton
            aria-label="account of current user"
            aria-controls="menu-appbar"
            aria-haspopup="true"
            onClick={handleMenu}
            color="inherit"
          >
            <Avatar alt="az" src="avatar1" className={classes.avatar} />
          </IconButton>
          <Menu
            id="menu-appbar"
            anchorEl={anchorEl}
            anchorOrigin={{
              vertical: "top",
              horizontal: "right",
            }}
            keepMounted
            transformOrigin={{
              vertical: "top",
              horizontal: "right",
            }}
            open={open}
            onClose={handleClose}
          >
            <MenuItem onClick={handleClose}>
            <NavLink to="/profile" className={classes.profilelinks}>
                Profile
              </NavLink>

              </MenuItem>
            <MenuItem onClick={handleClose}>
            <NavLink to="/logout" className={classes.profilelinks}>
            Log Out
              </NavLink>
              </MenuItem>
          </Menu>
        </div>
      </div>
      <Navigation leftMargin={true} />
    </div>
  );
};

export default Sidebar;
