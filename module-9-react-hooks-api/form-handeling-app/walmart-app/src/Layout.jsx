import React from 'react'
import Navbar from './components/Navbar'
import Category from './components/Category'
import Content from './components/Content'
export default function Layout() {
  return (
    <>
        <Navbar />
        <div className='p-15 flex flex-row'>
          <div className='w-1/5 p-5 mt-10 bg-blue-600 rounded-2xl'>
            <Category />
          </div> 
           <div className='w-250 flex ms-15 m-10'>
            <Content />
           </div>
          
        </div>
    </>
  )
}
