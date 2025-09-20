import React,{useState,useEffect} from 'react'
import { FaEye,FaEdit,FaTrash } from 'react-icons/fa'
import axios from 'axios';
import { Navigate, useNavigate } from 'react-router-dom';
export default function ContentApp() {
const[task,setTask]=useState("");
const navigate=useNavigate();
// fetch task
useEffect(()=>{
try
{
axios.get(`http://localhost:3000/addtask`).then((response)=>{
setTask(response.data);
})
}
catch(error)
{
console.log('Error generating',error)
}

},[]);  
return (
// display task in tables 
<div className='container mx-auto mt-15 p-15 shadow-lg rounded-lg w-350'>
<h1 className='text-xl font-bold'>Task List <button className='float-end'>Total Task <span className='w-10 h-10 py-1 px-1 bg-red-700 text-white rounded-4xl'>{task.length}</span></button></h1>
<hr className='border-gray-500 w-15' /> 
<table className='min-w-full border-collapse border border-gray-200 mt-10'>
<thead>
<tr>
<th className='border border-gray-200 p-2'>TaskName</th>
<th className='border border-gray-200 p-2'>EmpName</th>
<th className='border border-gray-200 p-2'>Details</th>
<th className='border border-gray-200 p-2'>DueDate</th>
<th className='border border-gray-200 p-2'>Priority</th>
<th className='border border-gray-200 p-2'>status</th>
<th className='border border-gray-200 p-2'>Actions</th>
</tr>

{task && task.map((items)=>{
return(
<>
<tr align="center">
<td className='border border-gray-200 p-2'>{items.taskname}</td>
<td className='border border-gray-200 p-2'>{items.employeename}</td>
<td className='border border-gray-200 p-2'><div className='w-60 overflow-auto'>{items.taskdetails}</div></td>
<td className='border border-gray-200 p-2'>{items.duedate}</td>
<td className='border border-gray-200 p-2'>{items.priority}</td>
<td className='border border-gray-200 p-2'>{items.status}</td>
<td className='border border-gray-200 p-2'>
<button className='bg-yellow-500 p-2 rounded mr-2'><FaEye /></button>
<button className='bg-yellow-500 p-2 rounded mr-2' onClick={()=>{navigate(`/update-task/${items.id}`)}}><FaEdit /></button>
<button className='bg-red-500 p-2 rounded' onClick={()=>{navigate(`/${items.id}`)}}><FaTrash /></button>


</td>
</tr>
</>
)
})}   

</thead>
<tbody>
{/* Map through tasks and display them in table rows */}
</tbody>
</table>
</div>
)
}
