// import jwtDecode from 'jwt-decode';
// import { verify, sign } from 'jsonwebtoken';
//
import axios from './axios';

// ----------------------------------------------------------------------

// const isValidToken = (accessToken) => {
//   if (!accessToken) {
//     return false;
//   }
//   const decoded = jwtDecode(accessToken);
//   const currentTime = Date.now() / 1000;

//   return decoded.exp > currentTime;
// };

const isTokenPresent = () => {
  const accessToken = localStorage.getItem("accessToken")
  if (!accessToken) {
    return false;
  }

  return true;
};


const setSession = (accessToken) => {
  if (accessToken) {
    localStorage.setItem('accessToken', accessToken);
    axios.defaults.headers.common.Authorization = accessToken;
    // axios.defaults.headers.common.Authorization = `Bearer ${accessToken}`;

    // This function below will handle when token is expired
    // const { exp } = jwtDecode(accessToken);
    // handleTokenExpired(exp);
  } else {
    localStorage.removeItem('accessToken');
    sessionStorage.removeItem('path');

    delete axios.defaults.headers.common.Authorization;
  }
};

// export { isTokenPresent, setSession, verify, sign };
export { isTokenPresent, setSession };
