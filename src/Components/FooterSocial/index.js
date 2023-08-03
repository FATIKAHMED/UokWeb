import React from 'react'
import { makeStyles, styled, useTheme } from '@mui/styles';
import { Button, Container, Grid, Box, InputBase, useMediaQuery } from '@mui/material'
import logo from '../../Assets/logoWhite.svg'
import { Link } from 'react-router-dom';
import { HiOutlineArrowNarrowRight } from 'react-icons/hi'
import fb from "../../Assets/Social/fbWhite.svg";
import ig from "../../Assets/Social/igWhite.svg";
import tw from "../../Assets/Social/twitterWhite.svg";
import go from "../../Assets/Social/googleWhite.svg";


const useStyles = makeStyles((theme) => ({
    section: {
        background: "#0F0B82",
        // padding: "5rem 0",
        height: "136px",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        // "& img":{
        //     "filter": "invert(100%) sepia(0%) saturate(7500%) hue-rotate(223deg) brightness(115%) contrast(106%)"
        // }
    }


}))

const FooterSocial = () => {
    const classes = useStyles();
    const theme = useTheme();
    const mobile = useMediaQuery(theme.breakpoints.down("md"));
    return (
        <>
            <section className={classes.section}>
                <Container>
                    <Box sx={{ display: "flex", gap: ".75rem", justifyContent: "center", alignItems: 'center' }}>
                        <Link to={{ pathname: "https://www.facebook.com/" }} target="_blank">
                            <img src={fb} alt='facebook' height={"27px"} width="100%" />
                        </Link>
                        <Link to={{ pathname: "https://www.instagram.com/" }} target="_blank">
                            <img src={ig} alt='facebook' height={"27px"} width="100%" />
                        </Link>
                        <Link to={{ pathname: "https://www.twitter.com/" }} target="_blank">
                            <img src={tw} alt='facebook' height={"27px"} width="100%" />
                        </Link>
                        <Link to={{ pathname: "https://www.google.com/" }} target="_blank">
                            <img src={go} alt='facebook' height={"27px"} width="100%" />
                        </Link>

                    </Box>



                </Container>
            </section>
        </>
    )
}

export default FooterSocial