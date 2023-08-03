import React from "react";
import { makeStyles, styled } from "@mui/styles";
import { Container, Grid, Box, Button, Typography, Stack } from "@mui/material";
import { Link } from "react-router-dom";
import img from "../../Assets/Gallery/newspaperBox.png";
import img2 from "../../Assets/Gallery/blade.jpg";
import img3 from "../../Assets/Gallery/safe.jpg";
import BlogCard from "../../Components/BlogCard";
import { HiOutlineArrowNarrowRight } from "react-icons/hi";
import FirstBlogCard from "../../Components/BlogCrads/FirstBlogCard";
import SecondBlogRow from "../../Components/BlogCrads/SecondBlogRow";

const ButtonStyle = styled(Button)(({ theme }) => ({
  fontFamily: theme.typography.Poppins,
  background: "#D83C3B",
  color: "white",
  width: "277px",
  height: "76px",
  borderRadius: "100px",
  marginTop: "40px",
  // marginLeft: "10px",
  // padding: "0.75rem 1.2rem",
  // textTransform: "capitalize",
  boxShadow:
    "0px 1.4px 3.6px rgba(0, 0, 0, 0.028),\n  0px 4px 10px rgba(0, 0, 0, 0.04),\n  0px 9.6px 24.1px rgba(0, 0, 0, 0.052),\n  0px 32px 80px rgba(0, 0, 0, 0.08)",
    [theme.breakpoints.down("1100")]:{
      width:"220px",
      height:"65px",
    },
    "&:hover": {
    background: "#D83C3B",
    color: "white",
    boxShadow: `0px 6px 22px rgba(0, 0, 0, 0.18)`,
  },
}));

const useStyles = makeStyles((theme) => ({
  section: {
    [theme.breakpoints.down("lg")]: {
      margin:"123px 57px",
    },
    [theme.breakpoints.up("lg")]: {
      margin:"164px 77px",
    },
    [theme.breakpoints.up("xl")]: {
      marginleft:"84px",
      marginRight:"84px",
      marginTop:"150px",
      marginBottom:"180px",
    },
  },
  container: {
    display:"flex",
    [theme.breakpoints.down("lg")]: {
      gap:"16.4px",
      marginBottom:"16.4px",
    },
    [theme.breakpoints.up("lg")]: {
      gap:"22px",
      marginBottom:"22px",
    },
    [theme.breakpoints.up("xl")]: {
      gap:"24px",
      marginBottom:"24px",
    },
  },
    
  blogHeading:{
    fontFamily:"MazzardH",
    fontWeight:"800",
    color:"#141737",
    [theme.breakpoints.down("lg")]:{
      fontSize:"66px",
      lineHeight:"75px"
    },
    [theme.breakpoints.up("lg")]:{
      fontSize:"88px",
      lineHeight:"100px"
    },
    [theme.breakpoints.up("xl")]:{
      fontSize:"96px",
      lineHeight:"110.4px",
      paddingBottom:"2px",

    },
  },
  blogCover:{
    display:"flex",
    justifyContent:"center",
    flexDirection:"column",
    // [theme.breakpoints.down("lg")]:{
    //   gap:"27px",
    //   paddingRight:"130px"
    // },
    // [theme.breakpoints.up("lg")]:{
    //   gap:"36px",
    //   paddingRight:"147px"
    // },
    [theme.breakpoints.up("xl")]:{
      gap:"46px",
      paddingRight:"169px"
    },
  },
  cta: {
    fontFamily: "Public Sans",
    fontWeight: 700,
    textTransform:"none",
    color:"#FFF",
    borderRadius: "100px",
    background: "#D83C3B",
    // "boxShadow": "0px 5px 20px 10px #FFDEE8",
    boxShadow:
      "2.6px 2.9px 2.2px rgba(255,22,91, 0.017),\n  6.3px 6.9px 5.3px rgba(255,22,91, 0.025),\n  11.8px 13px 10px rgba(255,22,91, 0.031),\n  21px 23.2px 17.9px rgba(255,22,91, 0.037),\n  39.3px 43.4px 33.4px rgba(255,22,91, 0.045),\n  94px 104px 80px rgba(255,22,91, 0.06)",
    "& :hover":{ background: "#D83C3B"},
      [theme.breakpoints.down("lg")]: {
      lineHeight: "19px",
      fontSize: "12.40px",
      padding: "12.40px 5.8px",
    },
    [theme.breakpoints.up("lg")]: {
      fontSize: "18.22px",
      lineHeight: "25.5px",
      padding: "22px 44px",
    },
    [theme.breakpoints.up("xl")]: {
      fontSize: "20px",
      lineHeight: "28px",
      padding: "24px 42px",
    },
  },
  posFix:{
    [theme.breakpoints.down("lg")]: {
      paddingLeft: "0px",
    },
    [theme.breakpoints.up("lg")]: {
      paddingLeft: "23px",
    },
    [theme.breakpoints.up("xl")]: {
      paddingLeft: "0px",
      paddingTop:"1rem",
    },
  },
  fixture:{
    display:"flex",
    justifyContent:"center",
  }
}));
const desc =
  "Join the Magnet Fishing USA Facebook Community and share anything magnet fishing related. You can communicate directly with fellow magnet fishers and even link up with them to go on an adventure. Check us out here!.png";
const HomeBlogNew = () => {
  const classes = useStyles();
  return (
    <section className={classes.section}>
      <div className={classes.container}>
         <Box className={classes.blogCover}>
          <Typography className={classes.blogHeading}>
            Blog
          </Typography>
          <Button className={classes.cta} variant="contained">
            check out all blogs
          </Button>
         </Box>
         <Box className={classes.posFix}>
          <FirstBlogCard/>
         </Box>
      </div>
         <Box className={classes.fixture}>

     <SecondBlogRow/>
         </Box>
    </section>
  );
};

export default HomeBlogNew;
