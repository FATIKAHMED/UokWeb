import { Box, Container, Grid, Typography } from "@mui/material";
import React from "react";
import { Link } from "react-router-dom";
import { CurvedSlider } from "../Components/CurvedSlider";
import { styled } from "@mui/material/styles";
import ReactPlayer from "react-player";
import sectionBg from "../Assets/AboutUS/aboutSection.png";
import aboutImg from "../Assets/AboutUS/aboutImg.png";
import gallery from "../Assets/AboutUS/findGallery.png";
import map from "../Assets/AboutUS/findGallery.png";
import Social from "../Assets/AboutUS/social.png";
import Tutorials from "../Assets/AboutUS/tutorial.png";
import Blogs from "../Assets/AboutUS/blog.png";
import idea from "../Assets/AboutUS/Ideas.png";
import shared from "../Assets/AboutUS/shareLocation.png";
import pinned from "../Assets/AboutUS/pinLocation.png";
import find1 from "../Assets/AboutUS/finding1.png";
import find2 from "../Assets/AboutUS/finding2.png";
import pinMap from "../Assets/AboutUS/pinlocationmap.png";
import thumbnailBtn from "../Assets/AboutUS/thumbnailBtn.png";
import quoteIcon from "../Assets/AboutUS/quote.png";
import { makeStyles } from "@mui/styles";
import { Stack } from "@mui/system";

const BgBox = styled(Box)(({ theme }) => ({
  marginTop: "3.75rem",
}));
const StyledHeader = styled(Box)(({ theme }) => ({
  "& .subHeading": {
    fontFamily: "'MazzardH', sans-serif",
    fontStyle: "normal",
    fontWeight: "700",
    fontSize: "36px",
    lineHeight: "115%",
    color: "#3A88B9",
    margin: 0,
    marginBottom: "1.25rem",
    [theme.breakpoints.down("lg")]: {
      fontSize: "32.8125px",
    },
    [theme.breakpoints.up("lg")]: {
      fontSize: "32.8125px",
      marginBottom: "1.139rem",
    },
    [theme.breakpoints.up("xl")]: {
      fontSize: "36px",
      marginBottom: "1.25rem",
    },
  },
  "& .heading": {
    fontFamily: "'MazzardH', sans-serif",
    fontStyle: "normal",
    fontWeight: "800",
    fontSize: "96px",
    lineHeight: "115%",
    color: "#141737",
    margin: 0,
    marginBottom: "2.5rem",
    [theme.breakpoints.down("lg")]: {
      lineHeight: "76.66%",
      fontSize: "64px",
      marginBottom: "1.709rem",
    },
    [theme.breakpoints.up("lg")]: {
      fontSize: "87.5px",
      lineHeight: "104.815%",
      marginBottom: "2.279rem",
    },
    [theme.breakpoints.up("xl")]: {
      fontSize: "96px",
      lineHeight: "115%",
      marginBottom: "2.5rem",
    },
  },
}));
const StyledPara = styled(Box)(({ theme }) => ({
  "& .para": {
    fontFamily: "'Public Sans', sans-serif",
    fontStyle: "normal",
    fontWeight: "400",
    fontSize: "20px",
    lineHeight: "150%",
    color: "#141737",
    opacity: "0.7",
    margin: 0,
    width: "100%",
    [theme.breakpoints.down("lg")]: {
      fontSize: "13.671px",
    },
    [theme.breakpoints.up("lg")]: {
      fontSize: "18.22px",
    },
    [theme.breakpoints.up("xl")]: {
      fontSize: "20px",
    },
    "&:first-child": {
      marginBottom: "1rem",
      [theme.breakpoints.down("lg")]: {
        marginBottom: "1rem",
      },
      [theme.breakpoints.up("lg")]: {
        marginBottom: "1rem",
      },
      [theme.breakpoints.up("xl")]: {
        marginBottom: "1rem",
      },
    },
    "&:last-child": {
      marginBottom: "2.5rem",
      [theme.breakpoints.down("lg")]: {
        marginBottom: "1.709rem",
      },
      [theme.breakpoints.up("lg")]: {
        marginBottom: "2.279rem",
      },
      [theme.breakpoints.up("xl")]: {
        marginBottom: "2.5rem",
      },
    },
  },
}));

