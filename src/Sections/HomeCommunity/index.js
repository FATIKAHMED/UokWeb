import React from 'react'
import { makeStyles, useTheme } from '@mui/styles'
import { Button, Container, Grid, Box, useMediaQuery } from '@mui/material'
import { HiOutlineArrowNarrowRight } from 'react-icons/hi'
// import bg from "../../Assets/img/bg.png"
import bg from '../../Assets/Home/bg.svg'
import sidePattern from '../../Assets/Home/sidePattern.svg'
import rectangle from '../../Assets/Home/rectangle.svg'
import electricIcons from '../../Assets/Home/electricIcons.svg'
import line from '../../Assets/Home/line.svg'

import img1 from '../../Assets/img/img1.png'
import img2 from '../../Assets/img/img2.png'
import img3 from '../../Assets/img/img3.png'
import img4 from '../../Assets/img/img4.png'
import img5 from '../../Assets/img/img5.png'

const useStyles = makeStyles((theme) => ({
  section: {
    // background: `${theme.palette.dark}`,
    background: `url(${bg})`,
    backgroundPosition: 'center center',
    paddingBottom: '7rem',
  },
  wrapper: {
    // background: `url(${sidePattern}) no-repeat,
    backgroundImage: `url(${sidePattern}), url(${rectangle}), url(${electricIcons})`,
    // backgroundPosition: "left top, right top, 75% 100%",
    // backgroundSize: "auto, 60%, auto",
    // backgroundRepeat: "no-repeat, no-repeat,no-repeat",
    backgroundRepeat: 'no-repeat, no-repeat,no-repeat',
    backgroundPosition: 'left top, 131% 0%, 75% 100%',
    backgroundSize: 'auto, 65%, auto',
    maxWidth: '1380px',
    margin: '0 auto',
    padding: '0',
    // padding: "2rem 0",
    // paddingBottom:"10rem",
    [theme.breakpoints.down('md')]: {
      backgroundImage: `url(${sidePattern})`,
      backgroundPosition: 'left top',
      backgroundSize: 'auto',
      backgroundRepeat: 'no-repeat',
    },
  },
  container: {
    '& .containerGrid': {
      [theme.breakpoints.down('786')]: {
        display: 'block',
      },
    },
    marginTop: '5rem',
    marginBottom: '5rem',
    '& .imgBox': {
      marginTop: '1rem',
      // minHeight:"600px",
      // height:"100%",
    },
    '& .mask': {
      WebkitMaskImage: `url(${bg})`,
      maskImage: `url(${bg})`,
      background: `url(${bg}) no-repeat`,
      WebkitMaskSize: '100%',
      maskSize: '100%',
      WebkitMaskRepeat: 'no-repeat',
      maskRepeat: 'no-repeat',
    },
    '& .image': {
      maxWidth: '100%',
      height: '100%',
      marginTop: '5rem',
    },

    '& .heading': {
      // fontFamily: theme.typography.MazzardH,
      fontFamily: theme.typography.Poppins,
      fontWeight: 900,
      color: theme.palette.dark,
      fontSize: '3rem',
      marginBottom: '0',
      '& strong': {
        color: theme.palette.primary.main,
      },
    },
    '& .para': {
      // fontFamily: theme.typography.MazzardH,
      fontFamily: theme.typography.Poppins,
      fontSize: '1rem',
      textTransform: 'capitalize',
    },
    '& .cta': {
      // fontFamily: theme.typography.MazzardH,
      fontFamily: theme.typography.Poppins,
      textTransform: 'capitalize',
    },
  },
  description: {
    // fontFamily: theme.typography.MazzardH,
    fontFamily: theme.typography.Poppins,
    textTransform: 'uppercase',
    '& .heading': {
      color: '#fff',
      // fontSize: "4rem",
      // lineHeight: "54px",
      // fontSize: "5rem",
      fontSize: '4.5rem',
      lineHeight: '62px',
      fontWeight: 900,
      '& .headingLight': {
        // fontSize: "2.75rem",
        fontSize: '3.5rem',
        margin: 0,
        fontFamily: theme.typography.Poppins,
        fontWeight: 900,
        [theme.breakpoints.down('600')]: {
          fontSize: '2.5rem',
        },
      },
      [theme.breakpoints.down('600')]: {
        fontSize: '3rem',
        margin: 0,
        marginTop: '6rem',
      },
      [theme.breakpoints.down('450')]: {
        fontSize: '2.5rem',
      },
    },
    '& .subHeading': {
      // fontSize: "1.75rem",
      fontSize: '1.6rem',
      fontWeight: 800,
      fontFamily: theme.typography.Poppins,
      color: theme.palette.secondary.main,
      marginBottom: 0,
      [theme.breakpoints.down('600')]: {
        fontSize: '1.5rem',
        margin: 0,
      },
      [theme.breakpoints.down('450')]: {
        fontSize: '1.2rem',
      },
    },
    '& .para': {
      // fontFamily: theme.typography.PublicSans,
      fontFamily: theme.typography.Poppins,
      // fontSize: "1.2rem",
      fontSize: '1rem',
      fontWeight: 300,
      color: '#fff',
      maxWidth: '450px',
      display: '-webkit-box',
      overflow: 'hidden',
      whiteSpace: 'pre-wrap',
      textOverflow: 'ellipsis',
      WebkitLineClamp: '6',
      WebkitBoxOrient: 'vertical',
      marginBottom: '2rem',
      // wordSpacing: "3px",
      [theme.breakpoints.down('900')]: {
        maxWidth: '100%',
      },
    },
    '& .cta': {
      fontFamily: theme.typography.Poppins,
      textTransform: 'capitalize',
      fontWeight: 800,
      fontSize: '1rem',
      padding: '.75rem .5rem',
      borderRadius: '.75rem',
      width: '14rem',
      color: theme.palette.dark,
      backgroundColor: '#fff',
      // "boxShadow": "0px 5px 20px 10px #FFDEE8",
      boxShadow:
        '2.6px 2.9px 2.2px rgba(255,22,91, 0.017),\n  6.3px 6.9px 5.3px rgba(255,22,91, 0.025),\n  11.8px 13px 10px rgba(255,22,91, 0.031),\n  21px 23.2px 17.9px rgba(255,22,91, 0.037),\n  39.3px 43.4px 33.4px rgba(255,22,91, 0.045),\n  94px 104px 80px rgba(255,22,91, 0.06)',
    },
    '& .line': {
      background: 'white',
      width: '60px',
      height: '6px',
      marginTop: '2rem',
      borderRadius: '6px',
    },
  },
  Cont1: {
    [theme.breakpoints.down('786')]: {
      maxWidth: '100%',
    },
  },
  Cont2: {
    position: 'relative',
    height: '100%',
    [theme.breakpoints.down('1362')]: {
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'center',
      gap: '1rem',
      padding: '0 !important',
    },
    '& .imgBox1': {
      top: 0,
      [theme.breakpoints.down('1100')]: {
        top: '0',
        marginRight: '1rem',
        justifyContent: 'flex-end',
      },
    },
    '& .imgBox2': {
      top: '62%',
      [theme.breakpoints.down('1100')]: {
        top: '0',
        display: 'none',
      },
    },
    '& .imgBox': {
      position: 'relative',
      [theme.breakpoints.down('1362')]: {
        position: 'initial',
        display: 'flex',
        flexWrap: 'wrap',
        gap: '1rem',
        justifyContent: 'center',
      },
      '& .img': {
        position: 'absolute',
        borderRadius: '20px',
        boxShadow:
          '0px 3.2px 9.3px rgba(0, 0, 0, 0.031),\n  0px 8px 23.5px rgba(0, 0, 0, 0.044),\n  0px 16.3px 47.8px rgba(0, 0, 0, 0.056),\n  0px 33.6px 98.6px rgba(0, 0, 0, 0.069),\n  0px 92px 270px rgba(0, 0, 0, 0.1)',
        [theme.breakpoints.down('1362')]: {
          position: 'relative',
          display: 'flex',
          justifyContent: 'space-between',
          width: '250px',
          height: '250px',
          top: 0,
          left: 0,
        },

        //// [theme.breakpoints.down("1330")]: {
        ////     width: '230px',
        ////     top: -136,
        //// },
      },
      '& .imgLine': {
        top: '-4.6rem',
        // "left": "-27%",
        left: '-13%',
        width: '440px',
        height: '10px',
        borderRadius: '0',
        background: `url(${line}) no-repeat`,
        backgroundSize: `cover`,
        [theme.breakpoints.down('1362')]: {
          display: 'none !important',
        },
      },
      '& .img1': {
        top: '-2.4rem',
        right: 'calc(96% - 230px)',
        // right: '0%',
        width: '230px',
        height: '260px',
        background: `url(${img5}) no-repeat`,
        backgroundSize: `cover`,
      },
      '& .img2': {
        top: '-9rem',
        left: 'calc(90% - 235px)', // same as img2
        width: '385px',
        height: '300px',
        borderBottomRightRadius: '0',
        borderTopRightRadius: '0',
        backgroundSize: `cover`,
        background: `url(${img1}) no-repeat`,
        [theme.breakpoints.down('1362')]: {
          borderRadius: '20px',
        },
      },
      '& .img3': {
        top: '-5rem',
        right: '0%',
        right: 'calc(96% - 230px)', // same as img1
        width: '160px',
        height: '160px',
        objectFit: 'cover',
        background: `url(${img3}) no-repeat`,
        backgroundSize: '100% 100%,cover',
      },
      '& .img4': {
        top: '-9rem',

        left: 'calc(90% - 235px)', // same as img2
        width: '100%',
        maxWidth: '250px',
        minHeight: '340px',
        backgroundSize: 'contain',
        background: `url(${img4}) no-repeat`,
      },
      '& .img5': {
        top: '-9rem',
        left: '95.5%',
        width: '120px',
        height: '250px',
        borderBottomRightRadius: '0',
        borderTopRightRadius: '0',

        background: `url(${img2}) no-repeat`,
        backgroundSize: 'cover',
      },
    },
  },
  none: {
    display: 'none',
  },
}))

