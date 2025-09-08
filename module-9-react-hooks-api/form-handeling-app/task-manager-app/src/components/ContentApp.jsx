import React from 'react'
import { FaEye,FaEdit,FaTrash } from 'react-icons/fa'
export default function ContentApp() {
  return (
    // display task in tables 
    <div className='container mx-auto mt-15 p-15 shadow-lg rounded-lg w-200'>
    <h1 className='text-xl font-bold'>Task List</h1>
    <hr className='border-gray-500 w-15' /> 
      <table className='min-w-full border-collapse border border-gray-200 mt-10'>
        <thead>
          <tr>
            <th className='border border-gray-200 p-2'>Task</th>
            <th className='border border-gray-200 p-2'>Actions</th>
          </tr>

          <tr align="center">
            <td className='border border-gray-200 p-2'>Task</td>
            <td className='border border-gray-200 p-2'>
              <button className='bg-yellow-500 p-2 rounded mr-2'><FaEye /></button>
                <button className='bg-yellow-500 p-2 rounded mr-2'><FaEdit /></button>
                <button className='bg-red-500 p-2 rounded'><FaTrash /></button>


            </td>
          </tr>
        </thead>
        <tbody>
          {/* Map through tasks and display them in table rows */}
        </tbody>
      </table>
    </div>
  )
}
