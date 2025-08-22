import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import ContainerApp from './components/container/ContainerApp'
import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap/dist/js/bootstrap.min.js'
import 'bootstrap-icons/font/bootstrap-icons.css'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <ContainerApp />
  </StrictMode>,
)
