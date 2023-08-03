import * as React from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Autocomplete from '@mui/material/Autocomplete';
// import LocationOnIcon from '@mui/icons-material/LocationOn';
import { HiOutlineLocationMarker } from 'react-icons/hi';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import parse from 'autosuggest-highlight/parse';
import throttle from 'lodash/throttle';
import { IconButton, InputAdornment } from '@mui/material';
import { AiOutlineSearch } from 'react-icons/ai';
import search from '../../Assets/Gallery/search.png';
import { makeStyles } from '@mui/styles';
// This key was created specifically for the demo in mui.com.
// You need to create a new one for your application.
const GOOGLE_MAPS_API_KEY = 'AIzaSyBQrRl3Pulu2F92-d4kw4NNG3ZqEKJoLgc';

{/* <BsChevronDown size={"1.5rem"} color="red" style={{ padding: ".5rem" }} /> */ }

const useStyles = makeStyles((theme) => ({
 
    Autocomplete: {
        "& .MuiButtonBase-root.MuiIconButton-root.MuiIconButton-sizeMedium.MuiAutocomplete-popupIndicator ": {
            transform: "rotate(0deg) !important",
        }
    },

}))

// function loadScript(src, position, id) {
//     if (!position) {
//         return;
//     }

//     const script = document.createElement('script');
//     script.setAttribute('async', '');
//     script.setAttribute('id', id);
//     script.src = src;
//     position.appendChild(script);
// }

const autocompleteService = { current: null };
// Autocomplete: {
//     "& .MuiButtonBase-root.MuiIconButton-root.MuiIconButton-sizeMedium.MuiAutocomplete-popupIndicator ": {
//         transform: "rotate(0deg) !important",
//     }
// },
export default function SearchGooglePlaces({ onLocationChange, error }) {
    const [value, setValue] = React.useState(null);
    const [inputValue, setInputValue] = React.useState('');
    const [options, setOptions] = React.useState([]);
    const loaded = React.useRef(false);
    const classes=useStyles();

    // if (typeof window !== 'undefined' && !loaded.current) {
    //     if (!document.querySelector('#google-maps')) {
    //         loadScript(
    //             `https://maps.googleapis.com/maps/api/js?key=${GOOGLE_MAPS_API_KEY}&libraries=places`,
    //             document.querySelector('head'),
    //             'google-maps',
    //         );
    //     }

    //     loaded.current = true;
    // }

    const fetch = React.useMemo(
        () =>
            throttle((request, callback) => {
                autocompleteService.current.getPlacePredictions(request, callback);
            }, 200),
        [],
    );

    React.useEffect(() => {
        let active = true;

        if (!autocompleteService.current && window.google) {
            autocompleteService.current =
                new window.google.maps.places.AutocompleteService();
        }
        if (!autocompleteService.current) {
            return undefined;
        }

        if (inputValue === '') {
            setOptions(value ? [value] : []);
            return undefined;
        }

        fetch({ input: inputValue }, (results) => {
            if (active) {
                let newOptions = [];

                if (value) {
                    newOptions = [value];
                }

                if (results) {
                    newOptions = [...newOptions, ...results];
                }

                setOptions(newOptions);
            }
        });

        return () => {
            active = false;
        };
    }, [value, inputValue, fetch]);

    return (
        <Autocomplete
            className={classes.Autocomplete}
            popupIcon={
                <>
                    <img src={search} width="100%" />
                </>
            }
            id="google-map-demo"
            // sx={{ width: 100 }}
            getOptionLabel={(option) =>
                typeof option === 'string' ? option : option.description
            }
            color="info"
            filterOptions={(x) => x}
            options={options}
            autoComplete
            includeInputInList
            filterSelectedOptions
            value={value}
            onChange={(event, newValue) => {
                setOptions(newValue ? [newValue, ...options] : options);
                setValue(newValue);
                onLocationChange(newValue)
            }}
            fullWidth
            onInputChange={(event, newInputValue) => {
                setInputValue(newInputValue);
            }}
            renderInput={(params) => (
                <TextField {...params} label="" variant='outlined' fullWidth color='info' error={error} />
            )}

            //   endAdornment: <InputAdornment position="end"><img src={search} width="100%" /></InputAdornment>,
            renderOption={(props, option) => {
                const matches = option.structured_formatting.main_text_matched_substrings;
                const parts = parse(
                    option.structured_formatting.main_text,
                    matches.map((match) => [match.offset, match.offset + match.length]),
                );

                return (
                    <li {...props}>
                        <Grid container alignItems="center">
                            <Grid item>
                                <Box
                                    component={HiOutlineLocationMarker}
                                    sx={{ color: 'text.secondary', mr: 2 }}
                                />
                            </Grid>
                            <Grid item xs>
                                {parts.map((part, index) => (
                                    <span
                                        key={`${index} ${part?.text}`}
                                        style={{
                                            fontWeight: part.highlight ? 700 : 400,
                                        }}
                                    >
                                        {part.text}
                                    </span>
                                ))}

                                <Typography variant="body2" color="text.secondary">
                                    {option.structured_formatting.secondary_text}
                                </Typography>
                            </Grid>
                        </Grid>
                    </li>
                );
            }}
        />
    );
}