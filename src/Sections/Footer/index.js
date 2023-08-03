import React from "react";
import { makeStyles, styled, useTheme } from "@mui/styles";
import {
  Box,
  Button,
  Container,
  Divider,
  Grid,
  InputBase,
  Typography,
  useMediaQuery,
} from "@mui/material";
import logo from "../../Assets/uokweb/logo.png";
import facebook from "../../Assets/Facebook.png";
import twitter from "../../Assets/Twitter.png";
import instagram from "../../Assets/Instagram.png";
import linkedin from "../../Assets/Linkedin.png";
import line from "../../Assets/Line.png";
import { Link } from "react-router-dom";
import { HiOutlineArrowNarrowRight } from "react-icons/hi";
import { Stack } from "@mui/system";
import SendEmail from "../../Components/SendEmail/SendEmail";

const Search = styled("div")(({ theme }) => ({
  // position: 'relative',
  display: "flex",
  borderRadius: "8px",
  backgroundColor: theme.palette.common.white,
  "&:hover": {
    backgroundColor: theme.palette.common.white,
  },
  marginLeft: 0,
  width: "100%",
  maxWidth: "500px",
  boxShadow:
    "0px 0px 1.4px rgba(0, 0, 0, 0.017),\n  0px 0px 3.3px rgba(0, 0, 0, 0.024),\n  0px 0px 6.3px rgba(0, 0, 0, 0.03),\n  0px 0px 11.2px rgba(0, 0, 0, 0.036),\n  0px 0px 20.9px rgba(0, 0, 0, 0.043),\n  0px 0px 50px rgba(0, 0, 0, 0.06)",
  [theme.breakpoints.up("sm")]: {
    width: "auto",
  },
  [theme.breakpoints.down("sm")]: {
    gap: "1rem",
    flexWrap: "wrap",
    backgroundColor: theme.palette.greyDark,
    boxShadow: "none",
  },
}));

const SearchIconWrapper = styled("div")(({ theme }) => ({
  height: "auto",
  pointerEvents: "none",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  borderRadius: "8px",
  boxShadow:
    "0px 0px 1.4px rgba(0, 0, 0, 0.017),\n  0px 0px 3.3px rgba(0, 0, 0, 0.024),\n  0px 0px 6.3px rgba(0, 0, 0, 0.03),\n  0px 0px 11.2px rgba(0, 0, 0, 0.036),\n  0px 0px 20.9px rgba(0, 0, 0, 0.043),\n  0px 0px 50px rgba(0, 0, 0, 0.06)",
  "& button": {
    minWidth: "max-content",
    fontFamily: theme.typography.Poppins,
    borderRadius: "8px",
  },
}));