const StyledLink = styled(Link, {
  shouldForwardProp: (prop) => prop !== "isCta",
})(({ isCta, theme }) => ({
  display: "flex",
  flexDirection: "row",
  justifyContent: "center",
  alignItems: "center",
  // padding: "24px 48px",
  gap: "10px",
  width: isCta ? "226px" : "245px",
  height: "76px",
  background: "#D83C3B",
  boxShadow: "0px 24px 48px rgba(216, 60, 59, 0.2)",
  borderRadius: "100px",
  color: "#fff",
  fontFamily: "'Public Sans'",
  fontStyle: "normal",
  fontWeight: "700",
  fontSize: "20px",
  lineHeight: "28px",
  marginBottom: "1.25rem",
  [theme.breakpoints.down("1100")]: {
    width: isCta ? "150.66px" : "163.33px",
    height: "50.66px",
    fontSize: "13.33px",
  },
}));

const AboutHeader = styled("section")(({ theme }) => ({
  [theme.breakpoints.down("lg")]: {
    marginBottom: "6.836rem",
  },
  [theme.breakpoints.up("lg")]: {
    marginBottom: "9.115rem",
  },
  [theme.breakpoints.up("xl")]: {
    marginBottom: "10rem",
  },
}));
const AboutSection = styled("section")(({ theme }) => ({}));
const QuoteBox = styled("section")(({ theme }) => ({
  position: "absolute",
  width: "904px",
  height: "284px",
  right: "9.5%",
  bottom: "-18%",
  background: "#FFFFFF",
  boxShadow: "0px 10px 114px rgba(9, 11, 10, 0.06)",
  borderRadius: "24px",
  flex: "none",
  order: "2",
  flexGrow: "0",
  zIndex: "2",
  lineHeight: "76.66%",
  [theme.breakpoints.down("lg")]: {
    width: "602.66px",
    height: "189.33px",
    right: "10%",
    bottom: "-17%",
  },
  [theme.breakpoints.up("lg")]: {
    width: "823.958px",
    height: "258.854px",
    right: "9%",
    bottom: "-19%",
  },
  [theme.breakpoints.up("xl")]: {
    width: "904px",
    height: "284px",
    right: "9.5%",
    bottom: "-18%",
  },
  "& .quoteIcon": {
    position: "absolute",
    top: "-1rem",
    left: "2rem",
  },
  "& .reviewBox": {
    "& .review": {
      fontFamily: "'Public Sans'",
      fontStyle: "normal",
      fontWeight: "600",
      fontSize: "28px",
      lineHeight: "130%",
      color: "#141737",
      margin: "2.5rem",
      [theme.breakpoints.down("lg")]: {
        fontSize: "19.14px",
        lineHeight: "88.690%",
        margin: "1.709rem",
      },
      [theme.breakpoints.up("lg")]: {
        fontSize: "25.52px",
        lineHeight: "118.489%",
        margin: "2.279rem",
      },
      [theme.breakpoints.up("lg")]: {
        fontSize: "28px",
        lineHeight: "130%",
        margin: "2.5rem",
      },
    },
    "& .details": {
      fontFamily: "'Public Sans', sans-serif",
      fontStyle: "normal",
      color: "#141737",
      margin: "2.5rem",
      [theme.breakpoints.up("lg")]: {
        margin: "1.709rem",
      },
      [theme.breakpoints.up("lg")]: {
        margin: "2.279rem",
      },
      [theme.breakpoints.up("lg")]: {
        margin: "2.5rem",
      },
      "& .author": {
        margin: 0,
        marginBottom: 1,
        fontWeight: "600",
        fontSize: "20px",
        lineHeight: "130%",
        opacity: "0.7",
        [theme.breakpoints.down("lg")]: {
          fontSize: "13.671px",
          lineHeight: "88.690%",
          margin: "0.67",
        },
        [theme.breakpoints.up("lg")]: {
          margin: "0.8",
          fontSize: "18.22px",
          lineHeight: "118.489%",
        },
        [theme.breakpoints.up("xl")]: {
          margin: "1",
          fontSize: "20px",
          lineHeight: "130%",
        },
      },
      "& .founder": {
        margin: 0,
        fontWeight: "400",
        fontSize: "16px",
        lineHeight: "150%",
        opacity: "0.5",
        [theme.breakpoints.down("1100")]: {
          fontSize: "10.66px",
        },
      },
    },
  },
}));

