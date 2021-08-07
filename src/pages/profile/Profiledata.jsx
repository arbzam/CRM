import React from "react";
import { makeStyles, Typography, Avatar, Box } from "@material-ui/core";
import image from "../../assets/images/2.jpg";
import Section from "../../components/Section";
const useStyles = makeStyles((theme) => ({
  root: {
    minHeight: "100vh",
    display: "flex",
  },
  profileheadtext: {
    color: "#333",
    fontSize: "24px",
    textTransform: "capitalize",
    fontWeight: "500",
    marginTop: theme.spacing(2),
  },
  avatarcon: {
    minWidth: "138px",
    minHeight: "138px",
    maxWidth: "138px",
    maxHeight: "138px",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },
}));
const Profiledata = () => {
  const classes = useStyles();
  return (
    <>
      <Section variant="h6" title="Profile">
        <Box
          display="flex"
          justifyContent="center"
          alignItems="center"
          flexDirection="column"
        >
          <div className={classes.avatarcon}>
            <Avatar
              alt="Travis Howard"
              src={image}
              className={classes.avatarcon}
            />
          </div>
          <Typography variant="h6" className={classes.profileheadtext}>
            john doe
          </Typography>
        </Box>
      </Section>
    </>
  );
};

export default Profiledata;
