import React,{useState,useEffect,useRef} from 'react'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'
import { FaTrash,FaEdit } from 'react-icons/fa'
import Swal from 'sweetalert2'
export default function AddTask() {
// instilised data 
const[data,setData]=useState("");
// display data call api 
useEffect(()=>{
try 
{
axios.get(`http://localhost:8000/add-task`).then((response)=>{
setData(response.data);  
}) 
}
catch(error)
{
console.log('errors generated',error);  
}
},[data]);
const taskname=useRef("");
const taskdate=useRef("");
const taskassignto=useRef("");
const navigate=useNavigate();
// create a addForm handeling method
const addTaskData=(e)=>{
e.preventDefault();
var insert={
taskname:taskname.current.value,
taskdate:taskdate.current.value,
taskassignto:taskassignto.current.value
}
// create or call api to add task via axios
axios.post(`http://localhost:8000/add-task`,insert).then(()=>{
try{
Swal.fire({
title: "Good job!",
text: "You clicked the button!",
icon: "success"
});
e.target.reset();
navigate('/');
}
catch(error)
{
console.log('error generating while adding task',error);
}
})
}
return (
<div className='w-140 mt-20 p-10 bg-white rounded-4xl mx-auto'>
<h1 className='text-2xl'>Add Task here <button className='text-black ms-25'>Total task <span className='bg-red-600 text-white py-0 ms-2 px-2  rounded-4xl'>{data.length}</span></button></h1>
<hr className='w-25' />
{/*add task here  */}
<form onSubmit={addTaskData} className='p-5 mt-4'>
<div className='mt-2'>
<input type='text' placeholder='TaskName *' ref={taskname} className='border-1 border-gray-500 p-3 w-100 rounded-2xl' />
</div>

<div className='mt-2'>
<label>Assign Date</label> 
<br/>
<input type='date' placeholder='Assign date *' ref={taskdate} className='border-1 mt-1 border-gray-500 p-3 w-100 rounded-2xl' />
</div>
<div className='mt-2'>
<label>Assign To</label>
<br/> 
<select ref={taskassignto}  className='border-1 mt-1 border-gray-500 p-3 w-100 rounded-2xl'>
<option value=''>-assign to-</option>
<option value='avtar'>Avtar</option>
<option value='amit'>Amit</option>
<option value='alpesh'>Alpesh</option>
<option value='paras'>Paras</option>
<option value='bhoomi'>Bhoomi</option>
<option value='vijay'>Vijay</option>
</select>
</div>

<div className='mt-10 p-3'>
<input type='submit'  className='border-1 border-gray-500  p-3 w-100 rounded-2xl bg-black text-white' value="Add Task" />
</div>
</form>

{/* display task here */}
<div className='mt-5'>
<table width="100%"  className='table-auto' cellPadding="5" cellSpacing="5">
<thead className='p-2'>
<tr className='text-left'>
<th>Task</th>
<th>Date</th>
<th>AssignTo</th>
<th>Action</th>
</tr> 
</thead>
<tbody> 
{data && data.map((items)=>{
return(
<>    
<tr className='text-left'>
<td>{items.taskname}</td>
<td>{items.taskdate}</td>
<td>{items.taskassignto}</td>
<td><button type='button' onClick={()=>{navigate(`/delete-task/${items.id}`)}} className='text-red-600 rounded-0  p-1'><FaTrash className='inline-flex text-xl' /></button> 
|
<button type='button' onClick={()=>{navigate(`/edit-task/${items.id}`)}} className='text-purple-800 rounded-0  p-1'><FaEdit className='inline-flex text-xl' /></button> 
</td>
</tr>
</>
)
})}
</tbody>
</table>
</div>
</div>
)
}
