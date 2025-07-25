import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import './index.css';
import 'animate.css';
import CalculatorApp from './components/CalculatorApp';
createRoot(document.getElementById('root')).render(
  <StrictMode>
    <CalculatorApp />
  </StrictMode>
);
