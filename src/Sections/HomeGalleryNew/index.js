import React from "react";
import { makeStyles } from "@mui/styles";
import { Container, Box, Typography } from "@mui/material";
import { Slider } from "../../Components/Slider";

const useStyles = makeStyles((theme) => ({
  section: {
    // background:"#f6f6f6"
    background: "#FFFFFF",
    margin: "180px 84px 0px 84px",
  },
  subTitle: {
    fontFamily: "MazzardH",
    fontWeight: "700",
    color: "#3A88B9",
    [theme.breakpoints.down("lg")]: {
      lineHeight: "28px",
      paddingBottom: "14px",
      fontSize: "25px",
    },
    [theme.breakpoints.up("lg")]: {
      lineHeight: "37px",
      paddingBottom: "18px",
      fontSize: "33px",
    },
    [theme.breakpoints.up("xl")]: {
      lineHeight: "41px",
      paddingBottom: "16px",
      fontSize: "36px",
    },
  },
  title: {
    fontFamily: "MazzardH",
    fontSize: "96px",
    fontWeight: "800",
    lineHeight: "110px",
    color: "#141737",
    [theme.breakpoints.down("lg")]: {},
    [theme.breakpoints.up("lg")]: {},
    [theme.breakpoints.up("xl")]: {},
  },
}));

const HomeGalleryNew = () => {
  const classes = useStyles();
  return (
    <>
      <section className={classes.section}></section>
      <Slider />
    </>
  );
};

export default HomeGalleryNew;
