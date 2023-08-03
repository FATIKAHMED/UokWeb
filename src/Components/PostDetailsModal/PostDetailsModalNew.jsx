// * lib
import React, { useEffect } from "react";
// @mui
import { styled } from "@mui/material/styles";
import { makeStyles, useTheme } from "@mui/styles";
import {
  Button,
  Dialog,
  DialogContent,
  Avatar,
  Chip,
  Grid,
  Stack,
  IconButton,
  Typography,
  useMediaQuery,
  Box,
} from "@mui/material";

// * Components
import { IoCloseCircleOutline } from "react-icons/io5";
import marker from "../../Assets/Gallery/marker.png";
import isEmpty from "../../Utils/isEmpty";
import useAuth from "../../Hooks/useAuth";
import avatar from "../../Assets/Gallery/avatar2.png";
import like from "../../Assets/Gallery/like.png";
import likeWhite from "../../Assets/Gallery/likeWhite.png";
import dislike from "../../Assets/Gallery/dislike.png";
import dislikeWhite from "../../Assets/Gallery/dislikeWhite.png";
import likeFilled from "../../Assets/Gallery/likeFilled.png";
import likeFilledWhite from "../../Assets/Gallery/likeFilledWhite.png";
import dislikeFilled from "../../Assets/Gallery/dislikeFilled.png";
import dislikeFilledWhite from "../../Assets/Gallery/dislikeFilledWhite.png";

const COLORS = {
  blue: "#0F0B82",
  red: "#FC0954",
  white: "#fff",
};

const ChipStyle = styled(Chip)(({ theme }) => ({
  background: COLORS.red,
  marginRight: "10px",
  broderRadius: "16px",
  color: COLORS.white,
  height: "20px",
  marginBottom: "5px",
  "& span": {
    fontSize: "12px",
    fontFamily: theme.typography.Poppins,
  },
}));

const ButtonStyle = styled(Button)(({ theme }) => ({
  color: COLORS.blue,
  background: COLORS.white,
  borderColor: COLORS.blue,
  fontFamily: theme.typography.Poppins,
  fontWeight: "bold",
  padding: "2px 20px",
  "&:hover": {
    background: COLORS.blue,
    color: COLORS.white,
    borderColor: COLORS.white,
  },
}));
const useStyles = makeStyles((theme) => ({
  paper: {
    overflowY: "unset",
  },
  bgImage: {
    position: "relative",
    height: "100%",
    // maxHeight: "30rem",
    width: "100%",
    objectFit: " cover",
    cursor: "pointer",
    // [theme.breakpoints.down("sm")]: {
    //   maxHeight: "100%",
    // },
  },
  actions: {
    // paddingTop: ".5rem",
    [theme.breakpoints.down("sm")]: {
      justifyContent: "space-between",
      background: "black",
      paddingTop: "4.5rem",
      paddingBottom: "0.5rem",
    },
    "& .textBox": {
      flex: "1",
      textAlign: "right",
      fontSize: ".75rem",
      fontFamily: theme.typography.Poppins,
      color: theme.palette.dark,
      [theme.breakpoints.down("md")]: {
        textAlign: "left",
        paddingLeft: "1rem",
        color: theme.palette.sectionBg,
      },
    },
    "& .actionBox": {
      width: "100%",
      display: "flex",
      alignItems: "center",
      // flex: ".2",
      justifyContent: "flex-end",
      // flex: ".5",
      [theme.breakpoints.down("md")]: {
        alignItems: "flex-end",
      },
      [theme.breakpoints.down("sm")]: {
        paddingRight: "1rem",
        // flex: ".5",
      },
      [theme.breakpoints.down("500")]: {
        paddingRight: ".5rem",
        // flex: ".5",
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
          fontSize: "12px",
          color: "black",
          fontWeight: "bold",
          fontFamily: theme.typography.Poppins,
        },
      },
      "& .iconBox": {
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        gap: ".25rem",
        // gap: ".3rem",
        // alignItems: "flex-end",
        "& .MuiButtonBase-root": {
          padding: 0,
        },
        [theme.breakpoints.down("sm")]: {
          color: theme.palette.sectionBg,
        },
      },
    },
  },
  wrapperVisible: {
    [theme.breakpoints.down("sm")]: {
      position: "absolute",
      bottom: 0,
      background: "white",
      width: "100%",
    },
  },
}));

