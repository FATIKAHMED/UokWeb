import * as React from 'react';
import Chip from '@mui/material/Chip';
import Autocomplete from '@mui/material/Autocomplete';
import TextField from '@mui/material/TextField';
import search from '../../Assets/Gallery/search.png';
import { Box, useMediaQuery } from '@mui/material';
import { makeStyles, useTheme } from '@mui/styles';
import useAuth from '../../Hooks/useAuth';
import isEmpty from '../../Utils/isEmpty';
// 

const useStyles = makeStyles((theme) => ({

    wrapper: {
        "& .MuiOutlinedInput-root ": {
            minHeight: 56
        }
    },
    Autocomplete: {
        "& .MuiButtonBase-root.MuiIconButton-root.MuiIconButton-sizeMedium.MuiAutocomplete-popupIndicator ": {
            transform: "rotate(0deg) !important",
        }
    },

}))
export default function SearchAutocompleteTag({ onTagChange, tags = [] }) {
    const classes = useStyles();
    const theme = useTheme();
    const mobile = useMediaQuery(theme.breakpoints.down("md"));
    const { tags: Options, getTags } = useAuth();
    const [selected, setSelected] = React.useState([]);
    // const [tagOptions, setTagOptions] = React.useState(Options);

    // React.useEffect(() => {
    //     async function Tags() {
    //         try {
    //             const { response, error } = await getTags();
    //             console.log("tags", response.data)
    //             if (!isEmpty(response)) {
    //                 setTagOptions(response.data)
    //             }
    //         }
    //         catch (e) {
    //             console.log("tagsError", e)
    //         }
    //     }
    //     if (tags.length === 0) {

    //         Tags()
    //     }
    //     console.log("tags-->", tags)

    // }, [])


    return (
        <Box spacing={3} sx={{ width: mobile ? "auto" : 500 }} className={classes.wrapper}>

            <Autocomplete
                multiple
                id="tags-outlined"
                limitTags={2}
                options={Options}
                getOptionLabel={(option) => option}
                // defaultValue={[top100Films[13]]}
                filterSelectedOptions
                className={classes.Autocomplete}
                value={mobile ? tags : selected}
                popupIcon={
                    <>
                        <img src={search} width="100%" />
                    </>
                }
                // renderTags={(value, getTagProps) =>
                //     value.map((option, index) => (
                //         <Chip variant="outlined" label={option} {...getTagProps({ index })} />
                //     ))

                // }
                renderInput={(params) => (
                    <TextField
                        {...params}
                        label=""
                        placeholder="Search by tags"
                        color="info"
                    />
                )}
                // onTagChange(e.target.innerText)
                onChange={(event, newValue) => {
                    onTagChange(newValue)
                    setSelected(newValue)
                }}
            />
        </Box>
    );
}

