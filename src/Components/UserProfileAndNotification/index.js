import React from "react";

import { Badge, Box, Button, IconButton } from "@mui/material";
import Avatar from "@mui/material/Avatar";
import avatar from "../../Assets/Gallery/avatar2.png";
import { ReactComponent as Bell } from "../../Assets/Gallery/bell.svg";
import bell from "../../Assets/Gallery/bell.png";
import { BiChevronDown } from "react-icons/bi";
import { MdNotificationsNone } from "react-icons/md";
import DropdownProfile from "../DropdownProfile";
import { useTheme } from "@mui/styles";
import useAuth from "../../Hooks/useAuth";
import isEmpty from "../../Utils/isEmpty";
import NotificationDropdown from "../NotificationDropdown";

const UserProfileAndNotification = () => {
  let { user } = useAuth();
  // const user = localStorage.getItem("user") ? JSON.parse(localStorage.getItem("user")) : null;
  const theme = useTheme();
  return (
    <>
      <Box
        sx={{
          display: "inline-flex",
          justifyContent: "flex-end",
          alignItems: "center",
          gap: "1rem",
          marginTop: "1.8rem",
        }}
      >
        {/* <IconButton onClick={() => console.log("helleo")}>
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
        </IconButton> */}
        <NotificationDropdown/>
        <Box
          sx={{
            display: "inline-flex",
            justifyContent: "flex-end",
            alignItems: "center",
            gap: ".2rem",
          }}
        >
          <Avatar src={!isEmpty(user) ? user?.imageUrl : avatar} sx={{ height: "60px", width: "60px" }} />
          <span
            style={{
              fontWeight: "500",
              marginLeft: "7px",
              marginRight: "2px",
              fontSize: "1.1rem",
              fontFamily: theme.typography.Poppins,
            }}
          >
            {!isEmpty(user) ? user.name : "Username"}
          </span>
          {/* <IconButton variant="outlined" >
            <BiChevronDown size={"2rem"} color="red" />
          </IconButton> */}
          <DropdownProfile />
        </Box>
        {/* <Button variant="text" disableElevation disableRipple startIcon={<img src={cloud} alt="icon" />}>
        New Posts <BiCheck size={"1.5rem"} color="red" />
      </Button> */}
      </Box>
    </>
  );
};

export default UserProfileAndNotification;
