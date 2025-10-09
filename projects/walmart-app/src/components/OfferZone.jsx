import React,{useState,useEffect} from 'react'
import { FaArrowCircleRight } from 'react-icons/fa';
import axios from 'axios';
import {useNavigate} from 'react-router-dom'
import { FaPlus } from 'react-icons/fa6';
export default function OfferZone() {
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
<div>
<section
id="offer-zone"
className="mb-10 p-6 bg-white rounded-xl shadow-lg border border-red-200 w-320 mx-auto"
>
<h1 className="text-3xl sm:text-4xl font-extrabold text-blue-600 mb-6 flex items-center gap-3">
<i data-lucide="sparkles" className="w-8 h-8 text-yellow-500" />
Weekly Deals &amp; Rollbacks
<i data-lucide="fire-extinguisher" className="w-8 h-8 text-blue-600" />
</h1>
<p className="text-gray-600 mb-8">
Save big on thousands of items across all departments for a limited time!
</p>
<div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
{/* Deal Card 1 */}
{data && data.map((items)=>{
return(
<>

<div className="relative bg-white border border-gray-100 rounded-xl shadow-md overflow-hidden hover:shadow-xl transition-shadow">
<div className="h-40 bg-gray-200 flex items-center justify-center">
<span className="text-gray-500"><img src={items.photo} /></span>
</div>
{/* Custom Offer Badge */}
<div className="absolute top-0 right-0 bg-red-600 text-white font-bold p-2 text-sm offer-badge w-24 text-center">
25% OFF
</div>
<div className="p-4">
<p className="text-sm font-semibold text-blue-700">{items.categoryname}</p>
<h3 className="font-bold text-gray-800 truncate mb-2">
{items.productname}
</h3>
<p className="text-2xl font-extrabold text-red-600">Rs.{items.newprice}</p>
<p className="text-sm text-gray-500 line-through">Rs.{items.oldprice}</p>

<p className="text-xl  text-white"><button type="button" onClick={()=>{navigate(`/product-details/${items.id}`)}} className='bg-blue-600 p-1 rounded-2xl'>Details <FaPlus className='inline-flex' /></button></p>
</div>
</div>

</>
)
})} 

</div>
<div className="mt-8 text-center">
<button className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 px-6 rounded-full shadow-lg hover:shadow-xl transition-all flex items-center justify-center mx-auto gap-2">
Shop All Deals
<i data-lucide="chevron-right" className="w-5 h-5" />
</button>
</div>
</section>

</div>
)
}
