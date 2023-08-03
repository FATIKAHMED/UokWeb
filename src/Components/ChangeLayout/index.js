import React from 'react'
import { Box, IconButton, SvgIcon } from '@mui/material';
import { BiLayout } from "react-icons/bi"
import { MdOutlineViewStream } from "react-icons/md"
import { BsViewStacked } from "react-icons/bs"
import { ReactComponent as RowIcon } from "../../Assets/Gallery/rows.svg";
import layout1 from "../../Assets/Gallery/layout1.png";
import layout2 from "../../Assets/Gallery/layout2.png";
import layout1Active from "../../Assets/Gallery/layout1Active.png";
import layout2Active from "../../Assets/Gallery/layout2Active.png";


const ChangeLayout = ({ layout, setLayout, location }) => {
  return (
    <Box
      sx={{
        background: "whitesmoke",
        borderRadius: "12px",
        padding: ".2rem .4rem",
        width: "144px",
        height: "42px",
        display: "flex",
        justifyContent: "space-around",
      }}>
      <IconButton variant="outlined" color={layout == "row" ? 'primary' : "default"} onClick={() => setLayout("row")}>
        {/* <BsViewStacked size={"1.2rem"}/> */}
        {/* <SvgIcon sx={{ fontSize: "1.65rem", filter: layout == "row" ? "invert(14%) sepia(89%) saturate(5709%) hue-rotate(336deg) brightness(101%) contrast(101%)" : "default" }} component={RowIcon} inheritViewBox /> */}
        {layout == "row" ?
          <img src={layout1Active} height="auto" width="100%" alt="icon" />
          :
          <img src={layout1} height="auto" width="100%" alt="icon" />
        }
      </IconButton>
      <IconButton variant="outlined" color={layout == "card" ? 'primary' : "default"} onClick={() => setLayout("card")}>
        {/* <BiLayout /> */}
        {layout == "card" ?
          <img src={layout2Active} height="auto" width="100%" alt="icon" />
          :
          <img src={layout2} height="auto" width="100%" alt="icon" />
        }
      </IconButton>
    
    </Box >
  )
}

export default ChangeLayout