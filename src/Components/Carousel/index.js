import { TransformWrapper, TransformComponent } from "react-zoom-pan-pinch";
import { useMediaQuery } from '@mui/material';
import { makeStyles, useTheme } from '@mui/styles';
import { Splide, SplideSlide } from '@splidejs/react-splide';
import '@splidejs/splide/dist/css/themes/splide-default.min.css';
import img1 from '../../Assets/Gallery/blade.jpg'
import img2 from '../../Assets/Gallery/generade.jpg'
import img3 from '../../Assets/Gallery/locker.jpg'
import img4 from '../../Assets/Gallery/newspaperBox.png'
import img5 from '../../Assets/Gallery/safe.jpg'
import img6 from '../../Assets/Gallery/safeNew.jpg'

const arr = [img1, img2, img3, img4, img5, img6]


const useStyles = makeStyles((theme) => ({
    splide: {
        // marginTop: "3rem",
        // display: "flex",
        // "width": "100%",
        // "alignItems": "stretch",
        // "justifyContent": "center",
        // "flexDirection": "column-reverse",
        // gap: "2rem",
        "& .react-transform-wrapper":{
            height:"100% !important"
        },
        "& .react-transform-component":{
            height:"100% !important"
        },
        "& .splide__list": {
            // padding: "1rem 0 !important"
        },
        "& .splide__slide": {
            // borderRadius: "1rem",
        },
        "& .splide__slide, & .splide__slide.is-active.is-visible": {
            // border: "0 !important"
        },
        "& .splide__slide.is-active.is-visible": {
            // transform:"scale(2)",
            // transition: "all .5s",
            // transform: "translateY(-10px)",
            // "boxShadow": "0px 32px 80px rgba(0, 0, 0, 0.05)"
        },
        "& img": {
            // "boxShadow": "0px 32px 80px rgba(0, 0, 0, 0.05)"
            height: "100%",
            objectFit: "cover",
            // touchAction: "pinch-zoom pan-x pan-y",
        },
        "& .splide__arrow": {
            // "position": "relative !important",
            // "right": "0",
            // "left": "0",
            // "top": "0",
            // "transform": "translate(0, 0)",
            // width: "2.5em",
            // height: "2.5em",
            // borderRadius: "20%",
            // background: theme.palette.primary.main,
            // "boxShadow": "0px 1.4px 3.6px rgba(0, 0, 0, 0.028),\n  0px 4px 10px rgba(0, 0, 0, 0.04),\n  0px 9.6px 24.1px rgba(0, 0, 0, 0.052),\n  0px 32px 80px rgba(0, 0, 0, 0.08)",
            // "& svg": {
            //     fill: "#fff"
            // }
        },
        "& .splide__arrows": {
            // display: 'flex',
            // justifyContent: "center",
            // gap: ".5rem",
            //// display:"none"
        },
        "& .hidden": {
            display: 'none'
        },
        "& .splideSlide": {
            // height: 'auto !important',
            height: '300px !important',
        }

    },
    pagination: {
        display: "none",
        "bottom": "21em !important",
        "& .splide__pagination__page.is-active": {
            background: theme.palette.primary.main
        }
    },
    arrowNext: {
        "&.hidden": {
            display: 'none'
        }
    },
    arrowPrev: {
        "&.hidden": {
            display: 'none'
        }
    },
    transformWrapper:{
        
    },
    transformComponent:{
    },
    // arrows: {
    //     position:"relative !important"

    // }

}))


export default function Carousel({ images = [] }) {
    const classes = useStyles();
    const theme = useTheme();
    const mobile = useMediaQuery(theme.breakpoints.down("sm"));

    const Slides = () => {
        return (

            images.map(item => {
                if (item.type === "video") {
                    return (
                        <SplideSlide key={item.src} className={mobile ? "splideSlide" : ""}>
                            <video src={item.src} alt="Video" height="100%" width={"100%"} style={{ background: "currentColor", objectFit: "contain", objectPosition: "center" }} className={"img"} autoPlay controls />
                        </SplideSlide>
                    )
                }
                return (
                    <SplideSlide key={item.src} className={mobile ? "splideSlide" : ""}>
                        <TransformWrapper>
                            <TransformComponent>
                                <img src={item.src} alt="Image 1" width={"100%"} className={"img"} />
                            </TransformComponent>
                        </TransformWrapper>
                    </SplideSlide>
                )
            })

        )
    }
    const MobileCarousel = () => {
        return (
            <Splide

                options={{
                    type: "slide",
                    rewind: true,
                    // gap: "1rem",
                    // pagination: false,
                    // fixedWidth: 400,
                    // fixedHeight: 150,
                    // autoplay: true,
                    // height: '14rem',
                    cover: true,
                    focus: "center",
                    perPage: 1,
                    // isNavigation: true,
                    // updateOnMove: true,
                    heightRatio: 0.5,
                    perMove: 1,

                    classes: {
                        prev: `splide__arrow--prev ${classes.arrowPrev} ${images.length <= 1 ? "hidden" : ""
                            } `,
                        next: `splide__arrow--next ${classes.arrowNext} ${images.length <= 1 ? "hidden" : ""
                            } `,
                        // pagination: `splide__pagination ${classes.pagination}`,
                        // arrows: `splide__arrow ${classes.arrows}`
                    }
                }}
                className={classes.splide}
            >
                {Slides()}
            </Splide>
        )
    }

    if (mobile) {
        return <MobileCarousel />
    }

    return (
        <Splide
            options={{
                type: "slide",
                rewind: true,
                // gap: "1rem",
                // pagination: false,
                // fixedWidth: 400,
                // fixedHeight: 150,
                // autoplay: true,
                height: '30rem',
                cover: true,
                focus: "center",
                perPage: 1,
                // isNavigation: true,
                updateOnMove: true,
                heightRatio: 0.5,
                perMove: 1,

                classes: {
                    prev: `splide__arrow--prev ${classes.arrowPrev} ${images.length <= 1 ? "hidden" : ""
                        } `,
                    next: `splide__arrow--next ${classes.arrowNext} ${images.length <= 1 ? "hidden" : ""
                        } `,
                    // pagination: `splide__pagination ${classes.pagination}`,
                    // arrows: `splide__arrow ${classes.arrows}`
                }
            }}
            className={classes.splide}
        >
            {Slides()}

        </Splide>
    );
}