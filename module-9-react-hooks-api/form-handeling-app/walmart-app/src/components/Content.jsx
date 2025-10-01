import React,{useState,useEffect} from 'react'
import { FaArrowCircleRight } from 'react-icons/fa';
import axios from 'axios';
import {useNavigate} from 'react-router-dom'
export default function Content() {
// destructuring of data via state 
const[data,setData]=useState("");
const navigate=useNavigate();

// fetch data via axios.get() using useEffect hooks
useEffect(()=>{
axios.get(`http://localhost:8000/products`).then((response)=>{
setData(response.data);
})
},[data])
return (
<>
{data && data.map((items)=>{
return(
<>

<div className='shadow border-1 border-gray-300 m-1 p-1'>
<p className='text-center'><img src={items.photo} className='w-40 h-40 mx-auto' alt='photo' /></p>
<p className='text-center mt-5 text-lg'>{items.productname}</p>
<p className='text-center mt-5 text-lg font-bold'>Rs. {items.newprice} <del>{items.oldprice}</del></p>
<p className='text-center mt-5 text-lg'><button type='button' onClick={(()=>navigate(`/product-details/${items.id}`))} className='bg-blue-600 p-2 text-white rounded-2xl'>More details <FaArrowCircleRight className='inline-flex ms-2' /></button></p>
</div>

</>
)
})}

</>
)
}
