import React from 'react'

export default function Sidebar() {
  return (
    <>
      <div className='mt-32 z-10' style={{height:"100vh"}}>
        <img src='https://png.pngtree.com/png-clipart/20230823/original/pngtree-corporate-businessman-avatar-tie-associate-picture-image_8289503.png' alt='sidebar' className='w-16' />
        <ul className='sidebar-links'>
          <li><a href='/admin-login/dashboard'>Dashboard</a></li>
          <li><a href=''>Manage Customers</a></li>
        
          <li className='relative group'>
            <a href='#'>AddCategory</a>
            <ul className='absolute left-full top-0 bg-black shadow-md hidden group-hover:block min-w-[150px]'>
              <li><a href='/admin-login/add-category'>Add Category</a></li>
              <li><a href='/admin-login/manage-category'>Manage Category</a></li>
            </ul>
          </li>

            <li className='relative group'>
            <a href='#'>AddProducts</a>
            <ul className='absolute left-full top-0 bg-black shadow-md hidden group-hover:block min-w-[150px]'>
              <li><a href='/admin-login/add-products'>Add Products</a></li>
              <li><a href='/admin-login/manage-products'>Manage Products</a></li>
            </ul>
          </li>
          <li><a href='/admin-login/manage-contact'>Manage Contact</a></li>
          <li><a href='/admin-login/manage-reviews'>Manage Reviews</a></li>
          <li><a href='/admin-login/manage-orders'>Manage Orders</a></li>
          <li><a href='/admin-login/logout' className='bg-red-400 p-2 w-full'>Logout</a></li>
        </ul>
      </div>
    </>
  )
}
