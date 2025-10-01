import React,{useRef,useState,useEffect} from 'react'
import axios from 'axios'
import Swal from 'sweetalert2'
import { useNavigate } from 'react-router-dom'
import Header from './Header'
import Sidebar from './Sidebar'
export default function AddProducts() {
// destructuring of data via state 
const[data,setData]=useState("");
// fetch data via axios.get() using useEffect hooks
useEffect(()=>{
axios.get(`http://localhost:8000/category`).then((response)=>{
setData(response.data);
})
},[data])
//store all input data  inside of variables
const  categoryname=useRef(""); 
const  photo=useRef("");
const  productname=useRef("");
const  oldprice=useRef("");
const  newprice=useRef("");
const  addeddate=useRef("");
const  qty=useRef("");
const  descriptions=useRef("");
const navigate=useNavigate();
// stored all data in object for post via axios.post()
const addProductsData=async(e)=>{
e.preventDefault();
// stored current data in api via object
var insert={
categoryname:categoryname.current.value,
photo:photo.current.value,
productname:productname.current.value,
oldprice:oldprice.current.value,
newprice:newprice.current.value,
addeddate:addeddate.current.value,
qty:qty.current.value,
descriptions:descriptions.current.value,
}

// call api vai axios.post
try 
{
axios.post(`http://localhost:8000/products`,insert).then(()=>{
// pass insert messages 
Swal.fire({
title: "Good!",
text: "Products Added successfully!",
icon: "success"
});
e.target.reset();
navigate('/admin-login/manage-products');
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
<h1 className='text-3xl ms-5 p-5 mt-2'>Add Your Products</h1>
<hr className='border-1 w-55 ms-15' />

<form onSubmit={addProductsData} className='max-w-md mx-5 mt-8 bg-white p-6 rounded shadow'>


<div className='mb-4'>
<label className='block text-gray-700 mb-2' htmlFor='categoryName'>
Select Category
</label>
<select ref={categoryname}
id='ProductName'
className='w-full border px-3 py-2 rounded' required>
<option value="">-select category-</option>
{data && data.map((rows)=>{
  return(
    <>
    <option value={rows.categoryname}>{rows.categoryname}</option>
    </>
  )
})}
</select>
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
<label className='block text-gray-700 mb-2' htmlFor='categoryName'>
ProductName
</label>
<input
type='text'
id='EmployeeName' ref={productname}
className='w-full border px-3 py-2 rounded' required />
</div>

<div className='mb-4'>
<label className='block text-gray-700 mb-2' htmlFor='categoryName'>
added Date
</label>
<input
type='date'  ref={addeddate}
id='EmployeeName'
className='w-full border px-3 py-2 rounded' required />
</div>

<div className='mb-4'>
<label className='block text-gray-700 mb-2' htmlFor='categoryName'>
Old Price
</label>
<input
type='text'  ref={oldprice}
id='EmployeeName'
className='w-full border px-3 py-2 rounded' required />
</div>

<div className='mb-4'>
<label className='block text-gray-700 mb-2' htmlFor='categoryName'>
New price
</label>
<input
type='text'  ref={newprice}
id='EmployeeName'
className='w-full border px-3 py-2 rounded' required />
</div>


<div className='mb-4'>
<label className='block text-gray-700 mb-2' htmlFor='categoryName'>
Qty
</label>
<input
type='text'  ref={qty}
id='Price'
className='w-full border px-3 py-2 rounded' required />
</div>

<div className='mb-4'>
<label className='block text-gray-700 mb-2' htmlFor='description'>
Descriptions
</label>
<textarea  ref={descriptions}
id='description'
className='w-full border px-3 py-2 rounded'
rows={3}
/>
</div>
<button
type='submit'
className='bg-green-600 text-white px-4 py-2 rounded hover:bg-green-700'
>
Add Products
</button>
</form>
</div>
</div>

</>
)
}
