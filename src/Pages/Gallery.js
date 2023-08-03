import React from 'react'
import SearchBar from '../Components/SearchBar'
import ChangeLayout from '../Components/ChangeLayout'
import FilterPosts from '../Components/FilterPosts'
import UserProfileAndNotification from '../Components/UserProfileAndNotification'
import GalleryPostCards from '../Sections/GalleryPostCards'
import { Box, Container, Divider, IconButton, useMediaQuery } from '@mui/material'
import { makeStyles, useTheme } from '@mui/styles'
import ShareFindModal from '../Components/ShareFindModal'
import ShareAndSearchMobile from '../Components/ShareAndSearchMobile'
import SearchMobileModal from '../Components/SearchMobileModal'
import useAuth from '../Hooks/useAuth'
import { useNavigate } from 'react-router-dom'
import LoginModal from '../Components/LoginModal'
import PostDetails from './PostDetails'
import isEmpty from '../Utils/isEmpty'
// import PostDetailsModal from '../Components/PostDetailsModal'
import PostDetailsModalV2 from '../Components/PostDetailsModal/PostDetailsModalV2'
import PostDetailsModalNew from '../Components/PostDetailsModal/PostDetailsModalNew'


const useStyles = makeStyles((theme) => ({
    section: {
        padding: "3rem 0",
        flex: 1,
        "& .mb1": { marginBottom: "1.25rem" },
        "& .mb2": { marginBottom: "2rem" },
        "& .mb3": { marginBottom: "3rem" },
        "& .label": {
            // fontWeight: "800",
            "fontWeight": "bold",
            "fontSize": "1.2rem",
            "fontFamily": theme.typography.Poppins,
            "textTransform": "capitalize",
            "margin": "0",
            "marginRight": "3.8rem"
        },
        "& .box": {
            display: "flex", justifyContent: "space-between", alignItems: 'center',
            width: "100%",
        },

        "& .boxInner": {
            gap: '1rem'
        },
        "& .mobile": {
            // justifyContent: "center !important",
            // gap: "1rem !important",
            "& .label": {
                marginRight: "5px",
            },
            "& .MuiBox-root": {
                margin: "0 auto",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
            },
        },
    },
}))
const Gallery = () => {
    const classes = useStyles();
    const theme = useTheme();
    const navigate = useNavigate();
    const mobile = useMediaQuery(theme.breakpoints.down("md"));

    const [layout, setLayout] = React.useState("card");
    const [filter, setFilter] = React.useState([]);
    const [sort, setSort] = React.useState('top');
    const [openPostModal, setOpenPostModal] = React.useState(false);
    const [openLoginModal, setOpenLoginModal] = React.useState(false);
    const [showSearchMobile, setShowSearchMobile] = React.useState(false);

    const [postDetails, setPostDetails] = React.useState(null);
    const [openPostDetails, setOpenPostDetails] = React.useState(false);

    const { posts, isAuthenticated, getPostsGeneral, setLikeDislike } = useAuth()

    const handleOpenModal = () => {
        if (!isAuthenticated) {
            // navigate("/login")
            setOpenLoginModal(true)
            return
        }
        setOpenPostModal(true);
        setFilter([])
        setSort("top")
    };

    const handleLoginCloseModal = () => {
        setOpenLoginModal(false);
    };
    const handleCloseModal = () => {
        setOpenPostModal(false);
    };

    const handleOpenSearch = () => {
        setShowSearchMobile(true);
    };
    const handleCloseSearch = () => {
        setShowSearchMobile(false);
    };

    const handleOpenPostDetails = (postObj) => {
        console.log("postObj-->", postObj);
        setPostDetails(postObj);
        setOpenPostDetails(true);
    };
    const handleClosePostDetails = () => {
        console.log('CLosed')
        setPostDetails(null);
        setOpenPostDetails(false);
    };



    const handleSearchByTags = (val) => {
        console.log("handleSearchByTags", val)
        setFilter(val)
        handleCloseSearch()
    };

    const handleLikeDislike = (id, val) => {
        console.log("handleLikeDislike", id, val)
        // if (openPostDetails && !isEmpty(postDetails)) {
        //     setOpenPostDetails(false)
        // }

        if (localStorage.getItem("accessToken")) {
            const obj = {
                postId: id,
                action: val,
            };
            // console.log("handleLikeDislike", obj);
            async function LikeDislikeAPI() {
                try {
                    const { response, error } = await setLikeDislike(obj);
                    // console.log("setLikeDislike", response);
                    if (!isEmpty(response)) {
                        getPostsGeneral({ filter: [], sort: "top" });
                    }

                } catch (e) {
                    console.log("setLikeDislike", e);
                }
            }
            LikeDislikeAPI();

        } else {
            console.log("Open Login Modal");
            setOpenLoginModal(true)
        }
    };

    React.useEffect(() => {
        if (mobile) {
            setLayout("card")
        }
    }, [mobile])


    React.useLayoutEffect(() => {
        console.log("LayoutEFffect", filter, sort)
        // idhar issue h phele se default getpost general chalrhi h
        getPostsGeneral({ filter, sort })
    }, [filter, sort])
    React.useLayoutEffect(() => {
        if (openLoginModal && isAuthenticated) {
            // navigate("/login")
            setOpenLoginModal(false)
            return
        }
    }, [isAuthenticated])

    return (
        <section className={classes.section}>
            <Container maxWidth="xl">
                <Box className={`box mb2 ${mobile ? "mobile mb3" : ""}`}>
                    <Box className={` ${mobile ? "mobile" : "box boxInner"}`}>
                        {mobile ?
                            <>
                                {/*FILTER MOBILE  */}
                                <FilterPosts sort={sort} onSort={setSort} />
                            </>
                            :
                            <>
                                {/*SEARCH AND LAYOUT DESKTOP  */}
                                <SearchBar onOpen={handleOpenModal} onTagChange={handleSearchByTags} />
                                <ChangeLayout layout={layout} setLayout={setLayout} />
                            </>
                        }
                        {/* {!mobile && <ChangeLayout layout={layout} setLayout={setLayout} />} */}
                    </Box>
                </Box>
                {/* POST AND SEARCH Mobile */}
                <ShareAndSearchMobile onOpen={handleOpenModal} onOpenSearch={handleOpenSearch} />

                {/*FILTER AND USER & NOTIFICATION DESKTOP  */}
                {!mobile &&
                    <Box className={`box mb1`}>
                        <>
                            <FilterPosts sort={sort} onSort={setSort} />
                            <UserProfileAndNotification />
                        </>
                    </Box>
                }
                <Divider sx={{ color: "#707070", marginBottom: "30px" }} />

                {/*GALLERY POSTS DESKTOP  */}
                <GalleryPostCards layout={layout} onPostClick={handleOpenPostDetails} handleLikeDislike={handleLikeDislike} />

                {openPostModal && <ShareFindModal open={openPostModal} onClose={handleCloseModal} />}
                {openLoginModal && <LoginModal open={openLoginModal} onClose={handleLoginCloseModal} />}
                {showSearchMobile && <SearchMobileModal open={showSearchMobile} onClose={handleCloseSearch} isGallery={true} tags={filter} onTagChange={handleSearchByTags} />}
                {/* {<PostDetails open={openPostDetails} onClose={handleClosePostDetails} postDetails={postDetails}/>} */}
                {/* {openPostDetails && <PostDetailsModalV2 open={openPostDetails} onClose={handleClosePostDetails} postDetails={postDetails} onLikeDislike={handleLikeDislike} />} */}
                {openPostDetails && <PostDetailsModalNew open={openPostDetails} onClose={handleClosePostDetails} postDetails={postDetails} onLikeDislike={handleLikeDislike} />}
            </Container>

        </section>
    )
}

export default Gallery