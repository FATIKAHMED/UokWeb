import * as React from "react";
import Checkbox from "@mui/material/Checkbox";
import TextField from "@mui/material/TextField";
import Autocomplete, { createFilterOptions } from "@mui/material/Autocomplete";
import Chip from "@mui/material/Chip";
import { MdCheckBox, MdCheckBoxOutlineBlank } from "react-icons/md";
import { makeStyles } from "@mui/styles";

const filter = createFilterOptions();
const icon = <MdCheckBoxOutlineBlank fontSize="small" />;
const checkedIcon = <MdCheckBox fontSize="small" />;
const useStyles = makeStyles((theme) => ({
  root: {
    "& .MuiInputBase-root:before": {
      borderBottom: "1px solid #100082",
    },
  },
}));

export default function SelectMultipleTag({
  options = [],
  value = [],
  onChange,
  error,
  disabled,
  maxTag,
  isGallery,
}) {
  // const [autoCompleteValue, setAutoCompleteValue] = React.useState([]);
  const [autoCompleteValue, setAutoCompleteValue] = React.useState("");
  const [tags, setTags] = React.useState(options);
  const classes = useStyles();

  // React.useEffect(() => {
  //   console.log(filter)
  // }, [filter])

  return (
    <Autocomplete
      multiple
      limitTags={maxTag}
      id="checkboxes-tags-demo"
      options={tags}
      className={classes.root}
      getOptionLabel={
        (option) => {
          console.log(option);
          return "abc";
        }
        // option.includes("Press Enter")
        //   ? option.split("Press Enter ")[1].replace(/"/g, "")
        //   : option
      }
      onChange={(e, newVal, reason) => {
        console.log("onChange newVal", newVal);
        let arr = newVal.map((item) =>
          // item.replace("Press Enter ", "").replace(/"/g, "")
          item.inputValue ? item.inputValue : item
        );
        console.log("onChange Arr", arr);
        onChange(arr);
      }}
      freeSolo
      filterOptions={(options, params) => {
        const filtered = filter(options, params);

        const { inputValue } = params;
        // Suggest the creation of a new value
        const isExisting = options.some((option) => inputValue === option);
        if (inputValue !== "" && !isExisting) {
          filtered.push({ inputValue, helper: `Press Enter to Add Tag` });
        }
        return filtered;
      }}
      // size="small"
      // disableCloseOnSelect
      // setAutoCompleteValue(newVal);
      // onInputChange={(e,value,reason)=>{
      //   console.log("onInputChange value",value)
      // }}

      renderTags={(value, getTagProps) =>
        value.map((option, index) => {
          // let newOption = option.includes("Press Enter")
          //   ? option.split("Press Enter ")[1].replace(/"/g, "")
          //   : option;
          console.log("newOption", option);
          return (
            <Chip
              variant="outlined"
              label={option.inputValue ? option.inputValue : option}
              {...getTagProps({ index })}
            />
          );
        })
      }
      renderOption={(props, option, { selected }) => (
        <li
          {...props}
          // onClick={(e) => {
          //   e.stopPropagation();
          //   e.preventDefault();
          // }}
        >
          {/* {!option.includes("Press Enter") && (
            <Checkbox
              icon={icon}
              checkedIcon={checkedIcon}
              style={{ marginRight: 8 }}
              checked={selected}
            />
          )} */}
          {/* {option} */}
          {option.inputValue ? "Press Enter To Add Tag" : option}
        </li>
      )}
      // style={{ width: 500 }}
      // blurOnSelect
      // clearOnBlur
      // openOnFocus={true}
      // selectOnFocus
      // autoHighlight
      // filterSelectedOptions
      // includeInputInList

      renderInput={(params) => (
        <TextField
          {...params}
          label=""
          placeholder="Add tags"
          color="info"
          variant={isGallery ? "outlined" : "standard"}
          error={error}
          disabled={disabled}
          onKeyDown={(e) => {
            if (e.keyCode === 13 && e.target.value) {
              // e.defaultMuiPrevented = true;
              // || (e.keyCode === 32)
              if (!tags.includes(e.target.value)) {
                setTags([...tags, e.target.value]);
              }
            }
          }}
        />
      )}
    />
  );
}

// Top 100 films as rated by IMDb users. http://www.imdb.com/chart/top
const top100Films = [
  "The Shawshank Redemption",
  "The Godfather",
  "The Godfather: Part II",
  "The Dark Knight",
  "12 Angry Men",
];