export default function PostDetailsModalNew({
  open,
  onClose,
  postDetails,
  onLikeDislike,
}) {
  const classes = useStyles();
  const theme = useTheme();
  const { posts, user } = useAuth();
  const [post, setPost] = React.useState(null);
  const [openSocialModal, setOpenSocialModal] = React.useState(false);
  const [showWrapper, setShowWrapper] = React.useState(false);
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));
  const isDesktop = useMediaQuery(theme.breakpoints.up("sm"));

  const imagesVideos =
    post?.media.length > 0
      ? post?.media.map((image) =>
          image.mimetype.includes("video")
            ? { type: "video", src: image.path }
            : { type: "image", src: image.path }
        )
      : [
          post?.media[0].mimetype.includes("video")
            ? { type: "video", src: post?.media[0].path }
            : { type: "image", src: post?.media[0].path },
        ];

  const handleSocialShare = (post) => {
    setOpenSocialModal(true);
  };

  useEffect(() => {
    if (posts) {
      let index = posts.findIndex((post) => post._id === postDetails._id);
      if (index != -1) {
        setPost(posts[index]);
      }
    }
    // if (isMobile) {
    //   setShowWrapper(true);
    // }
  }, [posts]);

  return (
    <Dialog
      fullWidth={true}
      fullScreen={isMobile}
      maxWidth="md"
      open={open}
      onClose={onClose}
      scroll="body"
      aria-labelledby="scroll-dialog-title"
      aria-describedby="scroll-dialog-description"
      classes={{ paper: classes.paper }}
    >
      <DialogContent
        sx={{
          padding: 0,
          position: "relative",
        }}
      >
        {/* ~DESKTOP */}
        {isDesktop && (
          <FollowWrapperDesktopView
            post={post}
            imagesVideos={imagesVideos}
            onLikeDislike={onLikeDislike}
            user={user}
            showWrapper={showWrapper}
            setShowWrapper={setShowWrapper}
          />
        )}

        {/* ~MOBILE */}
        {isMobile && (
          <FollowWrapperMobileView
            post={post}
            imagesVideos={imagesVideos}
            onLikeDislike={onLikeDislike}
            user={user}
            showWrapper={showWrapper}
            setShowWrapper={setShowWrapper}
          />
        )}
      </DialogContent>
      <IconButton
        aria-label="close"
        onClick={onClose}
        sx={{
          position: "absolute",
          right: "-6%",
          top: "-1%",
          color: COLORS.white,
          [theme.breakpoints.down("md")]: {
            right: "0%",
            top: "0%",
          },
        }}
      >
        <IoCloseCircleOutline />
      </IconButton>
    </Dialog>
  );
}

