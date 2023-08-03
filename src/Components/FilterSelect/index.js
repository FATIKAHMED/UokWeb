import * as React from "react";
import { styled, alpha } from "@mui/material/styles";
import Button from "@mui/material/Button";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
// import { BiChevronDown } from "react-icons/bi";

import newPost from "../../Assets/Gallery/newPost.png"
import arrow from "../../Assets/Gallery/arrow.png"
import chevronDown from "../../Assets/Gallery/chevronDown.png"
import { makeStyles } from "@mui/styles";

const StyledMenu = styled((props) => (
    <Menu
        elevation={0}
        anchorOrigin={{
            vertical: "bottom",
            horizontal: "right"
        }}
        transformOrigin={{
            vertical: "top",
            horizontal: "right"
        }}
        {...props}
    />
))(({ theme }) => ({

    "& .MuiPaper-root": {
        borderRadius: 6,
        marginTop: theme.spacing(1),
        minWidth: 180,
        color:
            theme.palette.mode === "light"
                ? "rgb(55, 65, 81)"
                : theme.palette.grey[300],
        boxShadow:
            "rgb(255, 255, 255) 0px 0px 0px 0px, rgba(0, 0, 0, 0.05) 0px 0px 0px 1px, rgba(0, 0, 0, 0.1) 0px 10px 15px -3px, rgba(0, 0, 0, 0.05) 0px 4px 6px -2px",
        "& .MuiMenu-list": {
            padding: "4px 0"
        },
        "& .MuiMenuItem-root": {
            fontFamily: theme.typography.Poppins,
            "& .MuiSvgIcon-root": {
                fontSize: 18,
                color: theme.palette.text.secondary,
                marginRight: theme.spacing(1.5)
            },
            "&:active": {
                backgroundColor: alpha(
                    theme.palette.primary.main,
                    theme.palette.action.selectedOpacity
                )
            }
        }
    }
}));

const useStyles = makeStyles((theme) => ({
    wrapper: {
        display: "flex",
        alignItems: "flex-end",
        gap: ".5rem",
        "& .MuiButton-root": {
            fontFamily: theme.typography.Poppins,
        },
        "& .menuItem": {
            fontFamily: theme.typography.Poppins,
        },
        "& span.label": {
            [theme.breakpoints.down("md")]: {
                fontSize: "18px !important",
            },
            [theme.breakpoints.down("sm")]: {
                fontSize: "15px !important",
            }
        },
    },
    btn: {
        fontWeight: "500",
        color: "black",
        fontSize: "18px",
        textTransform: "initial",
        fontFamily: theme.typography.Poppins,
        padding: 0,
        [theme.breakpoints.down("sm")]: {
            fontSize: "15px !important",
        },
        "& .MuiButton-startIcon": {
            margin: 0,
            marginRight: "6px"
            // marginLeft:"4px"
        },
        "& .MuiButton-endIcon": {
            margin: 0,
            marginLeft: "6px"
        }
    }

}))

export default function FilterSelect({ sort, onSort }) {
    const [anchorEl, setAnchorEl] = React.useState(null);
    const open = Boolean(anchorEl);
    const classes = useStyles();
    const handleClick = (event) => {
        setAnchorEl(event.currentTarget);
    };
    const handleClose = (val) => {
        setAnchorEl(null);
        onSort(val)
    };

    return (
        <div className={classes.wrapper}>
            <span className='label'>SORT POSTS BY:</span>
            <Button
                id="demo-customized-button"
                aria-controls={open ? "demo-customized-menu" : undefined}
                aria-haspopup="true"
                aria-expanded={open ? "true" : undefined}
                variant="text"
                disableElevation
                onClick={handleClick}
                startIcon={<img src={arrow} width="100%" alt="top posts" />}
                endIcon={<img src={chevronDown} width="100%" alt="drop down menu" />}
                className={classes.btn}
            >
                {sort === "newPost" ? "New posts" : "Top"}
            </Button>
            <StyledMenu
                id="demo-customized-menu"
                MenuListProps={{
                    "aria-labelledby": "demo-customized-button"
                }}
                anchorEl={anchorEl}
                open={open}
                onClose={handleClose}
            >
                <MenuItem className="menuItem" onClick={() => handleClose("top")} disableRipple>
                    {/* <EditIcon /> */}
                    Top
                </MenuItem>
                <MenuItem className="menuItem" onClick={() => handleClose("newPost")} disableRipple>
                    {/* <FileCopyIcon /> */}
                    New posts
                </MenuItem>
            </StyledMenu>
        </div>
    );
}
