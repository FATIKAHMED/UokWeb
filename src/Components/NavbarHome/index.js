import * as React from "react";
import {
  Box,
  Container,
  AppBar,
  Toolbar,
  IconButton,
  useMediaQuery,
  Select,
  MenuItem,
  InputBase,
  Typography,
  Stack,
} from "@mui/material";
import { makeStyles } from "@mui/styles";
import { Link, NavLink, useLocation } from "react-router-dom";
import { MdMenu } from "react-icons/md";
import logo from "../../Assets/uokweb/logo.png";
import fb from "../../Assets/Social/fb.svg";
import ig from "../../Assets/Social/ig.svg";
import tw from "../../Assets/Social/tw.svg";
import go from "../../Assets/Social/go.svg";
import NavigationDrawer from "../NavigationDrawer";
import { useTheme } from "@emotion/react";
import { useScrollPosition } from "../../Hooks/useScrollPosition";
import NavbarMobile from "../NavbarMobile";
import styled from "@emotion/styled";
import SearchIcon from '@mui/icons-material/Search';

const CustomContainer = styled("div")(({ theme }) => ({
  maxWidth: "97rem",
  width: "100%",
  marginLeft: "auto",
  marginRight: "auto",
  [theme.breakpoints.down("1100")]: {
    maxWidth: "61rem",
  },
}));

const useStyles = makeStyles((theme) => ({
  AppBar: {
    // "boxShadow": "0px 12px 18px 3px rgba(237,235,235,0.75)",
    // "WebkitBoxShadow": "0px 12px 18px 3px rgba(237,235,235,0.75)",
    // "MozBoxShadow": "0px 12px 18px 3px rgba(237,235,235,0.75)",
    background: "#3bb78f",
    // "boxShadow": "0px 1.9px 5.6px rgba(0, 0, 0, 0.035),\n  0px 15px 45px rgba(0, 0, 0, 0.07)",
    // "WebkitBoxShadow": "0px 1.9px 5.6px rgba(0, 0, 0, 0.035),\n  0px 15px 45px rgba(0, 0, 0, 0.07)",
    // "MozBoxShadow": "0px 1.9px 5.6px rgba(0, 0, 0, 0.035),\n  0px 15px 45px rgba(0, 0, 0, 0.07)",
    zIndex: 10,
    "& .MuiToolbar-root": {
      // borderBottom: "1px solid #ff0753"
    },
    "& .toolbar": {
      display: "flex",
      alignItems: "center",
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
        gap: "2.5rem",
        flex: 1,
        fontSize: "1.1rem",
        fontFamily: theme.typography.Poppins,
        fontWeight: 700,
        "& a": {
          color: "#292F75",
        },
        "& .active": {
          // fontWeight: 600,
          color: theme.palette.primary.main,
        },
      },
      "& .linkBoxMb": {
        display: "flex",
        justifyContent: "flex-end",
        gap: "4rem !important",
      },
    },
    "&.glassmorphism": {
      background: "#FFF !important",
      // backdropFilter: "blur(20px)",
    },
  },
}));

const SearchIconWrapper = styled('div')(({ theme }) => ({
  padding: theme.spacing(0, 2),
  height: '100%',
  position: 'absolute',
  pointerEvents: 'none',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
}));

const StyledInputBase = styled(InputBase)(({ theme }) => ({
  color: 'inherit',
  '& .MuiInputBase-input': {
    padding: theme.spacing(1, 1, 1, 0),
    // vertical padding + font size from searchIcon
    paddingLeft: `calc(1em + ${theme.spacing(4)})`,
    transition: theme.transitions.create('width'),
    width: '100%',
    [theme.breakpoints.up('sm')]: {
      width: '12ch',
      '&:focus': {
        width: '20ch',
      },
    },
  },
}));

const Search = styled('div')(({ theme }) => ({
  position: 'relative',
  borderRadius: "10px",
  border: "1px solid black",
  // backgroundColor: alpha(theme.palette.common.white, 0.15),
  '&:hover': {
    // backgroundColor: alpha(theme.palette.common.white, 0.25),
  },
  marginLeft: 0,
  width: '100%',
  [theme.breakpoints.up('sm')]: {
    marginLeft: theme.spacing(1),
    width: 'auto',
  },
}));

