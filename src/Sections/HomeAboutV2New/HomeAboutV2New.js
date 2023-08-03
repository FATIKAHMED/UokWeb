import {
  Box,
  Button,
  Card,
  CardContent,
  Container,
  Grid,
  Stack,
  Typography,
} from "@mui/material";
import React from "react";
import aboutImges from "../../Assets/AboutUS/Find-Artillery.jpg";
import aboutImg from "../../Assets/AboutUS/AboutHero.png";
// import aboutImg2 from "../../Assets/AboutUS/hero2.png";
import { HiOutlineArrowNarrowRight } from "react-icons/hi";
import { styled } from "@mui/material/styles";
import { COLORS } from "../../Utils/variables";
import { makeStyles } from "@mui/styles";
import { lineHeight } from "@mui/system";
import AccountBalanceIcon from "@mui/icons-material/AccountBalance";

const useStyles = makeStyles((theme) => ({
  aboutContainer: {
    display: "flex",
    alignItem: "center",
    [theme.breakpoints.down("lg")]: {
      height: "502px",
      margin: "0px 57px 123px 57px",
      gap: "44px",
    },
    [theme.breakpoints.up("lg")]: {
      height: "670px",
      margin: "0px 77px 164px 77px",
      gap: "64px",
    },
    [theme.breakpoints.up("xl")]: {
      height: "735px",
      margin: "0px 84px 180px 84px",
      gap: "19px",
    },
  },
  pictureContainer: {
    [theme.breakpoints.down("lg")]: {
      minWidth: "460px",
      height: "527px",
    },
    [theme.breakpoints.up("lg")]: {
      minWidth: "613px",
      height: "702px",
    },
    [theme.breakpoints.up("xl")]: {
      minWidth: "715px",
      height: "800px",
    },
  },
  aboutImage: {
    width: "100%",
    height: "100%",
  },
  mainHeading: {
    color: "#3A88B9",
    fontFamily: "MazzardH",
    fontWeight: "700",
    paddingLeft: "2px",
    [theme.breakpoints.down("lg")]: {
      fontSize: "25px !important",
      lineHeight: "28px !important",
      marginBottom: "14px",
    },
    [theme.breakpoints.up("lg")]: {
      fontSize: "36px !important",
      lineHeight: "115% !important",
      marginBottom: "10px",
    },
  },
  subHeading: {
    color: "#141737",
    fontFamily: "MazzardH",
    fontWeight: "800",
    textTransform: "capitalize",
    [theme.breakpoints.down("lg")]: {
      fontSize: "66px",
      lineHeight: "75px",
      marginBottom: "27.3px",
    },
    // [theme.breakpoints.up("lg")]: {
    //   fontSize: "87.5px",
    //   lineHeight: "110px",
    //   marginBottom: "36px",
    // },
    [theme.breakpoints.up("lg")]: {
      fontSize: "96px !important",
      lineHeight: "110px !important",
      marginBottom: "48px !important",
    },
  },
  paragraph: {
    color: "#141737",
    fontFamily: "Public Sans",
    textAlign: "left",
    fontWeight: "400",
    [theme.breakpoints.down("lg")]: {
      fontSize: "14px",
      lineHeight: "21px",
      marginBottom: "27.3px",
      paddingRight: "35px",
    },
    [theme.breakpoints.up("lg")]: {
      fontSize: "20px !important",
      lineHeight: "30px !important",
      marginBottom: "16px !important",
      paddingRight: "40px !important",
    },
    // [theme.breakpoints.up("xl")]: {
    //   fontSize: "20px",
    //   lineHeight: "30px",
    //   marginBottom: "16px",
    //   paddingRight: "40px",
    // },
  },
  subParagraph: {
    color: "#141737",
    fontFamily: "Public Sans",
    textAlign: "left",
    fontWeight: "400",
    [theme.breakpoints.down("lg")]: {
      fontSize: "14px",
      lineHeight: "21px",
      marginBottom: "27.3px",
      paddingRight: "35px",
    },
    [theme.breakpoints.up("lg")]: {
      fontSize: "20px !important",
      lineHeight: "30px !important",
      marginBottom: "16px !important",
      paddingRight: "40px !important",
    },
    // [theme.breakpoints.up("xl")]: {
    //   fontSize: "20px",
    //   lineHeight: "30px",
    //   marginBottom: "40px",
    //   paddingRight: "40px",
    // },
  },
  button: {
    fontFamily: "Public Sans",
    textTransform: "capitalize",
    fontWeight: 700,
    fontSize: "20px",
    lineHeight: "28px",
    padding: "24px 48px",
    borderRadius: "100px",
    background: "#D83C3B",
    // "boxShadow": "0px 5px 20px 10px #FFDEE8",
    boxShadow:
      "2.6px 2.9px 2.2px rgba(255,22,91, 0.017),\n  6.3px 6.9px 5.3px rgba(255,22,91, 0.025),\n  11.8px 13px 10px rgba(255,22,91, 0.031),\n  21px 23.2px 17.9px rgba(255,22,91, 0.037),\n  39.3px 43.4px 33.4px rgba(255,22,91, 0.045),\n  94px 104px 80px rgba(255,22,91, 0.06)",
    [theme.breakpoints.down("lg")]: {
      lineHeight: "19px",
      fontSize: "16.40px",
      padding: "16.40px 32.8px",
    },
    [theme.breakpoints.up("lg")]: {
      fontSize: "18.22px",
      lineHeight: "25.5px",
      padding: "22px 44px",
    },
    [theme.breakpoints.up("xl")]: {
      fontSize: "20px",
      lineHeight: "28px",
      padding: "24px 48px",
    },
  },
}));

