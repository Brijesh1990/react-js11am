import React from 'react'

export default function Sidebar() {
  return (
    <>
      <div className='h-100 fixed mt-32 z-10'>
        <img src='https://png.pngtree.com/png-clipart/20230823/original/pngtree-corporate-businessman-avatar-tie-associate-picture-image_8289503.png' alt='sidebar' className='w-16' />
        <ul className='sidebar-links'>
          <li><a href='/admin-login/dashboard'>Dashboard</a></li>
          <li><a href=''>Manage Customer</a></li>
          <li className='relative group'>
            <a href=''>Add Category</a>
            <ul className='absolute left-full top-0 bg-black shadow-md hidden group-hover:block min-w-[150px] z-10'>
              <li><a href='/admin-login/add-category'>Add Category</a></li>
              <li><a href='/admin-login/manage-category'>Manage Category</a></li>
            </ul>
          </li>
         <li className='relative group'>
            <a href=''>Add SubCategory</a>
            <ul className='absolute left-full top-0 bg-black shadow-md hidden group-hover:block min-w-[180px]'>
              <li><a href='/admin-login/add-subcategory'>Add SubCategory</a></li>
              <li><a href='/admin-login/manage-subcategory'>Manage SubCategory</a></li>
            </ul>
          </li>
          <li className='relative group'>
            <a href=''>Add Products</a>
            <ul className='absolute left-full top-0 bg-black shadow-md hidden group-hover:block min-w-[150px]'>
              <li><a href='/admin-login/add-products'>Add Products</a></li>
              <li><a href='/admin-login/manage-products'>Manage Products</a></li>
            </ul>
          </li>
          <li><a href='/admin-login/manage-contact'>Manage Contact</a></li>
          <li><a href='/admin-login/manage-order'>Manage Orders</a></li>
          <li><a href='/admin-login/manage-review'>Manage Reviews</a></li>
          <li><a href='/admin-login/logout' className='bg-red-400 p-2 w-full'>Logout</a></li>
        </ul>
      </div>
    </>
  )
}
