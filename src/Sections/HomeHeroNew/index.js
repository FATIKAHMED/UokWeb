import React from "react";
import { makeStyles, styled } from "@mui/styles";
import {
  Button,
  Container,
  Grid,
  Box,
  IconButton,
  Typography,
} from "@mui/material";
import { HiOutlineArrowNarrowRight } from "react-icons/hi";
import { RiFacebookFill, RiMessengerFill } from "react-icons/ri";

import hero from "../../Assets/uokweb/heroimage.jpg";
import mark from "../../Assets/Home/lightining.png";
import { Stack } from "@mui/system";

const useStyles = makeStyles((theme) => ({
  heroBg: {
    width: "100%",
    height: "670px",
    marginBottom: "58px",
    position: "absolute",
    right: "0",
    backgroundSize: "contain",
    backgroundPosition: "100% 50%",
    [theme.breakpoints.down("lg")]: {
      height: "500px",
      marginBottom: "30px",
    },
    [theme.breakpoints.up("lg")]: {
      height: "610.6px",
      marginBottom: "53px",
    },
    [theme.breakpoints.up("xl")]: {
      height: "670px",
      marginBottom: "58px",
    },
  },
  container: {
    backgroundColor: "#FFFFFF",
    height: "670px",
    [theme.breakpoints.down("1445")]: {
      height: "624px",
    },
    [theme.breakpoints.down("lg")]: {
      marginBottom: "100px",
    },
    [theme.breakpoints.up("lg")]: {
      marginBottom: "164px",
    },
    [theme.breakpoints.up("xl")]: {
      marginBottom: "180px",
    },
  },
  description: {
    position: "relative",
    top: "49.5%",
    left: "50%",
    maxWidth: "1100px",
    transform: "translate(-62.15%, -62.5%)",

    // margin: "0 auto",
    [theme.breakpoints.down("lg")]: {
      maxWidth: "700px",
      transform: "translate(-69.5%, -70%)",
    },
    // [theme.breakpoints.up("lg")]: {

    // },
    // [theme.breakpoints.up("xl")]: {
    //   transform: "translate(-62%, -64%)",
    // },
    "& .descriptionBox": {
      display: "flex",
      flexDirection: "column",
      justifyContent: "center",
      alignItems: "flex-start",
      [theme.breakpoints.down("1100")]: {
        alignItems: "left",
      },
      [theme.breakpoints.down("sm")]: {
        alignItems: "center",
      },
      "& .para": {
        fontFamily: "Public Sans",
        color: "#141737",
        zIndex: "1",
        margin: "0",
        padding: "0",
        marginBottom: "40px",
        lineHeight: "33.6px",
        fontSize: "24px",
        // textTransform: "capitalize",
        fontWeight: 400,
        width: "45%",
        [theme.breakpoints.down("lg")]: {
          marginBottom: "33px",
          fontSize: "16.40px",
          width: "45%",
        },
        [theme.breakpoints.up("lg")]: {
          marginBottom: "44px",
          fontSize: "22px",
          width: "45%",
        },
        [theme.breakpoints.up("xl")]: {
          marginBottom: "48px",
          fontSize: "24px",
          width: "45%",
        },
      },
      "& .btnCont": {
        display: "flex",
        gap: "1.1rem",
        height: "55px",
        [theme.breakpoints.down("1100")]: {
          justifyContent: "left",
        },
        [theme.breakpoints.down("660")]: {
          fontSize: "1.2rem",
          flexDirection: "column",
          gap: "1rem",
          alignItems: "center",
          justifyContent: "center",
        },
        "& .cta": {
          fontFamily: "Public Sans",
          textTransform: "capitalize",
          fontWeight: 700,
          fontSize: "20px",
          lineHeight: "28px",
          padding: "38px 45px",
          borderRadius: "2.25rem",
          background: "#D83C3B",
          // "boxShadow": "0px 5px 20px 10px #FFDEE8",
          boxShadow:
            "2.6px 2.9px 2.2px rgba(255,22,91, 0.017),\n  6.3px 6.9px 5.3px rgba(255,22,91, 0.025),\n  11.8px 13px 10px rgba(255,22,91, 0.031),\n  21px 23.2px 17.9px rgba(255,22,91, 0.037),\n  39.3px 43.4px 33.4px rgba(255,22,91, 0.045),\n  94px 104px 80px rgba(255,22,91, 0.06)",
          [theme.breakpoints.down("lg")]: {
            lineHeight: "19px",
            fontSize: "16.40px",
            padding: "16.40px 32.8px",
          },
          // [theme.breakpoints.up("lg")]: {
          //   fontSize: "18.22px",
          //   lineHeight: "25.5px",
          //   padding: "22px 44px",
          // },
          // [theme.breakpoints.up("xl")]: {
          //   fontSize: "20px",
          //   lineHeight: "28px",
          //   padding: "24px 48px",
          // },
        },
        "& .btnSecondary": {
          fontFamily: "Public Sans",
          textTransform: "capitalize",
          fontWeight: 700,
          fontSize: "20px",
          lineHeight: "28px",
          padding: "38px 47px",
          borderRadius: "2.25rem",
          width: "21.063rem",
          background: "#3A88B9",
          boxShadow:
            "2.6px 2.9px 2.2px rgba(255,22,91, 0.017),\n  6.3px 6.9px 5.3px rgba(255,22,91, 0.025),\n  11.8px 13px 10px rgba(255,22,91, 0.031),\n  21px 23.2px 17.9px rgba(255,22,91, 0.037),\n  39.3px 43.4px 33.4px rgba(255,22,91, 0.045),\n  94px 104px 80px rgba(255,22,91, 0.06)",
          [theme.breakpoints.down("lg")]: {
            lineHeight: "19px",
            fontSize: "16.40px",
            padding: "16.40px 25px",
            width: "17rem",
          },
        },
      },
      "& .mark": {
        width: "110.34px",
        height: "80px",
        position: "relative",
        top: "1.7rem",
        left: "28.5rem",
        height: "80.83px",
        [theme.breakpoints.down("lg")]: {
          width: "70px",
          height: "65px",
          top: "2.5rem",
          left: "18.5rem",
        },
        // [theme.breakpoints.up("lg")]: {
        //   width: "70px",
        //   height: "73px",
        //   top: "1rem",
        //   left: "28.5rem",
        // },
        // [theme.breakpoints.up("xl")]: {
        //   width: "77px",
        //   height: "80px",
        //   top: "1rem",
        //   left: "30rem",
        // },
      },
    },
  },
  title: {
    fontFamily: theme.typography.MazzardH,
    color: "#141737",
    fontWeight: 800,
    zIndex: "1",
    maxWidth: "1100px",
    fontSize: "7.75rem !important",
    lineHeight: "8.913rem !important",
    marginTop: "0",
    marginBottom: "26px",
    [theme.breakpoints.down("1450")]: {
      fontSize: "7rem !important",
      lineHeight: "8.5rem !important",
      marginBottom: "16.4px",
    },
    [theme.breakpoints.down("1100")]: {
      fontSize: "5rem !important",
      lineHeight: "6.5rem !important",
      marginBottom: "16.4px",
    },
    [theme.breakpoints.up("xl")]: {
      fontSize: "7.75rem !important",
      lineHeight: "8.913rem !important",
    },
  },
}));

