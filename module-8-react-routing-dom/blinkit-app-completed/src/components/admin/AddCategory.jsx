import React from 'react'
import Header from './Header'
import Sidebar from './Sidebar'
export default function AddCategory() {
  return (
   <>
    <Header />
    <div className='p-0 w-full flex flex-row'>
            <div className='w-65 bg-black p-10'>
            <Sidebar />
            </div> 
   <div className='w-full p-5 mt-32'>
       <h1 className='text-3xl ms-5 p-5 mt-10'>Add Your Category</h1>
       <hr className='border-1 w-55 ms-10' />
       
        <form className='max-w-md mx-5 mt-8 bg-white p-6 rounded shadow'>
          <div className='mb-4'>
            <label className='block text-gray-700 mb-2' htmlFor='categoryName'>
              Category Name
            </label>
            <input
              type='text'
              id='categoryName'
              className='w-full border px-3 py-2 rounded'
              
              required
            />
          </div>
          <div className='mb-4'>
            <label className='block text-gray-700 mb-2' htmlFor='description'>
              Description
            </label>
            <textarea
              id='description'
              className='w-full border px-3 py-2 rounded'
              rows={3}
            />
          </div>
          <button
            type='submit'
            className='bg-green-600 text-white px-4 py-2 rounded hover:bg-green-700'
          >
            Add Category
          </button>
        </form>
      </div>
      </div>
     
   </>
  )
}
