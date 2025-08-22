import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter as Router,Routes,Route } from 'react-router-dom'
import './index.css'
import 'bootstrap-icons/font/bootstrap-icons.css'
// Food delivery web app user panel
import Layout from './Layout'
import CartApp from './components/customer/CartApp'
import CreateAccount from './components/customer/CreateAccount'
import PageNotFound from './components/customer/PageNotFound'
// Food delivery web app admin panel
import AdminLayout from './AdminLayout'
import Login from './components/admin/Login'
// import AdminLayout from './AdminLayout'
createRoot(document.getElementById('root')).render(
  <StrictMode>
  <Router>
     <Routes>
        {/* customer panel routing */}
        <Route path='/' element={<Layout />} />
        <Route path='/create-account' element={<CreateAccount />} />
        <Route path='/cart' element={<CartApp />} />
        {/* admin panel routing */}
        <Route path='/admin-login' element={<Login />} />
         <Route path='/admin-login/dashboard' element={<AdminLayout />} />
        <Route path='*' element={<PageNotFound />} />
        
      </Routes>  
  </Router>  
  {/* admin panel */}
  {/* <Login /> */}
  {/* <AdminLayout /> */}
  {/* customer panel */}

  
  </StrictMode>,
)
