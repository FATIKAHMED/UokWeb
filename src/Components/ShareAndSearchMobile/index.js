import React from 'react'
import { Button, IconButton, InputAdornment, TextField, useMediaQuery } from '@mui/material';
import searchBarBg from '../../Assets/Gallery/searchBarBg.svg'
import search from '../../Assets/Gallery/search.png'
import addPost from '../../Assets/Gallery/addPost.png'
import { makeStyles, useTheme } from '@mui/styles';

import { MdOutlineAddBox } from 'react-icons/md'
import { BiSearchAlt } from 'react-icons/bi'
import { Box } from '@mui/system';

const useStyles = makeStyles((theme) => ({
    mobilebox: {

        display: "flex",
        alignItems: 'center',
        justifyContent: "center",
        gap: "2.25rem",
        marginBottom: "32px"

    }
}))
const ShareAndSearchMobile = ({ onOpen,onOpenSearch }) => {
    const classes = useStyles()
    const theme = useTheme();
    const mobile = useMediaQuery(theme.breakpoints.down("md"));

    return (
        <>
            {mobile && <Box className={classes.mobilebox}>
                <IconButton onClick={onOpen} sx={{ color: theme.palette.blueDark }}>
                    {/* <MdOutlineAddBox size={"1.8rem"} /> */}
                    <img src={addPost} width="100%" alt="add post " />
                </IconButton>
                <IconButton onClick={onOpenSearch}>
                    <img src={search} width="100%" alt="add post " />
                    {/* <BiSearchAlt size={"1.8rem"} /> */}
                </IconButton>
            </Box>}
        </>
    )
}

export default ShareAndSearchMobile