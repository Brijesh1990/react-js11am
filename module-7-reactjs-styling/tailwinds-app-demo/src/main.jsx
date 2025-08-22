import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
// import OurServices from './components/pages/OurServices'
import Anim from './components/animations/Animations' 
import './index.css'
createRoot(document.getElementById('root')).render(
  <StrictMode>
    {/* <OurServices /> */}
    <Anim />
  </StrictMode>,
)
