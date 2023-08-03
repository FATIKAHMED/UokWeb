import * as React from "react";
import Button from "@mui/material/Button";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogTitle from "@mui/material/DialogTitle";
import useMediaQuery from "@mui/material/useMediaQuery";
import { useTheme } from "@mui/material/styles";
import { makeStyles } from "@mui/styles";
import Slide from "@mui/material/Slide";
import { Box, IconButton } from "@mui/material";
import { IoCloseCircleOutline } from "react-icons/io5";

import SocialShare from "../SocialShare";


const Transition = React.forwardRef(function Transition(props, ref) {
    return <Slide direction="up" ref={ref} {...props} />;
});

const useStyles = makeStyles((theme) => ({
    root: {
        "& .MuiPaper-root": {
            maxWidth: "800px !important",
            width: "100%",
            // minHeight:"86vh",       
            // [theme.breakpoints.down("md")]: {
            // }
        },

    },
    dialogContent:{
        display:"flex",
        justifyContent:"center",
        alignItems:'center',
        gap:"1rem"
    }
}))

const BootstrapDialogTitle = (props) => {
    const { children, onClose, ...other } = props;
    return (
        <DialogTitle className="dtitle" sx={{ m: 0, padding: "1rem 1.5rem", textAlign: 'center', fontWeight: 600 }} {...other}>
            {children}
            {onClose ? (
                <IconButton
                    aria-label="close"
                    onClick={onClose}
                    sx={{
                        position: "absolute",
                        right: 8,
                        top: 8,
                        color: (theme) => theme.palette.grey[500]
                    }}
                >
                    <IoCloseCircleOutline />
                </IconButton>
            ) : null}
        </DialogTitle>
    );
};

export default function SocialShareModal({ open, onClose,post }) {
    const theme = useTheme();
    const fullScreen = useMediaQuery(theme.breakpoints.down("md"));
    const classes = useStyles();
  
    const [loading, setLoading] = React.useState(false);


   

    return (

        <Dialog
            fullScreen={fullScreen}
            open={open}
            onClose={onClose}
            aria-labelledby="responsive-dialog-title"
            TransitionComponent={Transition}
            className={classes.root}
            sx={{ top: "5rem" }}
            hideBackdrop={fullScreen}
            onBackdropClick={onClose}
        // aria-describedby="alert-dialog-slide-description"
        >
            <Box
                sx={{
                    "& .MuiTextField-root": { mt: 0, width: "100%" }
                }}
                noValidate
                autoComplete="off"                
            >
                <BootstrapDialogTitle
                    id="customized-dialog-title"
                    onClose={onClose}
                >
                    <span>Share Post to Social Media</span>
                </BootstrapDialogTitle>
                <DialogContent className={classes.dialogContent}>
                    <SocialShare post={post}/>
                </DialogContent>
                {/* <DialogActions sx={{ paddingRight: "1.5rem" }} className="dialogActions">
                    <Button className="btnSecondary" variant="default" autoFocus onClick={onClose}>
                        Cancel
                    </Button>
                   
                </DialogActions> */}
            </Box>
        </Dialog>
    );
}