const HomeHeroNew = () => {
  const classes = useStyles();
  // const [open, setOpen] = React.useState(false);

  // const openModal = () => {
  //     setOpen(true)
  // }
  // const closeModal = () => {
  //     setOpen(false)
  // }
  return (
    <>
      <Container>
        <Box
          sx={{
            paddingTop: "1.25rem",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <img src={hero} alt="hero" height={320} />
        </Box>
        <Box sx={{ paddingTop: "3rem" }}>
          <Typography
            sx={{
              fontSize: "3rem",
              fontWeight: "700",
              textTransform: "uppercase",
              color: "darkgreen",
              textAlign: "center",
              marginBottom: "3rem",
            }}
          >
            <u>Welcome to University of karachi</u>
          </Typography>
          <Typography
          sx={{
            fontSize: "1.25rem",
            fontWeight: "300",
            textAlign: "center",
            marginBottom: "2rem",
          }}
          >
            The University of Karachi, established in 1951 to address the lack
            of higher education and research facilities, has undergone rapid
            modernization and development. With a sprawling 1279-acre campus, it
            is recognized as a premier center for learning and research in the
            subcontinent and Third World, producing acclaimed scientists and
            scholars. The university's impact extends globally, with
            international students pursuing advanced degrees. Its high academic
            and research standards have led to evening classes and affiliations
            with numerous colleges. Offering a range of faculties, departments,
            and research institutes, the university boasts a distinguished
            faculty and staff. It serves as an affiliating and examining body
            for over 145 institutions, conducting exams and awarding degrees to
            a significant number of students.
          </Typography>
        </Box>
      </Container>
    </>
  );
};

export default HomeHeroNew;
