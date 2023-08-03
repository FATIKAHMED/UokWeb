import * as React from 'react';
import './App.css';
import { ThemeProvider } from '@mui/material/styles';
import { StyledEngineProvider } from '@mui/material/styles';

import Router from "./Router"
import { theme } from './theme';

function loadScript(src, position, id) {
    if (!position) {
        return;
    }

    const script = document.createElement('script');
    script.setAttribute('async', '');
    script.setAttribute('id', id);
    script.src = src;
    position.appendChild(script);
}
const GOOGLE_MAPS_API_KEY = 'AIzaSyBQrRl3Pulu2F92-d4kw4NNG3ZqEKJoLgc';

function App() {
  const loaded = React.useRef(false);

 if (typeof window !== 'undefined' && !loaded.current) {
        if (!document.querySelector('#google-maps')) {
            loadScript(
                `https://maps.googleapis.com/maps/api/js?key=${GOOGLE_MAPS_API_KEY}&libraries=places`,
                document.querySelector('head'),
                'google-maps',
            );
        }

        loaded.current = true;
    }

  return (
    <StyledEngineProvider injectFirst>
      <ThemeProvider theme={theme}>
        <div className="App" >
          <Router />
        </div>
      </ThemeProvider>
    </StyledEngineProvider>


  );
}

export default App;