const StyledInputBase = styled(InputBase)(({ theme }) => ({
  color: "inherit",
  width: "100%",
  "& .MuiInputBase-input": {
    padding: theme.spacing(1, 1, 1, 2),
    transition: theme.transitions.create("width"),
    width: "100%",
    fontFamily: theme.typography.Poppins,
    [theme.breakpoints.down("sm")]: {
      backgroundColor: "#fff",
      borderRadius: "8px",
    },
  },
}));
const useStyles = makeStyles((theme) => ({
  section: {
    boxShadow:
      "0px 0px 1.4px rgba(0, 0, 0, 0.017),\n  0px 0px 3.3px rgba(0, 0, 0, 0.024),\n  0px 0px 6.3px rgba(0, 0, 0, 0.03),\n  0px 0px 11.2px rgba(0, 0, 0, 0.036),\n  0px 0px 20.9px rgba(0, 0, 0, 0.043),\n  0px 0px 50px rgba(0, 0, 0, 0.06)",
    background: "linear-gradient(180deg, #0BAB64 0%, #3BB78F 100%)",

    "& socialLogo": {
      width: "2rem",
     
    },
    socialLogoContainer: {
      flexDirection: "row",
      gap: "0.75rem",
      [theme.breakpoints.down("1100")]: {
        marginLeft: "0.666rem",
        gap: "0.5rem",
      },
    },

   
    "& .newsLetter": {
      fontFamily: "Public Sans",
      "& .heading": {
        color: "#fff",
        textTransform: "uppercase",
        margin:"0",
        [theme.breakpoints.down("lg")]: {
          fontSize: "16.40px",
          marginBottom:"16.40px",
        },
        [theme.breakpoints.up("lg")]: {
          fontSize: "21.8px",
          marginBottom:"21.8px",
        },
        [theme.breakpoints.up("xl")]: {
          fontSize: "24px",
          marginBottom:"24px",
        },
        // fontFamily: theme.typography.MazzardH,
        // fontFamily: theme.typography.Poppins,
      },
      "& .para": {
        color: "#ffffffb3",
        margin:"0",
        [theme.breakpoints.down("lg")]: {
          fontSize: "10.93px",
          marginBottom:"16.40px",
        },
        [theme.breakpoints.up("lg")]: {
          fontSize: "14.58px",
          marginBottom:"21.8px",
        },
        [theme.breakpoints.up("xl")]: {
          fontSize: "16px",
          marginBottom:"24px",
        },
      },
    },
  
  },

  socialLinkText: {
    fontSize: "0.875rem",
    lineHeight: "1.313rem",
    fontWeight: "400",
    color: "#FFFFFF",
    opacity: "0.7",
    marginBottom: "1rem",
    [theme.breakpoints.down("lg")]: {
      fontSize: "9.57px",
      lineHeight: "15.039px",
      marginBottom: "10.93px",
    },
    [theme.breakpoints.up("lg")]: {
      fontSize: "12.76px",
      lineHeight: "20.052px",
      marginBottom: "14.58px",
    },
    [theme.breakpoints.up("xl")]: {
      fontSize: "14px",
      lineHeight: "22px",
      marginBottom: "16px",
    },
  },
  lineStyle: {
    maxWidth: "100%",
  
  },
  logoContainer: {
    [theme.breakpoints.down("lg")]: {
      width: "173.632px",
      height: "42.38px",
    },
    [theme.breakpoints.up("lg")]: {
      width: "231.510px",
      height: "56.51px",
    },
    [theme.breakpoints.up("xl")]: {
      width: "254px",
      height: "62px",
    },
  },
    Footerlogo: {
      [theme.breakpoints.down("lg")]: {
        width: "173.632px",
        height: "42.38px",
      },
      [theme.breakpoints.up("lg")]: {
        width: "231.510px",
        height: "56.51px",
      },
      [theme.breakpoints.up("xl")]: {
        width: "254px",
        height: "62px",
      },
  },
  LinksContainer:{
    display:"flex",
    gap:"64px",
  },
  Spacer:{
    gap:"145px",
    // borderBottom:"1px solid",
    // borderColor:"linear-gradient(#FFFFFF 100%, #FFFFFF 0%)",
    // [theme.breakpoints.down("lg")]: {
    //   gap: "99.121px",
    //   paddingBottom: "41.015px",
    // },
    // [theme.breakpoints.up("lg")]: {
    //   gap: "132.161px",
    //   paddingBottom: "54.68px",
    // },
    [theme.breakpoints.up("xl")]: {
      gap: "145px",
      paddingBottom: "10px",
    },
  },
  copyright:{
    fontFamily:"Public Sans",
    fontWeight:"400",
    color:"#FFFFFF",
    opacity:"0.4",
    margin:"0",
    [theme.breakpoints.down("lg")]:{
      fontSize: "9.57px",
      lineHeight: "14.35px",
    },
    [theme.breakpoints.up("lg")]:{
      fontSize: "12.76px",
      lineHeight: "23.69px",
    },
    [theme.breakpoints.up("xl")]:{
      fontSize: "14px",
      lineHeight:"21px",
    },
  },
  HeaderLinks:{
    listStyle: "none",
    fontFamily:"Public Sans",
    color: "#fff",
    fontWeight: "700",
    width:"100%",
    [theme.breakpoints.down("lg")]:{
      fontSize: "13.466px",
      lineHeight: "17.77px",
      marginBottom: "12.40px",
    },
    [theme.breakpoints.up("lg")]:{
      fontSize: "17.955px",
      lineHeight: "23.69px",
      marginBottom: "17.87px",
    },
    [theme.breakpoints.up("xl")]:{
      marginBottom:"20px",
      fontSize: "19.7px",
      lineHeight:"26px",
    },

  },
  link:{
    fontFamily:"Public Sans",
    listStyle: "none",
    color: "#fff",
    opacity: "0.9",
    fontWeight:"400",
    width:"100%",
    [theme.breakpoints.down("lg")]:{
      fontSize: "10.93px",
      lineHeight: "16.40px",
      marginBottom: "10.93px",
    },
    [theme.breakpoints.up("lg")]:{
      fontSize: "14.58px",
      lineHeight: "21.87px",
      marginBottom: "10.93px",
    },
    [theme.breakpoints.up("xl")]:{
      fontSize: "16px",
      lineHeight: "24px",
      marginBottom: "16px",
    },
  
  },
  Lastlink:{
    fontFamily:"Public Sans",
    listStyle: "none",
    color: "#fff",
    opacity: "0.9",
    [theme.breakpoints.down("lg")]:{
      fontSize: "10.93px",
      lineHeight: "16.40px",
    },
    [theme.breakpoints.up("lg")]:{
      fontSize: "14.58px",
      lineHeight: "21.87px",
    },
    [theme.breakpoints.up("xl")]:{
      fontSize: "16px",
      lineHeight: "24px",
    },
  
  },
  QuickFix:{
    padding:"0",
    width:"4rem",
    margin:"0",
  },
  divider:{
    background:"linear-gradient(180deg, #FFF 100%, #FFF 0%)"
  }
}));

