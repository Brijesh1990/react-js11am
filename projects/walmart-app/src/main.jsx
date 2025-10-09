import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { BrowserRouter as Router,Routes,Route } from 'react-router-dom'
// customers 
import Layout from './Layout'
import ProductDetails from './components/ProductDetails'
import ViewCart from './components/ViewCart'
import DeleteCart from './components/DeleteCart'
import OrderSuccess from './components/OrderSuccess'
// admin
import Login from './components/admin/Login'
import AdminLayout from './AdminLayout'
import AddCategory from './components/admin/AddCategory'
import ManageCategory from './components/admin/ManageCategory'
import AddProducts from './components/admin/AddProducts'
import ManageProducts from './components/admin/ManageProducts'
import PageNotFound from './components/PageNotFound'
import Checkout from './components/Checkout'
createRoot(document.getElementById('root')).render(
<StrictMode>
<Router>
<Routes>
{/* customers */}
<Route path="/" element={<Layout />} />
<Route path="/product-details/:id" element={<ProductDetails />} />
<Route path="/view-cart" element={<ViewCart />} />
<Route path="/delete-cart/:id" element={<DeleteCart />} />
<Route path="/checkout" element={<Checkout />} />
<Route path="/order-success" element={<OrderSuccess />} />

{/* admin */}

<Route path="/admin-login" element={<Login />} />
<Route path="/admin-login/dashboard" element={<AdminLayout />} />
<Route path="/admin-login/add-category" element={<AddCategory />} />
<Route path="/admin-login/manage-category" element={<ManageCategory />} />
<Route path="/admin-login/add-products" element={<AddProducts />} />
<Route path="/admin-login/manage-products" element={<ManageProducts />} />

<Route path="*" element={<PageNotFound />} />

</Routes>
</Router>
</StrictMode>,
)
