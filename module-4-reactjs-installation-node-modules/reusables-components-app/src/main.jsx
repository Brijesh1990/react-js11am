import React, { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import App from './components/App';
import './assets/css/style.css';
import 'animate.css';
createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
  </StrictMode>
);
