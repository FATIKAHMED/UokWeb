
import * as React from 'react';
import { Box, Container, AppBar, Toolbar, IconButton, Avatar } from '@mui/material';
import { makeStyles } from '@mui/styles';
import { Link } from "react-router-dom";
import { MdMenu } from "react-icons/md";
import logo from "../../Assets/logo.svg";
import avatar from "../../Assets/Gallery/avatar.svg"

import fb from "../../Assets/Social/fb.svg";
import ig from "../../Assets/Social/ig.svg";
import tw from "../../Assets/Social/tw.svg";
import go from "../../Assets/Social/go.svg";
import NavigationDrawer from '../NavigationDrawer';

import CssBaseline from '@mui/material/CssBaseline';
import useScrollTrigger from '@mui/material/useScrollTrigger';
import Slide from '@mui/material/Slide';
import isEmpty from '../../Utils/isEmpty';
import DropdownProfile from '../DropdownProfile';
import useAuth from '../../Hooks/useAuth';
import { useScrollPosition } from '../../Hooks/useScrollPosition';

const useStyles = makeStyles((theme) => ({
    AppBar: {
        // "boxShadow": "0px 12px 18px 3px rgba(237,235,235,0.75)",
        // "WebkitBoxShadow": "0px 12px 18px 3px rgba(237,235,235,0.75)",
        // "MozBoxShadow": "0px 12px 18px 3px rgba(237,235,235,0.75)",
        // background: "white",
        // zIndex: 12,
        // "& .MuiToolbar-root": {
        //     borderBottom: "1px solid #ff0753",
        //     padding: "0"
        // },
        "& .logoBox": {
            flexGrow: 1, textAlign: "center",
            padding: ".5rem 0",
            "& img": { maxWidth: "100%", height: "auto" },
        },
        background: "white",
        "boxShadow": "0px 1.9px 5.6px rgba(0, 0, 0, 0.035),\n  0px 15px 45px rgba(0, 0, 0, 0.07)",
        "WebkitBoxShadow": "0px 1.9px 5.6px rgba(0, 0, 0, 0.035),\n  0px 15px 45px rgba(0, 0, 0, 0.07)",
        "MozBoxShadow": "0px 1.9px 5.6px rgba(0, 0, 0, 0.035),\n  0px 15px 45px rgba(0, 0, 0, 0.07)",
        zIndex: 10,
        "& .MuiToolbar-root": {
            borderBottom: "1px solid #ff0753",
            padding: "0"

        },
        "&.glassmorphism":{
            background:"rgba(255,255,255,0.7) !important",
            backdropFilter:"blur(20px)",
        }

       
    }
}))
function HideOnScroll(props) {
    const { children, window } = props;
    // Note that you normally won't need to set the window ref as useScrollTrigger
    // will default to window.
    // This is only being set here because the demo is in an iframe.
    const trigger = useScrollTrigger({
        target: window ? window() : undefined,
    });

    return (
        <Slide appear={false} direction="down" in={!trigger}>
            {children}
        </Slide>
    );
}

export default function NavbarMobile() {
    const classes = useStyles()
    const [openDrawer, setOpenDrawer] = React.useState(false);
    let { user } = useAuth();
    const scrollPosition = useScrollPosition();

    return (
        <>
            <HideOnScroll >

                {/* <Box sx={{ flexGrow: 1 }}> */}
                <AppBar position="sticky" color='inherit' elevation={0}  className={`${classes.AppBar} ${scrollPosition>0?"glassmorphism":""}`}>
                    <Container>
                        <Toolbar className='toolbar'>
                            <IconButton
                                size="large"
                                edge="start"
                                color="primary"
                                aria-label="menu"
                                sx={{ mr: 2 }}
                                onClick={() => setOpenDrawer(true)}
                            >
                                <MdMenu />
                            </IconButton>
                            <Box component="div" className="logoBox">
                                <img src={logo} alt="logo" height={"100%"} width="auto" />
                            </Box>
                            <Box sx={{ display: "inline-flex", justifyContent: "flex-end", alignItems: "center", gap: ".2rem" }}>
                                <IconButton variant="outlined">
                                    <Avatar src={!isEmpty(user) ? user?.imageUrl : avatar} />
                                </IconButton>
                                <DropdownProfile />
                            </Box>
                            {/* <Box sx={{ display: "flex", gap: ".75rem" }}>
                            <Link to={{ pathname: "https://www.facebook.com/" }} target="_blank">
                                <img src={fb} alt='facebook' height={"20px"} width="100%" />
                            </Link>
                            <Link to={{ pathname: "https://www.instagram.com/" }} target="_blank">
                                <img src={ig} alt='facebook' height={"20px"} width="100%" />
                            </Link>
                            <Link to={{ pathname: "https://www.twitter.com/" }} target="_blank">
                                <img src={tw} alt='facebook' height={"20px"} width="100%" />
                            </Link>
                            <Link to={{ pathname: "https://www.google.com/" }} target="_blank">
                                <img src={go} alt='facebook' height={"20px"} width="100%" />
                            </Link>

                        </Box> */}
                            {openDrawer && <NavigationDrawer open={openDrawer} setOpen={setOpenDrawer} />}
                        </Toolbar>
                    </Container>
                </AppBar>
                {/* </Box> */}
            </HideOnScroll>

        </>
    );
}