const FollowWrapperDesktopView = ({
  post,
  imagesVideos,
  onLikeDislike,
  user,
  showWrapper,
  setShowWrapper,
}) => {
  const theme = useTheme();
  const classes = useStyles();
  const imgHeight = document.querySelector(".bgImage")?.height;
  const windowHeight = window.innerHeight;
  return (
    <>
      <Box
        sx={{
          // height: "76vh",
          height: "auto",
          overflowY: "hidden",
          [theme.breakpoints.down("sm")]: {
            height: "100%",
          },
        }}
      >
        {/* <Carousel images={imagesVideos} /> */}
        <img
          src={imagesVideos[0].src}
          className={`${classes.bgImage} bgImage`}
          style={{
            position: "relative",
            height: "100%",
            // maxHeight: "30rem",
            width: "100%",
            objectFit: " cover",
            cursor: "pointer",
          }}
          onClick={() => setShowWrapper(!showWrapper)}
        />
        {/* <Box
          // src={imagesVideos[0].src}
          // className={classes.bgImage}
          style={{
            width: "100%",
            height: `100%`,
            backgroundImage: `url(${imagesVideos[0].src})`,
            backgroundSize: "100% 100%,cover",
            cursor:"pointer"
          }}
          onClick={() => setShowWrapper(!showWrapper)}
        />
      </Box> */}

        {showWrapper && (
          <div
            style={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              marginTop: "-5px",
            }}
            // className={`${!showWrapper?classes.dNone:""}`}
          >
            <Grid
              container
              py={1}
              px={2}
              pb={3}
              sx={{
                background: COLORS.white,
                // position: "absolute",
                // bottom: "30px",
                // width: "70%",
                // position: "fixed",
                bottom: imgHeight > windowHeight ? "5rem" : "2rem",
                width: "100%",
                paddingBottom: ".5rem",
                maxWidth: "630px",
                position: imgHeight < windowHeight ? "absolute" : "fixed",
                [theme.breakpoints.up("lg")]: {
                  bottom: imgHeight < windowHeight ? "2rem" : "calc(100%-88%)",
                },
                [theme.breakpoints.down("750")]: {
                  // maxWidth: "545px",
                  maxWidth: "calc(100% - 150px)",
                  bottom: imgHeight < windowHeight ? "2rem" : "calc(100%-88%)",
                  // bottom: "calc(100% - 77%)",
                  // maxWidth: '-moz-calc(100% - 150px)',
                  // maxWidth: '-webkit-calc(100% - 150px)',
                  // maxWidth: '-o-calc(100% - 150px)'
                },
              }}
            >
              <Grid
                item
                sm={8}
                md={8}
                lg={8}
                pb={1}
                sx={
                  {
                    // borderBottom: "1px solid #e0e0e0",
                  }
                }
              >
                <Grid container>
                  <Grid
                    item
                    sm={2}
                    md={2}
                    lg={2}
                    sx={{
                      display: "flex",
                      justifyContent: "center",
                      marginTop: 1,
                    }}
                  >
                    <Avatar
                      src={!isEmpty(post) ? post?.createdBy?.name : avatar}
                      sx={{
                        height: "40px",
                        width: "40px",
                        fontFamily: theme.typography.Poppins,
                        marginRight: "6px",
                      }}
                    />
                  </Grid>
                  <Grid
                    item
                    sm={10}
                    lg={10}
                    // pt={1}
                    sx={{ paddingTop: "12px" }}
                  >
                    <Typography
                      variant="h6"
                      fontWeight="bold"
                      fontFamily={theme.typography.Poppins}
                    >
                      {post?.createdBy?.name}
                    </Typography>
                    <Stack spacing={1}>
                      <Stack
                        sx={{
                          display: "flex",
                          flexDirection: "row",
                          alignItems: "center",
                          mt: 2,
                        }}
                      >
                        <img
                          src={marker}
                          alt="marker"
                          height={"20px"}
                          width="20px"
                        />
                        <Typography
                          ml={0.5}
                          variant="subtitle2"
                          color={COLORS.blue}
                          fontWeight="500"
                          fontFamily={theme.typography.Poppins}
                          sx={{
                            overflow: "hidden",
                            fontSize: "1rem",
                            maxWidth: "300px",
                            fontFamily: "Poppins,sans-serrif",
                            whiteSpace: "pre-wrap",
                            textOverflow: "ellipsis",
                            WebkitBoxOrient: "vertical",
                            WebkitLineClamp: "1",
                            display:"-webkit-box",
                          }}
                        >
                          {post?.location?.address}
                        </Typography>
                      </Stack>
                      <Stack
                        sx={{
                          display: "flex",
                          flexDirection: "row",
                          alignItems: "center",
                        }}
                      >
                        {post?.tags.length > 0 &&
                          post?.tags.map((tag) => <ChipStyle label={tag} />)}
                      </Stack>
                    </Stack>
                  </Grid>
                </Grid>
              </Grid>
              <Grid
                item
                sm={4}
                md={4}
                lg={4}
                // pt={2}
                sx={{
                  // borderBottom: "1px solid #e0e0e0",
                  paddingTop: "13px",
                }}
              >
                <Stack direction="row" justifyContent="end" alignItems="start">
                  <ButtonStyle variant="outlined">Follow</ButtonStyle>
                </Stack>
              </Grid>
              <Grid
                item
                sm={12}
                md={12}
                lg={12}
                pt={2}
                sx={{
                  padding: 0,
                  //  paddingTop: ".5rem"
                }}
              >
                <Stack
                  direction="row"
                  alignItems="center"
                  // justifyContent="flex-end"
                  // gap={5}
                  className={classes.actions}
                >
                  {/* <Typography className="textBox">
                  Like or dislike this post
                </Typography> */}
                  <Box className="actionBox">
                    <Box
                      sx={{
                        display: "flex",
                        gap: "1rem",
                        // width: "100%",
                        justifyContent: "center",
                        width: "102px",
                      }}
                    >
                      <span className="iconBox">
                        <IconButton
                          variant="outlined"
                          onClick={() => onLikeDislike(post._id, "like")}
                        >
                          {post.likes.includes(user?._id) ? (
                            <img src={likeFilled} width="100%" alt="like" />
                          ) : (
                            <img src={like} width="100%" alt="like" />
                          )}
                        </IconButton>
                        <span
                          style={{
                            // color: "#0F0B82",
                            fontFamily: theme.typography.Poppins,
                            color: "#120B83",
                            fontSize: "12px",
                            paddingTop: "2px",
                          }}
                        >
                          {post?.likes.length}
                        </span>
                      </span>
                      <span className="iconBox">
                        <IconButton
                          variant="outlined"
                          onClick={() => onLikeDislike(post._id, "dislike")}
                        >
                          {post.disLikes.includes(user?._id) ? (
                            <img src={dislikeFilled} width="100%" alt="like" />
                          ) : (
                            <img src={dislike} width="100%" alt="dislike" />
                          )}
                        </IconButton>
                        <span
                          style={{
                            // color: "#0F0B82",
                            fontFamily: theme.typography.Poppins,
                            color: "#120B83",
                            fontSize: "12px",
                            paddingTop: "2px",
                          }}
                        >
                          {post?.disLikes.length}
                        </span>
                      </span>
                    </Box>
                  </Box>
                </Stack>
              </Grid>
            </Grid>
          </div>
        )}
      </Box>
    </>
  );
};

