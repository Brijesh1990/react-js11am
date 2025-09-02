import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter as Router,Routes,Route } from 'react-router-dom'
import './index.css'
import 'bootstrap-icons/font/bootstrap-icons.css'
// Food delivery web app user panel
import Layout from './Layout'
import CartApp from './components/customer/CartApp'
import CreateAccount from './components/customer/CreateAccount'
import ContactUs from './components/customer/ContactUs'
import ProductsApp from './components/customer/ProductsApp'
import ProductsDetails from './components/customer/ProductsDetails'
import ViewCart from './components/customer/ViewCart'
import CheckoutApp from './components/customer/CheckoutApp'
import PageNotFound from './components/customer/PageNotFound'
// Food delivery web app admin panel
import AdminLayout from './AdminLayout'
import Login from './components/admin/Login'
import AddCategory from './components/admin/AddCategory'
import ManageCategory from './components/admin/ManageCategory'
import AddSubCategory from './components/admin/AddSubCategory'
import AddProducts from './components/admin/AddProducts'
import ManageContact from './components/admin/ManageContact'
// import AdminLayout from './AdminLayout'
createRoot(document.getElementById('root')).render(
<StrictMode>
<Router>
<Routes>
{/* customer panel routing */}
<Route path='/' element={<Layout />} />
<Route path='/create-account' element={<CreateAccount />} />
<Route path='/contact-us' element={<ContactUs />} />
<Route path='/all-products' element={<ProductsApp />} />
<Route path='/products-details' element={<ProductsDetails />} />
<Route path='/view-cart' element={<ViewCart />} />
<Route path='/checkout' element={<CheckoutApp />} />
<Route path='/cart' element={<CartApp />} />
{/* admin panel routing */}
<Route path='/admin-login' element={<Login />} />
<Route path='/admin-login/dashboard' element={<AdminLayout />} />
<Route path='/admin-login/add-category' element={<AddCategory />} />
<Route path='/admin-login/manage-category' element={<ManageCategory />} />
<Route path='/admin-login/add-subcategory' element={<AddSubCategory />} />
<Route path='/admin-login/add-products' element={<AddProducts />} />
<Route path='/admin-login/manage-contact' element={<ManageContact />} />
<Route path='*' element={<PageNotFound />} />
</Routes>  
</Router>  

</StrictMode>,
)
