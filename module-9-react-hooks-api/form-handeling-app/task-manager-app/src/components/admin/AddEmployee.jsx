import React,{useRef} from 'react'
import axios from 'axios'
import Swal from 'sweetalert2'
import { useNavigate } from 'react-router-dom'
import Header from './Header'
import Sidebar from './Sidebar'
export default function AddEmployee() {
//store all input data  inside of variables 
const  name=useRef("");
const  email=useRef("");
const  password=useRef("");
const  phone=useRef("");
const  age=useRef("");
const  photo=useRef("");
const  address=useRef("");
const navigate=useNavigate();
// stored all data in object for post via axios.post()
const addEmployeeData=async(e)=>{
e.preventDefault();
// stored current data in api via object
var insert={
    name:name.current.value,
    email:email.current.value,
    password:password.current.value,
    phone:phone.current.value,
    age:age.current.value,
    photo:photo.current.value,
    address:address.current.value,
}

// call api vai axios.post
try 
{
 axios.post(`http://localhost:3000/addemployee`,insert).then(()=>{
    // pass insert messages 
  Swal.fire({
  title: "Good!",
  text: "Employee Added successfully!",
  icon: "success"
});
e.target.reset();
navigate('/admin-login/manage-employee');
 })
}
catch(error)
{
    console.log('error generating',error)
}

}
return (
<>
<Header />
<div className='p-0 w-full flex flex-row'>
<div className='w-65 bg-black p-10'>
<Sidebar />
</div> 
<div className='w-full p-5 mt-15'>
<h1 className='text-3xl ms-5 p-5 mt-2'>Add Your Employee</h1>
<hr className='border-1 w-55 ms-15' />

<form onSubmit={addEmployeeData} className='max-w-md mx-5 mt-8 bg-white p-6 rounded shadow'>

<div className='mb-4'>
<label className='block text-gray-700 mb-2' htmlFor='categoryName'>
Employee Name
</label>
<input
type='text'
id='EmployeeName' ref={name}
className='w-full border px-3 py-2 rounded' required />
</div>

<div className='mb-4'>
<label className='block text-gray-700 mb-2' htmlFor='categoryName'>
Employee Email
</label>
<input
type='text'  ref={email}
id='EmployeeName'
className='w-full border px-3 py-2 rounded' required />
</div>

<div className='mb-4'>
<label className='block text-gray-700 mb-2' htmlFor='categoryName'>
Employee Password
</label>
<input
type='text'  ref={password}
id='EmployeeName'
className='w-full border px-3 py-2 rounded' required />
</div>

<div className='mb-4'>
<label className='block text-gray-700 mb-2' htmlFor='categoryName'>
Employee Phone
</label>
<input
type='text'  ref={phone}
id='EmployeeName'
className='w-full border px-3 py-2 rounded' required />
</div>


<div className='mb-4'>
<label className='block text-gray-700 mb-2' htmlFor='categoryName'>
Employee age
</label>
<input
type='text'  ref={age}
id='Price'
className='w-full border px-3 py-2 rounded' required />
</div>
<div className='mb-4'>
<label className='block text-gray-700 mb-2' htmlFor='categoryName'>
Photo
</label>
<input
type='text'  ref={photo}
id='ProductName'
className='w-full border px-3 py-2 rounded' required />
</div>

<div className='mb-4'>
<label className='block text-gray-700 mb-2' htmlFor='description'>
Address
</label>
<textarea  ref={address}
id='description'
className='w-full border px-3 py-2 rounded'
rows={3}
/>
</div>
<button
type='submit'
className='bg-green-600 text-white px-4 py-2 rounded hover:bg-green-700'
>
Add Employee
</button>
</form>
</div>
</div>

</>
)
}
