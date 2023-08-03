import * as React from 'react';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import Paper from '@mui/material/Paper';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import { AiOutlineLock } from 'react-icons/ai';
import Typography from '@mui/material/Typography';
import { Link } from 'react-router-dom';
import img from '../Assets/AboveTheFold/Find_grenade_goodphoto.jpg';

import axios from "axios";
import useAuth from '../Hooks/useAuth';
import { Alert } from '@mui/material';
import { useTheme } from '@mui/styles';
import FacebookLoginButton from '../Components/FacebookLoginButton';
import GoogleLoginButton from '../Components/GoogleLoginButton';



export default function Login() {
    const theme = useTheme();
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
        }
        catch (error) {
            setMessage(error.message)
            setLoading(false)
        }


        // const{email, password}=data;
        // if(email || password)
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
                        Sign in
                    </Typography>
                    <Box sx={{
                        display: "flex", width: "100%",flexWrap: "wrap", maxWidth: "500px", gap: "1rem", alignItems: 'center', justifyContent: "space-around", margin: "1rem 0",
                        [theme.breakpoints.down("md")]: {
                            justifyContent: "center",
                            gap: "3rem"

                        }
                    }}>
                        <FacebookLoginButton />
                        <GoogleLoginButton />
                    </Box>
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
                            color="info"
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
                            color="info"
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
                            color="inherit"
                            className='btn'
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
        </Grid>

    );
}