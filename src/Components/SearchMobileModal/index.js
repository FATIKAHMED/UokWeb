// * Libraries
import React, { useEffect, useState, useRef } from 'react';
import ReactPlayer from 'react-player/lazy'

// * Components
import { Chip, Dialog, DialogActions, DialogContent, DialogTitle, IconButton, Slide, Typography, useMediaQuery } from '@mui/material';

// * Icons
import { IoCloseCircleOutline } from 'react-icons/io5'
import { Box } from '@mui/system';
import { makeStyles, useTheme } from '@mui/styles';
import SearchGooglePlaces from '../SearchGooglePlaces';
import search from '../../Assets/Gallery/search.png';
import SearchAutocompleteTag from '../SearchAutocompleteTag';


const useStyles = makeStyles((theme) => ({


    dialogTitle: {
        display: "flex", justifyContent: 'flex-end',
        padding: 0
    },

    dialogContent: {
        height: "100%", textAlign: "center", overflow: "hidden",
        paddingTop: 0,
        paddingBottom: 0,
    },
    dialogActions: {
        display: "flex",
        justifyContent: "flex-start",
        margin: "0 1rem",
        "& .contentBox": {
            display: "flex",
            flexDirection: 'column',
            alignItems: "flex-start",
            gap: ".2rem",
            "& .find": {
                fontWeight: "600", fontSize: "2rem",
            },
            "& .address": {
                fontSize: "1rem"
            },
            "& .chip": {
                height: "22px",
                minWidth: "86px",
                maxWidth: "100px",
                color: "#fff",
                background: "#FC0954",
                fontSize: "12px",
                fontWeight: "500",
                padding: "0 12px",
                marginRight: "2px",
                // [theme.breakpoints.down("sm")]: {
                //   fontSize: "10px",
                //   minWidth: "56px",
                // },
            },

        }
    }
}))

const Transition = React.forwardRef(function Transition(props, ref) {
    return <Slide direction="up" ref={ref} {...props} />;
});
export default function SearchMobileModal({ open, onClose, onAddressChangeMobile, isGallery,tags, onTagChange }) {

    const classes = useStyles();
    const theme = useTheme();
    const fullScreen = useMediaQuery(theme.breakpoints.down("md"));

    return (
        <div>
            <Dialog
                fullWidth={true}
                TransitionComponent={Transition}
                // fullScreen={fullScreen}
                maxWidth='sm'
                open={open}
                onClose={onClose}
                scroll='body'
                aria-labelledby="scroll-dialog-title"
                aria-describedby="scroll-dialog-description"
            >
                <DialogTitle className={classes.dialogTitle}>
                    <IconButton
                        edge="start"
                        color="inherit"
                        onClick={onClose}
                        aria-label="close"
                    >
                        <IoCloseCircleOutline size={"1.2rem"} />
                    </IconButton>
                </DialogTitle>
                <DialogContent className={classes.dialogContent}>
                    {isGallery ?
                        <SearchAutocompleteTag onTagChange={onTagChange} tags={tags}/> :
                        <SearchGooglePlaces onLocationChange={(location) => { onAddressChangeMobile({ address: location?.description, placeId: location?.place_id }) }} error={false} />}

                </DialogContent>
                <DialogActions className={classes.dialogActions}>

                </DialogActions>

            </Dialog>
        </div >
    );
}
