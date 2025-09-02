import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import FormAdd from './FormAdd'
import 'bootstrap/dist/css/bootstrap.min.css'
createRoot(document.getElementById('root')).render(
  <StrictMode>
    <FormAdd />
  </StrictMode>,
)
