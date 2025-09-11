import React from 'react'

export default function Sidebar() {
  return (
    <>
      <div className='h-100 fixed mt-32 z-10'>
        <img src='https://png.pngtree.com/png-clipart/20230823/original/pngtree-corporate-businessman-avatar-tie-associate-picture-image_8289503.png' alt='sidebar' className='w-16' />
        <ul className='sidebar-links'>
          <li><a href='/admin-login/dashboard'>Dashboard</a></li>
          <li><a href=''>Manage Employee</a></li>
        
          <li className='relative group'>
            <a href=''>AddEmployee</a>
            <ul className='absolute left-full top-0 bg-black shadow-md hidden group-hover:block min-w-[150px]'>
              <li><a href='/admin-login/add-employee'>Add Employee</a></li>
              <li><a href='/admin-login/manage-employee'>Manage Employee</a></li>
            </ul>
          </li>
          <li><a href='/admin-login/manage-contact'>Manage Contact</a></li>
          <li><a href='/admin-login/manage-reviews'>Manage Reviews</a></li>
          <li><a href='/admin-login/manage-task'>Manage Tasks</a></li>
          <li><a href='/admin-login/logout' className='bg-red-400 p-2 w-full'>Logout</a></li>
        </ul>
      </div>
    </>
  )
}
