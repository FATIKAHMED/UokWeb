// * Libraries
import React, { useEffect, useState, useRef } from 'react';
import ReactPlayer from 'react-player/lazy'

// * Components
import { Chip, Dialog, DialogActions, DialogContent, DialogTitle, IconButton, Slide, Typography, useMediaQuery } from '@mui/material';

// * Icons
import { IoCloseCircleOutline } from 'react-icons/io5'
import { Box } from '@mui/system';
import { makeStyles, useTheme } from '@mui/styles';
import Loader from '../Loader';

const styles = {

}
const useStyles = makeStyles((theme) => ({


    dialogTitle: {
        display: "flex", justifyContent: 'flex-end',
        padding: 0
    },

    dialogContent: {
        height: "100%", textAlign: "center", overflow: "hidden",
        paddingTop: 0,
        paddingBottom: 0,
        width:'100%',
        "& .react-player": {
       
        },
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
const url = 'https://www.youtube.com/watch?v=ysz5S6PUM-U';

export default function PostModal({ open, onClose, data: { video, image, find, tags, address } }) {

    const classes = useStyles();
    const videoPlayerRef = useRef(null)
    const theme = useTheme();
    const fullScreen = useMediaQuery(theme.breakpoints.down("md"));


    // //? Video to play on mount
    // const [videoUrl, setVideoUrl] = useState(video)


    // //? When the player is ready to play video
    // const [isReady, setIsReady] = useState(false);


    // //? When the player has started playing video
    // const [isStarted, setIsStarted] = useState(false)





    // useEffect(() => {
    //     setVideoUrl(video)

    //     return () => {
    //         setVideoUrl(null)
    //     }

    // }, [open])

    // const handleClickVideoChange = (vid, id) => {
    //     setVideoUrl(vid)
    // }




    // const handleDuration = (duration) => {
    //     // console.log('onDuration', duration)
    // }
    // const handleEnded = () => {
    //     // TODO: Handle isCompleted & progress api
    //     // console.log('onEnded')
    // }
    // const handlePause = () => {
    //     // TODO: Handle progress api
    //     // console.log('onPause')
    // }
    // const handleError = () => {
    //     // TODO: Handle progress api
    //     // console.log('handleError')
    // }



    // const handleProgress = progress => {
    //     // TODO: Handle progress api 
    //     // console.log("Video Player Progress", "Played::", progress.playedSeconds)
    // }

    return (
        <div>
            <Dialog
                fullWidth={fullScreen}
                // fullScreen
                maxWidth='sm'
                open={open}
                onClose={onClose}
                TransitionComponent={Transition}
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
                        <IoCloseCircleOutline size={"2rem"} />
                    </IconButton>
                </DialogTitle>
                <DialogContent className={classes.dialogContent}>
                    {video.length > 5 ? <ReactPlayer
                        ref={videoPlayerRef}
                        className='react-player'
                        // config={ }
                        url={video ? video : url}
                        // light={true}
                        width="100%"
                        // height="86vh"
                        height="100%"
                        playing={true}
                        controls={true}
                        progressInterval={5000}
                        volume={.4}
                        fallback={<Loader />}
                    // onProgress={handleProgress}
                    // onDuration={handleDuration}
                    // onSeek={e => console.log('onSeek', e)}
                    // onReady={() => setIsReady(true)}
                    // onStart={() => setIsStarted(true)}
                    // onEnded={handleEnded}
                    // onPause={handlePause}
                    // onError={handleError}
                    /> :
                        <img src={image} alt="preview" height="100%" width="auto" style={{ maxWidth: "100%", maxHeight: "368px", }} />
                    }



                </DialogContent>
                <DialogActions className={classes.dialogActions}>
                    <Box className="contentBox">
                        <Typography variant="h2" component={"h2"} className={"find"}>{find}</Typography>
                        <Typography variant="body1" component={"p"} className="address">{address}</Typography>
                        <div style={{ marginBottom: "1rem" }}>{tags.length > 0 && tags.map(tag => <Chip label={tag} className={"chip"} />)}</div>
                    </Box>
                </DialogActions>

            </Dialog>
        </div >
    );
}
