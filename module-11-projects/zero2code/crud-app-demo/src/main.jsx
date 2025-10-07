import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap-icons/font/bootstrap-icons.css'
import Layout from './Layout'
import About from './components/About'
import Contact from './components/Contact'
import ProductsApp from './components/ProductsApp'
import DeleteData from './components/DeleteData'
import UpdateAttendance from './components/UpdateAttendance'
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
<Route path='/:id' element={<DeleteData />} />
<Route path='/edit-data/:id' element={<UpdateAttendance />} />
<Route path='*' element={<PageNotFound />} />
</Routes>
</Router>
</StrictMode>,
)
