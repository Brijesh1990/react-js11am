import React from 'react'
import { NavLink } from 'react-router-dom'
export default function Header() {
  return (
   <>
    <section id='food-header' className='flex flex-row p-5 border-b-1 relative sticky top-0 bg-white z-10'>
    <div className='food-logo w-96'><h1 className='text-4xl font-mono animate-bounce'><span className='text-red-500 text-5xl'>Bl</span>inkit <span className='text-red-500 text-5xl'>A</span>pp</h1></div>
    <div className='search w-3/5'><input type='text' placeholder='Search for Products ?' className='p-3 border-1 w-full' /></div>
    <div className='cart-app mt-2'><NavLink to="/cart"><span className='bi bi-cart text-2xl ms-16 '>0</span></NavLink></div>
    </section>
   </>
  )
}
