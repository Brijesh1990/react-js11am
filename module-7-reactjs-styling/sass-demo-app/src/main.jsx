import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import EmployeeApp from './EmployeeApp'
import './style.scss'
createRoot(document.getElementById('root')).render(
  <StrictMode>
    <EmployeeApp />
  </StrictMode>,
)
