import { Grid, Stack, Typography } from "@mui/material";
import { makeStyles } from "@mui/styles";
import { Box } from "@mui/system";
import React from "react";

import leftcommunity from "../../Assets/JoinCommunity/communityLeft.png";
import rightcommunity from "../../Assets/JoinCommunity/communityRight.png";
import mark from "../../Assets/Home/lightining.png";
import SendEmail from "../../Components/SendEmail/SendEmail";

const useStyles = makeStyles((theme) => ({
  bgsection: {
    display: "flex",
  justifyContent:"center",
    backgroundColor: "#F0F7FC",
    height: "41.625rem",
    width: "100%",
  },
  communityimgWrapper: {
  
    [theme.breakpoints.up("xl")]: {
      maxWidth: "85.375rem",
      marginLeft:"auto",
      marginRight:"auto",
    },
  },
  communityimgs: {
    [theme.breakpoints.down("lg")]: {
      width: "218px",
    },
    [theme.breakpoints.up("lg")]: {
      width: "291px",
    },
    [theme.breakpoints.up("xl")]: {
      width: "100%",
    },
  },

  mainHeading: {
    fontWeight: "700",
    color: "#141737",
    textAlign: "center",
    letterSpacing:"3px",
    // [theme.breakpoints.down("lg")]: {
    //   fontSize: "44px",
    //   lineHeight: "58px",
    //   marginBottom: "11px",
    // },
    // [theme.breakpoints.up("lg")]: {
    //   fontSize: "64px",
    //   lineHeight: "75px",
    //   marginBottom: "14.5px",
    // },
    [theme.breakpoints.up("xl")]: {
      fontSize: "64px",
      lineHeight: "7.5rem",
    },
  },
  subHeading: {
    fontWeight: "400",
    textAlign: "center",
    color: "#141737",
    [theme.breakpoints.down("lg")]: {
      fontSize: "12px",
      lineHeight: "18.45px",
      marginBottom: "27px",
    },
    [theme.breakpoints.up("lg")]: {
      fontSize: "16px",
      lineHeight: "25px",
      marginBottom: "36px",
    },
    [theme.breakpoints.up("lg")]: {
      fontSize: "18px",
      lineHeight: "27px",
      marginBottom: "40px",
    },
  },
  emailcontainer: {
    width: "593px",
    [theme.breakpoints.down("1100")]: {
      width: "430px",
    },
  },
  centerfix: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
  },
  bgContain: {
    maxWidth:"72.394rem",
    marginLeft: "auto",
    marginRight: "auto",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    gap:"2rem",
    [theme.breakpoints.down("1100")]: {
      marginTop: "80px",
    },
  },
}));

function HomeJoinCommunity() {
  const classes = useStyles();
  return (
    <>
      <div className={classes.bgsection}>
        <Box className={classes.bgContain}>
          <Box className={classes.communityimgWrapper}>
            <img
              className={classes.communityimgs}
              src={leftcommunity}
              alt="community left"
            />
          </Box>
          <Box className={classes.centerfix}>
            <Typography className={classes.mainHeading}>
              Join the community
            </Typography>
            <Typography className={classes.subHeading}>
              Join the Magnet Fishing USA Facebook Community <br /> and share
              anything magnet fishing related.
            </Typography>
            <Box className={classes.emailcontainer}>
              <SendEmail title="Subscribe Now" />
            </Box>
          </Box>
          <Box className={classes.communityimgWrapper}>
            <img
              className={classes.communityimgs}
              src={rightcommunity}
              alt="community right"
            />
          </Box>
        </Box>
      </div>
    </>
  );
}

export default HomeJoinCommunity;
