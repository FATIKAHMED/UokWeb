import React from "react";
import {
  Box,
  Container,
  CircularProgress,
  Grid,
  useMediaQuery,
  Backdrop,
} from "@mui/material";
import GalleryCard from "../../Components/GalleryCard";
import GalleryCardFullWidth from "../../Components/GalleryCardFullWidth";
import img1 from "../../Assets/img/img5.png";
import img2 from "../../Assets/img/img1.png";
import img3 from "../../Assets/img/img2.png";
import img4 from "../../Assets/img/img3.png";
import img5 from "../../Assets/img/img4.png";
import noContent from "../../Assets/Gallery/noContent.svg";
import useAuth from "../../Hooks/useAuth";
import { makeStyles, useTheme } from "@mui/styles";
import isEmpty from "../../Utils/isEmpty";
import SocialShareModal from "../../Components/SocialShareModal";

const useStyles = makeStyles((theme) => ({
  gridCont: {
    position: "relative",
    [theme.breakpoints.down("md")]: {
      "& .MuiGrid-item": {
        paddingTop: "50px",
      },
      "& .MuiGrid-item:first-child": {
        paddingTop: "40px",
      },
    },
  },
  gridItem: {
    [theme.breakpoints.down("md")]: {
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      "& .MuiGrid-item:first-child": {
        paddingTop: "60px",
      },
    },
  },
}));
const arr = [img1, img2, img3, img4, img5];

const GalleryPostCards = ({ layout, onPostClick, handleLikeDislike }) => {
  const theme = useTheme();
  const classes = useStyles();
  const lg = useMediaQuery(theme.breakpoints.up("1030"));
  const mobile = useMediaQuery(theme.breakpoints.down("md"));
  const { posts, isFetching, setLikeDislike, getPostsGeneral } = useAuth();
  const [openSocialModal, setOpenSocialModal] = React.useState(false);
  const [post, setPost] = React.useState(null);

  // const handleLikeDislike = (id, val) => {
  //   console.log("handleLikeDislike", id, val)
  //   if (localStorage.getItem("accessToken")) {
  //     const obj = {
  //       postId: id,
  //       action: val,
  //     };
  //     console.log("handleLikeDislike", obj);
  //     async function LikeDislikeAPI() {
  //       try {
  //         const { response, error } = await setLikeDislike(obj);
  //         console.log("setLikeDislike", response);
  //         if (!isEmpty(response)) {
  //           getPostsGeneral({ filter: [], sort: "top" });
  //         }
  //       } catch (e) {
  //         console.log("setLikeDislike", e);
  //       }
  //     }
  //     LikeDislikeAPI();
  //   } else {
  //     console.log("Open Login Modal");
  //   }
  // };

  const handleSocialShare = (post) => {
    setOpenSocialModal(true)
    console.log("onOpenSocialModal-->", post)
    setPost(post)
  }

  return (
    <>
      {/* <Container style={{ padding: 0 }}> */}
      <Grid
        className={classes.gridCont}
        container
        spacing={5}
        justifyContent={mobile ? "center" : "flex-start"}
      >
        <>
          {isFetching && (

            <Backdrop
              sx={{ color: '#fff', zIndex: (theme) => theme.zIndex.drawer + 1200, display: "flex", justifyContent: 'center', alignItems: "center" }}
              open={true}
            // onClick={handleClose}
            >
              <CircularProgress />
            </Backdrop>
          )}
        </>
        <>
          {layout == "card" ? (
            <>
              {posts.length > 0 ? (
                posts?.map((item, index) => {
                  return (
                    <Grid
                      item
                      gap="2.5rem"
                      xs={12}
                      md={4}
                      className={classes.gridItem}
                      key={index}
                    >
                      <GalleryCard
                        item={item}
                        onLikeDislike={handleLikeDislike}
                        onSocialShare={(val) => handleSocialShare(val)}
                        onPostClick={onPostClick}
                      // onPostClick={(val) => console.log("POST CLICK==>",val)}
                      />
                    </Grid>
                  );
                })
              ) : (
                <Box
                  sx={{
                    margin: "2rem auto 1.5rem auto",
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "center",
                    justiftContent: "center",
                  }}
                >
                  <Box sx={{ marginBottom: "1rem" }}>
                    <img src={noContent} alt="empty posts" />
                  </Box>
                  <Box sx={{ fontFamily: "poppins" }}>
                    There are no posts!
                  </Box>
                </Box>
              )}
            </>
          ) : (
            <>
              {posts.length > 0 ? (
                posts?.map((item, index) => {
                  return (
                    <Grid
                      item
                      gap="2.5rem"
                      xs={12}
                      md={12}
                      className={classes.gridItem}
                      key={index}
                    >
                      <GalleryCardFullWidth item={item} onLikeDislike={handleLikeDislike} onPostClick={onPostClick} />
                    </Grid>
                  );
                })
              ) : (
                <Box
                  sx={{
                    margin: "2rem auto 1.5rem auto",
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "center",
                    justiftContent: "center",
                  }}
                >
                  <Box sx={{ marginBottom: "1rem" }}>
                    <img src={noContent} alt="empty posts" />
                  </Box>
                  <Box sx={{ fontFamily: "poppins" }}>
                    There are no posts!
                  </Box>
                </Box>
              )}
            </>
          )}
        </>

      </Grid>
      {openSocialModal && <SocialShareModal open={openSocialModal} onClose={() => setOpenSocialModal(false)} post={post} />}
    </>
  );
};

export default GalleryPostCards;

{/* {layout == "card" ?
        <GalleryCard item={item} /> :
        <GalleryCardFullWidth item={item} />
      }
      md={layout == "card" ? 4 : 12} */}
