import styled from "@emotion/styled";
import {
  Button,
  FormControl,
  IconButton,
  InputAdornment,
  InputLabel,
  OutlinedInput,
  Stack,
  TextField,
  Typography,
} from "@mui/material";
import { makeStyles } from "@mui/styles";
import { Box } from "@mui/system";
import React from "react";
import { COLORS } from "../../Utils/variables";

const ButtonStyle = styled(Button)(({ theme }) => ({
  fontFamily: theme.typography.Poppins,
  background: "#D83C3B",
  color: COLORS.white,
  borderRadius: "100px",
  textTransform: "capitalize",
  boxShadow:
    "0px 1.4px 3.6px rgba(0, 0, 0, 0.028),\n  0px 4px 10px rgba(0, 0, 0, 0.04),\n  0px 9.6px 24.1px rgba(0, 0, 0, 0.052),\n  0px 32px 80px rgba(0, 0, 0, 0.08)",
  "&:hover": {
    background: "#D83C3B",
    color: COLORS.white,
    boxShadow: `0px 6px 22px rgba(0, 0, 0, 0.18)`,},
    [theme.breakpoints.down("lg")]:{
      padding:"7px 9px",
      fontSize:"14px",
      marginBottom: "3px",
    },
    [theme.breakpoints.up("lg")]:{
      padding:"8px 10px",
      fontSize:"18px",
      marginBottom: "5px",
    },
    [theme.breakpoints.up("xl")]:{
      padding:"9px 11px",
      fontSize:"19px",
      marginTop:"5.33px",
    },

}));

const useStyle = makeStyles((theme) =>({
  emailBar:{
    "& fieldset": { border: "none", },
    backgroundColor:"#FFFFFF",
    border: "1px solid #FFFFFF",
    borderRadius: "100px",
    width:"100%",
    [theme.breakpoints.down("lg")]:{
      padding:"2px 0px 2px 0px ",
      height:"58px",
    },
    [theme.breakpoints.up("lg")]:{
      padding:"6px 0px 5px 0px ",
      height:"65.625px",
    },
    [theme.breakpoints.up("xl")]:{
      padding:"5.4px 0px 4.5px 0px ",
      height:"72px",
    },
    "& MuiOutlinedInput":{
      marginBottom:"50px"
    }
  }
}))

function SendEmail(props) {
  const classes = useStyle();
  return (
    
       <TextField
       className={classes.emailBar}
      id="input-with-icon-textfield"
      placeholder="Enter your E-mail Address"
      InputProps={{
        endAdornment: (
          <InputAdornment position="end">
            <ButtonStyle>{props.title}</ButtonStyle>
          </InputAdornment>
        ),
      }}
    />
   
  );
}

export default SendEmail;