const HomeCommunity = () => {
  const classes = useStyles()
  const theme = useTheme()
  const tablet = useMediaQuery(theme.breakpoints.down('900'))
  return (
    <section className={classes.section}>
      <div className={classes.wrapper}>
        <Container className={classes.container}>
          <Grid container spacing={4} className="containerGrid">
            <Grid item xs={12} sm={12} md={6}>
              <Box className={`${classes.Cont1}`}>
                <Box component="div" className={classes.description}>
                  <h2 className="heading">
                    <p className="headingLight">Join Our</p>Community.
                  </h2>
                  <h2 className="subHeading">The Complete Resource</h2>
                  <h2 className="para">
                    Join the Magnet Fishing USA Facebook Community and share
                    anything magnet fishing related. You can communicate
                    directly with fellow magnet fishers and even link up with
                    them to go on an adventure. Check us out here!
                  </h2>
                  <Button
                    className="cta"
                    variant="contained"
                    endIcon={
                      <HiOutlineArrowNarrowRight
                        size={'2rem'}
                        className="icon"
                      />
                    }
                  >
                    Explore
                  </Button>
                  <div className="line"></div>
                </Box>
              </Box>
            </Grid>
            <Grid item xs={12} sm={12} md={6}>
              <Box
                component="div"
                className={`${classes.Cont2}  ${tablet ? classes.none : ''}`}
              >
                <Box component="div" className={'imgBox imgBox1'}>
                  <Box component="div" className={'img imgLine'}></Box>
                  <Box component="div" className={'img img1'}></Box>
                  <Box component="div" className={'img img2'}></Box>
                </Box>
                <Box component="div" className={'imgBox imgBox2'}>
                  <Box component="div" className={'img img3'}></Box>
                  <Box component="div" className={'img img4'}></Box>
                  <Box component="div" className={'img img5'}></Box>
                </Box>
              </Box>
            </Grid>
          </Grid>
        </Container>
      </div>
    </section>
  )
}

export default HomeCommunity