const Customcontainer = styled(Box)(({ theme }) => ({
  [theme.breakpoints.down("lg")]: {
    margin: "0px 57.421px",
    paddingTop: "48.359px",
    paddingBottom: "27.34px",
    height: "338.378px",
  },
  [theme.breakpoints.up("lg")]: {
    margin: "0px 76.562px",
    paddingTop: "71.145px",
    paddingBottom: "36.45px",
    height: "451.171px",
  },
  [theme.breakpoints.up("xl")]: {
    margin: "0px 84px",
    paddingTop: "50px",
    paddingBottom: "40px",
    height: "495px",
  },
}));
const FirstFooterSection = styled(Box)(({ theme }) => ({
  display: "flex",
  flexDirection: "column",

  [theme.breakpoints.down("lg")]: {
    width: "173.632px",
    gap: "32.812px",
  },
  [theme.breakpoints.up("lg")]: {
    width: "231.510px",
    gap: "43.75px",
  },
  [theme.breakpoints.up("xl")]: {
    width: "254px",
    gap: "48px",
  },
}));
const SecondFooterSection = styled(Box)(({ theme }) => ({
  display: "flex",
  flexDirection: "column",

  [theme.breakpoints.down("lg")]: {
    width: "77px",
  },
  [theme.breakpoints.up("lg")]: {
    width: "160px",

  [theme.breakpoints.up("xl")]: {
    width: "109px",
  },
},
}));
const ThirdFooterSection = styled(Box)(({ theme }) => ({
  display: "flex",
  flexDirection: "column",

  [theme.breakpoints.down("lg")]: {
    width: "72.46px",
  },
  [theme.breakpoints.up("lg")]: {
    width: "96.61px",
  },
  [theme.breakpoints.up("xl")]: {
    width: "106px",
  },
}));
const FourthFooterSection = styled(Box)(({ theme }) => ({
  display: "flex",
  flexDirection: "column",

  [theme.breakpoints.down("lg")]: {
    width: "376.66px",
  },
  [theme.breakpoints.up("lg")]: {
    width: "502.21px",
  },
  [theme.breakpoints.up("xl")]: {
    width: "551px",
  },
}));
const SocialLogoContainer = styled(Box)(({ theme }) => ({
  display: "flex",
  flexDirection: "row",

  [theme.breakpoints.down("lg")]: {
    gap: "8.20px",
  },
  [theme.breakpoints.up("lg")]: {
    gap: "10.93px",
  },
  [theme.breakpoints.up("xl")]: {
    gap: "12px",
  },
}));
const DividerContainer = styled(Box)(({ theme }) => ({
  margin:"0",
  [theme.breakpoints.down("lg")]: {
    width: "820.3px",
  },
  [theme.breakpoints.up("lg")]: {
    width: "1093.75px",
  },
  [theme.breakpoints.up("xl")]: {
    width: "1200px",
  },
}));

const Footer = () => {
  const classes = useStyles();
  const theme = useTheme();
  const mobile = useMediaQuery(theme.breakpoints.down("md"));
  return (
    <>
      <section className={classes.section}>
        <Customcontainer>
          <Stack direction="row" className={classes.Spacer}>
            <FirstFooterSection>
              <div className={classes.logoContainer}>
                <img
                  src={logo}
                  alt="logo"
                  className={classes.Footerlogo}
                />
              </div>
              <div>
                <Typography className={classes.socialLinkText}>
                  Follow Us:
                </Typography>
                <SocialLogoContainer>
                  <img src={facebook} alt="social" />
                  <img src={twitter} alt="social" />
                  <img src={instagram} alt="social" />
                  <img src={linkedin} alt="social" />
                </SocialLogoContainer>
              </div>
            </FirstFooterSection>
            <Box className={classes.LinksContainer}>
            <SecondFooterSection>
              <ul className={classes.QuickFix}>
                <li className={classes.HeaderLinks}>About us</li>
                <li className={classes.link}>
                 <a href="#">Downloads</a>
                </li>
                <li className={classes.link}>
                <a href="#">MCN</a>
                </li>
                <li className={classes.link}>
                <a href="#">News & Events</a>
                </li>
                <li className={classes.link}>
                <a href="#">Picture Gallery</a>
                </li>
                <li className={classes.Lastlink}>
                <a href="#">Pension Form</a>
                </li>
                <li className={classes.Lastlink}>
                <a href="#">Semester Fees</a>
                </li>
              </ul>
            </SecondFooterSection>
            <ThirdFooterSection>
              <ul className={classes.QuickFix}>
                <li className={classes.HeaderLinks}>Legal</li>
                <li className={classes.link}>
                  <Link to="/">Terms of Use</Link>
                </li>
                <li className={classes.Lastlink}>
                  <Link to="/">Privacy Policy</Link>
                </li>
              </ul>
            </ThirdFooterSection>
            </Box>
            <FourthFooterSection>
              <div className="newsLetter">
                <h2 className="heading">Ready to get Started?</h2>
                <p className="para">
                  Join the Magnet Fishing USA Facebook Community and share
                  anything magnet fishing related.{" "}
                  </p>
               
                <SendEmail title="Sign up for free" sx={{width:"100%"}} />
              </div>
            </FourthFooterSection>
          </Stack>
          <DividerContainer>
         <img src={line} className={classes.lineStyle}/>
          </DividerContainer>
          <p className={classes.copyright}>
          © Copyright 2021 Magnet Fishing. All rights reserved.
        </p>
        </Customcontainer>
      </section>
    </>
  );
};

export default Footer;
