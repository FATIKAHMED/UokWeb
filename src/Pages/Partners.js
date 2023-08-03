import { useRef } from "react";
import { Link } from "react-router-dom";

import styled from "@emotion/styled";
import { Box, Button, Container, Typography } from "@mui/material";

import ReactPlayer from "react-player/lazy";
import PatternSlider from "../Components/PatternSlider";

import arrowsDown from "../Assets/Partners/arrowsDown.png";
import logo from "../Assets/logoIcon.png";
import PlayButton from "../Assets/img/playBtn.png";
import videoThumbnail from "../Assets/img/videoBg.png";
import pattern from "../Assets/Partners/pattern.png";
import ig from "../Assets/Partners/ig.png";
import msg from "../Assets/Partners/msg.png";
import yt from "../Assets/Partners/yt.png";
import illustration1 from "../Assets/Partners/illustration1.svg";
import illustration2 from "../Assets/Partners/illustration2.svg";
import illustration3 from "../Assets/Partners/illustration3.svg";
import patternLeft from "../Assets/Partners/patternLeft.svg";
import pattern2Left from "../Assets/Partners/pattern2Left.svg";
import patternRight from "../Assets/Partners/patternRight.svg";
import pattern2Right from "../Assets/Partners/pattern2Right.svg";

const HeroSection = styled("section")(({ theme }) => ({
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  justifyContent: "center",
  gap: "8.5rem",
  marginBottom: "10rem",
  "& .heroBox": {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    gap: "1.563rem",
    marginBottom: "8.5rem",

    "& .logo": {
      textAlign: "center",
      "& .logo-image": {
        [theme.breakpoints.down("lg")]: {
          width: "56.3px",
          height: "70.54px",
        },
        [theme.breakpoints.up("lg")]: {
          width: "75px",
          height: "94px",
        },
        [theme.breakpoints.up("xl")]: {
          width: "82.4px",
          height: "103.2px",
        },
      },
    },
    "& .headingBox": {
      "& .heading": {
        fontFamily: "Poppins",
        fontSize: "66.4px",
        fontWeight: "800",
        lineHeight: "80px",
        letterSpacing: "1px",
        textAlign: "center",
      },
    },
    "& .para": {
      fontFamily: "Poppins",
      fontSize: "16px",
      fontWeight: "400",
      lineHeight: "32px",
      letterSpacing: "0em",
      textAlign: "center",
    },
  },
}));
const AudienceSection = styled("section")(({ theme }) => ({
  [theme.breakpoints.down("lg")]: {
    paddingTop: "8.469rem",
    marginBottom: "9.938rem",
  },
  [theme.breakpoints.up("lg")]: {
    paddingTop: "8.313rem",
    marginBottom: "13.188rem",
  },
  [theme.breakpoints.up("xl")]: {
    paddingTop: "6rem",
    marginBottom: "14.5rem",
  },
  // "&:before": {
  //   content: `url(${patternLeft})`,
  //   backgroundRepeat: `no-repeat`,
  //   backgroundSize: `contain`,
  //   height: "100vh",
  //   width: "100%",
  //   position: "absolute",
  //   zIndex: 20,
  // },
  "& .box": {
    maxWidth: "850px",
    width: "100%",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    gap: "3.125rem",
    marginInline: "auto",
  },
  "& .heading": {
    fontFamily: "Poppins",
    fontSize: "50.4px",
    fontWeight: "800",
    lineHeight: "61px",
    letterSpacing: "0px",
    textAlign: "center",
    color: "#100082",
  },
  "& .socialBox": {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    gap: "3.125rem",
    "& img": {
      [theme.breakpoints.down("lg")]: {
        width: "66px",
        height: "66px",
      },
      [theme.breakpoints.up("lg")]: {
        width: "88px",
        height: "88px",
      },
      [theme.breakpoints.up("xl")]: {
        width: "96px",
        height: "96px",
      },
      filter:
        "drop-shadow(69px 69px 39px rgba(79, 25, 134, 0.02)) drop-shadow(39px 39px 33px rgba(79, 25, 134, 0.08)) drop-shadow(17px 17px 24px rgba(79, 25, 134, 0.13)) drop-shadow(4px 4px 13px rgba(79, 25, 134, 0.15)) drop-shadow(0px 0px 0px rgba(79, 25, 134, 0.15))",
    },
  },
  "& .para": {
    fontFamily: "Poppins",
    fontSize: "20px",
    fontWeight: "300",
    lineHeight: "40px",
    letterSpacing: "0em",
    textAlign: "center",
  },
}));
const GallerySection = styled("section")(({ theme }) => ({
  marginBottom: "7rem",
  "& .box": {
    maxWidth: "1256px",
    width: "100%",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    gap: "1.563rem",
    marginInline: "auto",
    "& .heading": {
      fontFamily: "Poppins",
      fontSize: "38.4px",
      fontWeight: "800",
      lineHeight: "46.4px",
      letterSpacing: "0px",
      textAlign: "center",
      color: "#100082",
    },
    "& .para": {
      fontFamily: "Poppins",
      fontSize: "20px",
      fontWeight: "700",
      lineHeight: "40px",
      letterSpacing: "0em",
      textAlign: "center",
      maxWidth: "834px",
    },
    "& .arrow":{
      "& img":{
        width:"91px",
        height:"21px",
      [theme.breakpoints.down("lg")]:{
        width:"62px",
        height:"14px",
      },
      [theme.breakpoints.up("lg")]:{
        width:"83px",
        height:"19px",
      },
      [theme.breakpoints.up("xl")]:{
        width:"91px",
        height:"21px",
      },
      }
    }
  },
}));
const JoinStepSection = styled("section")(({ theme }) => ({
  marginBottom: "10rem",
  "& .box": {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    gap: "1.563rem",
    marginInline: "auto",
    "& .heading": {
      fontFamily: "Poppins",
      fontSize: "50.4px",
      fontWeight: "800",
      lineHeight: "60.8px",
      letterSpacing: "0px",
      textAlign: "center",
      color: "#100082",
    },
  },
}));
const BannerSection = styled("section")(({ theme }) => ({
  marginBottom: "8rem",
  //   maxWidth: "1400px",
  //   width: "100%",
  // marginInline: "auto",
  padding: "0 5rem",
  [theme.breakpoints.down("lg")]: {
    padding: "0 75.4px",
  },
  [theme.breakpoints.up("lg")]: {
    padding: "0 101px",
  },
  [theme.breakpoints.up("xl")]: {
    padding: "0 110.4px",
  },
  // [theme.breakpoints.down("lg")]: {
  //   padding:"0 5rem"
  // },
  height: "500px",
  background: "linear-gradient(71.47deg, #100082 3.49%, #5444CB 111.58%)",
  borderRadius: "54px",
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  justifyContent: "center",
  "& .box": {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    gap: "1.563rem",
    marginInline: "auto",
    maxWidth: "900px",
    width: "100%",
    marginInline: "auto",
    color: "white",
    "& .heading": {
      fontFamily: "Poppins",
      fontSize: "34px",
      fontWeight: "800",
      lineHeight: "44px",
      letterSpacing: "0px",
      textAlign: "center",
    },
    "& .para": {
      maxWidth: "832px",
      width: "100%",
      fontFamily: "Poppins",
      fontSize: "16px",
      fontWeight: "300",
      lineHeight: "32px",
      letterSpacing: "0em",
      textAlign: "center",
    },
  },
}));

