import { Typography } from '@mui/material';
import { Box } from '@mui/system';
import React from 'react'
import { Link } from 'react-router-dom';

const Error404 = () => {
  return (
    <Box sx={{ display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center", height: "100vh" }}>
      <Typography variant='h2'>Oops! Page Not Found</Typography>
      <Link to="/">
        <Typography variant="h5">Back to Homepage</Typography>
      </Link>
    </Box>

  )
}
export default Error404;