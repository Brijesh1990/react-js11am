import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import InternalApp from './components/InternalApp'
import 'animate.css'
createRoot(document.getElementById('root')).render(
  <StrictMode>
    <InternalApp />
  </StrictMode>,
)
