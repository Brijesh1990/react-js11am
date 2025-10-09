import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import {BrowserRouter as Router, Routes,Route} from 'react-router-dom'
import LayoutApp from './LayoutApp.jsx'
import ContactUs from './components/ContactUs.jsx'
import DeleteTask from './components/DeleteTask.jsx'
import UpdateTask from './components/UpdateTask.jsx'
import Login from './components/admin/Login.jsx'
import AdminLayout from './AdminLayout.jsx'
import AddEmployee from './components/admin/AddEmployee.jsx'
import ManageEmployee from './components/admin/ManageEmployee.jsx'
import PageNotFound from './components/PageNotFound.jsx'
import ManageContact from './components/admin/ManageContact.jsx'
import DeleteData from './components/admin/DeleteData.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Router>
      <Routes>
        <Route path="/" element={<LayoutApp />}/>
        <Route path="/:id" element={<DeleteTask />}/>
        <Route path="/update-task/:id" element={<UpdateTask />}/>
        <Route path="/contact-us" element={<ContactUs />}/>
        <Route path="/admin-login" element={<Login />}/>
        <Route path="/admin-login/dashboard" element={<AdminLayout />}/>
        <Route path="/admin-login/manage-contact" element={<ManageContact />}/>
        <Route path="/admin-login/manage-contact/:id" element={<DeleteData />}/>
        <Route path="/admin-login/add-employee" element={<AddEmployee />}/>
        <Route path="/admin-login/manage-employee" element={<ManageEmployee />}/>
        <Route path="*" element={<PageNotFound />}/>
      </Routes>
    </Router>
  </StrictMode>,
)
