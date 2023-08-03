// * Libraries
import React, { useEffect, useState, useRef } from 'react';
import ReactPlayer from 'react-player/lazy'
import PropTypes from 'prop-types';

// * Components
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogTitle from '@mui/material/DialogTitle';
import { IoCloseCircleOutline } from "react-icons/io5";
import Box from '@mui/material/Box';
import { makeStyles, useTheme } from '@mui/styles';
import avatar from "../../Assets/Gallery/avatar2.png";

// import Image from 'src/components/Image';

// * Icons
// import Iconify from 'src/components/Iconify';
// import PlaylistSliderPreview from './PlaylistSliderPreview';
// import PlaylistCarousel from './PlaylistCarousel';
import { Avatar, Chip, Container, Divider, Grid, IconButton, Typography } from '@mui/material';
import userImg from "../../Assets/Gallery/avatar.svg"
import marker from "../../Assets/Gallery/marker.png"
import like from "../../Assets/Gallery/like.png"
import dislike from "../../Assets/Gallery/dislike.png"
import likeFilled from "../../Assets/Gallery/likeFilled.png"
import dislikeFilled from "../../Assets/Gallery/dislikeFilled.png"
import { FiShare2 } from 'react-icons/fi';
import isEmpty from '../../Utils/isEmpty';
import useAuth from '../../Hooks/useAuth';
import SocialShareModal from '../SocialShareModal';
import Carousel from '../Carousel';

const placeholderImg = "https://via.placeholder.com/400"

const useStyles = makeStyles((theme) => ({



    dialogContent: {
        "& .MuiTypography-root": {
            fontFamily: `${theme.typography.Poppins} !important`,
        },
        padding: 0, overflow: "hidden",
        "& .dialogContainer": {
            padding: '0 !important', display: "flex", gap: '1rem', width: "100%",
            [theme.breakpoints.down("md")]: {
                flexDirection: "column",
                gap: 0
            },
            "& .imgBox": {
                height: "100%", flex: 1, maxHeight: "30rem",
                [theme.breakpoints.down("md")]: {
                    // height: "100%", flex: 1, maxHeight: "30rem",
                },
                "& .dialogImage": {
                    maxWidth: "100%", maxHeight: "500px", minHeight: "500px",
                    [theme.breakpoints.down("md")]: {
                        maxHeight: "300px", minHeight: "300px"
                    },
                },
            },
            // display: "flex",
            // justifyContent: "flex-start",
            // margin: "0 1rem",
            "& .descBox": {
                padding: "0", paddingTop: "1rem",
                flex: 1,
                display: "flex",
                flexDirection: "column",
                [theme.breakpoints.down("md")]: {
                    padding: "1rem",
                },
                "& .profileBox": {
                    display: "flex", gap: ".75rem", alignItems: "center",
                    "& .name": {
                        fontWeight: '600'
                    }
                },
                "& .postDescBox": {
                    display: "flex", gap: ".75rem", flexDirection: "column", flex: 1,
                    "& .title": {
                        fontWeight: "600", fontSize: "2rem",
                        [theme.breakpoints.down("md")]: {
                            fontSize: "1.25rem",
                        },
                    },
                    "& .locationBox": {
                        display: "flex",
                        alignItems: "center",
                        gap: ".5rem",
                        justifyContent: "flex-start !important",
                        "& .location": {
                            fontSize: "1rem",
                            color: "#0F0B82",
                            maxWidth: "23rem",
                            [theme.breakpoints.down("md")]: {
                                fontSize: "14px",
                            },

                        }
                    },
                    "& .tagBox": {
                        display: "flex",
                        gap: ".5rem",
                        flexWrap: "wrap",
                        "& .chip": {
                            height: "22px",
                            // minWidth: "86px",
                            // maxWidth: "100px",
                            color: "#fff",
                            background: "#FC0954",
                            fontSize: "12px",
                            fontWeight: "600",
                            padding: "0 12px",
                            marginRight: "2px",
                        },
                    },
                },
                "& .actionBox": {
                    // flex: .5,
                    display: 'flex',
                    justifyContent: "space-between",
                    alignItems: 'center',
                    paddingBottom: "1rem",
                }

            }

        }
    },
    dialogActions: {

    }
}))

