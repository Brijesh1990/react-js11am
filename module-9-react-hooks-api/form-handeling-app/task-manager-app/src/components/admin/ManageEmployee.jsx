import React,{useState,useEffect} from 'react'
import axios from 'axios';
import Header from './Header'
import Sidebar from './Sidebar'
export default function ManageEmployee() {
  // destructuring of data via state 
  const[data,setData]=useState("");
  // fetch data via axios.get() using useEffect hooks
  useEffect(()=>{
    axios.get(`http://localhost:3000/addemployee`).then((response)=>{
      setData(response.data);
    })
  },[data])
  return (
   <>
    <Header />
    <div className='p-0 w-full flex flex-row'>
            <div className='w-65 bg-black p-10'>
            <Sidebar />
            </div> 
   <div className='w-full p-5 mt-15'>
       <h1 className='text-3xl ms-5 p-5 mt-5'>Manage Employee</h1>
       <hr className='border-1 w-55 ms-15' />
        <div className='overflow-x-auto mx-5 mt-8'>
            <table className='min-w-full bg-white rounded shadow'>
              <thead>
                <tr>
                
                  <th className='py-2 px-4 border-b'>Photo</th>
                  <th className='py-2 px-4 border-b'>Name</th>
                  <th className='py-2 px-4 border-b'>Email</th>
                  <th className='py-2 px-4 border-b'>Phone</th>
                  <th className='py-2 px-4 border-b'>Age</th>
                  <th className='py-2 px-4 border-b'>Address</th>
               
                  <th className='py-2 px-4 border-b'>Actions</th>
                </tr>
              </thead>
              <tbody>
                
                {data && data.map((items)=>{
                  return(<>

                    <tr className='hover:bg-gray-100 text-center overflow-auto'>
                    
                    <td className='py-2 px-4 border-b'><img src={items.photo} alt='photo' style={{width:"85px",height:"85px"}} /></td>
                    <td className='py-2 px-4 border-b'>{items.name}</td>
                    <td className='py-2 px-4 border-b'>{items.email}</td>
                    <td className='py-2 px-4 border-b'>{items.phone}</td>
                    <td className='py-2 px-4 border-b'>{items.age}</td>
                    <td className='py-2 px-4 border-b overflow-auto'><div className="w-50 overflow-auto">{items.address}</div></td>
                    <td className='py-2 px-4 border-b'>
                      <button
                        className='bg-blue-500 text-white px-3 py-1 rounded mr-2 hover:bg-blue-600'
                      >
                        Edit
                      </button>
                      <button className='bg-red-500 text-white px-3 py-1 rounded hover:bg-red-600' onClick={()=>{return confirm('Are you sure to delete Employee ?')}}>
                        Delete
                      </button>
                    </td>
                  </tr>

                  </>)
                })}
                  
              </tbody>
            </table>
          </div>
       
       </div>
      </div>
     
   </>
  )
}