const HomeAboutV2New = () => {
  const classes = useStyles();

  return (
    <>
      <Container>
        <Card sx={{ marginBottom: "3rem" }}>
          <CardContent>
            <Typography
              sx={{
                fontSize: "2rem",
                fontWeight: "700",
                color: "darkgreen",
                textAlign: "center",
                marginBottom: "2rem",
              }}
            >
              Latest News Here
            </Typography>
            <a href="#">
              <li style={{ fontSize: "1.25rem" }}>News 1</li>
            </a>
            <a href="#">
              <li style={{ fontSize: "1.25rem" }}>News 2</li>
            </a>
            <a href="#">
              <li style={{ fontSize: "1.25rem" }}>News 3</li>
            </a>
            <a href="#">
              <li style={{ fontSize: "1.25rem" }}>News 4</li>
            </a>
          </CardContent>
        </Card>
        
        <Card sx={{ marginBottom: "3rem" }}>
        <CardContent>
          <Typography
            sx={{
              fontSize: "2rem",
              fontWeight: "700",
              color: "darkgreen",
              textAlign: "center",
              marginBottom: "2rem",
            }}
          >
            Latest Results Here
          </Typography>
          <a href="#">
            <li style={{ fontSize: "1.25rem" }}>Result 1</li>
          </a>
          <a href="#">
            <li style={{ fontSize: "1.25rem" }}>Result 2</li>
          </a>
          <a href="#">
            <li style={{ fontSize: "1.25rem" }}>Result 3</li>
          </a>
          <a href="#">
            <li style={{ fontSize: "1.25rem" }}>Result 4</li>
          </a>
        </CardContent>
      </Card>
      </Container>
      <Card sx={{marginBottom:"2rem"}}>
        <CardContent>
          <Container maxWidth="xl">
            <Box sx={{ display: "flex", justifyContent: "space-between" }}>
              <Typography
                sx={{
                  fontSize: "1.75rem",
                  color: "darkgreen",
                  fontWeight: "500",
                }}
              >
                Apply For Admissions
              </Typography>
              <a href="#">
                <Box
                  sx={{
                    display: "flex",
                    flexDirection: "row",
                    alignItems: "center",
                  }}
                >
                  <AccountBalanceIcon
                    sx={{
                      paddingRight: "10px",
                      width: "2rem",
                      height: "2rem",
                      fontWeight: "900",
                    }}
                  />
                  <Typography sx={{ fontWeight: "900" }}>
                    CLick to Apply for adimissions
                  </Typography>
                </Box>
              </a>
            </Box>
          </Container>
        </CardContent>
      </Card>
      <Container>
      <Card sx={{ marginBottom: "3rem" }}>
        <CardContent>
          <Typography
            sx={{
              fontSize: "2rem",
              fontWeight: "700",
              color: "darkgreen",
              textAlign: "center",
              marginBottom: "2rem",
            }}
          >
            <u>DEPARTMENTS LIST</u>
          </Typography>
          <a href="#">
            <li style={{ fontSize: "1.25rem" }}>Department 1</li>
          </a>
          <a href="#">
            <li style={{ fontSize: "1.25rem" }}>Department 2</li>
          </a>
          <a href="#">
            <li style={{ fontSize: "1.25rem" }}>Department 3</li>
          </a>
          <a href="#">
            <li style={{ fontSize: "1.25rem" }}>Department 4</li>
          </a>
        </CardContent>
      </Card>
    </Container>
    </>
  );
};

export default HomeAboutV2New;
