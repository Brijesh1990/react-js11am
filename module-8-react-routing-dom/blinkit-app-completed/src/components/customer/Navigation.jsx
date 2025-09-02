import React from 'react'
import { NavLink } from 'react-router-dom'
export default function Navigation() {
  return (
   <>
    <nav className='container p-3 border-b-1 mx-auto'>
        <ul className='space-x-10 gap-8 flex w-4/5 mx-auto text-xl'>
            <li className='bg-black rounded-sm p-2 text-white'><NavLink to='/'>Home</NavLink></li>
            <li><NavLink to='/about-us'>About us</NavLink></li>
            <li><NavLink to='/all-products'>Vegetables</NavLink></li>
            <li><NavLink to='/all-products'>Fruits</NavLink></li>
            <li><NavLink to='/all-products'>Dry Fruits</NavLink></li>
            <li><NavLink to='/create-account'>Account</NavLink></li>
            <li><NavLink to='/contact-us'>Contact Us</NavLink></li>
        </ul>
    </nav>
   </>
  )
}