const usestyle = makeStyles((theme) => ({
  MainHeading: {
    fontSize: "96px",
    fontFamily: "MazzardH",
    fontWeight: "800",
    color: "#141737",
    lineHeight: "115%",
    marginBottom: "2.5rem",
    paddingTop: "5rem",
    [theme.breakpoints.down("lg")]: {
      lineHeight: "76.66%",
      fontSize: "64px",
      paddingTop: "3.418rem",
      marginBottom: "1.709rem",
    },
    [theme.breakpoints.up("lg")]: {
      fontSize: "87.5px",
      lineHeight: "104.815%",
      paddingTop: "4.557rem",
      marginBottom: "2.279rem",
    },
    [theme.breakpoints.up("xl")]: {
      fontSize: "96px",
      lineHeight: "115%",
      paddingTop: "5rem",
      marginBottom: "2.5rem",
    },
  },
  joinMainHeading: {
    fontSize: "96px",
    fontFamily: "MazzardH",
    fontWeight: "700",
    color: "#141737",
    lineHeight: "115%",
    [theme.breakpoints.down("lg")]: {
      lineHeight: "76.66%",
      fontSize: "64px",
      marginBottom: "7.69rem",
    },
    [theme.breakpoints.up("lg")]: {
      fontSize: "87.5px",
      lineHeight: "104.815%",
      marginBottom: "10.254rem",
    },
    [theme.breakpoints.up("xl")]: {
      fontSize: "96px",
      lineHeight: "115%",
      marginBottom: "4rem",
    },
  },
  paragraph: {
    fontFamily: "Public Sans",
    fontSize: "1.25rem",
    lineHeight: "1.875rem",
    fontWeight: "400",
    color: "#141737",
    [theme.breakpoints.down("1100")]: {
      fontSize: "0.833rem",
    },
  },
  Videoparagraph: {
    fontFamily: "Public Sans",
    fontSize: "20px",
    lineHeight: "1.875rem",
    fontWeight: "400",
    color: "#141737",
    [theme.breakpoints.down("lg")]: {
      fontSize: "13.671px",
    },
    [theme.breakpoints.up("lg")]: {
      fontSize: "18.22px",
    },
    [theme.breakpoints.up("xl")]: {
      fontSize: "20px",
    },
  },
  paragraph2: {
    fontFamily: "Public Sans",
    fontSize: "18px",
    lineHeight: "27px",
    fontWeight: "400",
    color: "#141737",
    [theme.breakpoints.down("lg")]: {
      fontSize: "12.304px",
      lineHeight: "18.45px",
    },
    [theme.breakpoints.up("lg")]: {
      fontSize: "16.406px",
      lineHeight: "24.609px",
    },
    [theme.breakpoints.up("xl")]: {
      fontSize: "20px",
      lineHeight: "27px",
    },
  },

  Joincommunityparagraph: {
    fontFamily: "Public Sans",
    fontSize: "20px",
    lineHeight: "27px",
    fontWeight: "400",
    color: "#141737",
    [theme.breakpoints.down("lg")]: {
      fontSize: "12.304px",
      lineHeight: "18.45px",
      paddingBottom: "27.34px",
    },
    [theme.breakpoints.up("lg")]: {
      fontSize: "16.406px",
      lineHeight: "24.609px",
      paddingBottom: "36.45px",
    },
    [theme.breakpoints.up("xl")]: {
      fontSize: "20px",
      lineHeight: "27px",
      paddingBottom: "40px",
    },
  },
  secondlevelheading: {
    fontWeight: "700",
    color: "#141737",
    [theme.breakpoints.down("lg")]: {
      fontSize: "16.406px",
      lineHeight: "21.191px",
      marginBottom: "0.684rem",
      marginTop: "0.684rem",
    },
    [theme.breakpoints.up("lg")]: {
      fontSize: "21.875px",
      lineHeight: "28.255px",
      marginBottom: "0.911rem",
      marginTop: "0.911rem",
    },
    [theme.breakpoints.up("xl")]: {
      fontSize: "24px",
      lineHeight: "31px",
      marginBottom: "1rem",
      marginTop: "1rem",
    },
  },
  L2subHeading: {
    fontWeight: "700",
    color: "#141737",
    [theme.breakpoints.down("lg")]: {
      fontSize: "32.812px",
      lineHeight: "42.38px",
      paddingBottom: "27.34px",
      paddingTop: "27.34px",
    },
    [theme.breakpoints.up("lg")]: {
      fontSize: "43.75px",
      lineHeight: "56.51px",
      paddingBottom: "36.45px",
      paddingTop: "36.45px",
    },
    [theme.breakpoints.up("xl")]: {
      fontSize: "48px",
      lineHeight: "62px",
      paddingBottom: "2.5rem",
    paddingTop: "2.5rem",
    },
  },
  L3subHeading: {
    fontSize: "48px",
    lineHeight: "62px",
    fontWeight: "700",
    color: "#141737",
    paddingBottom: "1rem",
    paddingTop: "2.5rem",
    [theme.breakpoints.down("lg")]: {
      fontSize: "32.812px",
      lineHeight: "42.38px",
      paddingBottom: "10.93px",
      paddingTop: "27.34px",
    },
    [theme.breakpoints.up("lg")]: {
      fontSize: "43.75px",
      lineHeight: "56.51px",
      paddingBottom: "14.58px",
      paddingTop: "36.45px",
    },
    [theme.breakpoints.up("xl")]: {
      fontSize: "48px",
      lineHeight: "62px",
      paddingBottom: "2.5rem",
    paddingTop: "2.5rem",
    },
  },
  Cardwrapper: {
    padding: "1rem",
    backgroundColor: "#FFFFFF",
    border: "1px solid transparent",
    borderRadius: "16px",
    [theme.breakpoints.down("lg")]: {
      padding: "1rem 1rem 0.683rem 1rem",
    },
    [theme.breakpoints.up("lg")]: {
      padding: "1rem",
    },
    [theme.breakpoints.up("xl")]: {
      padding: "1rem",
    },
  },
  Cardwrapper2: {
    backgroundColor: "#FFFFFF",
    border: "1px solid transparent",
    borderRadius: "16px",
    [theme.breakpoints.down("lg")]: {
      padding: "1rem 1rem 4.05rem 1rem",
    },
    [theme.breakpoints.up("lg")]: {
      padding: "1rem 1rem 5.45rem 1rem",
    },
    [theme.breakpoints.up("xl")]: {
      padding: "1rem 1rem 6rem 1rem",
    },
  },
  featurebox: {
    backgroundColor: "#FFFFFF",
    border: "1px solid transparent",
    borderRadius: "16px",
    [theme.breakpoints.down("lg")]: {
      padding: "1rem 1rem 3.5rem 1rem",
    },
    [theme.breakpoints.up("lg")]: {
      padding: "1rem 1rem 4.863rem 1rem",
    },
    [theme.breakpoints.up("xl")]: {
      padding: "1rem 1rem 5.3rem 1rem",
    },
  },
  communityWrapper: {
    display: "flex",
    flexDirection: "column",
    alignItems: "flex-start",
    justifyContent: "center",
  },
  TextcommunityWrapper: {
    display: "flex",
    flexDirection: "column",
    alignItems: "flex-start",
    justifyContent: "center",
  },
  aboutImgSize: {
    [theme.breakpoints.down("lg")]: {
      width: "459.375px",
    },
    [theme.breakpoints.up("lg")]: {
      width: "612.5px",
    },
    [theme.breakpoints.up("xl")]: {
      width: "672px",
    },
  },
  aboutImgSize2: {
    [theme.breakpoints.down("lg")]: {
      width: "478.515px",
    },
    [theme.breakpoints.up("lg")]: {
      width: "638.020px",
    },
    [theme.breakpoints.up("xl")]: {
      width: "700px",
    },
  },
  playerWrapper: {
    width: "43.25rem",
    height: "25.438rem",
    [theme.breakpoints.down("lg")]: {
      width: "29.565rem",
      height: "16.958rem",
    },
    [theme.breakpoints.up("lg")]: {
      width: "43.25rem",
      height: "25.438rem",
    },
    [theme.breakpoints.up("xl")]: {
      width: "43.25rem",
      height: "25.438rem",
    },
  },
  thisplayer: {
    marginTop: "15rem",
    marginBottom: "11.25rem",
    [theme.breakpoints.down("1100")]: {
      marginBottom: "7.5rem",
      marginTop: "10rem",
    },
  },
  aboutTitle: {
    fontFamily: "'MazzardH'",
    fontStyle: "normal",
    fontWeight: "800",
    lineHeight: "115%",
    textAlign: "center",
    letterSpacing: "0.04em",
    color: theme.palette.headingDark,
    marginBottom: "1.5rem",
    [theme.breakpoints.down("lg")]: {
      fontSize: "84.765px",
      marginTop: "-5.46rem",
    },
    [theme.breakpoints.up("lg")]: {
      fontSize: "113.020px",
      marginTop: "-7.29rem",
    },
    [theme.breakpoints.up("xl")]: {
      fontSize: "124px",
      marginTop: "-8rem",
    },
  },
  aboutPara: {
    fontFamily: "'Public Sans'",
    fontStyle: "normal",
    fontWeight: "400",
    lineHeight: "130%",
    textAlign: "center",
    color: theme.palette.headingDark,
    opacity: "0.7",
    [theme.breakpoints.down("lg")]: {
      fontSize: "16.406px",
      marginBottom: "2.051rem",
    },
    [theme.breakpoints.up("lg")]: {
      fontSize: "21.875px",
      marginBottom: "2.734rem",
    },
    [theme.breakpoints.up("xl")]: {
      fontSize: "24px",
      marginBottom: "3rem",
    },
  },
  aboutCta: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    background: "#D83C3B",
    boxShadow: "0px 24px 48px rgba(216, 60, 59, 0.2)",
    borderRadius: "100px",
    color: "#fff",
    fontFamily: "'Public Sans'",
    fontStyle: "normal",
    fontWeight: "700",
    lineHeight: "28px",
  },
  [theme.breakpoints.down("lg")]: {
    padding: "16.406px 32.8125px",
    width: "154.492px",
    fontSize: "13.671px",
    marginBottom: "0.854rem",
    height: "51.953px",
    gap: "6.832px",
  },
  [theme.breakpoints.up("lg")]: {
    padding: "21.875px 43.75px",
    width: "205.989px",
    fontSize: "18.229px",
    marginBottom: "1.139rem",
    height: "76px",
    gap: "9.114px",
  },
  [theme.breakpoints.up("xl")]: {
    padding: "24px 48px",
    width: "226px",
    fontSize: "20px",
    marginBottom: "1.25rem",
    height: "76px",
    gap: "10px",
  },
}));

