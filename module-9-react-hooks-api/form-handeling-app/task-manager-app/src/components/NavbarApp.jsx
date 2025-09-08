import React from 'react'
import { FaBars,FaUsers,FaCircle } from 'react-icons/fa'

import { Link } from 'react-router-dom'
export default function NavbarApp() {
  return (
    <>
    <div className='bg-gray-800 text-white p-4'>
      <div className='container mx-auto flex justify-between items-center'>
        <h1 className='text-lg font-bold'><FaBars className='inline-flex bg-yellow-500 text-white p-2 text-3xl rounded' /> Task Manager</h1>
        <nav>
          <ul className='flex space-x-4'>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/about">About</Link>
            </li>
             <li>
              <Link to="#" className='bg-yellow-500 p-2 rounded'><button type='button' command="show-modal" commandfor="dialog">Add Task <FaUsers className='inline-flex' /></button></Link>
            </li>
             <li>
              <Link to="/about" className='bg-yellow-500 p-2 rounded'>Manage Task <span className='p-1 bg-red rounded-full bg-red-600 shrink'>0</span> </Link>
            </li>
            <li>
              <Link to="/contact">Contact</Link>
            </li>
           
          </ul>
        </nav>
      </div>
    </div>
    {/* add task form via modal  */}
    {/* Modal component */}


<el-dialog>
  <dialog
    id="dialog"
    aria-labelledby="dialog-title"
    className="fixed inset-0 size-auto max-h-none max-w-none overflow-y-auto bg-transparent backdrop:bg-transparent"
  >
    <el-dialog-backdrop className="fixed inset-0 bg-gray-500/80 transition-opacity data-closed:opacity-0 data-enter:duration-300 data-enter:ease-out data-leave:duration-200 data-leave:ease-in" />
    <div
      tabIndex={0}
      className="flex min-h-full items-end justify-center p-4 text-center focus:outline-none sm:items-center sm:p-0"
    >
      <el-dialog-panel className="relative transform overflow-hidden rounded-lg bg-white text-left shadow-xl transition-all data-closed:translate-y-4 data-closed:opacity-0 data-enter:duration-300 data-enter:ease-out data-leave:duration-200 data-leave:ease-in sm:my-8 sm:w-full sm:max-w-lg data-closed:sm:translate-y-0 data-closed:sm:scale-95">

        <div className="bg-white px-4 pt-5 pb-4 sm:p-6 sm:pb-4">
          <div className="sm:flex sm:items-start">
           
            <div className="mt-3 text-center sm:mt-0 sm:ml-4 sm:text-left">
              <h3
                id="dialog-title"
                className="text-base font-semibold text-gray-900"
              >
                Add Task Form
              </h3>
              <div className="mt-2">
                <form>
                  <div className="mb-4">
                    <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="task">   Task</label>
                    <input className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="task" type="text" placeholder="Enter task" />

              </div>
                    <div className="mb-4">
                    <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="details">   Details</label>
                    <textarea className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="details" placeholder="Enter task details"></textarea>
              </div>
                    <div className="mb-4">
                    <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="dueDate">   Due Date</label>
                    <input className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="dueDate" type="date" />
              </div>
                  <div className="mb-4">
                    <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="priority">   Priority</label>
                    <select className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700" id="priority">
                      <option>Low</option>
                      <option>Medium</option> 
                        <option>High</option>

                      </select>

        </div>
                    <div className="mb-4">
                    <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="status">   Status</label>
                    <select className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700" id="status">
                      <option>Pending</option>
                      <option>In Progress</option> 
                        <option>Completed</option>
                        </select>
                </div>

                    <div className="flex items-center justify-between">
                    <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline" type="button">
                      Add Task
                    </button>
                  </div>
        </form>
              </div>
            </div>
          </div>
        </div>
        <div className="bg-gray-50 px-4 py-3 sm:flex sm:flex-row-reverse sm:px-6">
          <button
            type="button"
            command="close"
            commandfor="dialog"
            className="inline-flex w-full justify-center rounded-md bg-red-600 px-3 py-2 text-sm font-semibold text-white shadow-xs hover:bg-red-500 sm:ml-3 sm:w-auto"
          >
            closed
          </button>
          <button
            type="button"
            command="close"
            commandfor="dialog"
            className="mt-3 inline-flex w-full justify-center rounded-md bg-white px-3 py-2 text-sm font-semibold text-gray-900 shadow-xs inset-ring inset-ring-gray-300 hover:bg-gray-50 sm:mt-0 sm:w-auto"
          >
            Cancel
          </button>
        </div>
      </el-dialog-panel>
    </div>
  </dialog>
</el-dialog>


        </>
  )
}

