import React,{useState,useEffect} from 'react'
import axios from 'axios';
import Navbar from './Navbar';
import Footer from './Footer';
import { useNavigate,Link } from 'react-router-dom';
export default function ViewCart() {
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

<section
id="cart-page"
className="pt-[110px] lg:pt-[110px] p-4 bg-gray-50 min-h-screen"
>
<div className="max-w-7xl mx-auto">
<h1 className="text-3xl font-extrabold text-blue-800 mb-6 border-b pb-2 flex">
Shopping Cart (<span id="item-count">{data.length}</span> &nbsp; Items)
{/* Button to switch back to home view */}
<button
id="continue-shopping"
className="text-base font-medium text-blue-600 hover:underline ms-180"
>
<i data-lucide="chevron-left" className="w-4 h-4 inline mr-1" />{" "}
Continue Shopping
</button>
</h1>
<div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
{/* Left Column: Cart Items List (2/3 width on desktop) */}
<div className="lg:col-span-2 space-y-4">
{/* Cart Item 1: Milk */}


{data && data.map((item)=>{
return(
<>
<div className="bg-white p-4 rounded-xl shadow-md flex gap-4 items-center">
<div className="w-20 h-20 bg-gray-200 flex-shrink-0 rounded-lg flex items-center justify-center">
<img src={item.photo} alt={item.productname} className="max-h-16" />
</div>
<div className="flex-grow">
<h3 className="font-semibold text-gray-800">
{item.productname}
</h3>
<p className="text-sm text-gray-500">
Sold &amp; Shipped by Walmart
</p>
<div className="flex items-center gap-4 mt-2">
<input
type="number"
defaultValue={1}
min={1}
className="w-16 p-1 border border-gray-300 rounded-md text-center text-sm focus:ring-blue-500 focus:border-blue-500"
/>
<span className="text-lg font-bold text-red-600">Rs.{item.newprice}</span>
<button type="button" onClick={() => {navigate(`/delete-cart/${item.id}`)}} className='text-red-600 float-end text-lg  p-1 ms-120'>Remove</button>
</div>
</div>
</div>

</>
)
})}

</div>
{/* Right Column: Order Summary (1/3 width on desktop) */}
<div className="lg:col-span-1 space-y-4">
<div className="bg-white p-6 rounded-xl shadow-md border border-blue-200">
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
<Link to={"/checkout"}><button className="mt-6 w-full bg-yellow-400 hover:bg-yellow-500 text-blue-900 font-bold py-3 rounded-full shadow-lg transition-colors hover:shadow-xl">
Proceed to Checkout
</button></ Link>
<p className="text-xs text-gray-500 text-center mt-3">
By proceeding, you agree to our Terms and Conditions.
</p>
</div>
{/* Savings Box */}
<div className="bg-green-100 p-4 rounded-xl shadow-md border border-green-300">
<p className="font-semibold text-green-700 flex items-center gap-2">
<i data-lucide="tag" className="w-5 h-5" />
You saved $70.00 today!
</p>
<p className="text-sm text-green-600 mt-1">
Includes Rollbacks and New Lower Prices.
</p>
</div>
</div>
</div>
</div>
</section>


<Footer />
</div>
)
}
