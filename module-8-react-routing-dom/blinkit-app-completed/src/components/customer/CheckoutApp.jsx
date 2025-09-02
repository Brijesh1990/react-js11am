import React from 'react'
import AOS from 'aos';
import 'aos/dist/aos.css';
import { Link } from 'react-router-dom';
import Header from './Header';
import Footer from './Footer';
export default function CheckoutApp() {
// used aos
AOS.init();
return (
<>
<Header />
{/* content section  */}
<section id='content' className='w-full  mt-0'>
<div className='p-25 flex flex-wrap'>  
<h1 className='animate-pulse text-4xl  font-mono'>Fill customers detail for checkout products</h1>
{/* create a checkouut products page */}

<div className='w-1/2'>
<form className="max-w-lg  mt-8 bg-white shadow-md rounded px-8 pt-6 pb-8" data-aos="fade-up">
    <div className="mb-4">
        <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="name">
            Full Name
        </label>
        <input
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            id="name"
            type="text"
            placeholder="Enter your name"
            required
        />
    </div>
    <div className="mb-4">
        <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="email">
            Email Address
        </label>
        <input
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            id="email"
            type="email"
            placeholder="Enter your email"
            required
        />
    </div>
    <div className="mb-4">
        <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="address">
            Delivery Address
        </label>
        <textarea
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            id="address"
            rows="3"
            placeholder="Enter your address"
            required
        />
    </div>
    <div className="mb-4">
        <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="phone">
            Phone Number
        </label>
        <input
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            id="phone"
            type="tel"
            placeholder="Enter your phone number"
            required
        />
    </div>
    <div className="mb-6">
        <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="payment">
            Payment Method
        </label>
        <select
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            id="payment"
            required
        >
            <option value="">Select payment method</option>
            <option value="cod">Cash on Delivery</option>
            <option value="card">Credit/Debit Card</option>
            <option value="upi">UPI</option>
        </select>
    </div>
    <div className="flex items-center justify-between">
        <button
            className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
            type="submit"
        >
            Checkout
        </button>
        <Link
            to="/cart"
            className="inline-block align-baseline font-bold text-sm text-green-500 hover:text-green-800"
        >
            Back to Cart
        </Link>
    </div>
</form>
</div>

{/* add products descriptions here also */}
<div className="mt-20 w-1/2">
    <h2 className="text-2xl font-semibold mb-4">Products in Your Cart</h2>
    <ul className="divide-y divide-gray-200">
        {/* Example product items, replace with dynamic data as needed */}
        <li className="py-4 flex items-center">
            <img src="https://via.placeholder.com/60" alt="Product" className="w-16 h-16 rounded mr-4" />
            <div className="flex-1">
                <p className="font-medium text-lg">Organic Apples</p>
                <p className="text-gray-500 text-sm">Qty: 2 • ₹120 each</p>
            </div>
            <div className="font-bold text-green-600">₹240</div>
        </li>
        <li className="py-4 flex items-center">
            <img src="https://via.placeholder.com/60" alt="Product" className="w-16 h-16 rounded mr-4" />
            <div className="flex-1">
                <p className="font-medium text-lg">Fresh Milk (1L)</p>
                <p className="text-gray-500 text-sm">Qty: 1 • ₹60 each</p>
            </div>
            <div className="font-bold text-green-600">₹60</div>
        </li>
        <li className="py-4 flex items-center">
            <img src="https://via.placeholder.com/60" alt="Product" className="w-16 h-16 rounded mr-4" />
            <div className="flex-1">
                <p className="font-medium text-lg">Brown Bread</p>
                <p className="text-gray-500 text-sm">Qty: 1 • ₹40 each</p>
            </div>
            <div className="font-bold text-green-600">₹40</div>
        </li>
    </ul>
    <div className="mt-6 flex justify-end">
        <span className="text-xl font-bold text-gray-700">Total: ₹340</span>
    </div>
</div>
</div>

</section>
<Footer />
</>
)
}
