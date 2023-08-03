import { IconButton, useMediaQuery } from '@mui/material'
import { makeStyles, useTheme } from '@mui/styles'
import { Splide, SplideSlide } from '@splidejs/react-splide'
import '@splidejs/splide/dist/css/themes/splide-default.min.css'
import { HiOutlineArrowNarrowLeft, HiOutlineArrowNarrowRight } from 'react-icons/hi'
import img1 from '../../Assets/Gallery/blade.jpg'
import img2 from '../../Assets/Gallery/generade.jpg'
import img3 from '../../Assets/Gallery/locker.jpg'
import img4 from '../../Assets/Gallery/newspaperBox.png'
import img5 from '../../Assets/Gallery/safe.jpg'
import img6 from '../../Assets/Gallery/safeNew.jpg'

const arr = [img1, img2, img3, img4, img5, img6]

const useStyles = makeStyles((theme) => ({
  splide: {
    // marginTop: '0rem',
    display: 'flex',
    width: '100%',
    alignItems: 'stretch',
    // justifyContent: 'center',
    justifyContent: 'start',
    flexDirection: 'column-reverse',
    minHeight:"22rem",
    position:"relative",
    [theme.breakpoints.down("md")]:{
      minHeight:"20rem",
    },
    // gap: "2rem",
    '& .splide__list': {
      padding: '1rem 0 !important',
    },
    '& .splide__slide': {
      borderRadius: '1rem',
    },
    '& .splide__slide, & .splide__slide.is-active.is-visible': {
      border: '0 !important',
    },
    '& .splide__slide.is-active.is-visible': {
      // transform:"scale(2)",
      transition: 'all .5s',
      transform: 'translateY(-10px)',
      boxShadow: '0px 32px 80px rgba(0, 0, 0, 0.05)',
    },
    '& .img': {
      boxShadow: '0px 32px 80px rgba(0, 0, 0, 0.05)',
    },
    '& .splide__arrow': {
      position: 'relative !important',
      right: '0',
      left: '0',
      top: '0',
      transform: 'translate(0, 0)',
      width: '2.5em',
      height: '2.5em',
      borderRadius: '50%',
      // background: theme.palette.primary.main,
      background: 'transparent',
      border: '2px solid #E81C00',
      boxShadow:
        '0px 1.4px 3.6px rgba(0, 0, 0, 0.028),\n  0px 4px 10px rgba(0, 0, 0, 0.04),\n  0px 9.6px 24.1px rgba(0, 0, 0, 0.052),\n  0px 32px 80px rgba(0, 0, 0, 0.08)',
      '&:hover': {
        background: '#ffffff',
        '& svg': {
          fill: '#fff',
        },
      },
      '& svg': {
        fill: '#E81C00',
      },
    },
    '& .splide__arrows': {
      display: 'flex',
      justifyContent: 'flex-end',
      gap: '2rem',
      width: "100%",
      paddingRight:"5rem",
      position: "relative",
      bottom: "40px",
      // top: "-6.5rem",
      [theme.breakpoints.down("1100")]:{
        bottom: "55px",
      },
    /* gap: 0.5rem; */
      // old slider
      // justifyContent: "center",
      '& .splide__arrows__custom': {
        color: "#141737",
        border: `2px solid #141737`,
        borderRadius: "30px",    
        // boxShadow:
        // '0px 1.4px 3.6px rgba(0, 0, 0, 0.028),\n  0px 4px 10px rgba(0, 0, 0, 0.04),\n  0px 9.6px 24.1px rgba(0, 0, 0, 0.052),\n  0px 32px 80px rgba(0, 0, 0, 0.08)',
        // "&:hover": {
        //   background: theme.palette.primary.main,
        //   color: "white"
        // },
      },
      "& .splide__arrow--prev":{
        // right: 2,
      },
      "& .splide__arrow--next":{
        right:0
      }
    },
  },
  pagination: {
    // "bottom": "21em !important",
    // bottom: '.8em !important',
    display:"none",
    '& .splide__pagination__page.is-active': {
      background: theme.palette.primary.main,
      opacity: 1,
    },
  },
  // arrows: {
  //     position:"relative !important"

  // }
}))