const Customcontainer = styled(Box)(({ theme }) => ({
  [theme.breakpoints.down("lg")]: {
    margin: "0px 57.421px",
  },
  [theme.breakpoints.up("lg")]: {
    margin: "0px 76.562px",
  },
  [theme.breakpoints.up("xl")]: {
    margin: "0px 84px",
  },
}));

const AboutBox = styled(Box)(({ theme }) => ({
  display: "flex",
  gap: "64px",
  [theme.breakpoints.down("lg")]: {
    gap: "43.75px",
  },
  [theme.breakpoints.up("lg")]: {
    gap: "58.33px",
  },
  [theme.breakpoints.up("xl")]: {
    gap: "64px",
  },
}));
const PlayerBoxed = styled(Box)(({ theme }) => ({
  display: "flex",
  [theme.breakpoints.down("lg")]: {
    marginTop: "10.254rem",
    marginBottom: "7.69rem",
    gap: "43.75px",
  },
  [theme.breakpoints.up("lg")]: {
    marginTop: "13.672rem",
    marginBottom: "10.254rem",
    gap: "58.33px",
  },
  [theme.breakpoints.up("xl")]: {
    marginTop: "15rem",
    marginBottom: "11.25rem",
    gap: "64px",
  },
}));
const FeaturesCards = styled(Box)(({ theme }) => ({
  display: "flex",
  [theme.breakpoints.down("lg")]: {
    paddingBottom: "27.343px",
    gap: "27.343px",
  },
  [theme.breakpoints.up("lg")]: {
    paddingBottom: "40px",
    gap: "36.458px",
  },
  [theme.breakpoints.up("xl")]: {
    paddingBottom: "40px",
    gap: "40px",
  },
}));
const FeaturedCard = styled(Box)(({ theme }) => ({
  display: "flex",
  paddingBottom: "80px",
  gap: "40px",
  [theme.breakpoints.down("lg")]: {
    paddingBottom: "54.687px",
    gap: "27.343px",
  },
  [theme.breakpoints.up("lg")]: {
    paddingBottom: "80px",
    gap: "36.458px",
  },
  [theme.breakpoints.up("xl")]: {
    paddingBottom: "80px",
    gap: "40px",
  },
}));
const CommunityBoxed = styled(Box)(({ theme }) => ({
  [theme.breakpoints.down("lg")]: {
    paddingTop: "7.69rem",
    marginBottom: "7.69rem",
  },
  [theme.breakpoints.up("lg")]: {
    paddingTop: "10.254rem",
    marginBottom: "10.254rem",
  },
  [theme.breakpoints.up("xl")]: {
    paddingTop: "11.25rem",
    marginBottom: "11.25rem",
  },
}));
const StyledGridBoxed = styled(Box)(({ theme }) => ({
  display: "flex",
  [theme.breakpoints.down("lg")]: {
    paddingBottom: "54.687px",
    gap: "43.75px",
  },
  [theme.breakpoints.up("lg")]: {
    paddingBottom: "72.916px",
    gap: "58.33px",
  },
  [theme.breakpoints.up("xl")]: {
    paddingBottom: "80px",
    gap: "64px",
  },
}));
const GridStyles = styled(Box)(({ theme }) => ({
  display: "flex",
  [theme.breakpoints.down("lg")]: {
    gap: "43.75px",
  },
  [theme.breakpoints.up("lg")]: {
    gap: "58.33px",
  },
  [theme.breakpoints.up("xl")]: {
    gap: "64px",
  },
}));

