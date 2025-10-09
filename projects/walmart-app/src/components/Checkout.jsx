import React,{useState,useEffect} from 'react'
import axios from 'axios';
import Navbar from './Navbar'
import Footer from './Footer'
import Swal from 'sweetalert2';
import { useNavigate,Link } from 'react-router-dom';
export default function Checkout() {
  // destructuring of data via state 
const[data,setData]=useState([]);
const navigate=useNavigate("");
// fetch data via axios.get() using useEffect hooks
useEffect(()=>{
axios.get(`http://localhost:8000/cart`).then((response)=>{
setData(response.data);
})
},[data])

// placed orders  and delete data from cart api

const placeOrder=((e)=>{
e.preventDefault();
Swal.fire({ 
  title: 'Are you sure?',
  text: "You won't be able to revert this!",
  icon: 'warning',  
  confirmButtonColor: '#3085d6',
  cancelButtonColor: '#d33',
  confirmButtonText: 'Yes, place order!'
}).then((result) => {
  if (result.isConfirmed) {
    Swal.fire(
      'Order Placed!',
      'Your order has been placed successfully.',
      'success'
      
    )
    navigate('/order-success');
  }
})
})

return (
<>
<Navbar />

<form onSubmit={placeOrder}>
<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
<h1 className="text-3xl font-extrabold tracking-tight text-gray-900 mb-8">
Checkout
</h1>
<div className="lg:grid lg:grid-cols-3 lg:gap-12">
<div className="lg:col-span-2">

<div className="bg-white shadow sm:rounded-lg p-6 mb-8">
<h2 className="text-xl font-semibold text-gray-900 mb-4 border-b pb-2">
Shipping Information
</h2>
<div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
<div>
<label
htmlFor="full-name"
className="block text-sm font-medium text-gray-700"
>
Full Name
</label>
<input
type="text"
id="full-name"
name="full-name"
required=""
className="mt-1 block w-full border border-white rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
/>
</div>
<div>
<label
htmlFor="email-address"
className="block text-sm font-medium text-gray-700"
>
Email address
</label>
<input
type="email"
id="email-address"
name="email-address"
required=""
className="mt-1 block w-full border border-white rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
/>
</div>
</div>
<div className="mb-4">
<label
htmlFor="address"
className="block text-sm font-medium text-gray-700"
>
Address Line 1
</label>
<input
type="text"
id="address"
name="address"
required=""
className="mt-1 block w-full border border-white rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
/>
</div>
<div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-4">
<div>
<label
htmlFor="city"
className="block text-sm font-medium text-gray-700"
>
City
</label>
<input
type="text"
id="city"
name="city"
required=""
className="mt-1 block w-full border border-white rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
/>
</div>
<div>
<label
htmlFor="state"
className="block text-sm font-medium text-gray-700"
>
State / Province
</label>
<input
type="text"
id="state"
name="state"
required=""
className="mt-1 block w-full border border-white rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
/>
</div>
<div>
<label
htmlFor="zip"
className="block text-sm font-medium text-gray-700"
>
ZIP / Postal code
</label>
<input
type="text"
id="zip"
name="zip"
required=""
className="mt-1 block w-full border border-white rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
/>
</div>
</div>
</div>
<div className="bg-white shadow sm:rounded-lg p-6 mb-8">
<h2 className="text-xl font-semibold text-gray-900 mb-4 border-b pb-2">
Payment Details
</h2>
<div className="mb-4">
<label
htmlFor="card-name"
className="block text-sm font-medium text-gray-700"
>
Name on card
</label>
<input
type="text"
id="card-name"
name="card-name"
required=""
className="mt-1 block w-full border border-white rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
/>
</div>
<div className="mb-4">
<label
htmlFor="card-number"
className="block text-sm font-medium text-gray-700"
>
Card number
</label>
<input
type="text"
id="card-number"
name="card-number"
required=""
className="mt-1 block w-full border border-white rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
placeholder="XXXX XXXX XXXX XXXX"
/>
</div>
<div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-4">
<div className="col-span-2">
<label
htmlFor="expiration"
className="block text-sm font-medium text-gray-700"
>
Expiration date (MM/YY)
</label>
<input
type="text"
id="expiration"
name="expiration"
required=""
className="mt-1 block w-full border border-white rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
placeholder="MM / YY"
/>
</div>
<div>
<label
htmlFor="cvc"
className="block text-sm font-medium text-gray-700"
>
CVC
</label>
<input
type="text"
id="cvc"
name="cvc"
required=""
className="mt-1 block w-full border border-white rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
placeholder="XXX"
/>
</div>
</div>
<button
type="submit" 
className="hidden md:block w-full bg-indigo-600 border border-transparent rounded-md shadow-sm py-3 px-4 text-base font-medium text-white hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
>
Complete Order
</button>
</div>
</div>
<div className="lg:col-span-1">
<div className="bg-blue-100 text-white rounded-lg p-6">
<h2 className="text-xl font-bold text-blue-800 mb-4 pb-2 border-b">
Order Summary
</h2>
<div className="space-y-2 text-gray-700">
<div className="flex justify-between">
<span>Subtotal ({data.length} items)</span>
<span>Rs. {data.reduce((acc, item) => acc + Number(item.newprice || 0),0).toFixed(2)}</span>
</div>
<div className="flex justify-between">
<span>Shipping &amp; handling</span>
<span>Free</span>
</div>
<div className="flex justify-between">
<span>Estimated Sales Tax</span>
<span>NIL</span>
</div>
<div className="flex justify-between text-lg font-extrabold pt-3 border-t mt-3">
<span>Order Total</span>
<span className="text-red-600">Rs. {data.reduce((acc, item) => acc + Number(item.newprice || 0),0).toFixed(2)}</span>
</div>
</div>
<button
type="submit" 
className="md:hidden w-full mt-6 bg-indigo-600 border border-transparent rounded-md shadow-sm py-3 px-4 text-base font-medium text-white hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
>
Complete Order
</button>
</div>
</div>

</div>
</div>
</form>

<Footer />
</>
)
}
