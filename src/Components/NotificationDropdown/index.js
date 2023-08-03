import * as React from "react";
import { styled, alpha } from "@mui/material/styles";
import Button from "@mui/material/Button";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
// import { BiChevronDown } from "react-icons/bi";
import bell from "../../Assets/Gallery/bell.png";

import newPost from "../../Assets/Gallery/newPost.png"
import arrow from "../../Assets/Gallery/arrow.png"
import chevronDown from "../../Assets/Gallery/chevronDown.png"
import { makeStyles } from "@mui/styles";
import { Badge, IconButton } from "@mui/material";

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
            }
        },
    },
    btn: {
        fontWeight: "500",
        color: "black",
        fontSize: "18px",
        textTransform: "initial",
        fontFamily: theme.typography.Poppins,
        // padding: 0,
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

export default function NotificationDropdown({ sort, onSort }) {
    const [anchorEl, setAnchorEl] = React.useState(null);
    const open = Boolean(anchorEl);
    const classes = useStyles();
    const handleClick = (event) => {
        setAnchorEl(event.currentTarget);
    };
    const handleClose = (val) => {
        setAnchorEl(null);
        // onSort(val)
    };

    return (
        <div className={classes.wrapper}>
            <IconButton
                id="demo-customized-button"
                aria-controls={open ? "demo-customized-menu" : undefined}
                aria-haspopup="true"
                aria-expanded={open ? "true" : undefined}
                variant="text"
                disableElevation
                onClick={handleClick}
                // startIcon={<img src={arrow} width="100%" alt="top posts" />}
                // endIcon={<img src={chevronDown} width="100%" alt="drop down menu" />}
                className={classes.btn}
            >
                <Badge
                    badgeContent=""
                    color="primary"
                    sx={{
                        "& .MuiBadge-badge": {
                            minWidth: "10px",
                            height: "10px",
                            width: "10px",
                            padding: 0,
                            transform: "scale(1) translate(0%, 50%)",
                        },
                        cursor: "pointer"
                    }}
                >

                    <img src={bell} width={"100%"} alt="notification" />
                </Badge>
            </IconButton>
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
                    There are no notifications.
                </MenuItem>
                {/* <MenuItem className="menuItem" onClick={() => handleClose("newPost")} disableRipple>
                    New posts
                </MenuItem> */}
            </StyledMenu>
        </div>
    );
}
