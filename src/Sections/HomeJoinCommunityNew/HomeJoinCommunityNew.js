import { Box, Button, Grid, Stack, Typography } from "@mui/material";
import { makeStyles } from "@mui/styles";
import React from "react";

import leftcommunity from "../../Assets/JoinCommunity/communityLeft.png";
import rightcommunity from "../../Assets/JoinCommunity/communityRight.png";

import MasonryImageListNew from "../../Components/MasnoryImages/MasnoryImageListNew";
import SendEmail from "../../Components/SendEmail/SendEmail";

const useStyles = makeStyles((theme) => ({
  masonryContainer: {
    marginBottom: "160px",
    [theme.breakpoints.down("lg")]: {
      marginBottom: "109.3px",
    },
    [theme.breakpoints.up("lg")]: {
      marginBottom: "146px",
    },
    [theme.breakpoints.up("xl")]: {
      marginBottom: "160px",
    },
  },
  container: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#F0F7FC",
    // paddingTop: "160px",
    // [theme.breakpoints.down("lg")]: {
    //   paddingTop: "109.3px",
    // },
    // [theme.breakpoints.up("lg")]: {
    //   paddingTop: "146px",
    // },
    [theme.breakpoints.up("xl")]: {
      marginTop:"16px",
      paddingTop: "150px",
    },
  },
  mainHeading: {
    fontSize: "36px",
    fontWeight: "700",
    lineheight: "41.4px",
    color: "#3A88B9",
    textAlign: "center",
    // [theme.breakpoints.down("lg")]: {
    //   fontSize: "25px",
    //   lineHeight: "28.3px",
    //   marginBottom: "13.6px",
    // },
    // [theme.breakpoints.up("lg")]: {
    //   fontSize: "33px",
    //   lineHeight: "38px",
    //   marginBottom: "18px",
    // },
    [theme.breakpoints.up("xl")]: {
      fontSize: "36px",
      letterSpacing:"0px",
      lineheigh: "41.4px",
    },
  },
  subHeading: {
    fontSize: "5.875rem",
    fontWeight: "700",
    lineheight: "6.9",
    color: "#141737",
    textAlign: "center",
    // marginBottom: "2.5rem",
    // [theme.breakpoints.down("lg")]: {
    //   fontSize: "66px",
    //   lineHeight: "75.4px",
    //   marginBottom: "27.3px",
    // },
    // [theme.breakpoints.up("lg")]: {
    //   fontSize: "87.5px",
    //   lineHeight: "101px",
    //   marginBottom: "36.4px",
    // },
    [theme.breakpoints.up("xl")]: {
      fontSize: "96px",
      lineheigh: "110.4px",
      marginBottom: "20px",
    },
  },
  button: {
    padding: "1.5rem 3rem 1.5rem 3rem",
    border: "1px solid transparent",
    borderRadius: "100px",
    backgroundColor: "#D83C3B",
    "&:hover": { backgroundColor: "#D83C3B" },
    [theme.breakpoints.down("lg")]: {
      width: "139px",
      padding: "16.4px 33px 16.4px 33px",
    },
    [theme.breakpoints.up("lg")]: {
      width: "186px",
      padding: "22px 44px 22px 44px",
    },
    [theme.breakpoints.up("xl")]: {
      width: "204px",
      padding: "24px 48px 24px 48px",
    },
  },
  buttonContainer: {
    disply: "flex",
    justifyContent: "center",
    alignItems: "center",
    [theme.breakpoints.down("lg")]:{
      marginBottom: "44px",
    },
    [theme.breakpoints.up("lg")]:{
      marginBottom: "58px",
    },
    [theme.breakpoints.up("xl")]:{
      marginBottom: "10px",
    }
  },
  btnText:{
    textTransform:"none",
    [theme.breakpoints.down("lg")]:{
      fontSize:"14px",
      fontWeight:"700",
    },
    [theme.breakpoints.up("lg")]:{
      fontSize:"18.22px",
      fontWeight:"700",
    },
    [theme.breakpoints.up("xl")]:{
      fontSize:"20px",
      fontWeight:"700",
    }
  }
}));

function HomeJoinCommunityNew() {
  const classes = useStyles();
  return (
    <>
      <div className={classes.container}>
        <Stack justifyContent="center" alignItems="center">
          <Typography className={classes.mainHeading}>
            Join our community
          </Typography>
          <Typography className={classes.subHeading}>
            Magnet fishing life
          </Typography>
          <div className={classes.buttonContainer}>
            <Button variant="contained" className={classes.button}>
              <Typography className={classes.btnText}>
                Explore
              </Typography>
            </Button>
          </div>
        </Stack>
        <Box className={classes.masonryContainer}>
          {/* <MasonryImageList/> */}
          <MasonryImageListNew />
        </Box>
      </div>
    </>
  );
}

export default HomeJoinCommunityNew;
