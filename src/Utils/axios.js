import axios from 'axios';

// ----------------------------------------------------------------------

// process.env.REACT_PROD_API_KEY
const axiosInstance = axios.create({ baseURL: "https://magnet-fishing-usa.herokuapp.com" || '' });
// const axiosInstance = axios.create({ baseURL: "https://magnet-back.herokuapp.com" || '' });

// const axiosInstance = axios.create({ baseURL: "http://localhost:3002" || '' });

axiosInstance.interceptors.response.use(
  (response) => response,
  (error) => Promise.reject((error.response && error.response.data) || 'Something went wrong')
);

export default axiosInstance;