export default function NavbarHome() {
  const [age, setAge] = React.useState("");

  const handleChange = (event) => {
    setAge(event.target.value);
  };
  const classes = useStyles();
  const [openDrawer, setOpenDrawer] = React.useState(false);
  const location = useLocation();
  const theme = useTheme();
  const mobile = useMediaQuery(theme.breakpoints.down("1000"));
  const scrollPosition = useScrollPosition();
  return (
    // <Box sx={{ flexGrow: 0 }}>
    <>
      {!mobile && (
        <AppBar
          position="sticky"
          color="transparent"
          elevation={0}
          className={`${classes.AppBar} ${
            scrollPosition < 0 ? "glassmorphism" : ""
          }`}
        >
          <CustomContainer>
          <Box sx={{backgroundColor:"darkgreen",paddingLeft:"15px", paddingRight:"15px", borderBottomRightRadius:"15px", borderBottomLeftRadius:"15px", display:"flex", justifyContent:"space-between"}}>
          <Typography sx={{fontSize:"2rem", fontWeight:"700", color:"#3bb78f", }}>
          Call: (9221) 9926 1300-7
           </Typography>
           <Stack direction="row" spacing={2}>
           <a href="#" style={{fontSize:"1.5rem",color:"#3bb78f"}}>Email</a>
           <a href="#" style={{fontSize:"1.5rem",color:"#3bb78f"}}>Facebook</a>
           <a href="#" style={{fontSize:"1.5rem",color:"#3bb78f"}}>MCN</a>
           <a href="#" style={{fontSize:"1.5rem",color:"#3bb78f"}}>Sitemap</a>
           <a href="#" style={{fontSize:"1.5rem",color:"#3bb78f"}}>Directory</a>
           </Stack>
          </Box>
            <Toolbar disableGutters="true" className={`toolbar `}>
              <Box
                component="div"
                sx={{
                  flexGrow: 0,
                  textAlign: "center",
                  paddingTop: "2rem",
                  marginBottom: "1rem",
                }}
              >
                <img src={logo} alt="logo" height={"100%"} width="auto" />
              </Box>
              <Box sx={{ flex: 1 }}></Box>
              {!mobile && (
                <Box sx={{ display: "flex", gap: "1.5rem" }}>
                  <Box className={`${mobile ? "linkBoxMb" : ""} linkBox`}>
                    <NavLink
                      to="/"
                      className={location?.pathname === "/" ? "active" : ""}
                    >
                      HOME
                    </NavLink>
                    <NavLink
                      to="/about"
                      className={
                        location?.pathname === "/about" ? "active" : ""
                      }
                    >
                      ADMISSIONS
                    </NavLink>
                    <NavLink
                      to="/gallery"
                      className={
                        location?.pathname === "/gallery" ? "active" : ""
                      }
                    >
                      FACULTIES
                    </NavLink>
                    <NavLink
                      to="/gallery"
                      className={
                        location?.pathname === "/gallery" ? "active" : ""
                      }
                    >
                      LIBRARIES
                    </NavLink>
                    <NavLink
                      to="/gallery"
                      className={
                        location?.pathname === "/gallery" ? "active" : ""
                      }
                    >
                      ADMINISTRATIONS
                    </NavLink>
                    <NavLink
                      to="/gallery"
                      className={
                        location?.pathname === "/gallery" ? "active" : ""
                      }
                    >
                      EXAMINATIONS
                    </NavLink>
                    <NavLink
                      to="/gallery"
                      className={
                        location?.pathname === "/gallery" ? "active" : ""
                      }
                    >
                      ALUMINI
                    </NavLink>
                    <NavLink
                      to="/gallery"
                      className={
                        location?.pathname === "/gallery" ? "active" : ""
                      }
                    >
                      JOURNALS
                    </NavLink>

                    <Search>
                  <SearchIconWrapper>
                    <SearchIcon />
                  </SearchIconWrapper>
                  <StyledInputBase
                    placeholder="Search…"
                    inputProps={{ 'aria-label': 'search' }}
                  />
                </Search>
                  </Box>
                  <Box sx={{ display: "flex", gap: "1.75rem" }}>
                  
                  </Box>
                </Box>
              )}
              {mobile && (
                <IconButton
                  size="large"
                  edge="start"
                  color="primary"
                  aria-label="menu"
                  sx={{ mr: 2, flex: 0 }}
                  onClick={() => setOpenDrawer(true)}
                >
                  <MdMenu />
                </IconButton>
              )}
              {openDrawer && (
                <NavigationDrawer open={openDrawer} setOpen={setOpenDrawer} />
              )}
            </Toolbar>
          </CustomContainer>
        </AppBar>
      )}
      {mobile && <NavbarMobile />}
    </>

    // </Box>
  );
}
