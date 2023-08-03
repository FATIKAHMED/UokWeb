// * Libraries
import React, { useEffect, useState, useRef } from 'react';
import ReactPlayer from 'react-player/lazy'

// * Components
import { Dialog, DialogContent, DialogTitle, IconButton } from '@mui/material';

// * Icons
import { IoCloseCircleOutline } from 'react-icons/io5'

export default function VideoPreviewModal({ children, open, onClose, video, id }) {

    const videoPlayerRef = useRef(null)


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
            {children}
            <Dialog
                fullWidth={true}
                fullScreen
                // maxWidth='lg'
                open={open}
                onClose={onClose}
                scroll='body'
                aria-labelledby="scroll-dialog-title"
                aria-describedby="scroll-dialog-description"
            >
                <DialogTitle style={{display:"flex",justifyContent:"flex-end"}}>
                    <IconButton
                        edge="start"
                        color="inherit"
                        onClick={onClose}
                        aria-label="close"                        
                    >
                        <IoCloseCircleOutline size={"2rem"}/>
                    </IconButton>
                </DialogTitle>
                <DialogContent>
                    <ReactPlayer
                        ref={videoPlayerRef}
                        // url={videoUrl}
                        className='react-player'
                        // config={ }
                        url='https://www.youtube.com/watch?v=ysz5S6PUM-U'
                        // light={true}
                        width="100%"
                        height="86vh"
                        playing={true}
                        controls={true}
                        progressInterval={5000}
                        volume={.4}
                        fallback={<p>Loading...</p>}
                    // onProgress={handleProgress}
                    // onDuration={handleDuration}
                    // onSeek={e => console.log('onSeek', e)}
                    // onReady={() => setIsReady(true)}
                    // onStart={() => setIsStarted(true)}
                    // onEnded={handleEnded}
                    // onPause={handlePause}
                    // onError={handleError}
                    />

                    {/* Todo: Handle Other previewables tutorials */}
                    {/* <div style={{ height: "400px" }}>
                        <h4>Free sample videos</h4>
                        <ul>
                            {previewableTopics.map((topic, i) =>
                                <li style={{
                                    alignItems: 'center',
                                    display: 'flex',
                                    padding: '10px 20px',
                                }} key={i} onClick={() => handleClickVideoChange(topic.video, topic._id)}>
                                    {topic._id === currentTopic || topic.video === videoUrl ? <FiPlayCircle style={{ marginRight: '10px' }} /> : null}
                                    <p>{topic.title}</p>
                                </li>
                            )}
                        </ul>
                    </div> */}
                </DialogContent>

            </Dialog>
        </div>
    );
}
