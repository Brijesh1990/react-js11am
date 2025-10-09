import React,{useState,useEffect} from 'react'
import { FaArrowCircleRight } from 'react-icons/fa';
import axios from 'axios';
import {useNavigate} from 'react-router-dom'
import { FaPlus } from 'react-icons/fa6';
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

<div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
{data && data.map((items)=>{
return(
<>

    {/* Deal Card 1 */}
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
</>
)
}
