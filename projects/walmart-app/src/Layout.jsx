import React from 'react'
import Navbar from './components/Navbar'
import Category from './components/Category'
import Content from './components/Content'
import OfferZone from './components/OfferZone'
import Footer from './components/Footer'
export default function Layout() {
return (
<>
<Navbar />
<h1 class="text-3xl font-bold text-blue-800 mb-4 mt-10 text-center">E-commerce Content Starts Here</h1>
<p class="text-gray-700 text-center mb-6">This space simulates the main page content, ensuring the fixed navbar sits correctly at the top.</p>

<div className='p-15 flex flex-row mt-5'>
<div className='w-1/5 p-5 mt-10 bg-blue-600 h-100 rounded-2xl'>
<h1 className='bg-white text-xl text-center p-2 rounded-2xl'>Select Category</h1>
<Category />
</div> 
<div className='w-250 flex ms-15 m-10'>
<Content />
</div>
</div>
<OfferZone />
<Footer />
</>
)
}
