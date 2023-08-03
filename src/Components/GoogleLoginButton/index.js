import React, {
    // useEffect,
    useState
} from 'react'
import GoogleLogin from 'react-google-login';
import {
    // InputLabel, FormGroup,
    IconButton, useMediaQuery
} from '@mui/material'
import { makeStyles } from "@mui/styles";
// import { authenticateAction } from 'redux/actions'
// import { BASE_URL } from 'utils/constants';
// import { axiosDEF } from 'utils/axios';
import {
    useNavigate,
    // useHistory,
    // useLocation 
} from 'react-router-dom';
// import { useDispatch } from 'react-redux';

// * Icons
// import GoogleSVG from 'assets/googleSVG'
import { FcGoogle } from 'react-icons/fc'
import useAuth from '../../Hooks/useAuth';
import { useTheme } from '@emotion/react';

const useStyles = makeStyles((theme) => ({
    root: {
        background: theme.palette.background.paper,
        borderRadius: '6px',
        boxShadow: '0px 8px 14px rgb(0 0 0 / 4%)',
        width: '200px',
        height: '50px',
        // padding: '15px 25px',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        [theme.breakpoints.down("md")]: {
            width: "60px",
            height: "60px",
            borderRadius: "100%",
            textAlign: "center",
        },
        "& .title": {
            // fontWeight: 600 + " !important",
            fontWeight: "600 !important",
            // fontSize: '18px' + " !important",
            fontSize: "18px !important",
            color: theme.palette.text.link_sec,
            margin: 0 + " !important",
            padding: 0 + " !important",
            // marginLeft: "12px" + " !important",
            marginLeft: "12px !important",

        }
    }

}))
const GoogleLoginButton = ({ setErrorMessageAlert, setSuccessMessageAlert }) => {
    const classes = useStyles()
    // const history = useHistory()
    // let location = useLocation();
    // const dispatch = useDispatch()
    const navigate = useNavigate()
    const { googleLogin } = useAuth()
    const theme = useTheme()
    const desktop = useMediaQuery(theme.breakpoints.up("md"))

    const [loading, setLoading] = useState(false)
    const [success, setSuccess] = useState(false)
    // const [setSuccess] = useState(false)

    const responseGoogleSuccess = async (response) => {
        setLoading(true)
        // setErrorMessageAlert(null)
        // setSuccessMessageAlert(null)
        console.log("RESPONSE google login-->", response)
        if (response.accessToken) {
            const { accessToken, tokenId, profileObj: { googleId, email, name, imageUrl } } = response;
            const user = { _id: googleId, email, name, imageUrl }
            const token = `Bearer ${accessToken}`
            const authDetails = { userID: googleId, accessToken, auth_type: "google", token_id: tokenId }

            try {
                await googleLogin({ user, authDetails, token })
                navigate("/gallery")
                // if (res.status === 200 || res.status === 201) {
                //     setLoading(false)
                //     setSuccess(true)
                //     setSuccessMessageAlert('Please wait while we authenticate...')
                //     dispatch(authenticateAction(res.data))
                //     history.push('/');
                // }

            } catch (error) {
                // console.log("ERROR", error)
                // if (error.response.status === 400) {
                //     setErrorMessageAlert(error.response.data.message)
                // }
                // setLoading(false)
                // setSuccess(false)
                // history.push('/login');
            }
        }
    }
    const responseGoogleError = (error) => {
        // console.log("Google error", error);
    }

    return (
        <GoogleLogin
            autoLoad={false}
            clientId="227141246083-k2ljmp5trdglk5qgcjse8sneksfa5vtu.apps.googleusercontent.com"
            // clientId="992353109857-tocc1p66kp6nd81cm4hgvj3ivals86o0.apps.googleusercontent.com"
            render={renderProps => (
                <IconButton className={classes.root} variant='contained' onClick={renderProps.onClick} disabled={renderProps.disabled || loading} >
                    <FcGoogle />
                    {/* <span className="title">Google</span> */}
                    {desktop && <span className="title">{loading ? "Loading... " : "Google"}</span>}
                </IconButton >
            )}
            onSuccess={responseGoogleSuccess}
            onFailure={responseGoogleError}
            cookiePolicy={'single_host_origin'}
            accessType='offline'
            prompt='consent'
        // responseType='code'
        // redirectUri={`${window.location.origin}/authenticate/google`}
        // uxMode="redirect"
        // isMobile={true}
        />
    )
}

export default GoogleLoginButton
