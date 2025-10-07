import axios from 'axios'
import React,{useState,useEffect} from 'react'
import { FaStar,FaCartShopping,FaUser } from 'react-icons/fa6'
import { Link,useNavigate } from 'react-router-dom'
export default function Navbar() {
// destructuring of data via state 
const[data,setData]=useState("");
const navigate=useNavigate("");
// fetch data via axios.get() using useEffect hooks
useEffect(()=>{
axios.get(`http://localhost:8000/cart`).then((response)=>{
setData(response.data);
})
},[data])  
return (
<>
<header className="top-0 sticky left-0 w-full z-50 shadow-lg bg-white">
{/* Primary Top Bar (Logo, Search, Icons) */}
<div className="border-b border-gray-200 py-3 px-4 lg:px-8 flex items-center justify-between gap-4">
{/* 1. Logo/Brand - Always visible */}
<Link to="/" className="flex-shrink-0 flex items-center gap-2 lg:w-1/6">
{/* Simplified 'Spark' W for illustration */}
<svg
className="w-8 h-8 text-blue-600"
fill="currentColor"
viewBox="0 0 20 20"
>
<path d="M10 2a8 8 0 100 16A8 8 0 0010 2zm4 11.5a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0zm-7 0a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0zM10 8a2 2 0 110 4 2 2 0 010-4z" />
<path
fillRule="evenodd"
d="M10 0a10 10 0 100 20 10 10 0 000-20zM6.5 15a.5.5 0 01.5-.5h7a.5.5 0 010 1h-7a.5.5 0 01-.5-.5z"
clipRule="evenodd"
/>
</svg>
<span className="text-xl font-extrabold text-blue-700 hidden sm:inline">
WALMART
</span>
</Link>
{/* 2. Search Bar - Hidden on small mobile, prominent on desktop */}
<div className="hidden md:flex flex-grow max-w-xl lg:max-w-2xl">
<input
type="search"
placeholder="Search products, groceries, and more..."
className="w-full px-4 py-2 border border-gray-300 rounded-l-lg focus:outline-none focus:ring-2 focus:ring-blue-500 text-gray-700"
/>
<button className="bg-yellow-400 hover:bg-yellow-500 text-blue-900 font-bold px-4 rounded-r-lg flex items-center justify-center transition-colors">
<i data-lucide="search" className="w-5 h-5" />
<span className="hidden lg:inline ml-2">Search</span>
</button>
</div>
{/* 3. Action Icons & Mobile Toggler */}
<div className="flex items-center gap-4 flex-shrink-0">
{/* Mobile Search Icon (visible only on mobile) */}
<button
className="md:hidden p-2 text-gray-700 hover:text-blue-600 rounded-full transition-colors"
aria-label="Toggle Mobile Search"
>
<i data-lucide="search" className="w-6 h-6" />
</button>
{/* User Account Icon - Always visible */}
<a
href="#"
className="p-2 text-gray-700 hover:text-blue-600 rounded-full transition-colors hidden sm:block"
aria-label="My Account"
>
<i data-lucide="user" className="w-6 h-6" />
</a>
{/* Cart Icon - Always visible */}
<Link
to="/view-cart"
className="relative p-2 text-gray-700 hover:text-blue-600 rounded-full transition-colors"
aria-label="Shopping Cart"
>
View Cart <FaCartShopping className="inline-flex text-xl" />
<i data-lucide="shopping-cart" className="w-6 h-6" />

{/* Cart count indicator */}
<span className="absolute top-0 right-0 inline-flex items-center justify-center p-1 text-xs font-bold leading-none text-red-100 transform translate-x-1/2 -translate-y-1/2 bg-red-600 rounded-full">
{data.length}
</span>
</Link>
{/* Mobile Menu Toggler (Hamburger Icon) */}
<button
id="menu-toggler"
className="lg:hidden p-2 text-gray-700 hover:text-blue-600 rounded-full transition-colors"
aria-label="Toggle Navigation Menu"
>
<i
data-lucide="menu"
id="menu-icon"
className="w-6 h-6 transition-all"
/>
</button>
</div>
</div>
{/* Secondary Navigation Bar (Desktop Only) */}
<nav className="hidden lg:flex justify-between items-center px-8 bg-blue-700 text-white shadow-inner">
{/* Main Links (Left) */}
<div className="flex space-x-6 h-12">
<a
href="#"
className="flex items-center gap-1 font-semibold hover:bg-blue-800 px-2 rounded transition-colors"
>
<i data-lucide="layout-grid" className="w-5 h-5" />
Departments
</a>
<a
href="#"
className="flex items-center font-medium hover:bg-blue-600 px-2 rounded transition-colors"
>
Groceries
</a>
<a
href="#"
className="flex items-center font-medium hover:bg-blue-600 px-2 rounded transition-colors"
>
Electronics
</a>
<a
href="#"
className="flex items-center font-medium hover:bg-blue-600 px-2 rounded transition-colors"
>
Rollbacks &amp; More
</a>
</div>
{/* Special Action/Service Link (Right) */}
<div className="flex space-x-6 h-12">
<a
href="#"
className="flex items-center gap-1 font-semibold text-yellow-300 hover:text-yellow-200 transition-colors"
>
<i data-lucide="map-pin" className="w-5 h-5" />
Set Your Store
</a>
</div>
</nav>
{/* Mobile Menu Drawer (Hidden by default, slides out on toggle) */}
<div
id="mobile-menu"
className="fixed inset-0 top-[68px] lg:hidden transform translate-x-full transition-transform duration-300 bg-white shadow-xl overflow-y-auto"
>
<div className="p-4 space-y-2 border-b border-gray-100">
{/* Mobile Search Bar */}
<input
type="search"
placeholder="Search products..."
className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 text-gray-700"
/>
</div>
<nav className="flex flex-col p-4">
{/* Mobile Links */}
<a
href="#"
className="flex items-center gap-3 p-3 text-lg font-semibold text-blue-700 hover:bg-blue-50 rounded-lg transition-colors"
>
<i data-lucide="layout-grid" className="w-6 h-6" /> Departments
</a>
<a
href="#"
className="flex items-center gap-3 p-3 text-lg text-gray-700 hover:bg-gray-100 rounded-lg transition-colors"
>
<i data-lucide="carrot" className="w-6 h-6" /> Groceries
</a>
<a
href="#"
className="flex items-center gap-3 p-3 text-lg text-gray-700 hover:bg-gray-100 rounded-lg transition-colors"
>
<i data-lucide="monitor" className="w-6 h-6" /> Electronics
</a>
<a
href="#"
className="flex items-center gap-3 p-3 text-lg text-gray-700 hover:bg-gray-100 rounded-lg transition-colors"
>
<i data-lucide="tag" className="w-6 h-6" /> Deals &amp; Rollbacks
</a>
<a
href="#"
className="flex items-center gap-3 p-3 text-lg text-gray-700 hover:bg-gray-100 rounded-lg transition-colors"
>
<i data-lucide="map-pin" className="w-6 h-6" /> Store Locator
</a>
<div className="mt-4 pt-4 border-t border-gray-200 space-y-2">
<a
href="#"
className="flex items-center gap-3 p-3 text-lg text-gray-600 hover:bg-gray-100 rounded-lg transition-colors"
>
<i data-lucide="user" className="w-6 h-6" /> My Account
</a>
<a
href="#"
className="flex items-center gap-3 p-3 text-lg text-gray-600 hover:bg-gray-100 rounded-lg transition-colors"
>
<i data-lucide="list-checks" className="w-6 h-6" /> Registry &amp;
Lists
</a>
</div>
</nav>
</div>
</header>

</>
)
}
