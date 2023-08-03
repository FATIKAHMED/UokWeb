import * as React from "react";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import MenuItem from "@mui/material/MenuItem";
import { makeStyles } from "@mui/styles";
import { Select } from "@mui/material";
import { BsChevronDown } from "react-icons/bs";

const currencies = [
  {
    value: "",
    label: "Select tags from the list"
  },
  {
    value: "EUR",
    label: "Tag1"
  },
  {
    value: "BTC",
    label: "Tag2"
  },
  {
    value: "JPY",
    label: "Tag3"
  }
];

const useStyles = makeStyles((theme) => ({
  root: {
    "& .MuiSelect-select, & .MuiList-root": {
      fontWeight: "600",
      "& .MuiMenuItem-root": {
        fontWeight: "600 !important",

      }
    }
  }
}))

export default function SelectTextField({ value, onChange, error, options }) {
  const classes = useStyles();
  // const [currency, setCurrency] = React.useState("");

  // const handleChange = (event) => {
  //   setCurrency(event.target.value);
  // };

  return (

    // <Box
    //   component="form"
    //   sx={{
    //     "& .MuiTextField-root": { mt: 0, width: "100%" }
    //   }}
    //   className={classes.root}
    //   noValidate
    //   autoComplete="off"
    // >
    <Box
      className={classes.root}
      sx={{
        "& .MuiTextField-root": { mt: 0, width: "100%" }
      }}
    >
      <Select
        id="outlined-select-currency"
        select
        // label="Select"
        name="tags"
        value={value}
        onChange={onChange}
        placeholder="Select tags from the list"
        IconComponent={() => { return <BsChevronDown size={"1.5rem"} color="red" /> }}
        sx={{ width: "100%", paddingRight: '1rem' }}
        color="info"
        error={error}
      // helperText="Select tags from the list"
      >

        {options && options?.length > 0 && options.map((option) => (
          <MenuItem key={option} value={option} disabled={option === ""} selected={option === ""} className="menuItem">
            {option}
          </MenuItem>
        ))}
      </Select>
      {/* </Box> */}
    </Box>

  );
}