const FollowWrapperMobileView = ({
  post,
  imagesVideos,
  onLikeDislike,
  user,
  showWrapper,
  setShowWrapper,
}) => {
  const theme = useTheme();
  const classes = useStyles();
  return (
    <>
      {/* <Stack sx={{ height: showWrapper ? "75vh" : "100vh" }}> */}
      <Stack
        sx={{
          height: showWrapper ? "75vh" : "100vh",
          overflowY: "auto",
        }}
      >
        {/* <Carousel images={imagesVideos} /> */}
        <img
          src={imagesVideos[0].src}
          className={classes.bgImage}
          style={{
            position: "relative",
            height: "100%",
            width: "100%",
            objectFit: "contain",
            cursor: "pointer",
            background: "black",
          }}
          onClick={() => setShowWrapper(!showWrapper)}
        />
        {/* <Box
          // src={imagesVideos[0].src}
          // className={classes.bgImage}
          style={{
            width: "100%",
            height: `100%`,
            backgroundImage: `url(${imagesVideos[0].src})`,
            backgroundSize: "100% 100%,cover",
            cursor: "pointer",
          }}
          onClick={() => setShowWrapper(!showWrapper)}
        /> */}

        <Stack
          direction="row"
          alignItems="center"
          // justifyContent="flex-end"
          // gap={5}
          className={classes.actions}
          classes={{
            wrapperVisible: classes.wrapperVisible,
          }}
        >
          {/* <Typography className="textBox">Like or dislike this post</Typography> */}
          <Box className="actionBox">
            <Box sx={{ display: "flex", gap: "1rem", width: "102px" }}>
              <span className="iconBox">
                <IconButton
                  variant="outlined"
                  onClick={() => onLikeDislike(post._id, "like")}
                >
                  {post.likes.includes(user?._id) ? (
                    <img src={likeFilledWhite} width="100%" alt="like" />
                  ) : (
                    <img src={likeWhite} width="100%" alt="like" />
                  )}
                </IconButton>
                <span
                  style={{
                    // color: "#0F0B82",
                    fontFamily: theme.typography.Poppins,
                    fontSize: "12px",
                    paddingTop: "2px",
                    [theme.breakpoints.up("sm")]: {
                      color: "#120B83",
                    },
                    [theme.breakpoints.down("sm")]: {
                      color: theme.palette.sectionBg,
                    },
                  }}
                >
                  {post?.likes.length}
                </span>
              </span>
              <span className="iconBox">
                <IconButton
                  variant="outlined"
                  onClick={() => onLikeDislike(post._id, "dislike")}
                >
                  {post.disLikes.includes(user?._id) ? (
                    <img src={dislikeFilledWhite} width="100%" alt="like" />
                  ) : (
                    <img src={dislikeWhite} width="100%" alt="dislike" />
                  )}
                </IconButton>
                <span
                  style={{
                    // color: "#0F0B82",
                    fontFamily: theme.typography.Poppins,
                    fontSize: "12px",
                    paddingTop: "2px",
                    [theme.breakpoints.up("md")]: {
                      color: "#120B83",
                    },
                    [theme.breakpoints.down("md")]: {
                      color: theme.palette.sectionBg,
                    },
                  }}
                >
                  {post?.disLikes.length}
                </span>
              </span>
            </Box>
          </Box>
        </Stack>
      </Stack>

      {showWrapper && (
        <Stack sx={{ height: "25vh", background: "white" }}>
          <Stack>
            <Grid container mt={3}>
              <Grid
                item
                xs={2}
                sx={{
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "start",
                }}
              >
                <Avatar
                  src={!isEmpty(post) ? post?.createdBy?.name : avatar}
                  sx={{ height: "36px", width: "36px" }}
                />
              </Grid>
              <Grid item xs={7}>
                <Typography
                  variant="h6"
                  fontWeight="bold"
                  fontFamily={theme.typography.Poppins}
                >
                  {post?.createdBy?.name}
                </Typography>
                <Stack spacing={1}>
                  <Stack
                    sx={{
                      display: "flex",
                      flexDirection: "row",
                      alignItems: "center",
                    }}
                  >
                    <img
                      src={marker}
                      alt="marker"
                      height={"20px"}
                      width="20px"
                    />
                    <Typography
                      ml={0.5}
                      variant="subtitle2"
                      color={COLORS.blue}
                      fontWeight="500"
                      sx={{
                        overflow: "hidden",
                        fontSize: "1rem",
                        maxWidth: "300px",
                        fontFamily: "Poppins,sans-serrif",
                        whiteSpace: "pre-wrap",
                        textOverflow: "ellipsis",
                        WebkitBoxOrient: "vertical",
                        WebkitLineClamp: "1",
                        display:"-webkit-box",
                      }}
                    >
                      {post?.location?.address}
                    </Typography>
                  </Stack>
                </Stack>
              </Grid>
              <Grid item xs={3}>
                <Stack mr={3}>
                  <ButtonStyle sx={{ px: 3 }} variant="outlined">
                    Follow
                  </ButtonStyle>
                </Stack>
              </Grid>
            </Grid>
          </Stack>
          <Stack
            sx={{
              display: "flex",
              flexDirection: "row",
              alignItems: "center",
              flexWrap: "wrap",
              mt: 2,
              mx: 2,
            }}
          >
            {post?.tags.length > 0 &&
              post?.tags.map((tag) => <ChipStyle label={tag} />)}
          </Stack>
          <Stack></Stack>
        </Stack>
      )}
    </>
  );
};
