import React from 'react'
import { makeStyles } from '@mui/styles';
import { Container, Grid, Box, Button } from '@mui/material'
import { Link } from 'react-router-dom';
import img from '../../Assets/Gallery/newspaperBox.png'
import img2 from '../../Assets/Gallery/blade.jpg'
import img3 from '../../Assets/Gallery/safe.jpg'
import BlogCard from '../../Components/BlogCard';
import { HiOutlineArrowNarrowRight } from 'react-icons/hi';


const useStyles = makeStyles((theme) => ({
    section: {
        paddingTop: "10rem",
        paddingBottom: "20rem",
        [theme.breakpoints.down("900")]: {
            paddingTop: "7rem",
            paddingBottom: "7rem",
        
        }
    },
    container: {
        // marginTop: "7rem",
        // marginBottom: "7rem",

        "& .gridContBlog": {
            [theme.breakpoints.down("900")]: {
                display: "flex",
                flexDirection: "column",
            }
        },
        "& .heading": {
            // fontFamily: theme.typography.MazzardH,
            // color: theme.palette.black,
            fontFamily: theme.typography.Poppins,
            color: "#000",
            textAlign: "center",
            fontSize: "4rem",
            marginBottom: "2rem",
            fontWeight: 900,
            textTransform: "uppercase",
            [theme.breakpoints.down("600")]: {
                fontSize: "2.5rem",
            },
            "& .dot": {
                color: theme.palette.dark,
            },

        },
        "& .ctaBox": {
            display: "flex", justifyContent: "flex-end", marginTop: "3rem",
            [theme.breakpoints.down("600")]: {
                justifyContent: 'center'
            },
        },
        "& .cta": {
            fontFamily: theme.typography.Poppins,
            textTransform: "capitalize",
            fontWeight: 600,
            fontSize: "1rem",
            padding: ".75rem .5rem",
            borderRadius: ".75rem",
            maxWidth: "18rem",
            width: "100%",
            marginTop: "1rem",
            boxShadow: "5px 15px 25px rgba(0, 0, 0, 0.15)",
            [theme.breakpoints.down("400")]: {
                maxWidth: "100%",
                width: "100%",
            },
        },
    },

}))
const desc = "Join the Magnet Fishing USA Facebook Community and share anything magnet fishing related. You can communicate directly with fellow magnet fishers and even link up with them to go on an adventure. Check us out here!.png"
const HomeBlog = () => {
    const classes = useStyles()
    return (
        <section className={classes.section}>
            <Container className={classes.container}>
                <h2 className="heading">
                    Our Blog<span className='dot'>.</span>
                </h2>
                <Grid container spacing={2} className="gridContBlog">
                    <Grid item md={4}>
                        <BlogCard src={img} title="Blog Title Goes Here" desc={desc} link="/" />
                    </Grid>
                    <Grid item md={4}>
                        <BlogCard src={img2} title="Blog Title Goes Here" desc={desc} link="/" />
                    </Grid>
                    <Grid item md={4}>
                        <BlogCard src={img3} title="Blog Title Goes Here" desc={desc} link="/" />
                    </Grid>

                </Grid>
                <Box className='ctaBox'>
                    <Button className='cta' variant="contained" endIcon={<HiOutlineArrowNarrowRight size={"2rem"} />}>
                        Check out all blogs
                    </Button>
                </Box>
            </Container>
        </section>
    )
}

export default HomeBlog