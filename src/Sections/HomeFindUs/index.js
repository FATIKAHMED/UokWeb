import React from 'react'
import { makeStyles, styled, useTheme } from '@mui/styles'
import { Button, Container, Grid, Box, useMediaQuery, Card, CardContent, Stack, Typography } from '@mui/material'
import { HiOutlineArrowNarrowRight } from 'react-icons/hi'
import vc from '../../Assets/uokweb/vc.jpg'



const MapContainer = styled(Box)(({ theme }) => ({
  // [theme.breakpoints.down('lg')]: {
  //  paddingTop:"96px",
  //  paddingLeft:"57px",
  // },
  //  [theme.breakpoints.up('lg')]: {
  //   paddingTop:"128px",
  //   paddingLeft:"77px",
  //  },
   [theme.breakpoints.up('xl')]: {
    paddingTop:"100px",
    paddingLeft:"70px",
  },
}));

const useStyles = makeStyles((theme) => ({
  section: {
    backgroundSize: 'contain',
    boxShadow:
      '0px 0px 1.4px rgba(0, 0, 0, 0.017),\n  0px 0px 3.3px rgba(0, 0, 0, 0.024),\n  0px 0px 6.3px rgba(0, 0, 0, 0.03),\n  0px 0px 11.2px rgba(0, 0, 0, 0.036),\n  0px 0px 20.9px rgba(0, 0, 0, 0.043),\n  0px 0px 50px rgba(0, 0, 0, 0.06)',
    width: '100%',
    // [theme.breakpoints.down('lg')]: {
    // height: '34.094rem',
    // },
    //   [theme.breakpoints.up('lg')]: {
    // height: '45.459rem',
    //   },
      [theme.breakpoints.up('xl')]: {
        height: '49.875rem',
      },
    },

  mapBox: {
    // fontFamily: theme.typography.MazzardH,
    // background: theme.palette.primary.main,
    
    fontFamily: theme.typography.Poppins,
    background: "#FFFFFF",
    borderRadius: 24,
    textTransform: 'uppercase',
    boxShadow:
      '2.8px 2.8px 2.2px rgba(0, 0, 0, 0.02),\n  6.7px 6.7px 5.3px rgba(0, 0, 0, 0.028),\n  12.5px 12.5px 10px rgba(0, 0, 0, 0.035),\n  22.3px 22.3px 17.9px rgba(0, 0, 0, 0.042),\n  41.8px 41.8px 33.4px rgba(0, 0, 0, 0.05),\n  100px 100px 80px rgba(0, 0, 0, 0.07)',
    // [theme.breakpoints.down('lg')]: {
    //   width:"574px",
    //   padding: '44px 44px',
    // },
    // [theme.breakpoints.up('lg')]: {
    //   width:"766px",
    //   padding: '58.33px 58.33px',
    // },
    [theme.breakpoints.up('xl')]: {
      width:"840px",
      padding: '56px 64px',
    },
    '& .heading': {
      // lineHeight: "50px",
      color: '#fff',
      textTransform: 'none',
      margin: 0,
      color: "#141737",
      fontWeight: 800,
      // [theme.breakpoints.down('lg')]: {
      //   fontSize: '3.25rem',
      //   lineHeight: '3.25rem',
      // },
      // [theme.breakpoints.up('lg')]: {
      //   fontSize: '4.313rem',
      //   lineHeight: '4.313rem',
      // },
      [theme.breakpoints.up('xl')]: {
        fontSize: '4.75rem',
        lineHeight: '4.75rem',
        marginBottom:'40px',
       
      },
    },
    '& .para': {
      fontFamily: theme.typography.Poppins,
      color: '#141737',
      display: '-webkit-box',
      overflow: 'hidden',
      maxWidth: '712px',
      fontWeight: '400',
      whiteSpace: 'pre-wrap',
      textOverflow: 'ellipsis',
      WebkitBoxOrient: 'vertical',
      WebkitLineClamp: '6',
      textTransform: 'capitalize',
      // [theme.breakpoints.down('lg')]: {
      //   fontSize: '0.875rem',
      //   marginBottom: '1.375rem',
      // },
      // [theme.breakpoints.up('lg')]: {
      //   fontSize: '1.139rem',
      //   marginBottom: '1.813rem',
      // },
      [theme.breakpoints.up('xl')]: {
        fontSize: '1.25rem',
        marginBottom: '1.8rem',
      },
    },
    '& .cta': {
      fontFamily: theme.typography.Poppins,
      textTransform: 'capitalize',
      fontWeight: 700,
      color: '#FFFFFF',
      borderRadius: '6.25rem',
      backgroundColor: '#D83C3B',
      boxShadow:
        '2.8px 2.8px 2.2px rgba(0, 0, 0, 0.02),\n  6.7px 6.7px 5.3px rgba(0, 0, 0, 0.028),\n  12.5px 12.5px 10px rgba(0, 0, 0, 0.035),\n  22.3px 22.3px 17.9px rgba(0, 0, 0, 0.042),\n  41.8px 41.8px 33.4px rgba(0, 0, 0, 0.05),\n  100px 100px 80px rgba(0, 0, 0, 0.07)',
      [theme.breakpoints.down('lg')]: {
        fontSize: '14px',
      padding: '16.4px 33px 16.4px 33px',
      },
      [theme.breakpoints.up('lg')]: {
        fontSize: '18.22px',
      padding: '22px 44px 22px 44px',
      },
      [theme.breakpoints.up('xl')]: {
        fontSize: '20px',
      padding: '18px 51px 25px 51px',
      },
    },
  },
}))

const HomeFindUs = () => {
  const classes = useStyles()
  const theme = useTheme()
  const mobile = useMediaQuery(theme.breakpoints.down('md'))
  return (
   <>
   <Container>
   <Card sx={{marginTop:"3rem", paddingTop:"1rem", marginBottom:"7rem"}}>
   <CardContent>
   <Box sx={{display:"flex", flexDirection:"column", alignItems:"center"}}>
   <Stack>
  
   <Typography
   sx={{
     fontSize: "2rem",
     fontWeight: "700",
     color: "darkgreen",
     textAlign: "center",
     marginBottom: "2rem",
   }}
 >
 Our Honourable Vice Chancellor
 </Typography>
 <Stack direction="row" justifyContent="center" alignItems="center">
   <img src={vc} width={400} height={400} alt='VC picture'/>
   </Stack>
   </Stack>
   </Box>
   </CardContent>
   </Card>
   
   </Container>
   </>
  )
}

export default HomeFindUs
