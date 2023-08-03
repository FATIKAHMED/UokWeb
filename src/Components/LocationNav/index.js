import {
  Box,
  Container,
  IconButton,
  Tooltip,
  Typography,
  useMediaQuery,
} from "@mui/material";
import { makeStyles, useTheme } from "@mui/styles";
import React from "react";
import ChangeLayoutLocation from "../ChangeLayoutLocation";
import SearchBarOnly from "../SearchBarOnly";
import SearchGooglePlaces from "../SearchGooglePlaces";
import search from "../../Assets/Gallery/search.png";
import addPost from "../../Assets/Gallery/addPost.png";

const useStyles = makeStyles((theme) => ({
  section: {
    //// padding: "1rem 1rem 4rem 1rem",
    // paddingBottom: "4rem",
    zIndex: 10,
    width: "100%",
    [theme.breakpoints.down("md")]: {
      // padding: "1rem 0",
      // height: "10rem",
      height: "6rem",
      // paddingBottom: ".75rem",
      position:"absolute",
      bottom:"0",
    },
    "& .containerNav": {
      width: "100%",
      height: "100%",
      [theme.breakpoints.down("md")]: {
        padding: 0,
      },
      [theme.breakpoints.down("360")]: {
        padding: 0,
      },
    },
  },
  box: {
    display: "flex",
    justifyContent: "space-around",
    alignItems: "center",
    width: "95%",
    height: "84px",
    WebkitBoxShadow: "0 3px 6px rgb(0 0 0 / 16%)",
    boxShadow: "0 3px 6px rgb(0 0 0 / 16%)",
    MozBoxShadow: "0 3px 6px rgb(0 0 0 / 16%)",
    background: "#fff",
    borderRadius: "10px",
    marginTop: "-4rem",
    padding: "0 1rem",
    gap: "1rem",
    "& .locationDesc": {
      maxWidth: "100%",
      display: "-webkit-box",
      overflow: "hidden",
      textOverflow: "ellipsis",
      whiteSpace: "pre-wrap",
      WebkitBoxOrient: "vertical",
      WebkitLineClamp: "1",
      cursor: "pointer",
      [theme.breakpoints.between("900", "1040")]: {
        maxWidth: "266px",
        fontSize: "15px",
      },
    },
    "& .searchBar": {
      maxWidth: "374px",
      width: "100%",
    },
    "& .titleBoxLocation": {
      // maxWidth: "270px",
      maxWidth: "300px",
      width: "100%",
      "& .tooltip": {
        fontFamily: theme.typography.Poppins,
      },
    },
  },
  mobileBox: {
    display: "flex",
    height: "84px",
    background: "#fff",
    borderRadius: "10px",
    marginTop: "0",
    boxShadow: "none",
    width: "100%",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "space-between",
    height: "100%",
    [theme.breakpoints.down("md")]: {
      padding: "0 0.5rem",
      justifyContent: "space-around",
    },

    "& .titleBoxLocation": {
      // marginTop: "1rem",
      maxWidth: "400px",
      paddingTop:".2rem",
      width: "100%",
      "& .tooltip": {
        fontFamily: theme.typography.Poppins,
      },
      [theme.breakpoints.down("400")]: {
        maxWidth: "280px",
        fontSize: "15px",
      },
    },
    "& .navBox": {
      display: "flex",
      alignItems: "center",
      justifyContent: "space-between",
      width: "100%",
      maxWidth: "500px",
    },
    "& .locationDesc": {
      maxWidth: "100%",
      display: "-webkit-box",
      overflow: "hidden",
      textOverflow: "ellipsis",
      whiteSpace: "pre-wrap",
      WebkitBoxOrient: "vertical",
      WebkitLineClamp: "1",
      textAlign: "center",
      cursor: "pointer",
      fontSize:"1rem",
      [theme.breakpoints.between("900", "1040")]: {
        maxWidth: "266px",
        fontSize: "15px",
      },
    },
  },
}));

const LocationNav = ({
  address,
  onAddressChange,
  onOpenMobileSearch,
  setOpenPost,
}) => {
  const theme = useTheme();
  const classes = useStyles();
  const mobile = useMediaQuery(theme.breakpoints.down("md"));

  return (
    <section className={classes.section}>
      <Container className="containerNav">
        {mobile ? (
          <Box className={classes.mobileBox}>
            <Box className="titleBoxLocation">
              <Tooltip
                title={address.length > 0 ? address : "Lake side, Montana"}
                className="tooltip"
                arrow
              >
                <Typography variant="h6" className="locationDesc">
                  {/* Location:{" "} */}
                  {address.length > 0 ? address : "Lake side, Montana"}
                </Typography>
              </Tooltip>
            </Box>
            <Box className="navBox">
              <IconButton onClick={() => setOpenPost(true)}>
                <img src={addPost} width="100%" />
              </IconButton>
              {/* setLayout={console.log("layout changed!")} */}
              <ChangeLayoutLocation layout={"card"} location={true} />
              <IconButton onClick={onOpenMobileSearch}>
                <img src={search} width="100%" />
              </IconButton>
            </Box>
          </Box>
        ) : (
          <Box className={classes.box}>
            {/* setLayout={console.log("layout changed!")} */}
            <ChangeLayoutLocation layout={"card"} location={true} />
            {/* <SearchBarOnly onOpen={() => console.log("open")} /> */}
            <Box className="searchBar">
              <SearchGooglePlaces
                onLocationChange={(location) => {
                  onAddressChange({
                    address: location?.description,
                    placeId: location?.place_id,
                  });
                }}
                error={false}
              />
            </Box>
            <Box className="titleBoxLocation">
              <Tooltip
                title={address.length > 0 ? address : "Lake side, Montana"}
                className="tooltip"
                arrow
              >
                <Typography variant="h6" className="locationDesc">
                  Location:{" "}
                  {address.length > 0 ? address : "Lake side, Montana"}
                </Typography>
              </Tooltip>
            </Box>
          </Box>
        )}
      </Container>
    </section>
  );
};

export default LocationNav;
