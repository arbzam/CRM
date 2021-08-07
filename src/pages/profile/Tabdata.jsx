import React from "react";
import PropTypes from "prop-types";
import { makeStyles } from "@material-ui/core";
import Tabs from "@material-ui/core/Tabs";
import Tab from "@material-ui/core/Tab";
import Typography from "@material-ui/core/Typography";
import Box from "@material-ui/core/Box";
import { Link } from "react-router-dom";
import CreateIcon from "@material-ui/icons/Create";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import ListItemText from "@material-ui/core/ListItemText";
import PersonOutlineIcon from "@material-ui/icons/PersonOutline";
import MailOutlineIcon from "@material-ui/icons/MailOutline";
import PhoneIcon from "@material-ui/icons/Phone";
import LocationOnIcon from "@material-ui/icons/LocationOn";
import Section from "../../components/Section";
const useStyles = makeStyles((theme) => ({
  maintabs: {
    minHeight: "225px",
    maxWidth: "100%",
    borderRadius: "10px",
    marginTop: theme.spacing(7),
    [theme.breakpoints.only("xs")]: {
      padding: theme.spacing(0),
    },
    "& root": {
      padding: "0",
    },
  },
  innertabs: {
    width: "100%",
    margin: "auto",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
  },
  tablabel: {
    textTransform: "capitalize",
    fontWeight: "500",
    fontSize: "16px",
    minWidth: "60px",
    color: "#333",
    opacity: "1",
    marginLeft: theme.spacing(3),
    marginRight: theme.spacing(3),
    padding: theme.spacing(0),
    "& span": {
      color: "#333",
      [theme.breakpoints.only("xs")]: {
        fontSize: "12px",
      },
    },
    [theme.breakpoints.only("sm")]: {
      marginLeft: theme.spacing(1),
      marginRight: theme.spacing(1),
    },
    [theme.breakpoints.only("xs")]: {
      marginLeft: theme.spacing(1),
      marginRight: theme.spacing(1),
    },
  },
  active: {
    "& span": {
      color: "red",
    },
  },
  overviewhead: {
    textTransform: "capitalize",
    fontWeight: "600",
    fontSize: "16px",
  },
  overview: {
    display: "flex",
    justifyContent: "space-between",
    flexDirection: "column",
  },

  tabflex: {
    width: "40%",
    maxWidth: "800px",
    margin: "auto",
    "& div": {
      [theme.breakpoints.only("xs")]: {
        padding: theme.spacing(0),
      },
    },
    marginTop: theme.spacing(4),
    [theme.breakpoints.only("md")]: {
      width: "80%",
    },
    [theme.breakpoints.only("sm")]: {
      width: "80%",
    },
    [theme.breakpoints.only("xs")]: {
      width: "100%",
    },
  },
  editlink: {
    color: "#333",
    fontWeight: "400",
    fontSize: "16px",
    textTransform: "capitalize",
    textDecoration: "none",
    "&:hover": {
      color: theme.palette.primary.main,
    },
  },
  spanflex: {
    display: "flex",
    alignItems: "center",
  },
  penccilicon: {
    textDecoration: "none",
    marginRight: theme.spacing(1),
    color: "#888",
    fontSize: "18px",
  },
  overviewlinks: {
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
  },
  profiledetail: {
    marginTop: theme.spacing(3),
  },
  listitem: {
    paddingLeft: theme.spacing(0),
    paddingRight: theme.spacing(0),
    display: "flex",
    alignItems: "center",
    [theme.breakpoints.only("xs")]: {
      flexWrap: "wrap",
      flexDirection: "column",
      alignItems: "flex-start",
    },
  },
  listitemicon: {
    minWidth: "43px",
  },
  listtextmargin: {
    "& span": {
      fontWeight: "400",
      color: "#333",
      fontSize: "16px",
      "& span": {
        color: theme.palette.primary.main,
      },
    },
    [theme.breakpoints.only("xs")]: {
      fontSize: "14px",
    },
  },
  listicon: {
    color: "#333",
  },
}));

function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box p={3}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.any.isRequired,
  value: PropTypes.any.isRequired,
};

function a11yProps(index) {
  return {
    id: `simple-tab-${index}`,
    "aria-controls": `simple-tabpanel-${index}`,
  };
}

const Tabdata = () => {
  const classes = useStyles();

  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };
  return (
    <>
      <div className={classes.maintabs}>
        <Section>
          <div className={classes.innertabs}>
            <Tabs value={value} onChange={handleChange} class={classes.tabroot}>
              <Tab
                label="personal info"
                {...a11yProps(0)}
                className={classes.tablabel + " " + classes.active}
              />
              <Tab
                label="password"
                {...a11yProps(1)}
                className={classes.tablabel}
              />
              <Tab
                label="notifications"
                {...a11yProps(2)}
                className={classes.tablabel}
              />
            </Tabs>

            <TabPanel value={value} index={0} className={classes.tabflex}>
              <div className={classes.overview}>
                <div className={classes.overviewlinks}>
                  <Typography variant="h6" className={classes.overviewhead}>
                    overview
                  </Typography>
                  <span className={classes.spanflex}>
                    <CreateIcon className={classes.penccilicon} />
                    <Link className={classes.editlink} to="profile/edit">
                      edit
                    </Link>
                  </span>
                </div>

                <div className={classes.profiledetail}>
                  <List component="nav" className={classes.detaillist}>
                    <ListItem className={classes.listitem}>
                      <ListItemIcon className={classes.listitemicon}>
                        <PersonOutlineIcon className={classes.listicon} />
                      </ListItemIcon>
                      <ListItemText className={classes.listtextmargin}>
                        Name: John Doe (Super Admin)
                      </ListItemText>
                    </ListItem>
                    <ListItem className={classes.listitem}>
                      <ListItemIcon className={classes.listitemicon}>
                        <MailOutlineIcon className={classes.listicon} />
                      </ListItemIcon>
                      <ListItemText className={classes.listtextmargin}>
                        Email: &nbsp;
                        <span classname={classes.emailclr}>
                          john@example.com
                        </span>
                      </ListItemText>
                    </ListItem>
                    <ListItem className={classes.listitem}>
                      <ListItemIcon className={classes.listitemicon}>
                        <PhoneIcon className={classes.listicon} />
                      </ListItemIcon>
                      <ListItemText className={classes.listtextmargin}>
                        Phone: (123) 456 - 7890
                      </ListItemText>
                    </ListItem>
                    <ListItem className={classes.listitem}>
                      <ListItemIcon className={classes.listitemicon}>
                        <LocationOnIcon className={classes.listicon} />
                      </ListItemIcon>
                      <ListItemText className={classes.listtextmargin}>
                        Location: 2577 Reno Rd, Castleton On Hudson, NY, 12033
                      </ListItemText>
                    </ListItem>
                  </List>
                </div>
              </div>
            </TabPanel>

            <TabPanel value={value} index={1}>
              <div className={classes.overview}>No Item Found</div>
            </TabPanel>
            <TabPanel value={value} index={2}>
              <div className={classes.overview}>No Item Found</div>
            </TabPanel>
          </div>
        </Section>
      </div>
    </>
  );
};

export default Tabdata;
