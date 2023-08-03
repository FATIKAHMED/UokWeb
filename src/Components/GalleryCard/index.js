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
import pin from "../../Assets/Gallery/pin.png";
import userImg from "../../Assets/Gallery/avatar.svg"
import marker from "../../Assets/Gallery/marker.png"
import like from "../../Assets/Gallery/like.png"
import dislike from "../../Assets/Gallery/dislike.png"
import likeFilled from "../../Assets/Gallery/likeFilled.png"
import dislikeFilled from "../../Assets/Gallery/dislikeFilled.png"


import { GrLocation } from "react-icons/gr";
import { AiOutlineLike, AiOutlineDislike, AiOutlineShareAlt } from "react-icons/ai";
import { FiShare2 } from "react-icons/fi";

import Typography from "@mui/material/Typography";
import { makeStyles, useTheme } from "@mui/styles";
import isEmpty from "../../Utils/isEmpty";
import useAuth from "../../Hooks/useAuth";
import { useMediaQuery } from "@mui/material";

const useStyles = makeStyles((theme) => ({
    card: {
        maxWidth: 354,
        minWidth: 280,
        flex: "1",
        borderRadius: "10px",
        // "boxShadow": "0px 0.5px 1.5px rgba(0, 0, 0, 0.06),\n  0px 4px 12px rgba(0, 0, 0, 0.12)"
        "WebkitBoxShadow": "0 3px 6px rgb(0 0 0 / 16%)",
        "boxShadow": "0 3px 6px rgb(0 0 0 / 16%)",
        "MozBoxShadow": "0 3px 6px rgb(0 0 0 / 16%)",
        "& img": {
            cursor: "pointer",
        },


    },
    content: {
        paddingBottom: "0",
        paddingTop: "12px",
        "& .box": {
            display: "flex",
            alignItems: "center",
            marginRight: ".5rem",
            justifyContent: "flex-start !important",
            //// marginBottom: "2rem",
            //// "marginBottom": "1.8rem",
            // "marginBottom": "31px",
            "marginBottom": "25px",
            "& span": {
                fontFamily: theme.typography.Poppins,
                fontSize: "1rem ",
                // fontWeight: "500",
                fontWeight: "400",
                color: "#0F0B82",
                "display": "-webkit-box",
                "overflow": "hidden",
                "textOverflow": "ellipsis",
                "whiteSpace": "pre-wrap",
                "WebkitBoxOrient": "vertical",
                "WebkitLineClamp": "1",
                "maxWidth": "300px"
            },
            "& img": {
                maxWidth: "100%",
                height: "24px",
                width: "24px",
                marginRight: '4px'
            },
        },
        "& .stack": {
            // marginBottom: "1rem",
            "marginBottom": "15px",
            "& .chip": {
                height: "22px",
                minWidth: "86px",
                // maxWidth: "100px",
                maxWidth: "110px",
                color: "#fff",
                background: "#FC0954",
                fontSize: "12px",
                fontWeight: "500",
                fontFamily: theme.typography.Poppins,
                padding: "0 12px",
                marginRight: "2px",
            },
            "& .moreTags": {
                "background": theme.palette.primary.main,
                // "color": "white",
                // "width": "24px",
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
            "& .shortTag": {
                // "padding": 0
                maxWidth: 86
            },
        },
        "& .heading": {
            fontFamily: theme.typography.Poppins,
            fontWeight: "600",
            "fontSize": "21px",
            "marginBottom": "0",
            "display": "-webkit-box",
            "overflow": "hidden",
            "textOverflow": "ellipsis",
            "whiteSpace": "pre-wrap",
            "WebkitBoxOrient": "vertical",
            "WebkitLineClamp": "1",
            "maxWidth": "330px",
            [theme.breakpoints.down("md")]: {
                "marginBottom": "64px",
            },
            // fontSize: "1.5rem",
            // marginBottom: "-.5rem"
        },
    },
    actions: {
        // padding: "8px 16px 12px 16px",
        padding: "14px 16px 10px 16px",
        [theme.breakpoints.down("md")]: {
            paddingTop: 0,
            paddingBottom: "12px"
        },
        "& .actionBox": {
            width: "100%",
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            [theme.breakpoints.down("md")]: {
                alignItems: "flex-end",
            },
            "& .avatarBox": {
                display: "inline-flex",
                justifyContent: "flex-end",
                alignItems: "center",
                gap: ".85rem",
                // marginRight: "8px",
                // marginBottom: ".6rem",
                // marginRight: ".6rem",

                "& .MuiAvatar-root": {
                    width: "34px",
                    height: "34px",
                },
                "& .username": {
                    fontSize: '12px',
                    color: "black",
                    fontWeight: "bold",
                    fontFamily: theme.typography.Poppins

                }

            },
            "& .iconBox": {
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
                gap: ".25rem",
                // gap: ".3rem",
                // alignItems: "flex-end",
                "& .MuiButtonBase-root": {
                    padding: 0
                },
            },

        },
    }
}))

const tags = ["short tag", "longer tag"]
export default function GalleryCard({ item, onLikeDislike, onSocialShare, onPostClick }) {
    const classes = useStyles();
    const theme = useTheme();
    const { user } = useAuth()
    const placeholderImg = "https://via.placeholder.com/150"
    const tablet = useMediaQuery(theme.breakpoints.down("md"));

    return (
        <Card className={classes.card} elevation={0}>
            <CardMedia
                component="img"
                alt="green iguana"
                // height="180"
                height="194"
                // image={item?.media.length > 0 ? item?.media[0]?.path : "https://via.placeholder.com/150"}
                image={item?.media.length > 0 ? item?.media[0]?.mimetype.includes("video") ? placeholderImg : item?.media[0]?.path : placeholderImg}
                // image={img}
                onClick={() => { onPostClick(item) }}
            />
            <CardContent className={classes.content}>
                <Box className={"box"}>

                    <img src={marker} alt="marker" height={"auto"} width="100%" />
                    {/* <span> {typeof item?.location === "string" && item?.location.length > 0 ? item?.location : "North America"}</span> */}
                    <span> {item?.location?.address?.length > 0 ? item?.location?.address : "North America"}</span>
                </Box>

                <Stack direction="row" justifyContent={"space-between"} alignItems="center" spacing={1} className={"stack"}>
                    <Box sx={{ display: "flex", gap: '.25rem' }}>
                        {item?.tags.length > 0 && item?.tags?.slice(0, 2).map((tag, index) => {
                            return <Chip label={tag} key={index} size="small" className={`chip ${tag.length < 7 ? "shortTag" : ""}`} />

                        })
                        }
                        {item?.tags.length > 2 && <span className="moreTags">{item?.tags.length - 2}+</span>}
                    </Box>
                    {/* {tablet ?

                        item?.tags.length > 0 && item?.tags?.slice(0, 2).map((tag, index) => {
                            return <Chip label={tag} key={index} size="small" className={`chip ${tag.length < 7 ? "shortTag" : ""}`} />

                        }) :
                        item?.tags.length > 0 && item?.tags?.slice(0, 3).map((tag, index) => {
                            return <Chip label={tag} key={index} size="small" className={`chip ${tag.length < 7 ? "shortTag" : ""}`} />

                        })

                    } */}
                    {/* {tablet ? item?.tags.length > 2 && <span className="moreTags">{item?.tags.length - 2}+</span> :
                        item?.tags.length > 3 && <span className="moreTags">{item?.tags.length - 3}+</span>
                    } */}

                    {/* {item?.tags.length <= 0 && tags?.slice(0, 3).map((tag, index) => {
                        return <Chip label={tag} key={index} size="small" className={`chip ${tag.length <= 9 ? "shortTag" : ""}`} />
                    })
                    } */}
                    {/* <Chip label="success" size="small" color="primary" className="chip" /> */}
                    <IconButton variant="outlined" onClick={() => onSocialShare(item)}>
                        <FiShare2 />
                    </IconButton>
                </Stack>

                <Typography gutterBottom variant="h5" component="div" className={"heading"}>
                    {item?.find || "Title of the post"}
                    {/* Title of the post */}
                </Typography>
            </CardContent>
            <CardActions className={classes.actions}>
                <Box className="actionBox">
                    <Box sx={{ display: "flex", gap: ".9rem" }}>
                        <span className="iconBox">
                            <IconButton variant="outlined" onClick={() => onLikeDislike(item._id, "like")}>
                                {item.likes.includes(user?._id) ?
                                    <img src={likeFilled} width="100%" alt="like" /> :
                                    <img src={like} width="100%" alt="like" />
                                }
                            </IconButton>
                            <span style={{
                                // color: "#0F0B82",
                                fontFamily: theme.typography.Poppins,
                                color: "#120B83",
                                fontSize: "12px",
                                paddingTop: "2px"
                            }}>{item?.likes.length}</span>
                        </span>
                        <span className="iconBox">
                            <IconButton variant="outlined" onClick={() => onLikeDislike(item._id, "dislike")}>
                                {item.disLikes.includes(user?._id) ?
                                    <img src={dislikeFilled} width="100%" alt="like" />
                                    :
                                    <img src={dislike} width="100%" alt="dislike" />
                                }
                            </IconButton>
                            <span style={{
                                // color: "#0F0B82",
                                fontFamily: theme.typography.Poppins,
                                color: "#120B83",
                                fontSize: "12px",
                                paddingTop: "2px"
                            }}>{item?.disLikes.length}</span>
                        </span>
                    </Box>

                    <Box className="avatarBox">
                        <Avatar sizes="small" className="avatar" src={userImg} />
                        <span className="username">{item?.createdBy?.name || "Username"}</span>
                    </Box>
                </Box>
            </CardActions>
        </Card>
    );
}
