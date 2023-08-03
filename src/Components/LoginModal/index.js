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
import { Box, FormControl, Grid, IconButton, TextField } from "@mui/material";
import SelectTextField from "../SelectTextField";
import styled from "@emotion/styled";
import { IoCloseCircleOutline } from "react-icons/io5";
import upload from "../../Assets/Gallery/upload.svg";

import Avatar from '@mui/material/Avatar';
import CssBaseline from '@mui/material/CssBaseline';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import Paper from '@mui/material/Paper';
import { AiOutlineLock } from 'react-icons/ai';
import Typography from '@mui/material/Typography';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { Link } from 'react-router-dom';

import axios from "axios";
import useAuth from '../../Hooks/useAuth';
import { Alert } from '@mui/material';
import FacebookLoginButton from "../FacebookLoginButton";
import GoogleLoginButton from "../GoogleLoginButton";

const Transition = React.forwardRef(function Transition(props, ref) {
    return <Slide direction="up" ref={ref} {...props} />;
});

const useStyles = makeStyles((theme) => ({
    root: {
        "& .MuiPaper-root": {
            maxWidth: "800px !important",
            width: '100%',
            minHeight: "86vh",
            [theme.breakpoints.down("md")]: {
                // marginTop:"200px"
            }
        },

        "& .dtitle": {
            fontFamily: theme.typography.Poppins,
            margin: "0",
            marginTop: "1rem",
            fontSize:"1.5rem",
            "& .MuiButtonBase-root.MuiIconButton-root.MuiIconButton-sizeMedium": {
                color: theme.palette.blueDark,

            },
            [theme.breakpoints.down("md")]: {
                // textAlign: "left",
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
                marginBottom: ".5rem"
            },
            "& .MuiFormControl-root": {
                marginBottom: ".5rem",
            },
            [theme.breakpoints.down("md")]: {
                "& .MuiFormControl-root": {
                    marginBottom: "2rem",
                },
                "& .MuiFormControl-root:last-child": {
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
            },
            "& .btnSecondary": {
                color: `${theme.palette.black} !important`,
                fontWeight: "600 !important",
            },
            [theme.breakpoints.down("md")]: {
                // padding: "1.5rem",
                flexDirection: "column-reverse",
                gap: "1rem",
                padding: "0",
                margin: 0,
                "& .MuiButton-sizeLarge.MuiButton-containedSizeLarge": {
                    width: "100%",
                    margin: 0,
                    fontWeight: 600,

                },
            }

        }
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

export default function LoginModal({ open, handleOpen, onClose }) {
    const theme = useTheme();
    const fullScreen = useMediaQuery(theme.breakpoints.down("md"));
    const classes = useStyles();

    // const [open, setOpen] = React.useState(false);
    // const handleOpen = () => {
    //     setOpen(true);
    // };

    // const onClose = () => {
    //     setOpen(false);
    // };
    const [email, setEmail] = React.useState("");
    const [password, setPassword] = React.useState("");
    const [isRemembered, setIsRemembered] = React.useState(false);
    const [showPassword, setShowPassword] = React.useState(false);
    const [loading, setLoading] = React.useState(false);
    const [message, setMessage] = React.useState(false);
    const [errors, setErrors] = React.useState({
        email: "",
        password: "",
    });
    const { login } = useAuth()

    const handleSubmit = async (event) => {
        event.preventDefault();
        // const data = new FormData(event.currentTarget);
        // console.log({
        //     email: data.get('email'),
        //     password: data.get('password'),
        // });

        if (email === "" && password === "") {
            setErrors({ password: "Password field is empty", email: "Email field is empty" })
            return
        }
        if (email === "") {
            setErrors({ ...errors, email: "Email field is empty" })
            return
        }
        if (password === "") {
            setErrors({ ...errors, password: "Password field is empty" })
            return

        }
        if (password.length < 5) {
            setErrors({ ...errors, password: "Password length should be greater than 5 charachters" })
            return

        }


        try {
            setLoading(true)
            const { response, error } = await login(email, password)
            setLoading(false)
            if (error) {
                setMessage(error.message)
                return
            }
            setMessage("")
            window.location.reload();
        }
        catch (error) {
            setMessage(error.message)
            setLoading(false)
        }


        // const{email, password}=data;
        // if(email || password)
    };

    return (
        <div>
            {/* <Button variant="text" onClick={handleOpen}>
                share
            </Button> */}
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
                <BootstrapDialogTitle
                    id="customized-dialog-title"
                    onClose={onClose}
                >
                    <span>Login </span>
                </BootstrapDialogTitle>
                <DialogContent>
                    <Grid item xs={12} sm={8} md={5} square>
                        <Box sx={{
                            display: "flex", flexWrap: "wrap", maxWidth: "500px", gap: "1rem", width: "100%", alignItems: 'center', justifyContent: "space-around", margin: "1rem auto",
                            [theme.breakpoints.down("md")]: {
                                justifyContent:"center",
                                gap:"3rem"

                            }
                        }}
                        >
                            <FacebookLoginButton />
                            <GoogleLoginButton />
                        </Box>
                        <Box
                            sx={{
                                // my: 8,
                                mx: "auto",
                                display: 'flex',
                                flexDirection: 'column',
                                alignItems: 'center',
                                maxWidth: "500px",
                                [theme.breakpoints.down("md")]: {

                                }
                            }}
                        >

                            <Box component="form" onSubmit={handleSubmit} sx={{ mt: 1 }}>
                                {message && <Alert severity="error">{message}</Alert>}
                                <TextField
                                    margin="normal"
                                    required
                                    fullWidth
                                    id="email"
                                    label="Email Address"
                                    name="email"
                                    // autoComplete="email"
                                    // autoFocus
                                    value={email}
                                    onChange={(e) => setEmail(e.target.value)}
                                    style={{ background: "transparent" }}
                                    error={errors?.email.length > 0 && true}
                                    disabled={loading}
                                />
                                {errors?.email && <span style={{ fontSize: "1rem", color: "red" }}>{errors.email}</span>}
                                <TextField
                                    margin="normal"
                                    required
                                    fullWidth
                                    name="password"
                                    label="Password"
                                    type="password"
                                    id="password"
                                    value={password}
                                    onChange={(e) => setPassword(e.target.value)}
                                    error={errors?.password.length > 0 && true}
                                    // errorText={errors.password}
                                    disabled={loading}
                                />
                                {errors?.password && <span style={{ fontSize: "1rem", color: "red" }}>{errors.password}</span>}

                                <FormControlLabel
                                    control={<Checkbox value="remember" color="primary" />}
                                    label="Remember me"
                                />
                                <Button
                                    type="submit"
                                    fullWidth
                                    variant="contained"
                                    color={"inherit"}
                                    sx={{ mt: 3, mb: 2, "&.MuiButton-colorInherit": { background: theme.palette.blueDark, color: "white" } }}

                                    disabled={loading}
                                >
                                    Sign In
                                </Button>
                                <Grid container>
                                    <Grid item xs>
                                        {/* <Typography variant="link" color='blue'>
                                        Forgot password?
                                    </Typography> */}
                                    </Grid>
                                    <Grid item>
                                        <span>Don't have an account? </span>
                                        <Link to="/signup" variant="body2">
                                            Register now
                                        </Link>
                                    </Grid>
                                </Grid>
                            </Box>
                        </Box>
                    </Grid>
                </DialogContent>
                <DialogActions sx={{ paddingRight: "1.5rem" }} className="dialogActions">

                </DialogActions>
            </Dialog>
        </div>
    );
}
