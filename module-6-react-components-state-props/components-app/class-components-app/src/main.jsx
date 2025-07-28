import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import 'animate.css';
import './style.css';
import CarApp from './CarsApp';
createRoot(document.getElementById('root')).render(
  <StrictMode>
    <CarApp />
  </StrictMode>
);
