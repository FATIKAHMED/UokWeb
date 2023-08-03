import * as React from 'react';
import { Box, Container, AppBar, Toolbar, IconButton } from '@mui/material';
import { makeStyles } from '@mui/styles';
import { Link } from "react-router-dom";
import { MdMenu } from "react-icons/md";
import logo from "../../Assets/logo.svg";
import fb from "../../Assets/Social/fb.svg";
import ig from "../../Assets/Social/ig.svg";
import tw from "../../Assets/Social/tw.svg";
import go from "../../Assets/Social/go.svg";
import NavigationDrawer from '../NavigationDrawer';

const useStyles = makeStyles((theme) => ({
    AppBar: {
        "boxShadow": "0px 12px 18px 3px rgba(237,235,235,0.75)",
        "WebkitBoxShadow": "0px 12px 18px 3px rgba(237,235,235,0.75)",
        "MozBoxShadow": "0px 12px 18px 3px rgba(237,235,235,0.75)",
        background: "white",
        zIndex: 10,
        "& .MuiToolbar-root": {
            borderBottom: "1px solid #ff0753"
        },      
    }
}))

export default function NavbarHomeOld() {
    const classes = useStyles()
    const [openDrawer, setOpenDrawer] = React.useState(false);

    return (
        // <Box sx={{ flexGrow: 0 }}>
            <AppBar position="static" color='transparent' elevation={0} className={classes.AppBar}>
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
                        <Box component="div" sx={{ flexGrow: 1,textAlign:"center", padding: "1rem 0" }}>
                            <img src={logo} alt="logo" height={"100%"} width="auto" />
                        </Box>
                        <Box sx={{display:"flex",gap:".75rem"}}>
                            <Link to={{ pathname: "https://www.facebook.com/" }} target="_blank">
                                <img src={fb} alt='facebook' height={"20px"} width="100%"/>
                            </Link>
                            <Link to={{ pathname: "https://www.instagram.com/" }} target="_blank">
                                <img src={ig} alt='facebook' height={"20px"} width="100%"/>
                            </Link>
                            <Link to={{ pathname: "https://www.twitter.com/" }} target="_blank">
                                <img src={tw} alt='facebook' height={"20px"} width="100%"/>
                            </Link>
                            <Link to={{ pathname: "https://www.google.com/" }} target="_blank">
                                <img src={go} alt='facebook' height={"20px"} width="100%"/>
                            </Link>
                           
                        </Box>
                        {openDrawer && <NavigationDrawer open={openDrawer} setOpen={setOpenDrawer}/>}

                    </Toolbar>
                </Container>
            </AppBar>

        // </Box>
    );
}