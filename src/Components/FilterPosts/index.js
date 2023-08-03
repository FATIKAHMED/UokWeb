import { Box, Button, IconButton, useMediaQuery } from '@mui/material'
import React from 'react'
import top from "../../Assets/Gallery/Top.png"
import cloud from "../../Assets/Gallery/cloud.svg"
import newPost from "../../Assets/Gallery/newPost.png"
import arrow from "../../Assets/Gallery/arrow.png"
import { BiCheck, BiChevronDown } from "react-icons/bi"
import { makeStyles, useTheme } from '@mui/styles';
import FilterSelect from '../FilterSelect'

const useStyles = makeStyles((theme) => ({
  box: {
    display: "inline-flex",
    flexDirection: "column",
    justifyContent: "flex-start",
    alignItems: "flex-start",
    "marginBottom": "2rem",
    "marginTop": "-1.5rem",
    "marginLeft": "-0.2rem"
  },
  btn: {

    color: "black", fontWeight: "600", background: "transparent !important",
    display: "flex",
    justifyContent: "space-evenly",
    alignItems: "center",
    padding:"0",
    marginBottom:"0.5rem",
    "& span.MuiButton-startIcon ": {
      margin: "0",
      marginRight: "6px",
    },
    "& .labelFilter": {
      "margin": "0",
      "fontSize": "1.1rem",
      "fontFamily": "Poppins",
      "fontWeight": "500",
      "marginRight": "3.8rem",
      "textTransform": "capitalize"
    }
  },
  btn2: {
    color: "#adadad", fontWeight: "400", background: "transparent !important",
    display: "flex",
    justifyContent: "space-evenly",
    alignItems: "center",
    padding:0,
    "& span.MuiButton-startIcon": {
      marginLeft: "0 !important"
    },
    "& .labelFilter": {
      "margin": "0",
      "fontSize": "1.1rem",
      "fontFamily": "Poppins",
      "fontWeight": "400",
      // "marginRight": "3.8rem",
      "textTransform": "initial"
    },
  },

}))
const FilterPosts = ({sort,onSort}) => {
  const classes = useStyles();
  const theme = useTheme();
  const mobile = useMediaQuery(theme.breakpoints.down("md"));
  return (
    <>
      {mobile ?
        <Box className={classes.box}>
          {/* <Button className={classes.btn} variant="text" disableElevation disableRipple startIcon={<img src={top} alt="icon" />}>
            <span className='label'>Top</span><BiChevronDown size={"1.5rem"} color="red" />
          </Button> */}
          <FilterSelect sort={sort} onSort={onSort}/>
        </Box>
        :
        <Box className={classes.box}>
          <Button className={classes.btn} variant="text" onClick={()=>onSort("top")} disableElevation disableRipple startIcon={<img src={arrow} alt="icon" />}>
            <span className='labelFilter'>Top</span>{sort=="top"&&<BiCheck size={"1.5rem"} color="red" />}
          </Button>
          <Button className={`${classes.btn2}`} variant="text" onClick={()=>onSort("newPost")} disableElevation disableRipple startIcon={<img src={newPost} alt="icon" className='secondIcon' />}>
            <span className='labelFilter'>New posts</span>{sort=="newPost"&&<BiCheck size={"1.5rem"} color="red" />}
            {/* <BiCheck size={"1.5rem"} color="red" /> */}
          </Button>
        </Box>
      }
    </>
  )
}
// labelFilter

export default FilterPosts