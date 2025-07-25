import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
// import BookingApp from './BookingApp';
import EmployeeDetails from './EmployeeDetails';
createRoot(document.getElementById('root')).render(
  <StrictMode>
    {/* <BookingApp /> */}
    <EmployeeDetails />
  </StrictMode>
);
