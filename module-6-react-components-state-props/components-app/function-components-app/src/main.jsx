import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import EmployeeApp from './EmployeeApp';
import 'animate.css';
import './style.css';
createRoot(document.getElementById('root')).render(
  <StrictMode>
    <EmployeeApp />
  </StrictMode>
);
