import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import 'bootstrap/dist/css/bootstrap.min.css'
import Layout from './Layout'
import About from './components/About'
import Contact from './components/Contact'
import ProductsApp from './components/ProductsApp'
import PageNotFound from './components/PageNotFound'
import { BrowserRouter as Router,Routes,Route } from 'react-router-dom'
import './index.css'
createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Router>
      <Routes>
        <Route path='/' element={<Layout />} />
        <Route path='/about-us' element={<About />} />
        <Route path='/contact-us' element={<Contact />} />
        <Route path='/products' element={<ProductsApp />} />
        <Route path='*' element={<PageNotFound />} />
      </Routes>
    </Router>
  </StrictMode>,
)
