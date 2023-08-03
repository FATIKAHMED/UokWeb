import { useMediaQuery } from '@mui/material';
import { useTheme } from '@mui/styles';
import * as React from 'react';
import { useLocation } from 'react-router-dom';
import Navbar from '../../Components/Navbar';
// import NavbarHomeOld from '../../Components/NavbarHomeOld';
import NavbarHome from '../../Components/NavbarHome';
import NavbarMobile from '../../Components/NavbarMobile';

export default function Header() {
  const location = useLocation()
  const theme = useTheme();
  const mobile = useMediaQuery(theme.breakpoints.down("md"));

  if (mobile) {
    return (
      <>
        <NavbarMobile/>
      </>
    )
  }
  return (
    <>
        <NavbarHome /> 
    </>
  );
}