const StyledLink = styled(Link, {
  shouldForwardProp: (prop) => prop !== "color",
})(({ color, bg, theme }) => ({
  borderRadius: "23px",
  //   padding: "20px 32px 20px 32px",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  background: bg,
  color: color,
  [theme.breakpoints.down("lg")]: {
    height: "38px",
    width: "153px",
  },
  [theme.breakpoints.up("lg")]: {
    height: "51px",
    width: "204px",
  },
  [theme.breakpoints.up("xl")]: {
    height: "56px",
    width: "224px",
  },

  fontFamily: "Poppins",
  fontSize: "16px",
  fontWeight: "700 !important",
  lineHeight: "24px",
  letterSpacing: "0.02em",
  textAlign: "center",
  marginInline: "auto",
}));

const CustomBox = styled(Box)(({ theme }) => ({
  [theme.breakpoints.down("lg")]: {
    width: "100%",
    height: "27.438rem",
  },
  [theme.breakpoints.up("lg")]: {
    width: "100%",
    height: "36.563rem",
  },
  [theme.breakpoints.up("xl")]: {
    width: "100%",
    height: "40.125rem",
  },
  [theme.breakpoints.down("sm")]: {
    width: "100%",
    height: "auto",
  },
  "& iframe": {
    borderRadius: "1rem",
  },
  playerWrapper: {
    position: "relative",
  },
  "& .videoFrame": {
    // maxHeight: "600px", new changes
    "& video": {
      borderRadius: "6px",
      // height: "auto !important",
      height: "100% !important",
      // maxHeight: "600px !important", new changes
    },
    "& .react-player__preview": {
      borderRadius: "1rem",
      minHeight: "40rem",
      [theme.breakpoints.down("600")]: {
        minHeight: "14rem !important",
        // minHeight: "360px !important",
      },
    },
    "& .react-player__play-icon": {
      border: "0 !important",
    },
    "& .react-player__shadow": {
      // background: `url(${PlayButtonLesson}),linear-gradient(90deg, rgba(130, 193, 202, 0.55) 0%, rgba(80, 157, 213, 0.55) 100%) !important`,
      background: `url(${PlayButton}),#00000042 !important`,
      zIndex: "0",
      width: "100% !important",
      height: "600px !important",
      // maxHeight: "600px !important", new changes
      borderRadius: "6px !important",
      backgroundRepeat: "no-repeat !important",
      backgroundPosition: "center !important",
    },
  },
  icon: {
    background: `url(${PlayButton}),#00000042 !important`,
    zIndex: "0",
    width: "100% !important",
    height: "600px !important",
    maxHeight: "600px !important",
    borderRadius: "6px !important",
    backgroundRepeat: "no-repeat !important",
    backgroundPosition: "center !important",
    [theme.breakpoints.down("600")]: {
      height: "100% !important",
      minHeight: "360px !important",
    },
  },
  resumeIcon: {
    // background: `url(${PlayBtn}),#00000042 !important`,
    background: `#00000042 !important`,
    zIndex: "0",
    width: "100% !important",
    height: "600px !important",
    maxHeight: "600px !important",
    borderRadius: "6px !important",
    // backgroundRepeat: "no-repeat !important",
    // backgroundPosition: "center !important",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "column",
    gap: "1rem",
    color: "#fff",
    [theme.breakpoints.down("600")]: {
      minHeight: "14rem !important",
      height: "100% !important",
      padding: "1rem",
    },
    "& .start": {
      display: "inline-block",
      borderRadius: "6px",
      width: "200px",
      height: "60px",
      background: "#343434",
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      [theme.breakpoints.down("600")]: {
        fontSize: "1rem",
        width: "140px",
        height: "40px",
      },
    },
    "& .or": {
      fontSize: "2rem",
      [theme.breakpoints.down("600")]: {
        fontSize: "1rem",
      },
    },
    "& .resume": {
      display: "inline-block",
      borderRadius: "6px",
      width: "200px",
      height: "60px",
      background: "#99093c",
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      [theme.breakpoints.down("600")]: {
        width: "160px",
        height: "40px",
        fontSize: "1rem",
      },
    },
  },
  loaderCont: {
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    transition: "all .3s",
    [theme.breakpoints.down("600")]: {
      height: "3rem",
      width: "3rem",
    },
    "& .hidden": {
      opacity: 0,
      transition: "all 250ms linear .3s",
    },
    "& .show": {
      opacity: 1,
      // transition: "all 250ms linear .4s"
    },
    "& .thumbnail": {
      transition: "all .3s",
      position: "relative",
      [theme.breakpoints.down("600")]: {
        minHeight: "2rem",
        minWidth: "2rem",
        height: "3rem",
        width: "3rem",
      },
    },
  },
  animationEffect: {
    "&::after": {
      //   content: `"" !important`,
      content: '""',
      width: "120px",
      height: "120px",
      position: "absolute",
      top: "0",
      left: "0",
      borderRadius: "10rem",
      zIndex: "-1",
      transition: "ease-out .4s",
      background: "#000",
      transform: "scale(1.3)",
      opacity: "0.2",
      [theme.breakpoints.down("600")]: {
        width: "4rem",
        height: "4rem",
        top: "50%",
        left: "50%",
        transform: "translate(-50%,-50%)",
      },
    },
    // "&:active::after": {
    //     transform: "scaleX(1.4) scaleY(1.6)",
    //     opacity: 0,
    // },
  },
}));

