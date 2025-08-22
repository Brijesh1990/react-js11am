import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';

// import Ourservices from './components/font-style/Ourservices'
// import BadgeApp from './components/badge/Badge';
import AccordionUsage from './components/accordian/AccordianApp';
createRoot(document.getElementById('root')).render(
  <StrictMode>
    {/* <Ourservices /> */}
    {/* <BadgeApp /> */}
    <AccordionUsage />
    
  </StrictMode>,
)
