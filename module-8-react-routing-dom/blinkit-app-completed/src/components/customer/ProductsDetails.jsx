import React from 'react'
import AOS from 'aos';
import 'aos/dist/aos.css';
import { Link } from 'react-router-dom';
import Header from './Header';
import Footer from './Footer';
export default function ProductsDetails() {
// used aos
AOS.init();
return (
<>
<Header />
{/* content section  */}
<section id='content' className='w-full mx-auto mt-0'>
<div className='p-25'>  
<h1 className='animate-pulse text-4xl  font-mono'>Products Details</h1> 
{/* create a products details using grid and add to cart button */}
<div className="w-225 gap-15 mt-8">
    {/* Example product details */}
    {[{
        id: 1,
        name: "Organic Apples",
        price: 120,
        description: "Fresh organic apples from local farms.",
        image: "https://static.vecteezy.com/system/resources/thumbnails/044/571/251/small/illustration-of-fruit-mix-png.png"
    }].map(product => (

        <div key={product.id} className="w-full bg-white rounded-lg shadow-lg p-6 flex flex-row items-center" data-aos="fade-up">

            <div className='w-1/2'>    
            <img src={product.image} alt={product.name} className="w-125  mb-4 rounded" />
            </div>
            <div className='w-1/2 ms-15'>
            <h2 className="text-xl font-semibold mb-5">{product.name}</h2>
            <p className="text-gray-600 mb-5">{product.description}</p>

            <p><span className="text-green-600 font-bold mb-4">₹{product.price}</span></p>
            <Link to="/view-cart"><button className="bg-green-500 hover:bg-green-600 text-white px-4 py-2 mt-10 rounded transition">
                Add to Cart
            </button></Link>
        </div>
        </div>
    ))}
</div>

</div>  
</section>
<Footer />
</>
)
}
