import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import Address from './components/Address'
import './assets/sass/style.scss'
createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Address />
  </StrictMode>,
)
