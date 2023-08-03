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
import { Alert, Box, FormControl, Grid, IconButton, TextField } from "@mui/material";
import { IoCloseCircleOutline } from "react-icons/io5";
import isEmpty from "../../Utils/isEmpty";
// import upload from "../../Assets/Gallery/upload.svg";
import SelectTextField from "../SelectTextField";
import styled from "@emotion/styled";
import useAuth from "../../Hooks/useAuth";
import ImgDropzone from "../ImgDropzone";
import SelectMultiple from "../SelectMultiple";
import SelectMultipleTag from "../SelectMultipleTag";
import GooglePlacesInput from "../GooglePlacesInput";
import axios from "axios";


const Transition = React.forwardRef(function Transition(props, ref) {
    return <Slide direction="up" ref={ref} {...props} />;
});

const useStyles = makeStyles((theme) => ({
    root: {
        "& .MuiPaper-root": {
            maxWidth: "800px !important",
            width: "100%",
            minHeight: "500px",
            // minHeight: "86vh",
            // '@media (height: 900px)': {
            //     background: '#000',
            //   },
        },

        "& .dtitle": {
            fontFamily: theme.typography.Poppins,
            margin: "1rem 0",
            marginBottom: "1rem",
            "& .MuiButtonBase-root.MuiIconButton-root.MuiIconButton-sizeMedium": {
                color: theme.palette.blueDark,

            },
            [theme.breakpoints.down("md")]: {
                textAlign: "left",
                margin: "0",
                marginBottom: "1rem",
                // marginBottom: "2.5rem",
            }

        },
        "& .gridForm": {
            "& .labelForm": {
                fontFamily: theme.typography.Poppins,
                color: theme.palette.blueDark,
                fontSize: "1rem",
                fontWeight: 600,
                margin: 0,
                marginBottom: ".5rem",
                [theme.breakpoints.down("md")]: {
                    marginBottom: "13px",

                }
            },
            "& .MuiFormControl-root": {
                marginBottom: ".5rem",
            },
            [theme.breakpoints.down("md")]: {
                "& .FormControl": {
                    // marginBottom: "1.6rem",
                    marginBottom: ".6rem",
                },
                "& .FormControl:last-child": {
                    marginBottom: "0",
                },
            }

        },
        "& .grid2": {
            fontFamily: theme.typography.Poppins,
            [theme.breakpoints.down("md")]: {
                maxWidth: "100%",
                width: "100%",
                "& .uploadBox": {
                    padding: "2rem 0rem",
                },
            }

        },
        "& .dialogActions": {
            "& .btnPrimary": {
                background: theme.palette.blueDark,
                fontWeight: "bold"
            },
            "& .btnSecondary": {
                color: `${theme.palette.black} !important`,
                fontWeight: "600 !important",
            },
            [theme.breakpoints.down("md")]: {
                // padding: "1.5rem",
                // gap: "1rem",
                padding: ".5rem",
                gap: ".75rem",
                flexDirection: "column-reverse",
                "& .MuiButton-sizeLarge.MuiButton-containedSizeLarge": {
                    width: "100%",
                    margin: 0,
                    fontWeight: 600,

                },
            }

        }
    },
    dialogContent: {
        [theme.breakpoints.down("md")]: {
            // overflow: "hidden",
            // marginBottom: '2rem',
            // maxHeight: "350px",
            // maxHeight: "290px",
            height:'auto',
            marginBottom: '0rem',
            overflowY: "scroll",
        },
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

export default function ShareFindModal({ open, handleOpen, onClose }) {
    const theme = useTheme();
    const fullScreen = useMediaQuery(theme.breakpoints.down("md"));
    const classes = useStyles();
    const { posts, tags, createPost, getPostsGeneral } = useAuth()

    const intialValues = { find: "", location: {}, tags: [], files: [] };
    const [formValues, setFormValues] = React.useState(intialValues);
    const [formErrors, setFormErrors] = React.useState({});
    const [error, setError] = React.useState('');
    const [isSubmitting, setIsSubmitting] = React.useState(false);
    const [loading, setLoading] = React.useState(false);
    const [attachementFiles, setAttachementFiles] = React.useState([]);


    const submitForm = async (form) => {
        console.log("submitForm formValues-->", formValues);

        setLoading(true);
        const { response, error } = await createPost(form);
        console.log("submitForm res", response);
        if (isEmpty(error)) {
            getPostsGeneral({ filter: [], sort: "top" })
            setFormValues(intialValues)
            onClose()
            setError("")
            setFormErrors({})
            setIsSubmitting(false)
            setLoading(false)
        }
        else {
            setFormErrors({})
            setIsSubmitting(false)
            setLoading(false)
            console.log("error-->", error)
            setError("Something went wrong")
        }
    };

    const handleChange = (name, value) => {
        setFormValues({ ...formValues, [name]: value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        const form = { ...formValues, files: [...attachementFiles] }
        // console.log('form', form);
        setFormErrors(validate(form));
        setFormValues(form);
        console.log("handleSubmit isSubmitting", isSubmitting);
        setIsSubmitting(true);
    };

    const handleClose = () => {
        onClose();
        setFormErrors({});
    };

    const GOOGLE_MAPS_API_KEY = 'AIzaSyBQrRl3Pulu2F92-d4kw4NNG3ZqEKJoLgc';

    const getAddress = async () => {
        const { placeId } = formValues.location;
        const url = `https://maps.googleapis.com/maps/api/geocode/json?place_id=${placeId}&key=${GOOGLE_MAPS_API_KEY}`;
        try {
            const response = await fetch(url)
            const data = await response.json()
            const { formatted_address, geometry: { location } } = data?.results[0];
            // const locationObj = {
            //     address: formatted_address,
            //     latLng: location,
            //     placeId,
            // }
            if (isEmpty(location)) return

            const form = { ...formValues, location: { ...formValues.location, latLng: location } }
            // console.log("GetaddresslocationFORM", form)
            setFormValues(form)
            return form
        }
        catch (e) {
            console.log("error", e)
        }


    }

    const validate = (values) => {
        let errors = {};

        if (!values.find) {
            errors.find = "Cannot be blank";
        } else if (values.find.length < 4) {
            errors.find = "find must be more than 4 characters";
        }
        if (isEmpty(values.location)) {
            errors.location = "Cannot be blank";
        }
        // else if (values.location.length < 4) {
        //     errors.location = "location must be more than 4 characters";
        // }
        if (values.tags.length <= 0) {
            errors.tags = "Cannot be blank";
        }
        if (values.files.length <= 0) {
            errors.files = "Cannot be empty";
        }

        // const regex = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/i;
        // if (!values.email) {
        //     errors.email = "Cannot be blank";
        // } else if (!regex.test(values.email)) {
        //     errors.email = "Invalid email format";
        // }
        // if (!values.password) {
        //     errors.password = "Cannot be blank";
        // } else if (values.password.length < 4) {
        //     errors.password = "Password must be more than 4 characters";
        // }
        return errors;
    };

    React.useEffect(async () => {
        if (Object.keys(formErrors).length === 0 && isSubmitting) {
            const form = await getAddress()
            submitForm(form)
            setIsSubmitting(false)
        }
    }, [formErrors]);

    return (

        <Dialog
            fullScreen={fullScreen}
            open={open}
            onClose={handleClose}
            aria-labelledby="responsive-dialog-title"
            TransitionComponent={Transition}
            className={classes.root}
            sx={{ top: "5rem" }}
            hideBackdrop={fullScreen}
            onBackdropClick={handleClose}
        // aria-describedby="alert-dialog-slide-description"
        >
            <Box
                component="form"
                sx={{
                    "& .MuiTextField-root": { mt: 0, width: "100%", },
                    [theme.breakpoints.down("md")]:{
                        overflow: "hidden",
                        display: "flex",
                        flexDirection: "column",
                        justifyContent: "space-between",
                        height: "100%",
                    }
                }}
                noValidate
                autoComplete="off"
                onSubmit={handleSubmit}
            >
                <BootstrapDialogTitle
                    id="customized-dialog-title"
                    onClose={handleClose}
                >
                    <span>Share a new post</span>
                    {error && <Alert severity="error" onClose={() => { setError("") }}>{error}</Alert>}
                </BootstrapDialogTitle>
                <DialogContent className={classes.dialogContent}>
                    <Grid container spacing={5}>
                        <Grid item xs={12} md={6} className="gridForm grid1">
                            <FormControl fullWidth className="FormControl">
                                <p className="labelForm">What's your Find?</p>
                                <TextField
                                    autoFocus
                                    margin="none"
                                    name="find"
                                    // label="Find"
                                    type="text"
                                    fullWidth
                                    variant="outlined"
                                    color="info"
                                    value={formValues.find}
                                    onChange={(e) => { handleChange(e.target.name, e.target.value) }}
                                    error={formErrors?.find && true}
                                    className="textField"
                                //  disabled={loading}
                                />
                                {formErrors?.find && <span style={{ fontSize: ".75rem", color: "red" }}>{formErrors.find}</span>}
                            </FormControl>
                            <FormControl fullWidth className="FormControl">
                                <p className="labelForm">Location of the find</p>
                                {/* <TextField
                                    autoFocus
                                    margin="none"
                                    name="location"
                                    // label="Location"
                                    type="text"
                                    fullWidth
                                    variant="outlined"
                                    color="info"
                                    value={formValues.location}
                                    onChange={(e) => { handleChange(e.target.name, e.target.value) }}
                                    error={formErrors?.location && true}
                                    className="textField"
                                /> */}
                                <GooglePlacesInput error={formErrors?.location && true} onLocationChange={(location) => { handleChange("location", { address: location.description, placeId: location.place_id }) }} />
                                {formErrors?.location && <span style={{ fontSize: ".75rem", color: "red" }}>{formErrors.location}</span>}

                            </FormControl>

                            <FormControl fullWidth className="FormControl">
                                <p className="labelForm">Set tags</p>
                                {/* <SelectTextField
                                    value={formValues.tags}
                                    onChange={handleChange}
                                    error={formErrors?.tags && true}
                                    options={posts?.[0]?.tags}
                                /> */}
                                <SelectMultipleTag

                                    value={formValues.tags}
                                    onChange={(val) => { handleChange("tags", val) }}
                                    error={formErrors?.tags && true}
                                    options={tags}
                                    disabled={loading}
                                    // options={posts?.[0]?.tags}
                                    isGallery={true}
                                    maxTag={2}
                                />
                                {formErrors?.tags && <span style={{ fontSize: ".75rem", color: "red" }}>{formErrors.tags}</span>}
                            </FormControl>
                        </Grid>
                        <Grid item xs={12} md={6} className="gridForm grid2">
                            <Box className="uploadBox" sx={{ background: "#f7f7f7", height: "100%", width: "100%", display: "flex", flexDirection: "column", justifyContent: "center", alignItems: "center" }}>
                                {/* <img src={upload} alt="upload" />
                                <span className="labelUpload">Upload Media</span> */}
                                <ImgDropzone disabled={loading}
                                    setAttachementFiles={(files) => setAttachementFiles(files)}
                                // setAttachementFiles={(files) => setAttachementFiles("files", files)} 
                                />

                                {formErrors?.files && <span style={{ fontSize: ".75rem", color: "red" }}>{formErrors.files}</span>}
                            </Box>
                        </Grid>
                    </Grid>
                </DialogContent>
                <DialogActions sx={{ paddingRight: "1.5rem" }} className="dialogActions">
                    <Button className="btnSecondary" variant="default" autoFocus onClick={handleClose}>
                        Cancel
                    </Button>
                    <Button
                        variant="contained"
                        size="large"
                        // onClick={onClose}
                        autoFocus
                        sx={{ width: "9rem" }}
                        className="btnPrimary"
                        type='submit'
                        disabled={loading}
                    >
                        Post
                    </Button>
                </DialogActions>
            </Box>
        </Dialog>
    );
}
