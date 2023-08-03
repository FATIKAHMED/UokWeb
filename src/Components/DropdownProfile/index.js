import * as React from "react";
import { styled, alpha } from "@mui/material/styles";
import Button from "@mui/material/Button";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import { BiChevronDown } from "react-icons/bi";
import top from "../../Assets/Gallery/Top.png"
import cloud from "../../Assets/Gallery/cloud.svg"
import chevronDown from "../../Assets/Gallery/chevronDown.png"

import useAuth from "../../Hooks/useAuth";
import { useNavigate } from "react-router-dom";
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
const styles = {
    fontWeight: "600",
    color: "#343434"
}
const useStyles = makeStyles((theme) => ({
    dropdown: {

        "& .btn": {
            "padding": "0",
            "minWidth": "24px",
            "margin": 0,            

            "& span.MuiButton-endIcon.MuiButton-iconSizeMedium": {
                margin: "0"
            },
           
        },
      
    }
}))


export default function DropdownProfile() {
    const [anchorEl, setAnchorEl] = React.useState(null);
    const open = Boolean(anchorEl);
    const { isAuthenticated, logout } = useAuth();
    const navigate = useNavigate()
    const classes = useStyles()

    const handleClick = (event) => {
        setAnchorEl(event.currentTarget);
    };
    const handleLogout = () => {
        setAnchorEl(null);
        logout()
        navigate("/login")

    };
    const handleLogin = () => {
        setAnchorEl(null);
        navigate("/login")
        return
    };

    return (
        <div className={classes.dropdown}>
            <Button
                id="demo-customized-button"
                aria-controls={open ? "demo-customized-menu" : undefined}
                aria-haspopup="true"
                aria-expanded={open ? "true" : undefined}
                variant="text"
                disableElevation
                onClick={handleClick}
                // startIcon={<img src={top} alt="icon" />}
                endIcon={<img width="100%" alt='arrow down' src={chevronDown}/>}
                className="btn"
            >
                {/* <BiChevronDown size={"1.5rem"} style={{ color: "red" }} /> */}

            </Button>
            <StyledMenu
                id="demo-customized-menu"
                MenuListProps={{
                    "aria-labelledby": "demo-customized-button"
                }}
                anchorEl={anchorEl}
                open={open}
                onClose={() => setAnchorEl(null)}
            >
                {isAuthenticated ?
                    <MenuItem onClick={handleLogout} disableRipple>
                        {/* <EditIcon /> */}
                        Logout
                    </MenuItem> :
                    <MenuItem onClick={handleLogin} disableRipple>
                        {/* <EditIcon /> */}
                        Login
                    </MenuItem>}

            </StyledMenu>
        </div>
    );
}
