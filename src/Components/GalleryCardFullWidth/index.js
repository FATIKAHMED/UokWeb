import * as React from "react";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Box from "@mui/material/Box";
import Chip from "@mui/material/Chip";
import Stack from "@mui/material/Stack";
import IconButton from "@mui/material/IconButton";
import Avatar from "@mui/material/Avatar";
import marker from "../../Assets/Gallery/marker.png";
import userImg from "../../Assets/Gallery/avatar.svg";
import like from "../../Assets/Gallery/like.png";
import dislike from "../../Assets/Gallery/dislike.png";
import likeFilled from "../../Assets/Gallery/likeFilled.png";
import dislikeFilled from "../../Assets/Gallery/dislikeFilled.png";

import { GrLocation } from "react-icons/gr";
import { AiOutlineLike, AiOutlineDislike } from "react-icons/ai";

import Typography from "@mui/material/Typography";
import { makeStyles, useTheme } from "@mui/styles";
import { useMediaQuery } from "@mui/material";
import useAuth from "../../Hooks/useAuth";

const useStyles = makeStyles((theme) => ({
  card: {
    display: "flex",
    width: "100%",
    borderRadius: "10px",
    // "boxShadow": "0px 0.5px 1.5px rgba(0, 0, 0, 0.06),\n  0px 4px 12px rgba(0, 0, 0, 0.12)",
    WebkitBoxShadow: "0 3px 6px rgb(0 0 0 / 16%)",
    boxShadow: "0 3px 6px rgb(0 0 0 / 16%)",
    MozBoxShadow: "0 3px 6px rgb(0 0 0 / 16%)",

    "& .wrapper": {
      width: "100%",
      display: "flex",
      flexDirection: "column",
      justifyContent: "space-between",
      padding: "2rem",
      paddingLeft: "3.6rem",
      paddingTop: "2.75rem",
      paddingRight: "25px",
      paddingBottom: "1.7rem",
      // paddingBottom: "1.75rem",
      // justifyContent: "space-around",
      [theme.breakpoints.down("980")]: {
        paddingLeft: "2.6rem",
      },
    },
  },
  content: {
    padding: 0,
    "& .header": {
      display: "flex",
      alignItems: "center",
      justifyContent: "space-between",
      // marginRight: ".5rem",

      "& .heading": {
        margin: "0",
        fontFamily: theme.typography.Poppins,
        fontWeight: 600,
        fontSize: "2.1rem",
        display: "-webkit-box",
        overflow: "hidden",
        textOverflow: "ellipsis",
        whiteSpace: "pre-wrap",
        WebkitBoxOrient: "vertical",
        WebkitLineClamp: "1",
        maxWidth: "430px",
        [theme.breakpoints.down("980")]: {
          maxWidth: "330px",
          fontSize: "1.8rem",
        },

        // marginBottom: "-.5rem",
      },
      // "& span": {
      //     fontFamily: theme.typography.PublicSans,
      //     fontSize: "1rem ",
      //     fontWeight: "500",
      //     color: "#5855A8"
      // },
      "& img": {
        maxWidth: "100%",
        height: "24px",
        width: "24px",
        marginRight: "4px",
      },
    },
    "& .locationBox": {
      display: "flex",
      alignItems: "center",
      gap: ".25rem",
      "& span": {
        fontFamily: theme.typography.Poppins,
        fontSize: "1rem ",
        // fontWeight: "500",
        fontWeight: "400",
        color: "#0F0B82",
        display: "-webkit-box",
        overflow: "hidden",
        textOverflow: "ellipsis",
        whiteSpace: "pre-wrap",
        WebkitBoxOrient: "vertical",
        WebkitLineClamp: "1",
        maxWidth: "150px",
        [theme.breakpoints.down("980")]: {
          maxWidth: "100px",
        },
      },
    },
  },
  action: {
    // padding: "8px 16px",
    padding: 0,
    "& .actionWrapper": {
      display: "flex",
      width: "100%",
      alignItems: "center",
      justifyContent: "space-between",
      "& .iconChipBox": {
        display: "flex",
        alignItems: "center",
        gap: "3rem",
        "& .iconBox": {
          display: "flex",
          alignItems: "center",
          gap: ".25rem",
        },
        "& .stack": {
          "& .chip": {
            height: "22px",
            minWidth: "86px",
            maxWidth: "110px",
            color: "#fff",
            background: "#FC0954",
            fontSize: "12px",
            fontWeight: "500",
            fontFamily: theme.typography.Poppins,
            padding: "0 12px",
            marginRight: "2px",
          },
          "& .shortTag": {
            // padding: 0,
            maxWidth:86,
          },
          "& .moreTags": {
            background: "#fc0954",
          
            // "color": "white",
            // "width": "21px",
            // "height": "21px",
            // "display": "flex",
            // "padding": "0.25rem",
            // "fontSize": ".8rem",
            // "background": "#ff0753",
            // "marginTop": "-4px",
            // "alignItems": "center",
            // "borderRadius": "50%",
            // "justifyContent": "center",
            "color": "white",
            "maxWidth": "40px",
            "display": "flex",
            "fontSize": ".8rem",
            "background": "#ff0753",
            "alignItems": "center",
            "borderRadius": "24px",
            "justifyContent": "center",
            "height": "22px",
            "padding": "0 12px"
          },
        },
      },
      "& .avatarBox": {
        display: "inline-flex",
        justifyContent: "flex-end",
        alignItems: "center",
        gap: ".85rem",
        // marginBottom: ".6rem",
        // marginRight: ".6rem",

        "& .MuiAvatar-root": {
          width: "34px",
          height: "34px",
        },
        "& .username": {
          fontSize: "12px",
          fontWeight: "bold",
          fontFamily: theme.typography.Poppins,
        },
      },
    },
  },
}));
export default function GalleryCardFullWidth({ item, onLikeDislike,onPostClick }) {
  const classes = useStyles();
  const theme = useTheme();
  const mobile = useMediaQuery(theme.breakpoints.down("md"));
  const placeholderImg = "https://via.placeholder.com/150";
  const { user } = useAuth();

  return (
    <Card className={classes.card} elevation={0}>
      <CardMedia
        component="img"
        alt="green iguana"
        height="auto"
        sx={{ height: "250px", maxWidth: 300, borderRadius: "10px",cursor:"pointer" }}
        image={
          item?.media.length > 0
            ? item?.media[0]?.mimetype.includes("video")
              ? placeholderImg
              : item?.media[0]?.path
            : placeholderImg
        }
        onClick={() => { onPostClick(item) }}
      />
      <Box className="wrapper">
        <CardContent className={classes.content}>
          <Box className="header">
            <Typography
              gutterBottom
              variant="h5"
              component="div"
              className="heading"
            >
              {item?.find || "Title of the post"}
            </Typography>
            <Box className="locationBox">
              {/* <IconButton variant="outlined" sx={{ paddingLeft: "0" }}>
                                <GrLocation />
                           </IconButton> */}
              <img src={marker} alt="location" height={"100%"} width="100%" />
              {/* <span>{item?.location || "North America"}</span> */}
              <span>
                {" "}
                {item?.location?.address?.length > 0
                  ? item?.location?.address
                  : "North America"}
              </span>
            </Box>
          </Box>
        </CardContent>
        <CardActions className={classes.action}>
          <Box className="actionWrapper">
            <Box className="iconChipBox">
              <Box className="iconBox">
                <span
                  style={{
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "space-between",
                  }}
                >
                  {/* <IconButton variant="outlined" disableRipple disableFocusRipple>
                                        <AiOutlineLike size={"1.2rem"} color="#343434" />
                                    </IconButton> */}
                  <IconButton
                    variant="outlined"
                    onClick={() => onLikeDislike(item?._id, "like")}
                    sx={{
                      paddingLeft: "0",
                      paddingTop: 0,
                      paddingBottom: 0,
                    }}
                  >
                    {item?.likes.includes(user?._id) ? (
                      <img src={likeFilled} width="100%" alt="like" />
                    ) : (
                      <img src={like} width="100%" alt="like" />
                    )}
                  </IconButton>
                  <span
                    style={{
                      fontFamily: theme.typography.Poppins,
                      // color: "#0F0B82",
                      color: "#120B83",
                      fontSize: "14px",
                      paddingTop: "2px",
                    }}
                  >
                    {item?.likes.length}
                  </span>
                </span>
                <span>
                  {/* <IconButton variant="outlined" disableRipple disableFocusRipple>
                                        <AiOutlineDislike size={"1.2rem"} color="#343434" />
                                    </IconButton> */}
                  <IconButton
                    variant="outlined"
                    onClick={() => onLikeDislike(item?._id, "dislike")}
                    sx={{
                      paddingLeft: "6px",
                      paddingTop: 0,
                      paddingBottom: 0,
                    }}
                  >
                    {item?.disLikes.includes(user?._id) ? (
                      <img src={dislikeFilled} width="100%" alt="like" />
                    ) : (
                      <img src={dislike} width="100%" alt="dislike" />
                    )}
                  </IconButton>
                  <span
                    style={{
                      fontFamily: theme.typography.Poppins,
                      // color: "#0F0B82",
                      color: "#120B83",
                      fontSize: "14px",
                      // paddingTop: "2px"
                    }}
                  >
                    {item?.disLikes.length}
                  </span>
                </span>
              </Box>
              <Stack className="stack" direction="row" spacing={1}>
                {/* {
                                item?.tags.length > 0 && item?.tags?.slice(0, 3).map(tag => {
                                    return <Chip label={tag} size="small" color="primary" className={`chip ${tag.length <= 9 ? "shortTag" : ""}`} />

                                })
                                
                                } */}
                {/* <Chip label={"short tag"} size="small" color="primary" className={`chip shortTag`} /> */}
                {/* <Chip label={"longer tag"} size="small" color="primary" className={`chip `} /> */}
                {item?.tags.length > 0 &&
                  item?.tags?.slice(0, 3).map((tag, index) => {
                    return (
                      <Chip
                        label={tag}
                        key={index}
                        size="small"
                        className={`chip ${tag.length < 7 ? "shortTag" : ""}`}
                      />
                    );
                  })}
                {item?.tags.length > 3 && (
                  <span className="moreTags">{item?.tags.length-3}+</span>
                )}
              </Stack>
            </Box>
            <Box className="avatarBox">
              <Avatar sizes="small" src={userImg} />
              <span className="username">
                {item?.createdBy?.name || "Username"}
              </span>
            </Box>
          </Box>
        </CardActions>
      </Box>
    </Card>
  );
}
