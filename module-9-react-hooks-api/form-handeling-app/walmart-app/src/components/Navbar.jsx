import React from 'react'
import { FaShoppingCart } from 'react-icons/fa'
import { FaStar,FaCartShopping,FaUser } from 'react-icons/fa6'
import { Link } from 'react-router-dom'
export default function Navbar() {
  return (
    <>
      <nav className='bg-blue-500 text-white p-5 top-0 sticky'>
        <ul className='flex space-x-15'>

           <li><Link to="/"><span className='text-4xl'>Walmart <FaStar className='inline-flex text-4xl' /></span></Link></li>

           <li><Link to="/">Department </Link></li>

           <li><Link to="/">Services </Link></li>
           
           <li><Link to="/"><input type='search' placeholder='search walmart products ?' className='rounded-2xl w-110 p-3 bg-white' /> </Link></li>

           <li><Link to="/">Create Account <FaUser className='inline-flex' /></Link></li>

           <li><Link to="/">Cart  <FaShoppingCart className='inline-flex' /> <span className='py-0 px-1 p-2 bg-red-600 rounded-4xl text-white'>0</span> </Link></li>
        </ul>
      </nav>
    </>
  )
}
