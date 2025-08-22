import React from 'react'
import { Nav } from 'react-bootstrap'
import { Link } from 'react-router-dom'
export default function Navbar() {
return (
<Nav className='p-2 bg-dark text-white'>
<a href='' className='navbar-brand text-white ms-5'>React Router DOM</a>
<ul>
<li><Link to="/">Home</Link></li>
<li><Link to="/about-us">About us</Link></li>
<li><Link to="/contact-us">contact us</Link></li>
<li><Link to="/products">Products</Link></li>
<li><Link to="/create-account">Account</Link></li>
</ul>

</Nav>
)
}
