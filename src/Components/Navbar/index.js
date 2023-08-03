import * as React from "react";
import {
  Box,
  Container,
  AppBar,
  Toolbar,
  IconButton,
  useMediaQuery,
} from "@mui/material";
import { makeStyles, useTheme } from "@mui/styles";
import { Link, NavLink, useLocation } from "react-router-dom";
import { MdMenu } from "react-icons/md";
import logo from "../../Assets/logo.svg";

const useStyles = makeStyles((theme) => ({
  AppBar: {
    // "boxShadow": "0px 12px 18px 3px rgba(237,235,235,0.75)",
    // "WebkitBoxShadow": "0px 12px 18px 3px rgba(237,235,235,0.75)",
    // "MozBoxShadow": "0px 12px 18px 3px rgba(237,235,235,0.75)",
    //
    // "WebkitBoxShadow": "0 3px 6px rgb(0 0 0 / 16%)",
    // "boxShadow": "0 3px 6px rgb(0 0 0 / 16%)",
    // "MozBoxShadow": "0 3px 6px rgb(0 0 0 / 16%)",
    background: "#3bb78f",
backgroungImage: "linear-gradient(315deg, #3bb78f 0%, #0bab64 74%)",
    zIndex: 10,
    flex: 0,
    "& .MuiToolbar-root": {
      // borderBottom: "1px solid #ff0753"
    },
    "& .toolbar": {
      padding: 0,
      "& a": {
        textDecoration: "none",
        minWidth: "max-content",
      },
    },
    "& .linkBox": {
      display: "flex",
      justifyContent: "flex-end",
      // gap: "5.5rem",
      gap: "4.8rem",
      flex: 1,
      fontSize: "1.1rem",
      fontFamily: theme.typography.Poppins,
      fontWeight: 500,
      "& a": {
        color: "black",
      },
      "& .active": {
        fontWeight: 600,
        color: theme.palette.primary.main,
      },
    },
    "& .linkBoxMb": {
      display: "flex",
      justifyContent: "flex-end",
      gap: "4rem !important",
    },
  },
}));
const black = "#343434";
const primary = "#ff0753";

const Navbar = () => {
  const classes = useStyles();
  const location = useLocation();
  const theme = useTheme();
  const mobile = useMediaQuery(theme.breakpoints.down("1012"));

  return (
    // <Box sx={{ flexGrow: 0 }}>
    <AppBar
      position="static"
      color="transparent"
      elevation={0}
      className={classes.AppBar}
    >
      <Container maxWidth="xl" disableGutters="true">
        <Toolbar className="toolbar">
          {/* <IconButton
                            size="large"
                            edge="start"
                            color="primary"
                            aria-label="menu"
                            sx={{ mr: 2 }}
                        >
                            <MdMenu />
                        </IconButton> */}
          <Box
            component="div"
            sx={{ textAlign: "center", padding: "1rem 0", flex: 0 }}
          >
            <img src={logo} alt="logo" height={"100%"} width="auto" />
          </Box>
          <Box className={`${mobile ? "linkBoxMb" : ""} linkBox`}>
            <NavLink
              to="/"
              className={location?.pathname === "/" ? "active" : ""}
            >
              Home
            </NavLink>
            <NavLink
              to="/about"
              className={location?.pathname === "/about" ? "active" : ""}
            >
              About us
            </NavLink>
            <NavLink
              to="/gallery"
              className={location?.pathname === "/gallery" ? "active" : ""}
            >
              Gallery
            </NavLink>

            <NavLink
              to="/location"
              className={location?.pathname === "/location" ? "active" : ""}
              onClick={() => {
                sessionStorage.setItem("path", "/location");
              }}
            >
              USA Find map
            </NavLink>
            <NavLink
              to="/blog"
              className={location?.pathname === "/blog" ? "active" : ""}
            >
              Our blog
            </NavLink>
            {/* <NavLink
                                to="/blog"
                                style={isActive => ({
                                    color: isActive ? primary : black
                                })}
                            >
                                Our blog
                            </NavLink> */}
          </Box>
        </Toolbar>
      </Container>
    </AppBar>

    // </Box>
  );
};

export default Navbar;
