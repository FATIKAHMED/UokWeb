import React from 'react'
import { makeStyles } from '@mui/styles';
import { Button, Container, Grid, Box, IconButton } from '@mui/material'
import { HiOutlineArrowNarrowRight } from 'react-icons/hi'
import heroImg from "../../Assets/img/heroImg.png"
import bg from "../../Assets/img/heroImgBg.svg"
import { BsFillPlayFill } from "react-icons/bs"
import VideoPreviewModal from '../../Components/VideoPreviewModal';


const useStyles = makeStyles((theme) => ({
    container: {
        marginTop: "4rem",
        marginBottom: "5rem",

        "& .heroGridCont": {
            [theme.breakpoints.down("md")]: {
                display: "flex",
                justifyContent: "center",
            },
            "& .grid1": {
                position: "relative",
                "& .playBtn": {
                    position: "absolute",
                    top: "50%",
                    left: "50%",
                    transform: "translate(-30%,-30%)",
                    zIndex: 1,
                },

            }
        },
        "& .imgBox": {
            marginTop: "1rem",
            // minHeight:"600px",
            // height:"100%",
            "boxShadow": "3.4px 3.3px 2.2px rgba(0, 0, 0, 0.029),\n  8.1px 7.8px 5.3px rgba(0, 0, 0, 0.042),\n  15.3px 14.8px 10px rgba(0, 0, 0, 0.052),\n  27.3px 26.4px 17.9px rgba(0, 0, 0, 0.062),\n  51px 49.3px 33.4px rgba(0, 0, 0, 0.074),\n  122px 118px 80px rgba(0, 0, 0, 0.1)"
        },

        "& .mask": {
            "WebkitMaskImage": `url(${bg})`,
            "maskImage": `url(${bg})`,
            "background": `url(${bg}) no-repeat`,
            "WebkitMaskSize": "100%",
            "maskSize": "100%",
            "WebkitMaskRepeat": "no-repeat",
            "maskRepeat": "no-repeat",
            backgroundSize: "cover",
            maxWidth: "100%",
            width: "100%",
            [theme.breakpoints.down("md")]: {
                backgroundSize: "contain",
            },
        },
        "& .image": {
            maxWidth: "100%",
            height: "100%",
            marginTop: "5rem",
            [theme.breakpoints.down("md")]: {
                marginTop: "0",
                paddingTop: "6rem",

            },
            [theme.breakpoints.between("400", "sm")]: {
                paddingTop: "5rem",

            },
            [theme.breakpoints.down("400")]: {
                paddingTop: "3rem",

            }
        },

        "& .heading": {
            fontFamily: theme.typography.Poppins,
            fontWeight: 900,
            color: theme.palette.dark,
            // fontSize: "3.5rem",
            fontSize: "3.2rem",
            marginBottom: "0",
            lineHeight: "3rem",
            "& strong": {
                color: theme.palette.primary.main,
            },
            [theme.breakpoints.down("sm")]: {
                textAlign: "center"
            },
            [theme.breakpoints.down("400")]: {
                fontSize: "2rem",
                margin: 0
            }
        },
        "& .para": {
            // fontFamily: theme.typography.MazzardH,
            fontFamily: theme.typography.Poppins,
            color: theme.palette.black,
            margin: '0',
            marginBottom: "2.5rem",
            marginTop: "0.75rem",
            fontSize: '1.5rem',
            textTransform: "capitalize",
            fontWeight:600,
            [theme.breakpoints.down("400")]: {
                fontSize: "1.2rem",
            }

        },
        "& .cta": {
            fontFamily: theme.typography.Poppins,
            textTransform: "capitalize",
            fontWeight: 600,
            fontSize: "1rem",
            padding: ".75rem .5rem",
            borderRadius: ".75rem",
            width: "14rem",
            // "boxShadow": "0px 5px 20px 10px #FFDEE8",
            "boxShadow": "2.6px 2.9px 2.2px rgba(255,22,91, 0.017),\n  6.3px 6.9px 5.3px rgba(255,22,91, 0.025),\n  11.8px 13px 10px rgba(255,22,91, 0.031),\n  21px 23.2px 17.9px rgba(255,22,91, 0.037),\n  39.3px 43.4px 33.4px rgba(255,22,91, 0.045),\n  94px 104px 80px rgba(255,22,91, 0.06)"


        },
    },
    description: {
        display: 'flex',
        flexDirection: 'column',
        justifyContent: "center",
        alignItems: "flex-start",
        [theme.breakpoints.down("md")]: {
            alignItems: "center",

        }
    },
}))

const HomeHeroOld = () => {
    const classes = useStyles()
    const [open, setOpen] = React.useState(false);

    const openModal = () => {
        setOpen(true)
    }
    const closeModal = () => {
        setOpen(false)
    }
    return (
        <Container className={classes.container}>
            <Grid container spacing={4} className={"heroGridCont"} >
                <Grid item md={6} className="grid1">
                    {/* <Box component="div" className="heroImg mask">
                        <img src={heroImg} alt="bg image" />
                    </Box> */}
                    <IconButton onClick={openModal} className="playBtn" color="primary">
                        <BsFillPlayFill size={"10rem"} />
                    </IconButton>
                    <Box component="div" className="mask imgBox">
                        <img src={heroImg} alt="bg image" className='image' />
                    </Box>

                </Grid>
                <Grid item md={6} className={classes.description}>
                    <h1 className='heading'>Magnet Fishing USA<strong className='dot'>.</strong></h1>
                    <p className='para'>The hub for magnet fishers</p>
                    <Button className='cta' variant="contained" endIcon={<HiOutlineArrowNarrowRight size={"2rem"} />}>
                        Learn More
                    </Button>
                </Grid>

            </Grid>
            {open && <VideoPreviewModal open={open} onClose={closeModal} />}
        </Container>
    )
}

export default HomeHeroOld