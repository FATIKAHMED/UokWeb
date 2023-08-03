import React from 'react'
import { makeStyles } from '@mui/styles'
import { Container, Box } from '@mui/material'
import { Slider } from '../../Components/Slider'

const useStyles = makeStyles((theme) => ({
  section: {
    // background:"#f6f6f6"
    background: theme.palette.sectionBg,
    padding: '4rem 0',
  },
  container: {
    // marginTop: "7rem",
    // marginBottom: "7rem",

    '& .heading': {
      fontFamily: theme.typography.Poppins,
      // color: theme.palette.black,
      color: '#000',
      marginBottom: '0',
      textAlign: 'center',
      '& .dot': {
        color: theme.palette.dark,
      },
      '& .title': {
        fontFamily: theme.typography.Poppins,
        fontSize: '4rem',
        fontWeight: 900,
        textTransform: 'uppercase',
        margin: 0,
        lineHeight: '3rem',
        // marginBottom: "-1rem ",
        [theme.breakpoints.down('600')]: {
          fontSize: '2.5rem',
        },
      },
      '& .subTitle': {
        fontFamily: theme.typography.Poppins,
        fontSize: '1.5rem',
        // fontWeight: 500,
        fontWeight: 600,
        color: theme.palette.dark,
        textTransform: 'uppercase',
        [theme.breakpoints.down('450')]: {
          fontSize: '1rem',
        },
      },
    },
    '& .para': {
      fontFamily: theme.typography.MazzardH,
      fontSize: '1rem',
      textTransform: 'capitalize',
    },
    '& .cta': {
      fontFamily: theme.typography.MazzardH,
      textTransform: 'capitalize',
    },
  },
}))

const HomeGallery = () => {
  const classes = useStyles()
  return (
    <section className={classes.section}>
      <Container className={classes.container}>
        <Box component="div" className="heading">
          <h2 className="title">
            Gallery<span className="dot">.</span>
          </h2>
          <h2 className="subTitle">What other people have found</h2>
        </Box>
        <Slider />
      </Container>
    </section>
  )
}

export default HomeGallery
