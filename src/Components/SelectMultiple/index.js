import * as React from 'react';
import { useTheme } from '@mui/material/styles';
import Box from '@mui/material/Box';
import OutlinedInput from '@mui/material/OutlinedInput';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import Chip from '@mui/material/Chip';
import { BsChevronDown } from "react-icons/bs";
import { Checkbox, Input, ListItemText } from '@mui/material';

const ITEM_HEIGHT = 48;
const ITEM_PADDING_TOP = 8;
const MenuProps = {
    PaperProps: {
        style: {
            maxHeight: ITEM_HEIGHT * 4.5 + ITEM_PADDING_TOP,
            width: 250,
        },
    },
};

const names = [
    'Oliver Hansen',
    'Van Henry',
    'April Tucker',
    'Ralph Hubbard',
    'Omar Alexander',
    'Carlos Abbott',
    'Miriam Wagner',
    'Bradley Wilkerson',
    'Virginia Andrews',
    'Kelly Snyder',
];

function getStyles(name, personName, theme) {
    return {
        fontWeight:
            personName.indexOf(name) === -1
                ? theme.typography.fontWeightRegular
                : theme.typography.fontWeightMedium,
    };
}

export default function SelectMultiple({ options = [], value = [], onChange, error, isGallery,disabled }) {
    const theme = useTheme();
    const [personName, setPersonName] = React.useState([]);

    const handleChange = (event) => {
        const {
            target: { value },
        } = event;
        setPersonName(
            // On autofill we get a stringified value.
            typeof value === 'string' ? value.split(',') : value,
        );
        onChange(value)
    };

    return (
        // <div>
        //   <FormControl sx={{ m: 1, width: 300 }}>
        <div>
            {/* <InputLabel id="demo-multiple-chip-label">Chip</InputLabel> */}
            <Select
                fullWidth
                multiple
                variant={isGallery ? "outlined" : "standard"}
                id="demo-multiple-chip"
                label=""
                labelId="demo-multiple-chip-label"
                inputProps={{ 'aria-label': 'Without label' }}
                value={value}
                onChange={handleChange}
                name="tags"
                color="info"
                error={error}
                disabled={disabled}
                // placeholder="Select tags from the list"
                IconComponent={() => { return isGallery ? <BsChevronDown size={"1.5rem"} color="red" style={{ padding: ".5rem" }} /> : null }}
                input={isGallery ? <OutlinedInput id="select-multiple-chip" label="Chip" /> : <Input id="select-multiple-chip" label="Chip" />}
                renderValue={(selected) => {
                    if (selected.length === 0) {
                        return <em>Select tags from the list</em>;
                    }

                    return <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 0.5 }}>
                        {selected.map((value) => (
                            <Chip key={value} label={value} />
                        ))}
                    </Box>
                }}
                sx={{ "& .MuiSelect-multiple": { paddingRight: "14px" } }}

                MenuProps={MenuProps}
            >
                <MenuItem disabled value="">
                    <em>Select tags from the list</em>
                </MenuItem>
                {
                    options.map((name) => (
                        <MenuItem
                            key={name}
                            value={name}
                            style={getStyles(name, personName, theme)}
                        >
                            {/* {name} */}
                            <Checkbox checked={personName.indexOf(name) > -1} />
                            <ListItemText primary={name} />
                        </MenuItem>
                    ))
                }
            </Select >
        </div>
        //   </FormControl>
        // </div>
    );
}