const StyledStepper = styled(Box, {
  shouldForwardProp: (prop) => prop !== "isCta",
})(({ step, theme }) => ({
  zIndex: 1,
  [theme.breakpoints.down("lg")]: {
    padding: "0 5.338rem",
  },
  [theme.breakpoints.up("lg")]: {
    padding: "0 7.125rem",
  },
  [theme.breakpoints.up("xl")]: {
    padding: "0 7.813rem",
  },

  background: "#FFFFFF",
  border: "2px solid #E7E5EA",
  borderRadius: "54px",

  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  justifyContent: "center",
  gap: "1.25rem",
  position: "relative",
  [theme.breakpoints.down("lg")]:{
    height: "285px",
    width: "47.875rem",
  },
  [theme.breakpoints.up("lg")]:{
    height: "346px",
    width: "63.813rem", 
  },
  [theme.breakpoints.up("xl")]:{
    height: "380px",
    width: "70rem",
  },
  "&:before": {
    content: `'${step}'`,
    width: 77,
    height: 77,
    color: "white",
    background: "#0052FF",
    position: "absolute",
    top: "-42px",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    borderRadius: "100%",
    fontFamily: "Poppins",
    fontSize: "28px",
    fontWeight: "700",
    lineHeight: "40px",
    textAlign: "center",
  },
  "& .imgBox":{
    "& img":{
      [theme.breakpoints.down("lg")]:{
        width:"109px",
        height:"109px",
      },
      [theme.breakpoints.up("lg")]:{
        width:"146px",
        height:"146px",
      },
      [theme.breakpoints.up("xl")]:{
        width:"160px",
        height:"160px",
      },
    },
  },
  "& .imgBox2":{
    "& img":{
      [theme.breakpoints.down("lg")]:{
        width:"168px",
        height:"109px",
      },
      [theme.breakpoints.up("lg")]:{
        width:"222px",
        height:"146px",
      },
      [theme.breakpoints.up("xl")]:{
        width:"244px",
        height:"160px",
      },
    },
  },
  "& .stepperHeading": {
    fontFamily: "Poppins",
    fontSize: "26px",
    fontWeight: "700",
    lineHeight: "22.4px",
    letterSpacing: "-0.4000000059604645px",
    textAlign: "center",
    color: "#100082",
  },
  "& .stepperPara": {
    fontFamily: "Poppins",
    fontSize: "16px",
    fontWeight: "400",
    lineHeight: "21px",
    letterSpacing: "0px",
    textAlign: "center",
  },
}));

