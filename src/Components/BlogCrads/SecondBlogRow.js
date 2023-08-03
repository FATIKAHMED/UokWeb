import { Grid, Typography } from "@mui/material";
import EastIcon from "@mui/icons-material/East";
import { Box, Stack } from "@mui/system";
import React from "react";

import img1 from "../../Assets/Blogs/blog2.png";
import img2 from "../../Assets/Blogs/blog3.png";
import img3 from "../../Assets/Blogs/blog4.png";
import icon from "../../Assets/Blogs/eastArrow.png";
import { makeStyles } from "@mui/styles";

const useStyles = makeStyles((theme) => ({
  container: {
    display: "flex",
    [theme.breakpoints.down("lg")]: {
      gap: "16.4px",
    },
    [theme.breakpoints.up("lg")]: {
      gap: "22px",
    },
    [theme.breakpoints.up("lg")]: {
      gap: "24px",
    },
  },
  imgwrapper: {
    display: "flex",
    flexDirection: "row",
    [theme.breakpoints.down("lg")]: {
      gap: "16.4px",
      marginBottom: "16.4px",
    },
    [theme.breakpoints.up("lg")]: {
      gap: "22px",
      marginBottom: "22px",
    },
    [theme.breakpoints.up("lg")]: {
      gap: "24px",
      marginBottom: "24px",
    },
  },
  img1: {
    [theme.breakpoints.down("lg")]: {
      width: "131px",
      height: "103px",
    },
    [theme.breakpoints.up("lg")]: {
      width: "190px",
      height: "138px",
    },
    [theme.breakpoints.up("xl")]: {
      width: "208px",
      height: "152px",
    },
  },
  img2: {
    [theme.breakpoints.down("lg")]: {
      width: "131px",
      height: "103px",
    },
    [theme.breakpoints.up("lg")]: {
      width: "190px",
      height: "138px",
    },
    [theme.breakpoints.up("xl")]: {
      width: "208px",
      height: "152px",
    },
  },
  boxCard: {
    border: "1px solid #1417371F",
    borderRadius: "6%",
    [theme.breakpoints.down("lg")]: {
      padding: "13.6px",
      width: "290px",
    },
    [theme.breakpoints.up("lg")]: {
      padding: "18px",
      width: "401px",
    },
    [theme.breakpoints.up("xl")]: {
      padding: "20px",
      width: "440px",
    },
  },
  boxCard2: {
    border: "1px solid #1417371F",
    backgroundColor: "#3A88B9",
    borderRadius: "5%",
    [theme.breakpoints.down("lg")]: {
      padding: "24px 13.6px 30px 13.6px",
      width: "290px",
    },
    [theme.breakpoints.up("lg")]: {
      padding: "32px 18px 44px 18px",
      width: "401px",
    },
    [theme.breakpoints.up("xl")]: {
      padding: "35px 20px 47px 20px",
      width: "440px",
    },
  },
  boxCard3: {
    border: "1px solid #1417371F",
    borderRadius: "24px",
    // [theme.breakpoints.down("lg")]: {
    //   padding: "13.6px 13.6px 17px 13.6px",
    //   width: "290px",
    //   marginBottom: "16.4px",
    // },
    // [theme.breakpoints.up("lg")]: {
    //   padding: "18px 18px 23px 18px",
    //   width: "401px",
    //   marginBottom: "22px",
    // },
    [theme.breakpoints.up("xl")]: {
      padding: "20px 20px 21px 20px",
      width: "440px",
      marginBottom: "24px",
    },
  },
  smallCover: {
    width: "87px",
    border: "0.5px solid transparent",
    borderRadius: "100px",
    padding: "6px 8px",
    backgroundColor: "#F3F7FF",
    marginBottom: "20px",
  },
  smallDate: {
    fontSize: "12px",
    fontWeight: "500",
    lineheigh: "18px",
    color: "#141737",
  },
  heading1: {
    fontWeight: "700",
    color: "#141737",
    [theme.breakpoints.down("lg")]: {
      fontSize: "16.4px",
      lineHeight: "21.3px",
      marginBottom: "13.6px",
    },
    [theme.breakpoints.up("lg")]: {
      fontSize: "22px",
      lineHeight: "28.4px",
      marginBottom: "18px",
    },
    [theme.breakpoints.up("xl")]: {
      fontSize: "24px",
      lineheigh: "31.2px",
      marginBottom: "22px",
    },
  },
  heading2: {
    fontWeight: "700",
    color: "#FFFFFF",
    // [theme.breakpoints.down("lg")]: {
    //   fontSize: "25px",
    //   lineHeight: "32px",
    //   marginBottom: "13.6px",
    // },
    // [theme.breakpoints.up("lg")]: {
    //   fontSize: "33px",
    //   lineHeight: "43px",
    //   marginBottom: "18px",
    // },
    [theme.breakpoints.up("xl")]: {
      fontSize: "36px",
      lineheigh: "46.8px",
      marginBottom: "9px",
    },
  },
  para1: {
    fontWeight: "400",
    color: "#141737",
    [theme.breakpoints.down("lg")]: {
      fontSize: "11px",
      lineheigh: "16.4px",
      marginBottom: "17px",
    },
    [theme.breakpoints.up("lg")]: {
      fontSize: "14.5px",
      lineheigh: "22px",
      marginBottom: "23px",
    },
    [theme.breakpoints.up("xl")]: {
      fontSize: "16px",
      lineheigh: "24px",
      marginBottom: "21px",
    },
  },
  para2: {
    fontWeight: "400",
    color: "#FFFFFF",
    // [theme.breakpoints.down("lg")]: {
    //   fontSize: "11px",
    //   lineheigh: "16.4px",
    //   marginBottom: "17px",
    // },
    // [theme.breakpoints.up("lg")]: {
    //   fontSize: "14.5px",
    //   lineheigh: "22px",
    //   marginBottom: "23px",
    // },
    [theme.breakpoints.up("xl")]: {
      fontSize: "16px",
      lineheigh: "24px",
      marginBottom: "16px",
    },
  },
  subpara2: {
    fontWeight: "400",
    color: "#FFFFFF",
    // [theme.breakpoints.down("lg")]: {
    //   fontSize: "11px",
    //   lineheigh: "16.4px",
    //   marginBottom: "17px",
    // },
    // [theme.breakpoints.up("lg")]: {
    //   fontSize: "14.5px",
    //   lineheigh: "22px",
    //   marginBottom: "23px",
    // },
    [theme.breakpoints.up("xl")]: {
      fontSize: "16px",
      lineheigh: "24px",
      marginBottom: "25px",
    },
  },
  LinkBox: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    [theme.breakpoints.down("lg")]: {
      gap: "11px",
    },
    [theme.breakpoints.up("lg")]: {
      gap: "14.5px",
    },
    [theme.breakpoints.up("xl")]: {
      gap: "10px",
    },
  },
  Link: {
    fontWeight: "600",
    color: "#141737",
    [theme.breakpoints.down("lg")]: {
      fontSize: "11px",
      lineHeight: "15.3px",
    },
    [theme.breakpoints.up("lg")]: {
      lineHeight: "20.4px",
      fontSize: "14.5px",
    },
    [theme.breakpoints.up("xl")]: {
      lineHeight: "22.4px",
      fontSize: "16px",
    },
  },
  Link2: {
    fontWeight: "600",
    color: "#FFFFFF",
    [theme.breakpoints.down("lg")]: {
      fontSize: "11px",
      lineHeight: "15.3px",
    },
    [theme.breakpoints.up("lg")]: {
      lineHeight: "20.4px",
      fontSize: "14.5px",
    },
    [theme.breakpoints.up("xl")]: {
      lineHeight: "22.4px",
      fontSize: "16px",
    },
  },
  ReadmoreBox: {
    border: "1px solid #1417371F",
    borderRadius: "100px",
    backgroundColor: "#FFFFFF",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    [theme.breakpoints.down("lg")]: {
      width: "20.5px",
      height: "20.5px",
    },
    [theme.breakpoints.up("lg")]: {
      width: "27.3px",
      height: "27.3px",
    },
    [theme.breakpoints.up("xl")]: {
      width: "30px",
      height: "30px",
    },
  },
  CardContainer: {
    [theme.breakpoints.down("lg")]: {
      width: "295px",
    },
    [theme.breakpoints.up("lg")]: {
      width: "401px",
    },
    [theme.breakpoints.up("xl")]: {
      width: "440px",
    },
  },
  pictureFounding: {
    [theme.breakpoints.down("lg")]: {
      width: "290px",
      height: "201px",
    },
    [theme.breakpoints.up("lg")]: {
      width: "401px",
      height: "268px",
    },
    [theme.breakpoints.up("xl")]: {
      width: "440px",
      height: "294px",
    },
  },
}));

