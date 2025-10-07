import React,{useState,useEffect,useRef} from 'react'
import axios from 'axios'
import { useNavigate,useParams } from 'react-router-dom'
import Swal from 'sweetalert2';
import NavbarApp from './NavbarApp';

export default function UpdateTask() {
const[data,setData]=useState("");
const navigate=useNavigate();
const{id}=useParams();
// fetch employee added by  inside of addtask form 
const[emp,setEmp]=useState("");
// fetch employee
useEffect(()=>{
try
{
axios.get(`http://localhost:3000/addemployee`).then((response)=>{
setEmp(response.data);
})
}
catch(error)
{
console.log('Error generating',error)
}

},[]);



//store all input data  inside of variables 
const  taskname=useRef("");
const  employeename=useRef("");
const  taskdetails=useRef("");
const  duedate=useRef("");
const  priority=useRef("");
const  status=useRef("");
// edit task inside of form
useEffect(()=>{
axios.get(`http://localhost:3000/addtask/${id}`).then((response)=>{
setData(response.data);
// take all response in edit using input
taskname.current.value=response.data.taskname;
employeename.current.value=response.data.employeename;
taskdetails.current.value=response.data.taskdetails;
duedate.current.value=response.data.duedate;
priority.current.value=response.data.priority;
status.current.value=response.data.status;

});
},[id])


// update data here 

const updTaskData=()=>{

    var upd={
        taskname:taskname.current.value,
        employeename:employeename.current.value,
        taskdetails:taskdetails.current.value,
        duedate:duedate.current.value,
        priority:priority.current.value,
        status:status.current.value,
    }
    axios.put(`http://localhost:3000/addtask/${id}`,upd).then(()=>{
        try 
        {
            Swal.fire({
             title: "Good!",
             text: "Your task updated successfully!",
             icon: "success"
           });
           navigate('/');
        }
        catch(error)
        {
            console.log('error generating',error);
        }
    })
}


return (
<>

<NavbarApp />

<div className="bg-white px-4 pt-5 pb-4 sm:p-6 sm:pb-4 flex flex-wrap">

<div className='w-1/2'>
<img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcScexQYLRyC3K5XU2uyFs5lO5PJv2GGtIihyA&s" className='w-100 mt-18 ms-20' />

</div>
<div className='w-1/2'>
<h3
id="dialog-title"
className="text-base font-semibold text-gray-900"
>
Edit Task Form Data
</h3>
<div className="mt-2">
<form>
<div className="mb-4">
<label className="block text-green-700 text-sm font-bold mb-2" htmlFor="task">Edit Task Name *</label>
<input className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="task" type="text" ref={taskname} placeholder="Enter task" />
</div>

<div className="mb-4">
<label className="block text-green-700 text-sm font-bold mb-2" htmlFor="task">Edit Assign To-</label>
<select className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="task" ref={employeename}>

<option value=''>-select employee</option>
{/* fetch employee */}
{emp && emp.map((items)=>{
return (
<>
<option value={items.name}>{items.name}</option>
</>
)
})}

</select>

</div>
<div className="mb-4">
<label className="block text-green-700 text-sm font-bold mb-2" htmlFor="details">Edit Task Details</label>
<textarea className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="details" placeholder="Enter task details" ref={taskdetails}></textarea>
</div>
<div className="mb-4">
<label className="block text-green-700 text-sm font-bold mb-2" htmlFor="dueDate">Edit Due Date</label>
<input className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="dueDate" type="date" ref={duedate} />
</div>
<div className="mb-4">
<label className="block text-green-700 text-sm font-bold mb-2" htmlFor="priority">Edit Priority</label>
<select className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700" id="priority" ref={priority}>
<option>Low</option>
<option>Medium</option> 
<option>High</option>
</select>

</div>
<div className="mb-4">
<label className="block text-green-700 text-sm font-bold mb-2" htmlFor="status">Edit Status</label>
<select className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700" id="status" ref={status}>
<option>Pending</option>
<option>In Progress</option> 
<option>Completed</option>
</select>
</div>

<div className="flex items-center justify-between">
<button type="button" className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline" onClick={updTaskData}>
Update Task
</button>
</div>
</form>
</div>
</div>
</div>
</>
)
}
