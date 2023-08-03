import React from 'react'
import { makeStyles } from '@mui/styles';
import { Button, Container, Grid, Box } from '@mui/material'
import { HiOutlineArrowNarrowRight } from 'react-icons/hi'
import aboutImg from "../../Assets/AboutUS/Find-Artillery.jpg"

const useStyles = makeStyles((theme) => ({
    section: {
        // background:"#f6f6f6"
        padding: "4rem 0"
    },
    container: {
        marginTop: "7rem",
        marginBottom: "5rem",
        display: "flex",
        gap: "3rem",
        [theme.breakpoints.down("931")]: {
            flexDirection: "column",
            gap: "2rem",
            margin: '3rem 0'
        },
        "& .imgBox": {
            // marginTop: "1rem",
            maxHeight: "600px",
            height: "100%",
            flex: 2,
            [theme.breakpoints.down("930")]: {
                alignSelf:"center"
            },
        },
        "& .mask": {
            // "background": `url(${aboutImg}) no-repeat`,
            // backgroundSize:"100%",
            borderRadius: "20px",
            // "boxShadow": "14px 29px 61px -3px rgba(0,0,0,0.1),10px 11px 29px -7px rgba(0,0,0,0.1)",
            "boxShadow": "3.4px 3.3px 2.2px rgba(0, 0, 0, 0.029),\n  8.1px 7.8px 5.3px rgba(0, 0, 0, 0.042),\n  15.3px 14.8px 10px rgba(0, 0, 0, 0.052),\n  27.3px 26.4px 17.9px rgba(0, 0, 0, 0.062),\n  51px 49.3px 33.4px rgba(0, 0, 0, 0.074),\n  122px 118px 80px rgba(0, 0, 0, 0.1)"
        },
        "& .image": {
            borderRadius: "20px",
            maxWidth: "100%",
            width: "100%",
            height: "100%",
            minHeight: "600px",
            maxHeight: "600px",
            [theme.breakpoints.down("930")]: {
                minHeight: "400px",
                maxHeight: "400px",
                borderRadius: "20px",
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
            marginTop: "1rem",
            boxShadow: "5px 15px 25px rgba(0, 0, 0, 0.15)",
            // "boxShadow": "2.6px 2.9px 2.2px rgba(255,22,91, 0.017),\n  6.3px 6.9px 5.3px rgba(255,22,91, 0.025),\n  11.8px 13px 10px rgba(255,22,91, 0.031),\n  21px 23.2px 17.9px rgba(255,22,91, 0.037),\n  39.3px 43.4px 33.4px rgba(255,22,91, 0.045),\n  94px 104px 80px rgba(255,22,91, 0.06)"


        },
    },
    description: {
        display: 'flex',
        flexDirection: 'column',
        justifyContent: "center",
        alignItems: "flex-start",
        flex: 2,
        [theme.breakpoints.down("930")]: {
            alignItems: "center",
            textAlign: "center",
        },
        "& .header": {
            // fontFamily: theme.typography.MazzardH,
            fontFamily: theme.typography.Poppins,
            // color: theme.palette.black,
            margin: "0",
            "& strong": {
                color: theme.palette.primary.main,
            },
            "& .headingSub": {
                margin: "0",
                // fontSize: "2rem",
                fontWeight: 800,
                fontSize: "1.9rem",
                lineHeight: "30px",
                [theme.breakpoints.down("1110")]: {
                    fontSize: "1.5rem",

                },
                [theme.breakpoints.down("930")]: {
                    fontSize: "2rem",
                    textAlign: "center",
                    width: "100%",
                },
                [theme.breakpoints.down("600")]: {
                    fontSize: "1.2rem",
                },
               
                [theme.breakpoints.down("350")]: {
                    fontSize: "1rem",
                },
            },
            // [theme.breakpoints.between("900,980")]: {
            //     fontSize: "2rem",
            // },
           
            
        },
        "& .headingMain": {
            margin: "0",
            // fontSize: "5rem",
            textTransform: "capitalize",
            fontWeight: 900,
            lineHeight: "5rem",

            fontSize: "5.2rem",
            letterSpacing: "3px",
            wordSpacing: "1px",

            [theme.breakpoints.down("1110")]: {
                fontSize: "4.4rem",
                // margin: "-0.5rem 0",             
            },
            [theme.breakpoints.down("930")]: {
                // fontSize: "3.4rem",
                // lineHeight:"3rem"
                fontSize: "4.4rem",
            },
            [theme.breakpoints.down("600")]: {
                fontSize: "3.4rem",
                lineHeight:"3rem"
            },
            [theme.breakpoints.down("440")]: {
                fontSize: "2.8rem",
            },
            [theme.breakpoints.down("340")]: {
                fontSize: "2.5rem",
            }
        },
        "& .headingSubMain": {
            margin: "0",            
            fontWeight: 400,
            fontSize: "2.75rem",
            lineHeight: "40px",
            marginBottom: "1rem",
            [theme.breakpoints.down("1110")]: {
                fontSize: "2.25rem",
            },
            [theme.breakpoints.down("600")]: {
                fontSize: "1.25rem",
            },
            [theme.breakpoints.down("400")]: {
                fontSize: "1rem",
            }
        },
        "& .textPrimary": {
            color: theme.palette.primary.main,
        },
        "& .para": {
            fontSize: '1rem',
            maxWidth: "33rem",
            fontFamily: theme.typography.Poppins,
            letterSpacing: "1px",
            wordSpacing: "1px",
            color: "#000",
            // textTransform: "capitalize",
            [theme.breakpoints.down("930")]: {
                maxWidth: '100%',
                textAlign: "center"
            }
        },
        [theme.breakpoints.down("960")]: {
            fontSize: "2rem",
        },
        [theme.breakpoints.down("450")]: {
            fontSize: "1.2rem",
        }
    },


}))

const HomeAbout = () => {
    const classes = useStyles()
    return (
        <section className={classes.section}>
            <Container className={classes.container}>
                {/* <Grid container spacing={4}> */}
                {/* <Grid item md={6}> */}
                <Box component="div" className="imgBox">
                    <img src={aboutImg} alt="bg image" className='image' />
                </Box>
                {/* </Grid> */}
                {/* <Grid item md={6} className={classes.description}> */}
                <Box className={classes.description}>
                    <Box component='div' className="header">
                        <h2 className='headingSub'>Streaming<strong className='dot'>.</strong> Sharing<strong className='dot'>.</strong> Content<strong className='dot'>.</strong></h2>
                        <h2 className='headingMain'>ALL IN ONE</h2>
                        <h2 className='headingSubMain'><span className='textPrimary'>Magnet Fishing </span>Source</h2>
                    </Box>
                    <p className='para'>Magnet Fishing USA is the ultimate source for magnet fishing. We are the first social network dedicated 100 % to the sport. Magnet Fishing USA lets you interact with other magnet fishers and enjoy a heightened digital magnet fishing experience.<br />
                        Our Tools, Content, and Applications reveal the largest collection of premium Finds and their exact Locations including Google Maps Street Views. You can also interact with anybody who posts their finds.</p>
                    <Button className='cta' variant="contained" endIcon={<HiOutlineArrowNarrowRight size={"2rem"} />}>
                        Learn More
                    </Button>
                </Box>

                {/* </Grid> */}
                {/* </Grid> */}

            </Container>
        </section>
    )
}

export default HomeAbout