import React, { useState } from "react";
import LocationNav from "../Components/LocationNav";
import LocationMap from "../Components/LocationMap";
import { makeStyles, useTheme } from "@mui/styles";
import { Box, useMediaQuery } from "@mui/material";
import isEmpty from "../Utils/isEmpty";
import { useLocation } from "react-router-dom";
import axios from "axios";

const useStyles = makeStyles((theme) => ({
  wrapper: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    "& .container":{
      height: "81vh",
      "& .map":{
        height:"100%",         
        "& .map-container":{
          height:"100%",         
        },
      },
    },
   
    // [theme.breakpoints.between("md","lg")]: {
    //   "& .container": {
    //     height: "81vh !important"
    //   },
    // },
    [theme.breakpoints.between("12001","xl")]: {
      // marginTop: "-6rem",
      "& .container": {
        height: "84vh"
      },
    },
    [theme.breakpoints.up("md")]: {
      // marginTop: "-6rem",
     
      "& .gm-style .gm-style-iw-c": {
        // "transform": "translate3d(-50%,-106%,0) ",
        transform: "translate3d(-50%,-106%,0) ",
        boxShadow: "0 3px 6px rgb(0 0 0 / 16%) ",
      },
      "& .gm-style .gm-style-iw-t::after": {
        boxShadow: "0 3px 6px rgb(0 0 0 / 16%)) ",
        height: "15px ",
        // "transform": "translate(-50%,-100%) rotate(-45deg) ",
        transform: "translate(-50%,-125%) rotate(-45deg) ",
        width: "15px ",
      },
    },
   
     [theme.breakpoints.down("md")]: {
      flexDirection: "column-reverse",
      "& .container": {
        height: "85vh"
      },
    },
  },
}));
// AIzaSyBQrRl3Pulu2F92-d4kw4NNG3ZqEKJoLgc
// const GOOGLE_MAPS_API_KEY = 'AIzaSyBQrRl3Pulu2F92-d4kw4NNG3ZqEKJoLgc';

const FindLocation = () => {
  const theme = useTheme();
  const classes = useStyles();
  const mobile = useMediaQuery(theme.breakpoints.down("md"));
  const [address, setAddress] = useState("");
  const [latLng, setLatLng] = useState(null);
  const [openMobileSearch, setOpenMobileSearch] = useState(false);
  const [searchResult, setSearchResult] = useState(null);
  const GOOGLE_MAPS_API_KEY = "AIzaSyBQrRl3Pulu2F92-d4kw4NNG3ZqEKJoLgc";

  // Ayaz
  const [openPost, setOpenPost] = useState(false);
  const [openPostBtn, setOpenPostBtn] = useState(false);

  const getFullAddress = async (location) => {
    if (isEmpty(location)) return;
    const { lat, lng } = location;
    const url = `https://maps.googleapis.com/maps/api/geocode/json?latlng=${lat},${lng}&key=${GOOGLE_MAPS_API_KEY}`;

    try {
      const response = await fetch(url);
      const data = await response.json();
      console.log("DATA", data);
      const {
        formatted_address,
        geometry: { location },
        place_id,
      } = data?.results[0];
      return formatted_address;
    } catch (e) {
      console.log("error", e);
    }
  };

  const handleAddress = async (location) => {
    const address = await getFullAddress(location);
    setAddress(address);
  };
  const handleSearchAddress = (address) => {
    console.log("handleSearchAddress", address);
    setSearchResult(address);
    setOpenMobileSearch(false);
  };

  const getAddress = async (placeId, address) => {
    const url = `https://maps.googleapis.com/maps/api/geocode/json?place_id=${placeId}&key=${GOOGLE_MAPS_API_KEY}`;
    try {
      const response = await fetch(url);
      const data = await response.json();
      const {
        formatted_address,
        geometry: { location },
      } = data?.results[0];

      // if (isEmpty(location)) return
      setLatLng(location);
      setAddress(address);
    } catch (e) {
      console.log("error", e);
    }
  };

  const handleOpenPostBtn=(val)=>{
    setOpenPost(val)
    setOpenPostBtn(val)
  }
  // const onOpenMobileSearch=()=>{
  //   setOpenMobileSearch(!openMobileSearch)
  // }

  React.useEffect(() => {
    if (!isEmpty(searchResult)) {
      if (searchResult?.placeId && searchResult?.address)
        getAddress(searchResult?.placeId, searchResult?.address);
    }
  }, [searchResult]);

  // React.useEffect(async () => {

  //   if (!isEmpty(location)) {
  //     const address = await getFullAddress(location)
  //     setAddress(address)
  //   }

  // }, [location])

  return (
    <Box className={classes.wrapper}>
      <LocationMap
        openPost={openPost}
        setOpenPost={setOpenPost}
        openPostBtn={openPostBtn}
        setOpenPostBtn={setOpenPostBtn}
        onAddressChange={handleAddress}
        onAddressChangeMobile={handleSearchAddress}
        latLng={latLng}
        openMobileSearch={openMobileSearch}
        onOpenMobileSearch={setOpenMobileSearch}
      />
      <LocationNav
        setOpenPost={handleOpenPostBtn}
        address={address}
        onAddressChange={handleSearchAddress}
        onOpenMobileSearch={setOpenMobileSearch}
      />
    </Box>
  );
};
export default FindLocation;
