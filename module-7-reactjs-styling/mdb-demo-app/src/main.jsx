import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import 'mdb-react-ui-kit/dist/css/mdb.min.css'
// import 'mdb-react-ui-kit/dist/css/mdb.rtl.min.css'
import '@fortawesome/fontawesome-free/css/all.min.css'
import 'bootstrap/dist/js/bootstrap.min.js'
import RegisterApp from './components/RegisterApp'
// import ContainerApp from './components/ContainerApp'
// import ButtonModal from './components/ButtonModal'
// import BadgesApp from './BadgesApp'
// import CardApp from './components/CardApp'
// import AccordianApp from './components/Accordian'
// import SliderApp from './components/SliderApp'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    {/* <ContainerApp /> */}
    {/* <ButtonModal />
    <BadgesApp /> */}
    {/* <CardApp /> */}
{/* 
   <AccordianApp /> */}

   {/* <SliderApp /> */}

   <RegisterApp />
  </StrictMode>,
)
