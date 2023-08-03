import React from 'react'
import { Box, IconButton, SvgIcon, useMediaQuery } from '@mui/material';
import { BiLayout } from "react-icons/bi"
import { MdOutlineViewStream } from "react-icons/md"
import { BsViewStacked } from "react-icons/bs"
import { ReactComponent as RowIcon } from "../../Assets/Gallery/rows.svg";
import layout1 from "../../Assets/Gallery/layout1.png";
import layout2 from "../../Assets/Gallery/layout2.png";
import layout1Active from "../../Assets/Gallery/layout1Active.png";
import layout2Active from "../../Assets/Gallery/layout2Active.png";
import marker2Active from "../../Assets/Gallery/marker2Active.png";
import marker2 from "../../Assets/Gallery/marker2.png";
import { makeStyles, useTheme } from '@mui/styles';

const useStyles = makeStyles((theme) => ({

    box: {
        background: "whitesmoke",
        borderRadius: "12px",
        padding: ".2rem .4rem",
        // width: "215px",
        width: "auto",
        height: "42px",
        display: "flex",
        justifyContent: "space-around",
        [theme.breakpoints.down("400")]:{
            width: "180px",
        }
    },
}))

const ChangeLayoutLocation = ({ layout, setLayout, location }) => {
    const theme = useTheme();
    const classes = useStyles();   

    return (
        <Box className={classes.box}>
            {/* <IconButton variant="outlined" color={layout == "row" ? 'primary' : "default"} onClick={() => setLayout("row")}>              
                <img src={layout1} height="auto" width="100%" alt="icon" />
            </IconButton>
            <IconButton variant="outlined" color={layout == "card" ? 'primary' : "default"} onClick={() => setLayout("card")}>                
                <img src={layout2} height="auto" width="100%" alt="icon" />
            </IconButton> */}
            {location && <IconButton variant="outlined" color={location ? 'primary' : "default"} disableRipple disableFocusRipple onClick={() => setLayout("card")}>
                {location ?
                    <img src={marker2Active} height="auto" width="100%" alt="icon" />
                    :
                    <img src={marker2} height="auto" width="100%" alt="icon" />
                }
            </IconButton>}
        </Box >
    )
}

export default ChangeLayoutLocation