function SecondBlogRow() {
  const classes = useStyles();

  return (
    <>
      <div className={classes.container}>
        <Box classname={classes.CardContainer}>
          <Box className={classes.imgwrapper}>
            <img className={classes.img1} src={img1} />
            <img className={classes.img2} src={img2} />
          </Box>
          <Box className={classes.boxCard}>
            <Box className={classes.smallCover}>
              <Typography className={classes.smallDate}>06 Okt 2022</Typography>
            </Box>
            <Typography className={classes.heading1}>
              About Magnet fishing in USA
            </Typography>
            <Typography className={classes.para1}>
              Magnete fishing usa is the ultimate source for magnet fishing. We
              are the first social network dedicated 100% to the sport. Magnet
              fishing USA lets you interact with other magnet fishers and enjoy
              a heightened digital magnet fishing experience.
            </Typography>
            <Stack className={classes.LinkBox}>
              <a href="#">
                <Typography className={classes.Link}>Read more</Typography>
              </a>
              <div className={classes.ReadmoreBox}>
                <img src={icon} />
              </div>
            </Stack>
          </Box>
        </Box>

        <Box className={classes.CardContainer}>
          <Stack className={classes.boxCard2}>
            <Box className={classes.smallCover}>
              <Typography className={classes.smallDate}>06 Okt 2022</Typography>
            </Box>
            <Typography className={classes.heading2}>
              About Magnet fishing in USA
            </Typography>
            <Typography className={classes.para2}>
              Magnete fishibg usa is the ultimate source for magnet fishing. We
              are the first social network dedicated 100% to the spaort. Magnet
              fishing USA lets you interact with other magnet fishers and enjoy
              a heightened dogotal magnet fishing experience.
              </Typography>
              <Typography className={classes.subpara2}>
              Our tools, content and applications reveal the largest collection
              of premium finds and their exact ...
            </Typography>
            <Stack className={classes.LinkBox}>
              <a href="#">
                <Typography className={classes.Link2}>Read more</Typography>
              </a>
              <div className={classes.ReadmoreBox}>
                <img src={icon} />
              </div>
            </Stack>
          </Stack>
        </Box>

        <Box className={classes.CardContainer}>
          <Box className={classes.boxCard3}>
            <Box className={classes.smallCover}>
              <Typography className={classes.smallDate}>06 Okt 2022</Typography>
            </Box>
            <Typography className={classes.heading1}>
              About Magnet fishing in USA
            </Typography>
            <Stack className={classes.LinkBox}>
              <a href="#">
                <Typography className={classes.Link}>Read More</Typography>
              </a>
              <div className={classes.ReadmoreBox}>
                <img src={icon} />
              </div>
            </Stack>
          </Box>

          <Stack>
            <img className={classes.pictureFounding} src={img3} />
          </Stack>
        </Box>
      </div>
    </>
  );
}

export default SecondBlogRow;
