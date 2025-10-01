import React from 'react'
export default function Footer() {
return (
<>
<footer className="bg-gray-800 text-white mt-12">
<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
<div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-8 border-b border-gray-700 pb-8 mb-8">

<div className="col-span-2 lg:col-span-1">
<h3 className="text-xl font-bold mb-4">YourEcom</h3>
<p className="text-gray-400 text-sm mb-4">
The best place to shop for everything you need. Quality products and fast shipping.
</p>
<p className="text-gray-400 text-sm">
123 E-com Street, Suite 400<br/>
Online City, EC 12345
</p>
</div>

<div>
<h4 className="text-lg font-semibold mb-4 border-b border-gray-700 pb-2">Shop</h4>
<ul className="space-y-2 text-sm">
<li><a href="#" className="text-gray-400 hover:text-white transition duration-200">New Arrivals</a></li>
<li><a href="#" className="text-gray-400 hover:text-white transition duration-200">Best Sellers</a></li>
<li><a href="#" className="text-gray-400 hover:text-white transition duration-200">Clearance</a></li>
<li><a href="#" className="text-gray-400 hover:text-white transition duration-200">Gift Cards</a></li>
</ul>
</div>

<div>
<h4 className="text-lg font-semibold mb-4 border-b border-gray-700 pb-2">Customer Service</h4>
<ul className="space-y-2 text-sm">
<li><a href="#" className="text-gray-400 hover:text-white transition duration-200">Contact Us</a></li>
<li><a href="#" className="text-gray-400 hover:text-white transition duration-200">Shipping & Returns</a></li>
<li><a href="#" className="text-gray-400 hover:text-white transition duration-200">Order Tracking</a></li>
<li><a href="#" className="text-gray-400 hover:text-white transition duration-200">FAQ</a></li>
</ul>
</div>

<div>
<h4 className="text-lg font-semibold mb-4 border-b border-gray-700 pb-2">Company</h4>
<ul className="space-y-2 text-sm">
<li><a href="#" className="text-gray-400 hover:text-white transition duration-200">About Us</a></li>
<li><a href="#" className="text-gray-400 hover:text-white transition duration-200">Careers</a></li>
<li><a href="#" className="text-gray-400 hover:text-white transition duration-200">Privacy Policy</a></li>
<li><a href="#" className="text-gray-400 hover:text-white transition duration-200">Terms of Service</a></li>
</ul>
</div>

<div className="col-span-2 md:col-span-4 lg:col-span-1">
<h4 className="text-lg font-semibold mb-4 border-b border-gray-700 pb-2">Newsletter</h4>
<p className="text-gray-400 text-sm mb-4">
Sign up for 10% off your first order!
</p>
<form className="flex flex-col gap-2">
<input type="email" placeholder="Enter your email" className="p-2 w-full text-gray-900 rounded-md focus:ring-indigo-500 focus:border-indigo-500" />
<button type="submit" className="bg-indigo-600 hover:bg-indigo-700 text-white font-semibold py-2 rounded-md transition duration-200">
Subscribe
</button>
</form>
</div>
</div>

<div className="flex flex-col sm:flex-row items-center justify-between space-y-4 sm:space-y-0">
<div className="flex space-x-4">
<a href="#" className="text-gray-400 hover:text-white">
<svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true"><path d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.507 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h3.94l-.624 2.893h-3.316v6.987A10.04 10.04 0 0022 12z"></path></svg>
</a>
<a href="#" className="text-gray-400 hover:text-white">
<svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true"><path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 17c-3.86 0-7-3.14-7-7s3.14-7 7-7 7 3.14 7 7-3.14 7-7 7zm0-11.75c-2.61 0-4.75 2.14-4.75 4.75S9.39 15 12 15s4.75-2.14 4.75-4.75S14.61 5.25 12 5.25zm0 8.5c-2.07 0-3.75-1.68-3.75-3.75S9.93 6.25 12 6.25s3.75 1.68 3.75 3.75-1.68 3.75-3.75 3.75zM17.5 7.5a1 1 0 100-2 1 1 0 000 2z"></path></svg>
</a>
<a href="#" className="text-gray-400 hover:text-white">
<svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true"><path d="M22.25 6.167c-.82.364-1.708.608-2.634.72.946-.567 1.666-1.467 2.008-2.533-.882.522-1.86.902-2.905 1.107-.83-.885-2.01-1.44-3.314-1.44-2.505 0-4.545 2.04-4.545 4.545 0 .355.04.7.114 1.03-3.778-.19-7.12-1.996-9.362-4.733-.39.67-.615 1.455-.615 2.28 0 1.574.8 2.964 2.022 3.778-.745-.023-1.443-.228-2.05-.564.004.018.004.036.004.054 0 2.21 1.575 4.05 3.665 4.47-.384.104-.788.158-1.204.158-.295 0-.58-.028-.858-.082.585 1.82 2.284 3.138 4.3 3.174-1.56.97-3.535 1.547-5.69 1.547-.37 0-.73-.023-1.08-.067 2.02 1.3 4.42 2.053 7.02 2.053 8.423 0 13.02-6.983 13.02-13.02 0-.2.004-.398.004-.597.89-.64 1.662-1.44 2.275-2.348z"></path></svg>
</a>
</div>

<div className="flex space-x-3 items-center">
<span className="text-sm text-gray-400 hidden sm:block">We Accept:</span>
<img src="https://via.placeholder.com/30x20?text=VISA" alt="Visa" className="h-5" />
<img src="https://via.placeholder.com/30x20?text=MC" alt="Mastercard" className="h-5" />
<img src="https://via.placeholder.com/30x20?text=AMEX" alt="Amex" className="h-5" />
<img src="https://via.placeholder.com/30x20?text=PP" alt="PayPal" className="h-5" />
</div>
</div>

<div className="mt-8 pt-4 border-t border-gray-700 text-center">
<p className="text-sm text-gray-400">
&copy; 2024 YourEcom Inc. All rights reserved.
</p>
</div>
</div>
</footer>
</>
)
}