export default function PostDetailsModal({ open, onClose, postDetails, onLikeDislike }) {
    const [openSocialModal, setOpenSocialModal] = React.useState(false);
    const [post, setPost] = React.useState(null);
    const { posts } = useAuth();
    
    const imagesVideos = post?.media.length > 0 ? post?.media.map(image => image.mimetype.includes("video")?{type:"video",src:image.path}:{type:"image",src:image.path}) : [post?.media[0].mimetype.includes("video")?{type:"video",src:post?.media[0].path}:{type:"image",src:post?.media[0].path}]
    // const image = post?.media.length > 0 ? post?.media[0]?.mimetype.includes("video") ? placeholderImg : post?.media[0]?.path : placeholderImg
    // const images = post?.media.length > 0 ? post?.media.map(image => image.path) : [post?.media[0]?.path]
    const classes = useStyles();
    const theme = useTheme();

    // const handleLikeDislike = (id, val) => {
    //     console.log("onLikeDislike", id, val)
    //     if (localStorage.getItem("accessToken")) {
    //       const obj = {
    //         postId: id,
    //         action: val,
    //       };
    //       console.log("handleLikeDislike", obj);
    //       async function LikeDislikeAPI() {
    //         try {
    //           const { response, error } = await setLikeDislike(obj);
    //           console.log("setLikeDislike", response);
    //           if (!isEmpty(response)) {
    //             getPostsGeneral({ filter: [], sort: "top" });
    //           }
    //         } catch (e) {
    //           console.log("setLikeDislike", e);
    //         }
    //       }
    //       LikeDislikeAPI();
    //     } else {
    //       console.log("Open Login Modal");
    //     }
    //   };

    const handleSocialShare = (post) => {
        setOpenSocialModal(true)
        console.log("onOpenSocialModal-->", post)
        // setPost(post)
    }

    useEffect(() => {
        console.log('Inside')
        if (posts) {
            let index = posts.findIndex(post => post._id == postDetails._id)
            if(index != -1) {
                setPost(posts[index])
            }
        }
    }, [posts])

    console.log("imagesVideos",imagesVideos)

    return (
        <div>
            {/* {children} */}
            <Dialog
                fullWidth={true}
                maxWidth='md'
                open={open}
                onClose={onClose}
                scroll='body'
                aria-labelledby="scroll-dialog-title"
                aria-describedby="scroll-dialog-description"

            >
                <DialogContent className={classes.dialogContent}>

                    <Container className={"dialogContainer"} >
                        <Box className='imgBox'>
                            {/* <img src={image} alt="preview" height="100%" width="100%" className='dialogImage' /> */}
                            <Carousel images={imagesVideos} />
                        </Box>
                        <Box className={"descBox"}>
                            <Box className={"profileBox"}>
                                {/* <img src="https://picsum.photos/seed/picsum/36/36" alt='picture' style={{ borderRadius: "50%" }} /> */}
                                <Avatar src={!isEmpty(post) ? post?.createdBy?.name : avatar} sx={{ height: "40px", width: "40px" }} />
                                <span className='name'>{post?.createdBy?.name}</span>
                                <IconButton
                                    aria-label="close"
                                    onClick={onClose}
                                    sx={{
                                        position: "absolute",
                                        right: 8,
                                        top: 8,
                                        color: (theme) => theme.palette.grey[500]
                                    }}
                                >
                                    <IoCloseCircleOutline />
                                </IconButton>
                            </Box>

                            <Divider sx={{ my: 2 }} />
                            <Box className={"postDescBox"}>
                                <Typography variant="h4" component="h6" className="title">{post?.find}</Typography>

                                <Box className={"locationBox"}>
                                    <img src={marker} alt="marker" height={"25px"} width="25px" />
                                    <Typography variant="subtitle2" component="p" className="location">{post?.location?.address}</Typography>
                                </Box>

                                <Box className='tagBox'>
                                    {post?.tags.length > 0 && post?.tags.map(tag => <Chip label={tag} className='chip' />)}
                                </Box>
                            </Box>
                            <Divider sx={{ mt: 2, mb: 1 }} />

                            <Box className={"actionBox"}>
                                <Box sx={{ display: "flex", gap: ".9rem" }}>
                                    <span className="iconBox">
                                        <IconButton variant="outlined" onClick={() => onLikeDislike(post?._id, "like")}>
                                            {post?.likes.includes(post?.createdBy?._id) ?
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
                                        }}>{post?.likes.length}</span>
                                    </span>
                                    <span className="iconBox">
                                        <IconButton variant="outlined" onClick={() => onLikeDislike(post?._id, "dislike")}>
                                            {post?.disLikes.includes(post?.createdBy?._id) ?
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
                                        }}>{post?.disLikes.length}</span>
                                    </span>
                                </Box>
                                <IconButton sx={{ mr: ".75rem" }} variant="outlined" onClick={() => handleSocialShare(post)}>
                                    <FiShare2 />
                                </IconButton>
                            </Box>
                        </Box>

                        
                        {/* </Grid> */}
                        {/* <PlaylistCarousel product={playlists} onVideoSelect={handleClickVideoChange} videoId={currentVideoId} /> */}


                    </Container>
                </DialogContent>

            </Dialog>
            {openSocialModal && <SocialShareModal open={openSocialModal} onClose={() => setOpenSocialModal(false)} post={post} />}
        </div >
    );
}
// postModal.proptypes = {
//     playlists: PropTypes.array,
//     onClose: PropTypes.func,
//     open: PropTypes.string,
//     video: PropTypes.string,
//     id: PropTypes.string,
//     playListName: PropTypes.string,
//     children: PropTypes.node,
// }