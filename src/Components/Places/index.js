import * as React from "react";
import usePlacesAutocomplete, {
    getGeocode,
    getLatLng,
} from "use-places-autocomplete";
import TextField from "@mui/material/TextField";
import Autocomplete from "@mui/material/Autocomplete";



export default function Places({ setOffice }) {
    const {
        ready,
        value,
        setValue,
        suggestions: { status, data },
        clearSuggestions,
    } = usePlacesAutocomplete();

    const handleSelect = async (val) => {

        setValue(val, false);
        clearSuggestions();

        const results = await getGeocode({ address: val });
        console.log("results", results)
        const { lat, lng } = await getLatLng(results[0]);
        console.log("results", results)
        // setOffice({ lat, lng });
    };

    return (

        <Autocomplete
            disablePortal
            id="combo-box-demo"
            options={location}
            sx={{ width: 300 }}
            renderInput={(params) => <TextField {...params} label="Movie" value={value}
                onChange={(e) => setValue(e.target.value)}
            />}
            onSelect={handleSelect}
            disabled={!ready}
        />
    );
}
const location = [
    {
        label: "Monty Python and the Holy Grail",
        position: { lng: 12.2222, lat: 22.2222 }
    },
    {
        label: "the Holy Grail",
        position: { lng: 42.2222, lat: 42.2222 }
    },
    {
        label: "Monty Grail",
        position: { lng: 52.2222, lat: 91.2222 }
    },
    {
        label: "Monty Python ",
        position: { lng: 55.2222, lat: 72.2222 }
    }
];