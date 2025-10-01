import React,{useState,useEffect} from 'react'
import axios from 'axios';
import Navbar from './Navbar';
import Footer from './Footer';
export default function ViewCart() {
// destructuring of data via state 
const[data,setData]=useState("");
// fetch data via axios.get() using useEffect hooks
useEffect(()=>{
axios.get(`http://localhost:8000/cart`).then((response)=>{
setData(response.data);

})
},[data])
return (
<div>
<Navbar />

<div className='p-0 w-full flex flex-row'>

<div className='w-full p-5 mt-15'>
<h1 className='text-3xl ms-5 p-5 mt-5'>View Cart</h1>
<hr className='border-1 w-55 ms-15' />
<div className='overflow-x-auto mx-5 mt-8'>
<table className='min-w-full bg-white rounded shadow'>
<thead>
<tr>
<th className='py-2 px-4 border-b'>Id</th>
<th className='py-2 px-4 border-b'>CategoryName</th>
<th className='py-2 px-4 border-b'>Photo</th>
<th className='py-2 px-4 border-b'>PName</th>
<th className='py-2 px-4 border-b'>NewPrice</th>
<th className='py-2 px-4 border-b'>AddedDate</th>
<th className='py-2 px-4 border-b'>qty</th>
<th className='py-2 px-4 border-b'>Actions</th>
</tr>
</thead>
<tbody>

{data && data.map((items,index)=>{
return(<>

<tr className='hover:bg-gray-100 text-center overflow-auto'>
<td className='py-2 px-4 border-b'>{index+1}</td>
<td className='py-2 px-4 border-b'>{items.categoryname}</td>
<td className='py-2 px-4 border-b'>{items.categoryname}</td>
<td className='py-2 px-4 border-b'>{items.categoryname}</td>
<td className='py-2 px-4 border-b'>{items.categoryname}</td>
<td className='py-2 px-4 border-b'>{items.categoryname}</td>
<td className='py-2 px-4 border-b'>{items.categoryname}</td>
<td className='py-2 px-4 border-b'>{items.categoryname}</td>
<td className='py-2 px-4 border-b'>

<button className='bg-red-500 text-white px-3 py-1 rounded hover:bg-red-600'>
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
<Footer />
</div>
)
}
