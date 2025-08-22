import React from 'react'

export default function Sidebar() {
  return (
    <>
    <div className='h-100 fixed mt-32'>
     <img src='https://png.pngtree.com/png-clipart/20230823/original/pngtree-corporate-businessman-avatar-tie-associate-picture-image_8289503.png' alt='sidebar' className='w-16' />
     <ul className='sidebar-links'>
        <li><a href=''>Dashboard</a></li>
        <li><a href=''>Manage Customer</a></li>
        <li><a href=''>Add Food Menu</a></li>
        <li><a href=''>Add Chef</a></li>
        <li><a href=''>Add Events</a></li>
        <li><a href=''>Manage Contact</a></li>
        <li><a href=''>Manage Reviews</a></li>
        <li><a href='' className='bg-red-400 p-2 w-full'>Logout</a></li>
     </ul>
    </div>
    </>
  )
}
