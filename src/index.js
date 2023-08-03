import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import "./Assets/Fonts/MazzardH-Black.otf";
import "./Assets/Fonts/MazzardH-BlackItalic.otf";
import "./Assets/Fonts/MazzardH-Bold.otf";
import "./Assets/Fonts/MazzardH-BoldItalic.otf";
import "./Assets/Fonts/MazzardH-ExtraBold.otf";
import "./Assets/Fonts/MazzardH-ExtraBoldItalic.otf";
import "./Assets/Fonts/MazzardH-ExtraLight.otf";
import 'react-image-lightbox/style.css';
import App from './App';
import { AuthProvider } from './Contexts/JWTContext';


ReactDOM.render(
  <React.StrictMode>
    <AuthProvider>
      <App />
    </AuthProvider>
  </React.StrictMode>,
  document.getElementById('root')
);

