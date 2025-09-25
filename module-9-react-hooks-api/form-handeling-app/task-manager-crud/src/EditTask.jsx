import React,{useState,useEffect,useRef} from 'react'
import axios from 'axios'
import Swal from 'sweetalert2';
import { useParams,useNavigate } from 'react-router-dom';
export default function EditTask() {
const[data,setData]=useState("");    
//create a values to stored all input data 
const taskname=useRef("");
const taskdate=useRef("");
const taskassignto=useRef("");
const navigate=useNavigate(); 
const {id}=useParams();   

// create to edit data
useEffect(()=>{
    axios.get(`http://localhost:8000/add-task/${id}`).then((response)=>{
       setData(response.data);
       taskname.current.value=response.data.taskname,
       taskdate.current.value=response.data.taskdate,
       taskassignto.current.value=response.data.taskassignto 
    });
},[id])

// crate to update 
const updTaskData=(e)=>{
e.preventDefault();    
var updtask=
{
taskname:taskname.current.value,
taskdate:taskdate.current.value,
taskassignto:taskassignto.current.value 
}
// update via axios 
axios.put(`http://localhost:8000/add-task/${id}`,updtask).then(()=>{
try{
Swal.fire({
title: "Great!",
text: "Your task successfully Updated!",
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
<>
<div className='w-140 mt-20 p-10 bg-white rounded-4xl mx-auto'>
<h1 className='text-2xl'>Edit Task here</h1>
<hr className='w-25' />
{/*add task here  */}
<form  className='p-5 mt-4' onSubmit={updTaskData}>
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

<div className='mt-5 p-3'>
<button  type='submit'  className='border-1 border-gray-500  p-3 w-100 rounded-2xl bg-black text-white'>Update Task</button>
</div>
</form>
</div>
</>
)
}
