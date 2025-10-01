import React,{useRef} from 'react'
import axios from 'axios'
import Swal from 'sweetalert2'
import { useNavigate } from 'react-router-dom'
import Header from './Header'
import Sidebar from './Sidebar'
export default function AddCategory() {
//store all input data  inside of variables 
const  categoryname=useRef("");
const navigate=useNavigate();
// stored all data in object for post via axios.post()
const addCategoryData=async(e)=>{
e.preventDefault();
// stored current data in api via object
var insert={
    categoryname:categoryname.current.value
}

// call api vai axios.post
try 
{
 axios.post(`http://localhost:8000/category`,insert).then(()=>{
    // pass insert messages 
  Swal.fire({
  title: "Good!",
  text: "Category Added successfully!",
  icon: "success"
});
e.target.reset();
navigate('/admin-login/manage-category');
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
<h1 className='text-3xl ms-5 p-5 mt-2'>Add Your category</h1>
<hr className='border-1 w-55 ms-15' />

<form onSubmit={addCategoryData} className='max-w-md mx-5 mt-8 bg-white p-6 rounded shadow'>

<div className='mb-4'>
<label className='block text-gray-700 mb-2' htmlFor='categoryName'>
Category Name
</label>
<input
type='text'
id='CategoryName' ref={categoryname}
className='w-full border px-3 py-2 rounded' required />
</div>

<button
type='submit'
className='bg-green-600 text-white px-4 mt-3 py-2 rounded hover:bg-green-700'
>
Add Category
</button>
</form>
</div>
</div>

</>
)
}
