import { makeStyles } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import IconButton from "@material-ui/core/IconButton";
import BellIcon from "@material-ui/icons/NotificationsOutlined";
import MailIcon from "@material-ui/icons/MailOutlineOutlined";
import MenuIcon from "@material-ui/icons/Menu";
import LogoMark from "./LogoMark";
import { Avatar, Drawer, Menu, MenuItem } from "@material-ui/core";
import UserIcon from "@material-ui/icons/PermIdentityOutlined";
import LogoutIcon from "@material-ui/icons/PowerSettingsNewOutlined";
import React, { useState } from "react";
import Navigation from "./Navigation";
import image from "../assets/images/2.jpg";
import { NavLink } from "react-router-dom";
const useStyles = makeStyles((theme) => ({
  navWrapper: {
    flexGrow: 1,
  },
  mailIcon: {
    marginRight: theme.spacing(1),
  },
  bellIcon: {
    marginRight: theme.spacing(2),
  },
  icon: {
    marginRight: theme.spacing(2),
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

const Topbar = () => {
  const classes = useStyles();

  const [openDrawer, setOpenDrawer] = useState(false);
  const [anchorEl, setAnchorEl] = useState(null);
  const open = Boolean(anchorEl);

  const toggleDrawer = (status) => (e) => {
    if (e.type === "keydown" && (e.key === "Tab" || e.key === "Shift")) {
      return;
    }

    setOpenDrawer(status);
  };

  const handleProfileMenu = (e) => {
    setAnchorEl(e.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const handleCloseMenu = () => {
    setOpenDrawer(false);
  };

  return (
    <>
      <AppBar position="static">
        <Toolbar>
          <IconButton
            edge="start"
            color="inherit"
            aria-label="menu"
            onClick={toggleDrawer(!openDrawer)}
          >
            <MenuIcon />
          </IconButton>
          <LogoMark width="70px" />
          <div className={classes.navWrapper}></div>
          <IconButton
            edge="start"
            className={classes.mailIcon}
            color="inherit"
            aria-label="menu"
          >
            <MailIcon />
          </IconButton>
          <IconButton
            edge="start"
            className={classes.bellIcon}
            color="inherit"
            aria-label="menu"
          >
            <BellIcon />
          </IconButton>
          <IconButton
            aria-label="account of current user"
            aria-controls="menu-appbar"
            aria-haspopup="true"
            onClick={handleProfileMenu}
            color="inherit"
          >
            <Avatar alt="" src={image} className={classes.avatar} />
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
              <UserIcon color="primary" className={classes.icon} />
              <NavLink to="/profile" className={classes.profilelinks}>
                Profile
              </NavLink>
            </MenuItem>
            <MenuItem onClick={handleClose}>
              <LogoutIcon color="primary" className={classes.icon} /> 
              <NavLink to="/logout" className={classes.profilelinks}>
              Log Out
              </NavLink>
             
            </MenuItem>
          </Menu>
        </Toolbar>
      </AppBar>

      <Drawer anchor="left" open={openDrawer} onClose={toggleDrawer(false)}>
        <Navigation onclose={handleCloseMenu} />
      </Drawer>
    </>
  );
};

export default Topbar;