const PatternBox = styled(Box, {
  shouldForwardProp: (prop) => prop !== "type",
  shouldForwardProp: (prop) => prop !== "img",
})(({ img, type, theme }) => ({
  backgroundImage: `url(${img})`,
  backgroundRepeat: `no-repeat`,
  backgroundSize: `contain`,
  height: "100vh",
  width: "30rem",
  position: "absolute",
  // zIndex: 20,
  "&.left": {
    left: 0,
  },
  "&.left2": {
    left: "0",
    height: "1471px",
    width: "50rem",
    bottom: "110rem",
  },
  "&.right": {
    right: "0rem",
    top: "40rem",
    backgroundPosition: "right",
    height: "1372px",
  },
  "&.right2": {
    right: "0",
    height: "1002px",
    width: "30rem",
    bottom: "0",
  },
}));

const Partners = () => {
  const videoPlayerRef = useRef(null);
  return (
    <>
      {/* <PatternBox className="left" img={patternLeft}></PatternBox> */}
      <section style={{ marginTop: "6rem", position: "relative" }}>
        <HeroSection>
          <Container maxWidth={"xl"}>
            <Box className="heroBox">
              <div className="logo">
                <img src={logo} alt="logo" className="logo-image" />
              </div>
              <Box className="headingBox">
                <Typography
                  variant="h1"
                  component={"h1"}
                  className="heading"
                  sx={{ color: "#100082" }}
                >
                  Magnet Fishing USA
                </Typography>
                <Typography
                  variant="h1"
                  component={"h1"}
                  className="heading"
                  sx={{ color: "#FF0753" }}
                >
                  Magnet Fishers{" "}
                </Typography>
              </Box>
              <Typography variant="body1" component={"p"} className="para">
                Magnet fishing USA connects magnet fishing content creators with
                new followers.
              </Typography>
              <StyledLink to="/signup" color="#fff" bg="#100082">
                <Typography
                  variant="body2"
                  component={"p"}
                  fontWeight="700 !important"
                >
                  SignUp
                </Typography>
              </StyledLink>
            </Box>
            <CustomBox>
              <ReactPlayer
                ref={videoPlayerRef}
                url={"https://www.youtube.com/watch?v=GdZxbmEHW7M"}
                className={"videoFrame"}
                light={videoThumbnail}
                width="100%"
                height="100%"
                playIcon={<img src={PlayButton} />}
                controls={true}
                progressInterval={200} //delay 100000
                playing={true}
                fallback={<p>Loading...</p>}
              />
            </CustomBox>
          </Container>
        </HeroSection>

        {/* <PatternBox className="right" img={patternRight}></PatternBox> */}
        <AudienceSection>
          <Container maxWidth="xl">
            <Box className="box">
              <Typography variant="h2" component={"h2"} className="heading">
                You can use our platform to grow your audience
              </Typography>
              <Box className="socialBox">
                <Box>
                  <img src={ig} alt="instagram" />
                </Box>
                <Box>
                  <img src={msg} alt="messenger" />
                </Box>
                <Box>
                  <img src={yt} alt="youtube" />
                </Box>
              </Box>
              <Typography variant="body1" component={"p"} className="para">
                Our network of magnet fishers will be able to view and follow
                your content, as well as your Instagram and Youtube channels
                through your user profile.
              </Typography>
            </Box>
          </Container>
        </AudienceSection>

        <GallerySection>
          <Container maxWidth="xl">
            <Box className="box">
              <Typography variant="h3" component={"h3"} className="heading">
                We unify Passionate Magnet Fishers Seeking More Content Exposure
                with People who Want to Watch and Learn from the Best
              </Typography>
              <Typography
                variant="body1"
                component={"p"}
                mb={"3.125rem"}
                className="para"
              >
                As our magnet fishing expert, contribute images and videos of
                your finds, advice, articles, and anything else magnet fishing
                related
              </Typography>
              <Box className="arrow">
                <img src={pattern} alt="arrows down" />
              </Box>
            </Box>
            <PatternSlider />
          </Container>
        </GallerySection>
        {/* <PatternBox className="left2" img={pattern2Left}></PatternBox> */}
        <JoinStepSection>
          <Container maxWidth="xl">
            <Box class="box">
              <Typography
                variant="h2"
                component={"h2"}
                mb="6.25rem"
                className="heading"
              >
                Easy steps to join us
              </Typography>
              <StyledStepper step="1">
                <Box class="box">
                  <Box className="imgBox">
                    <img src={illustration1} alt="illustration" />
                  </Box>
                  <Typography
                    variant="h5"
                    component={"h5"}
                    className="stepperHeading"
                  >
                    First, make your profile and link your social accounts
                  </Typography>
                  <Typography
                    variant="body1"
                    component={"p"}
                    className="stepperPara"
                  >
                    Sign up to post your magnet fishing experiences on our site
                    and tell all your magnet fishing friends about us.
                  </Typography>
                </Box>
              </StyledStepper>
              <Box sx={{ marginTop: "2.5rem", marginBottom: "5rem" }}>
                <img src={arrowsDown} alt="arrows down" />
              </Box>
              <StyledStepper step="2">
                <Box class="box">
                  <Box className="imgBox">
                    <img src={illustration2} alt="illustration" />
                  </Box>
                  <Typography
                    variant="h5"
                    component={"h5"}
                    className="stepperHeading"
                  >
                    Next share your content
                  </Typography>
                  <Typography
                    variant="body1"
                    component={"p"}
                    className="stepperPara"
                  >
                    You’ll be able to share your content across all your linked
                    social networks.
                  </Typography>
                </Box>
              </StyledStepper>
              <Box sx={{ marginTop: "2.5rem", marginBottom: "5rem" }}>
                <img src={arrowsDown} alt="arrows down" />
              </Box>
              <StyledStepper step="3">
                <Box class="box">
                  <Box className="imgBox2">
                    <img src={illustration3} alt="illustration" />
                  </Box>
                  <Typography
                    variant="h5"
                    component={"h5"}
                    className="stepperHeading"
                  >
                    Tell your friends about us
                  </Typography>
                  <Typography
                    variant="body1"
                    component={"p"}
                    className="stepperPara"
                  >
                    Tell your friends about us and share Magnet fishing USA with
                    your friends using this link.
                  </Typography>
                </Box>
              </StyledStepper>
            </Box>
          </Container>
        </JoinStepSection>

        {/* <PatternBox className="right2" img={pattern2Right}></PatternBox> */}
        <section className="bannerSection">
          <Container maxWidth="xl">
            <BannerSection>
              <Box className="box">
                <Typography variant="h4" component={"h4"} className="heading">
                  The more people that join Magnet fishing USA, the more people
                  will be able to view your content
                </Typography>
                <Typography variant="body1" component={"p"} className="para">
                  So, please sign up to post your magnet fishing experiences on
                  our site and tell all your magnet fishing friends about us.
                </Typography>
                <StyledLink to="/signup" bg="#fff" color="#100082">
                <Typography
                  variant="body2"
                  component={"p"}
                  fontWeight="700 !important"
                  textTransform="uppercase"
                >
                  SignUp
                  </Typography>
                </StyledLink>
              </Box>
            </BannerSection>
          </Container>
        </section>
      </section>
    </>
  );
};

export default Partners;