const About = () => {
  const classes = usestyle();
  return (
    <>
      <AboutHeader>
        {/* <CurvedSlider /> */}
        <BgBox>
          <img
            src={sectionBg}
            alt="about gallery"
            height={"100%"}
            width="100%"
          />
        </BgBox>
        <Customcontainer>
          <h1 className={classes.aboutTitle}>Welcome Magnet Fishers</h1>
          <p className={classes.aboutPara}>
            We want you to help us grow magnet fishing by posting your finds and
            adventures. your content will be seen by a growing network of fellow
            magnet fishers sign up
          </p>
          <Stack direction="row" justifyContent="center" alignItems="center">
            <StyledLink to="/signup" className={classes.aboutCta} isCta={true}>
              Let's Sign Up!
            </StyledLink>
          </Stack>
        </Customcontainer>
      </AboutHeader>

      <Customcontainer sx={{ position: "relative" }}>
        <AboutBox>
          <Box>
            <StyledHeader>
              <h3 className="subHeading">Magnet Fishing USA</h3>
              <h2 className="heading">About Us</h2>
            </StyledHeader>
            <StyledPara>
              <p className="para">
                Magnet fishing is growing , but there aren’t any platforms
                deidcated to magnet fishers. That’s whyi developed a
                not-for-profit hobby site called{" "}
                <strong>Magnet Fishing USA.</strong>
              </p>
              <p className="para">
                Magnet fishing USA is a complete digital resource by and for
                magnet fishers. It’s a community, a blog, and it hosts magnet
                fishing web apps. You can easily access it on your phone,
                tablet, or computer. Our tools, content and applications reveal
                the largest collection of premium finds and their exact
                locations including google maps street views. you can also
                interact with anybody who posts their find.
              </p>
            </StyledPara>
            <StyledLink to={"/"}>Checkout More</StyledLink>
          </Box>
          <Box>
            <Box>
              <img
                className={classes.aboutImgSize}
                src={aboutImg}
                alt="about section"
              />
            </Box>
          </Box>
        </AboutBox>
        <QuoteBox>
          <Box className="quoteIcon">
            <img src={quoteIcon} alt="quote" />
          </Box>
          <Box className="reviewBox">
            <h3 className="review">
              I love magnet fishing but it was a struggle at first. I would find
              scrap, i wouldn’t find good locations, and my magnet would
              constantly get stusk.
            </h3>
            <Box className="details">
              <h4 className="author">Stefan Dries</h4>
              <p className="founder">Magnet Fishing USA founder</p>
            </Box>
          </Box>
        </QuoteBox>
      </Customcontainer>

      <Customcontainer>
        <PlayerBoxed>
          <Box className={classes.playerBox}>
            <Box className={classes.playerWrapper}>
              <ReactPlayer
                // ref={videoPlayerRef}
                // url={videoUrl}
                className={classes.reactplayer}
                // config={ }
                url="https://www.youtube.com/watch?v=ysz5S6PUM-U"
                light={thumbnailBtn}
                width="100%"
                height="100%"
                playing={true}
                controls={true}
                progressInterval={5000}
                volume={0.4}
                fallback={<p>Loading...</p>}
                // onProgress={handleProgress}
                // onDuration={handleDuration}
                // onSeek={e => console.log('onSeek', e)}
                // onReady={() => setIsReady(true)}
                // onStart={() => setIsStarted(true)}
                // onEnded={handleEnded}
                // onPause={handlePause}
                // onError={handleError}
              />
            </Box>
          </Box>
          <Box className={classes.TextcommunityWrapper}>
            <p className={classes.Videoparagraph}>
              Magnet fishing USA values patriotism and quality time with the
              family. We;re not for profit and run charitable fundaisers to
              benefit worthwhile organization.
              <br />
              <br />
              Check out magnet fishing USA here and let me know what you think!
              <br />
              <br />
              Watch our video in which we explain the technology we use.
            </p>
          </Box>
        </PlayerBoxed>
      </Customcontainer>

      <Box sx={{ backgroundColor: "#F0F7FC" }}>
        <Customcontainer>
          <Typography component="h1" className={classes.MainHeading}>
            Features
          </Typography>
          <FeaturesCards>
            <Box sx={{ width: "33.333%" }}>
              <p className={classes.Videoparagraph}>
                We currently have the largest collection of magnet fishing finds
                and we want to continue adding to it.
                <br />
                Magnet fishing USA also has in-depth tutorials, a blog, and a
                facebook group that discussed magnet fishing topics.
              </p>
            </Box>
            <Box sx={{ width: "33.333%" }}>
              <Box className={classes.Cardwrapper}>
                <img src={gallery} />
                <Typography
                  className={classes.secondlevelheading}
                >
                  Find Gallery
                </Typography>
                <p className={classes.paragraph2}>
                  Our Gallery feature lets you sort and views finds by Type of
                  Find and Date
                </p>
              </Box>
            </Box>
            <Box sx={{ width: "33.333%" }}>
              <Box className={classes.Cardwrapper}>
                <img src={map} />
                <Typography
                  className={classes.secondlevelheading}
                >
                  World find map
                </Typography>
                <p className={classes.paragraph2}>
                  You can use our Find Map to view Google Maps locations of our
                  finds.
                </p>
              </Box>
            </Box>
          </FeaturesCards>
          <FeaturedCard>
            <Box sx={{ width: "33.33%" }}>
              <Box className={classes.featurebox}>
                <img src={Social} />
                <Typography
                  className={classes.secondlevelheading}
                >
                  Magnet Fishing USA Facebook group
                </Typography>
                <p className={classes.paragraph2}>
                  Our Gallery feature lets you sort and views finds by Type of
                  Find and Date
                </p>
              </Box>
            </Box>
            <Box sx={{ width: "33.33%" }}>
              <Box className={classes.Cardwrapper2}>
                <img src={Tutorials} />
                <Typography
                  className={classes.secondlevelheading}
                >
                  Tutorials
                </Typography>
                <p className={classes.paragraph2}>
                  Your tutorials cover the magnet fishing process step by step -
                  from choosing a magnet to catching your first major find.
                </p>
              </Box>
            </Box>
            <Box sx={{ width: "33.33%" }}>
              <Box className={classes.Cardwrapper}>
                <img src={Blogs} />
                <Typography
                  className={classes.secondlevelheading}
                >
                  Blog
                </Typography>
                <p className={classes.paragraph2}>
                  Our blog explains magnet fishing from top to botoom and
                  answers any questions you have. Our blog features interviews
                  from experienced magnet fishers, in depth articles on magnet
                  fishing questions, and interesting magnet fishing posts.
                </p>
              </Box>
            </Box>
          </FeaturedCard>
        </Customcontainer>
      </Box>

      <Customcontainer>
        <CommunityBoxed>
          <Typography
            component="h1"
            variant="h2"
            className={classes.joinMainHeading}
          >
            Join the community!
          </Typography>
          <StyledGridBoxed>
            <Box className={classes.communityWrapper}>
              <img src={idea} />
              <Typography
                component="h2"
                variant="h3"
                className={classes.L2subHeading}
              >
                Share your experiences on our blog
              </Typography>
              <StyledLink sx={{ width: "12.375rem" }} to=" " isCta={true}>
                Read more
              </StyledLink>
            </Box>
            <Box>
              <img className={classes.aboutImgSize} src={find1} />
            </Box>
          </StyledGridBoxed>
          <StyledGridBoxed>
            <Box sx={{ width: "65%" }}>
              <img className={classes.aboutImgSize2} src={find2} />
            </Box>
            <Box sx={{ width: "35%" }} className={classes.communityWrapper}>
              <img src={shared} />
              <Typography
                component="h2"
                variant="h3"
                className={classes.L3subHeading}
              >
                Post videos & images of your finds to our gallery
              </Typography>
              <p className={classes.Joincommunityparagraph}>
                The largest collection of magnet fishings finds
              </p>
              <StyledLink sx={{ width: "12.375rem" }} to=" " isCta={true}>
                Share Now
              </StyledLink>
            </Box>
          </StyledGridBoxed>
          <GridStyles>
            <Box className={classes.communityWrapper}>
              <img src={pinned} />
              <Typography
                component="h2"
                variant="h3"
                className={classes.L3subHeading}
              >
                Share street views of your find’s locations our find map
              </Typography>
              <p className={classes.Joincommunityparagraph}>
                Sign up and help grow Magnet Fishing USA!
              </p>
              <StyledLink sx={{ width: "12.375rem" }} to=" " isCta={true}>
                Share Now
              </StyledLink>
            </Box>
            <Box>
              <img className={classes.aboutImgSize} src={pinMap} />
            </Box>
          </GridStyles>
        </CommunityBoxed>
      </Customcontainer>
    </>
  );
};

export default About;
