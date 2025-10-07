import React,{useState,useEffect} from 'react'
import axios from 'axios';
import Navbar from './Navbar';
import Footer from './Footer';
import { useNavigate,Link } from 'react-router-dom';
export default function OrderSuccess() {
// destructuring of data via state 
const[data,setData]=useState([]);
const navigate=useNavigate("");
// fetch data via axios.get() using useEffect hooks
useEffect(()=>{
axios.get(`http://localhost:8000/cart`).then((response)=>{
setData(response.data);
})
},[data])
return (
<div>
<Navbar />

<div
id="confirmation-card"
className="w-full max-w-md bg-white shadow-xl rounded-2xl p-8 sm:p-10 text-center opacity-0 mx-auto mt-10"
>
<div
id="check-icon"
className="w-20 h-20 mx-auto rounded-full bg-green-100 flex items-center justify-center transform scale-0"
>
<svg
className="w-12 h-12 text-green-600"
fill="none"
stroke="currentColor"
viewBox="0 0 24 24"
xmlns="http://www.w3.org/2000/svg"
>
<path
strokeLinecap="round"
strokeLinejoin="round"
strokeWidth={2}
d="M5 13l4 4L19 7"
/>
</svg>
</div>
<div className="mt-6">
<h1 className="text-3xl font-extrabold text-gray-900">Order Placed! 🚀</h1>
<p className="mt-4 text-gray-600 leading-relaxed">
Your order **#ABC-123456** has been successfully placed. You'll receive a
confirmation email shortly with the details.
</p>
</div>
<div className="mt-6 border-t border-b border-gray-100 py-4 text-left">
<div className="flex justify-between text-sm text-gray-700">
<span className="font-medium">Total Amount:</span>
<span className="font-bold text-green-600">$125.99</span>
</div>
<div className="flex justify-between text-sm text-gray-700 mt-2">
<span className="font-medium">Delivery Est.:</span>
<span className="font-semibold">3-5 Business Days</span>
</div>
</div>
<div className="mt-8 space-y-3 sm:space-y-0 sm:flex sm:gap-4">
<button className="w-full sm:w-1/2 px-4 py-3 bg-indigo-600 text-white font-semibold rounded-lg shadow-md hover:bg-indigo-700 transition duration-300">
View Order
</button>
<button className="w-full sm:w-1/2 px-4 py-3 bg-white text-gray-700 font-semibold border border-gray-300 rounded-lg hover:bg-gray-100 transition duration-300">
Continue Shopping
</button>
</div>
</div>


<Footer />
</div>
)
}
