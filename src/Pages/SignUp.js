import * as React from 'react';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import Paper from '@mui/material/Paper';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import { AiOutlineLock } from 'react-icons/ai';
import Typography from '@mui/material/Typography';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { Link } from 'react-router-dom';
import useAuth from '../Hooks/useAuth';
import { Alert } from '@mui/material';
import { useTheme } from '@mui/styles';
import img from '../Assets/Community/Finds-shopping-carts.jpg';
import FacebookLoginButton from '../Components/FacebookLoginButton';
import GoogleLoginButton from '../Components/GoogleLoginButton';

const styles = {
    '& .MuiOutlinedInput-root': {
        '& label.Mui-focused': {
            color: 'grey',
        },
        '& fieldset': {
            borderColor: 'grey',
        },
        '&:hover fieldset': {
            borderColor: 'grey',
        },
        '&.Mui-focused fieldset': {
            borderColor: 'grey',
            color: "grey"
        },
        "&.MuiOutlinedInput-root fieldset": {
            color: "grey"
        },
    },
}

export default function SignUp() {
    const theme = useTheme();
    const { register } = useAuth()
    const [name, setName] = React.useState("");
    const [email, setEmail] = React.useState("");
    const [password, setPassword] = React.useState("");
    const [confirmPassword, setConfirmPassword] = React.useState("");
    const [showPassword, setShowPassword] = React.useState(false);
    const [showConfirmPassword, setShowConfirmPassword] = React.useState(false);
    const [loading, setLoading] = React.useState(false);
    const [message, setMessage] = React.useState(false);
    const [errors, setErrors] = React.useState({
        name: "",
        email: "",
        password: "",
        confirmPassword: "",
    });
    const handleSubmit = async (event) => {
        event.preventDefault();
        // const data = new FormData(event.currentTarget);
        // console.log({
        //     email: data.get('email'),
        //     password: data.get('password'),
        // });
        if (email === "" && password === "" && name && confirmPassword) {
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
        if (confirmPassword === "") {
            setErrors({ ...errors, confirmPassword: "Confirm password field is empty" })
            return
        }
        if (password.length < 5) {
            setErrors({ ...errors, password: "Password length should be greater than 5 charachters" })
            return

        }
        if (password === email) {
            setErrors({ ...errors, password: "Password and Email should not be same" })
            return
        }
        if (password !== confirmPassword) {
            setErrors({ ...errors, password: "Password doesnot match", confirmPassword: "Password doesnot match" })
            return

        }


        try {
            setLoading(true)
            const { response, error } = await register(name, email, password)
            setLoading(false)
            if (error) {
                setMessage(error.message.text)
                return
            }
            setMessage("")
        }
        catch (error) {
            setMessage(error.message)
            console.log("message", error)
            setLoading(false)
        }
    };

    return (

        <Grid container component="main" sx={{ height: '100vh' }}>
            <CssBaseline />
            <Grid
                item
                xs={false}
                sm={4}
                md={7}
                sx={{
                    // backgroundImage: 'url(https://source.unsplash.com/random)',
                    backgroundImage: `url(${img})`,
                    backgroundRepeat: 'no-repeat',
                    backgroundColor: (t) =>
                        t.palette.mode === 'light' ? t.palette.grey[50] : t.palette.grey[900],
                    backgroundSize: 'cover',
                    backgroundPosition: 'center',
                }}
            />
            <Grid item xs={12} sm={8} md={5} component={Paper} elevation={6} square>
                <Box
                    sx={{
                        my: 8,
                        mx: 4,
                        display: 'flex',
                        flexDirection: 'column',
                        alignItems: 'center',
                    }}
                >
                    <Avatar sx={{ m: 1, bgcolor: 'primary.main' }}>
                        <AiOutlineLock />
                    </Avatar>
                    <Typography component="h1" variant="h5">
                        Sign Up
                    </Typography>
                    <Box sx={{
                        display: "flex", width: "100%", flexWrap: "wrap", maxWidth: "500px", gap: "1rem", alignItems: 'center', justifyContent: "space-around", margin: "1rem 0",
                        [theme.breakpoints.down("md")]: {
                            justifyContent: "center",
                            gap: "3rem"

                        }
                    }}>
                        <FacebookLoginButton />
                        <GoogleLoginButton />
                    </Box>
                    <Box component="form" onSubmit={handleSubmit} sx={{ mt: 3 }}>
                        <Grid container spacing={2}>
                            {<Grid item xs={12} >
                                {message && <Alert severity="error">{message}</Alert>}
                            </Grid>}
                            <Grid item xs={12} >
                                <TextField
                                    color="info"
                                    name="name"
                                    required
                                    fullWidth
                                    id="name"
                                    label="Name"
                                    // autoFocus
                                    value={name}
                                    onChange={(e) => setName(e.target.value)}
                                    style={{
                                        background: "transparent",
                                    }}
                                    error={errors?.name.length > 0 && true}
                                    disabled={loading}
                                    sx={styles}

                                />
                                {errors?.name && <span style={{ fontSize: "1rem", color: "red" }}>{errors?.name}</span>}

                            </Grid>
                            <Grid item xs={12}>
                                <TextField
                                    color="info"
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
                                    sx={styles}
                                />
                                {errors?.email && <span style={{ fontSize: "1rem", color: "red" }}>{errors?.email}</span>}

                            </Grid>
                            <Grid item xs={12}>
                                <TextField
                                    color="info"
                                    required
                                    fullWidth
                                    name="password"
                                    label="Password"
                                    type="password"
                                    id="password"
                                    // autoComplete="new-password"
                                    // autoFocus
                                    value={password}
                                    onChange={(e) => setPassword(e.target.value)}
                                    style={{ background: "transparent" }}
                                    error={errors?.password.length > 0 && true}
                                    disabled={loading}
                                    sx={styles}
                                />
                                {errors?.password && <span style={{ fontSize: "1rem", color: "red" }}>{errors?.password}</span>}

                            </Grid>
                            <Grid item xs={12}>
                                <TextField
                                    color="info"
                                    required
                                    fullWidth
                                    name="confirmPassword"
                                    label="Confirm password"
                                    type="password"
                                    id="confirmPassword"
                                    // autoComplete="new-password"
                                    // autoFocus
                                    value={confirmPassword}
                                    onChange={(e) => setConfirmPassword(e.target.value)}
                                    style={{ background: "transparent" }}
                                    error={errors?.confirmPassword.length > 0 && true}
                                    disabled={loading}
                                    sx={styles}
                                />
                                {errors?.confirmPassword && <span style={{ fontSize: "1rem", color: "red" }}>{errors?.confirmPassword}</span>}

                            </Grid>

                        </Grid>
                        <Button
                            type="submit"
                            fullWidth
                            variant="contained"
                            color="inherit"
                            sx={{ mt: 3, mb: 2, "&.MuiButton-colorInherit": { background: theme.palette.blueDark, color: "white" } }}
                            disabled={loading}

                        >
                            Sign Up
                        </Button>
                        <Grid container justifyContent="flex-end">
                            <Grid item>
                                <span>Already have an account? </span>
                                <Link to="/login" variant="body2">
                                    Sign in
                                </Link>
                            </Grid>
                        </Grid>

                    </Box>
                </Box>
            </Grid>
        </Grid>
    );
}