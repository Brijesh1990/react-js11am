import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import {BrowserRouter as Router, Routes,Route} from 'react-router-dom'
import LayoutApp from './LayoutApp.jsx'
import PageNotFound from './components/PageNotFound.jsx'
createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Router>
      <Routes>
        <Route path="/" element={<LayoutApp />}/>
        {/* <Route path="/contact" element={<LayoutApp />}/> */}
        <Route path="*" element={<PageNotFound />}/>
      </Routes>
    </Router>
  </StrictMode>,
)
