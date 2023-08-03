import { Button, Grid, Stack, Typography } from '@mui/material'
import React from 'react'
import aboutImg from '../../Assets/AboutUS/Find-Artillery.jpg'
import { HiOutlineArrowNarrowRight } from 'react-icons/hi'
import { styled } from '@mui/material/styles'
import { COLORS } from '../../Utils/variables'

const RootStyle = styled('div')(({ theme }) => ({
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  margin: '7rem 0 10rem 0',
  '& .aboutSectionWrapper': {
    maxWidth: '90vw',
    alignItems:"center",
    justifyContent:"center",
    [theme.breakpoints.up("1300")]:{      
      maxWidth: '1200px',
    },
    [theme.breakpoints.down("md")]:{      
      maxWidth: '80vw',
    },
  },
  '& .imageWrapper': {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    [theme.breakpoints.up("md")]:{      
      justifyContent: 'flex-end',
      paddingRight:"2.5rem"
    },
    [theme.breakpoints.down("md")]:{      
      maxWidth: '70vw',
    },
    '& .aboutImage': {
      background: 'red',
      height: '30rem',
      width: '24rem',
      borderRadius: '2rem',
      marginRight: '1rem',
      [theme.breakpoints.down('sm')]: {
        width: '100%',
        height: '100%',
      },
    },
  },
  '& .contentWrapper': {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'end',
    alignItems: 'self-start',
    //// alignItems: 'center',      
    [theme.breakpoints.down("md")]:{
      alignItems: 'center',      
    },
    '& .contentMain': {
      [theme.breakpoints.down("md")]:{
        alignItems:"flex-start"
      },
      '& .headingLabels': {
        fontFamily: theme.typography.Poppins,
        fontWeight: 800,
        //// fontSize: '1.6rem',
        fontSize: '1.75rem',
        [theme.breakpoints.between("md","1240")]:{
          //// fontSize:"1.2rem",
          fontSize:"1.5rem",
        },
        [theme.breakpoints.down("md")]:{
          fontSize: '1.3rem',
          lineHeight: '2rem',
        },
        [theme.breakpoints.down("md")]:{
          fontSize: '1.2rem',       
        },

      },    
          
      '& .mainHeading': {
        margin: '0',
        fontFamily: theme.typography.Poppins,
        textTransform: 'capitalize',
        fontWeight: 900,
        //// fontSize: '4.95rem',
        fontSize: '5.4rem',
        lineHeight: '4rem',
        [theme.breakpoints.between("md","1240")]:{
          //// fontSize:"3.75rem",
          fontSize:"4.5rem",
        },
        //md
        [theme.breakpoints.down("md")]:{
          fontSize: '4rem',
          lineHeight: '4rem',
        },
        [theme.breakpoints.down("sm")]:{
          fontSize: '3.25rem',
          lineHeight: '3rem',
        },
      },
      '& .subHeading': {
        //// fontSize: '2.4rem',
        fontSize: '2.75rem',
        
        [theme.breakpoints.between("md","1240")]:{
          //// fontSize:"1.75rem",
          fontSize:"2.25rem",
        },
        [theme.breakpoints.down("md")]:{
          fontSize:"2rem",
        },
        //md
        [theme.breakpoints.down("sm")]:{
          fontSize: '1.5rem',
        },

      },
      '& .detailPara': {
        fontFamily: theme.typography.Poppins,
        marginTop: '1rem',
        fontSize: '1.05rem',
        //// fontWeight: 500,
        // fontWeight: 400,
        maxWidth:500,
        //md
        [theme.breakpoints.down("1240")]:{
          fontSize: '0.9rem',
          maxWidth:400,
        },        
        [theme.breakpoints.down("md")]:{
          textAlign:"center",
          fontSize: '0.9rem',
        },        
      },
      '& .c_button': {
        fontFamily: theme.typography.Poppins,
        background: theme.palette.primary.main,
        color: COLORS.white,
        width: '10rem',
        borderRadius: '0.5rem',
        marginTop: '1rem',
        padding: '0.75rem 1.2rem',
        textTransform:"capitalize",
        boxShadow:
          '0px 1.4px 3.6px rgba(0, 0, 0, 0.028),\n  0px 4px 10px rgba(0, 0, 0, 0.04),\n  0px 9.6px 24.1px rgba(0, 0, 0, 0.052),\n  0px 32px 80px rgba(0, 0, 0, 0.08)',
        '&:hover': {
          background:"#9c1300",
          color: COLORS.white,
          boxShadow:
            `0px 6px 22px rgba(0, 0, 0, 0.18)`,
        
        
        },
      },
      [theme.breakpoints.down('md')]: {
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: '3rem',
     
      },
      [theme.breakpoints.down('450')]: {
        marginTop: '2rem',
        '& .headingLabels': {
          fontSize: '1rem',
        },
        '& .mainHeading': {
          fontSize: '3rem',
          lineHeight: '3rem',
        },
        '& .subHeading': {
          fontSize: '1.4rem',
        },
        '& .detailPara': {
          fontSize: '0.8rem',
        },
      },
    },
  },

  '& .mainStyle': {
    fontFamily: theme.typography.Poppins,
    color: theme.palette.primary.main,
  },
}))

const HomeAboutV2 = () => {
  return (
    <RootStyle>
      <Grid container className="aboutSectionWrapper">
        <Grid item sm={12} md={6} className="imageWrapper">
          <img src={aboutImg} alt="bg image" className="aboutImage" />
        </Grid>
        <Grid item sm={12} md={6} className="contentWrapper">
          <Stack className="contentMain">
            <Typography variant="h4" className="headingLabels" m={0}>
              Streaming<strong className="mainStyle">.</strong> Sharing
              <strong className="mainStyle">.</strong> Content
              <strong className="mainStyle">.</strong>
            </Typography>
            <Typography className="mainHeading" variant="h2">
              ALL IN ONE
            </Typography>
            <Typography variant="h4" className="subHeading">
              <span className="mainStyle">Magnet Fishing </span>Source
            </Typography>
            <Typography variant="body1" className="detailPara">
              Magnet Fishing USA is the ultimate source for magnet fishing. We
              are the first social network dedicated 100 % to the sport. Magnet
              Fishing USA lets you interact with other magnet fishers and enjoy
              a heightened digital magnet fishing experience.
              <br />
              Our Tools, Content, and Applications reveal the largest collection
              of premium Finds and their exact Locations including Google Maps
              Street Views. You can also interact with anybody who posts their
              finds.
            </Typography>
            <Button
              variant="contained"
              className="c_button"
              endIcon={<HiOutlineArrowNarrowRight size={'1.5rem'} />}
            >
              Learn More
            </Button>
          </Stack>
        </Grid>
      </Grid>
    </RootStyle>
  )
}

export default HomeAboutV2
