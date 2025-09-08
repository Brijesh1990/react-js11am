import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
// import AddEmployee from './AddEmployee'
import AddUsers from './AddUsers'
createRoot(document.getElementById('root')).render(
  <StrictMode>
    {/* <AddEmployee /> */}
    <AddUsers />
  </StrictMode>,
)
