import { Button, Stack, Typography } from "@mui/material";
import { Box } from "@mui/system";
import EastIcon from "@mui/icons-material/East";
import React from "react";
import img from "../../Assets/Blogs/blog1.png";
import icon from "../../Assets/Blogs/eastArrow.png";
import { makeStyles } from "@mui/styles";

const useStyles = makeStyles((theme) => ({
  positions: {
    position: "absolute",
    [theme.breakpoints.down("lg")]: {
      bottom: "27.34px",
    },
    [theme.breakpoints.up("lg")]: {
      bottom: "36px",
    },
    [theme.breakpoints.up("xl")]: {
      bottom: "43px",
    },
  },
  blogImageHeadingContainer: {
    display: "flex",
    alignItems: "center",
    [theme.breakpoints.down("lg")]: {
      marginLeft: "33px",
      gap: "75px",
    },
    [theme.breakpoints.up("lg")]: {
      marginLeft: "44px",
      gap: "99px",
    },
    [theme.breakpoints.up("xl")]: {
      marginLeft: "40px",
      gap: "194px",
    },
  },
  heading: {
    fontWeight: "700",
    color: "#FFFFFF",
    [theme.breakpoints.down("lg")]: {
      lineHeight: "32px",
      fontSize: "25px",
    },
    [theme.breakpoints.up("lg")]: {
      lineHeight: "43px",
      fontSize: "33px",
    },
    [theme.breakpoints.up("xl")]: {
      lineHeight: "47px",
      fontSize: "36px",
    },
  },
  Link: {
    fontWeight: "600",
    color: "#FFFFFF",
    [theme.breakpoints.down("lg")]: {
      fontSize: "11px",
      lineHeight: "15.3px",
    },
    [theme.breakpoints.up("lg")]: {
      fontSize: "14.5px",
      lineHeight: "20.41px",
    },
    [theme.breakpoints.up("xl")]: {
      fontSize: "16px",
      lineHeight: "22.4px",
    },
  },
  bgsection: {
    position: "relative",
    background: `url(${img}) no-repeat`,
    backgroundSize: "contain",
    height: "545px",
    width: "619px",
    [theme.breakpoints.down("lg")]: {
      height: "373px",
      width: "680px",
    },
    [theme.breakpoints.up("lg")]: {
      height: "497px",
      width: "826px",
    },
    [theme.breakpoints.up("xl")]: {
      height: "545px",
      width: "906px",
    },
  },
  smallCover: {
    border: "0.5px solid transparent",
    borderRadius: "100px",
    backgroundColor: "#FFFFFF",
    [theme.breakpoints.down("lg")]: {
      padding: "4px 5px",
      marginLeft: "33px",
      marginBottom: "11px",
      width: "59px",
    },
    [theme.breakpoints.up("lg")]: {
      padding: "6px 7px",
      marginLeft: "44px",
      marginBottom: "14.5px",
      width: "79px",
    },
    [theme.breakpoints.up("xl")]: {
      padding: "6px 8px",
      marginLeft: "40px",
      marginBottom: "16px",
      width: "87px",
    },
  },
  smallDate: {
    fontSize: "12px",
    lineheigh: "18px",
    color: "#141737",
    width:"5.438rem",
    paddingRight:"0.5rem",
    [theme.breakpoints.down("lg")]: {
      fontSize: "8.2px",
      lineheigh: "12.3px",
    },
    [theme.breakpoints.up("lg")]: {
      fontSize: "11px",
    lineheigh: "16.4px",
    },
    [theme.breakpoints.up("xl")]: {
      fontSize: "12px",
      lineheigh: "18px",
    },
  },
  linkContainer: {
    border: "1px solid transparent",
    borderRadius: "100px",
    backgroundColor: "#FFFFFF",
    width: "30px",
    height: "30px",
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
  linkFix: {
    display: "flex",
    alignItems: "center",
    [theme.breakpoints.down("lg")]: {
      gap: "8.2px",
    },
    [theme.breakpoints.up("lg")]: {
      gap: "11px",
    },
    [theme.breakpoints.up("xl")]: {
      gap: "12px",
    },
  },
}));

function FirstBlogCard() {
  const classes = useStyles();
  return (
    <>
      <Box className={classes.bgsection}>
        <div className={classes.positions}>
          <Box className={classes.smallCover}>
            <Typography className={classes.smallDate}>06 Okt 2022</Typography>
          </Box>
          <Box className={classes.blogImageHeadingContainer}>
            <Typography className={classes.heading}>
              About Magnet fishing in USA
            </Typography>
            <Box className={classes.linkFix}>
              <a href="#">
                <Typography className={classes.Link}>Read more</Typography>
              </a>
              <div className={classes.linkContainer}>
                <img src={icon} />
              </div>
            </Box>
          </Box>
        </div>
      </Box>
    </>
  );
}

export default FirstBlogCard;
