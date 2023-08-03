import { Box, Button, InputAdornment, TextField, useMediaQuery } from '@mui/material';
import React from 'react'
import searchBarBg from '../../Assets/Gallery/searchBarBg.svg'
import { BiSearchAlt } from "react-icons/bi";
import { makeStyles, useTheme } from '@mui/styles';
import search from '../../Assets/Gallery/search.png';
import useAuth from '../../Hooks/useAuth';
import GooglePlacesInput from '../GooglePlacesInput';

const useStyles = makeStyles((theme) => ({
  searchContainer: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    gap: "2.7rem",
    [theme.breakpoints.down("1020")]: {
      gap: "1rem",

    },
    // gap: "1rem",
    "& .wrapper": {
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      gap: "5.2rem",
      [theme.breakpoints.down("1020")]: {
        gap: "1.2rem",

      },
    },
    "& .sortLabel": {
      fontSize: "1.2rem",
      marginBottom: "12px",
      // marginLeft: "-3px",
      fontWeight: "bold",
      fontFamily: theme.typography.Poppins,
      [theme.breakpoints.down("1020")]: {
        fontSize: "1rem",
      },
    },
    "& .MuiInputBase-root": {
      borderRadius: "10px",
    },

    "& .Mui-focused": {
      "& .MuiOutlinedInput-notchedOutline": {
        border: `1px solid #343434`,
      },
    },
    "& .MuiInputBase-input": {
      height: "8px",
      width: "19.5rem",
      // width: "20rem",
    },

    "& .postBtn": {
      "background": "#0F0B82",
      "fontWeight": "600",
      "borderRadius": "6px",
      "fontSize": "1rem",
      "width": "134px",
      "height": "42px",
      "fontFamily": theme.typography.Poppins

    }
  }
}))
const SearchBarOnly = ({ onOpen }) => {
  const classes = useStyles()
  const theme = useTheme();
  const mobile = useMediaQuery(theme.breakpoints.down("1012"));

  return (
    <>
      <div className={classes.searchContainer} >
        <Box className="wrapper">
          <TextField
            // value={"search"}
            // onChange={(e) => setSearch(e.target.value)}
            // disabled={loading}
            // onKeyUp={(e) => {
            //   if (e.key === "Enter" && search.length > 0) {
            //     handleSubmitSearch();
            //   }
            // }}
            // onFocus={() => { setSearchBarExpand(true) }}
            // onBlur={() => { setSearchBarExpand(false) }}
            // className={`${searchBarExpand ? classes.searchBarExpand : ""} `}
            InputProps={{
              // classes: {
              //   root: classes.searchFieldRoot,
              // },
              // startAdornment: (
              //   <InputAdornment 
              //   disabled={search.length > 0 ? false : true} 
              //   position="start"
              //     onClick={() => {
              //       if (search.length > 0) {
              //         handleSubmitSearch();
              //       }
              //     }}
              //   >
              //     <BiSearch />
              //   </InputAdornment>
              // ),
              // endAdornment: <InputAdornment position="end"><BiSearchAlt size={"1.8rem"} /></InputAdornment>,
              endAdornment: <InputAdornment position="end"><img src={search} width="100%" /></InputAdornment>,
              // endAdornment: endIcon && value.length > 0 && (
              //   <InputAdornment position="end">{endIcon}</InputAdornment>
              // ),
            }}
            variant="outlined"
            placeholder="Search"
          />
          {/* handleChange("location", { address: location.description, placeId: location.place_id }) } */}
          {/* <GooglePlacesInput error={!"formErrors?.location && true"} onLocationChange={(location) => { console.log("location", location) }} /> */}
        </Box>
      </div>
    </>
  )
}

export default SearchBarOnly