import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';
// import ButtonApp from './ButtonApp';
import DropdownApp from './DropdownApp';
createRoot(document.getElementById('root')).render(
  <StrictMode>
    {/* <ButtonApp /> */}
    <DropdownApp />
  </StrictMode>,
)