export default function PatternSlider({ images }) {
  const classes = useStyles()
  const theme = useTheme()
  const mobile = useMediaQuery(theme.breakpoints.down('sm'))
  const tablet = useMediaQuery(theme.breakpoints.between('sm', 'md'))

  const Slides = () => {
    return arr.map((item) => {
      return (
        <>
          <SplideSlide key={item}>
            <img src={item} alt="Image 1" width={'100%'} className={'img'} />
          </SplideSlide>
        </>
      )
    })
  }
  const MobileSlider = () => {
    return (
      <Splide
        renderControls={() => (
          <div className="splide__arrows">
            <IconButton className="splide__arrows__custom splide__arrow--prev" role="button" sx={{

            }}>
              <HiOutlineArrowNarrowLeft size={'1.5rem'} />
            </IconButton>
            <IconButton className="splide__arrows__custom splide__arrow--next" role="button">
              <HiOutlineArrowNarrowRight size={'1.5rem'} />
            </IconButton>
          </div>
        )}
        options={{
          type: 'slide',
          rewind: true,
          gap: '1rem',
          // pagination: false,
          // fixedWidth: 400,
          // fixedHeight: 150,
          autoplay: true,
          height: '14rem',
          cover: true,
          focus: 'center',
          perPage: 1,
          isNavigation: true,
          updateOnMove: true,
          heightRatio: 0.5,
          perMove: 1,

          classes: {
            // prev: `splide__arrow--prev ${classes.arrowPrev} ${courseDetailsTrailers.length <= 3 ? "hidden" : ""
            //     } disabled`,
            // next: `splide__arrow--next ${classes.arrowNext} ${courseDetailsTrailers.length <= 3 ? "hidden" : ""
            //     } active`,
            pagination: `splide__pagination ${classes.pagination}`,
            // arrows: `splide__arrow ${classes.arrows}`
          },
        }}

        className={classes.splide}
      >
        {Slides()}
      </Splide>
    )
  }
  const TabletSlider = () => {
    return (
      <Splide
      renderControls={() => (
        <div className="splide__arrows">
          <IconButton className="splide__arrows__custom splide__arrow--prev" role="button">
            <HiOutlineArrowNarrowRight size={'1.5rem'} />
          </IconButton>
          <IconButton className="splide__arrows__custom splide__arrow--next" role="button">
            <HiOutlineArrowNarrowRight size={'1.5rem'} />
          </IconButton>
        </div>
      )}
        options={{
          type: 'slide',
          rewind: true,
          gap: '1rem',
          // pagination: false,
          // fixedWidth: 400,
          // fixedHeight: 150,
          autoplay: true,
          height: '14rem',
          cover: true,
          focus: 'center',
          perPage: 2,
          isNavigation: true,
          updateOnMove: true,
          heightRatio: 0.5,
          perMove: 1,

          classes: {
            // prev: `splide__arrow--prev ${classes.arrowPrev} ${courseDetailsTrailers.length <= 3 ? "hidden" : ""
            //     } disabled`,
            // next: `splide__arrow--next ${classes.arrowNext} ${courseDetailsTrailers.length <= 3 ? "hidden" : ""
            //     } active`,
            pagination: `splide__pagination ${classes.pagination}`,
            // arrows: `splide__arrow ${classes.arrows}`
          },
        }}
        className={classes.splide}
      >
        {Slides()}
      </Splide>
    )
  }

  if (mobile) {
    return <MobileSlider />
  } else if (tablet) {
    return <TabletSlider />
  }

  return (
    <Splide
    renderControls={() => (
      <div className="splide__arrows">
        <IconButton className="splide__arrows__custom splide__arrow--prev" role="button">
          <HiOutlineArrowNarrowRight size={'1.5rem'} />
        </IconButton>
        <IconButton className="splide__arrows__custom splide__arrow--next" role="button">
          <HiOutlineArrowNarrowRight size={'1.5rem'} />
        </IconButton>
      </div>
    )}
      options={{
        type: 'slide',
        rewind: true,
        gap: '1rem',
        // pagination: false,
        // fixedWidth: 400,
        // fixedHeight: 150,
        autoplay: true,
        // height: '14rem',
        height: '260px',
        cover: true,
        focus: 'center',
        perPage: 4,
        isNavigation: true,
        updateOnMove: true,
        heightRatio: 0.5,
        perMove: 1,

        classes: {
          // prev: `splide__arrow--prev ${classes.arrowPrev} ${courseDetailsTrailers.length <= 3 ? "hidden" : ""
          //     } disabled`,
          // next: `splide__arrow--next ${classes.arrowNext} ${courseDetailsTrailers.length <= 3 ? "hidden" : ""
          //     } active`,
          pagination: `splide__pagination ${classes.pagination}`,
          // arrows: `splide__arrow ${classes.arrows}`
        },
      }}
      className={classes.splide}
    >
      {Slides()}
    </Splide>
  )
}
