import React from 'react'
import AOS from 'aos';
import 'aos/dist/aos.css';
import { Link } from 'react-router-dom';
import Header from './Header';
import Footer from './Footer';
export default function ViewCart() {
// used aos
AOS.init();
return (
<>
<Header />
{/* content section  */}
<section id='content' className='w-full mx-auto mt-0'>
<div className='p-25'>  
<h1 className='animate-pulse text-4xl  font-mono'>View Cart</h1>
{/* view cart with all subtotals of products */}
<div className="mt-8 bg-white rounded shadow p-6">
    {/* Example cart items */}
    <table className="w-full text-left border-collapse">
        <thead>
            <tr>
                <th className="py-2 px-4 border-b">Product</th>
                <th className="py-2 px-4 border-b">Qty</th>
                <th className="py-2 px-4 border-b">Price</th>
                <th className="py-2 px-4 border-b">Subtotal</th>
            </tr>
        </thead>
        <tbody>
            {/* Example row */}
            <tr>
                <td className="py-2 px-4 border-b">Apple</td>
                <td className="py-2 px-4 border-b">2</td>
                <td className="py-2 px-4 border-b">₹50</td>
                <td className="py-2 px-4 border-b">₹100</td>
            </tr>
            <tr>
                <td className="py-2 px-4 border-b">Banana</td>
                <td className="py-2 px-4 border-b">3</td>
                <td className="py-2 px-4 border-b">₹20</td>
                <td className="py-2 px-4 border-b">₹60</td>
            </tr>
            {/* Add more rows as needed */}
        </tbody>
        <tfoot>
            <tr>
                <td colSpan="3" className="py-2 px-4 font-bold text-right">Total</td>
                <td className="py-2 px-4 font-bold">₹160</td>
            </tr>
        </tfoot>
    </table>
    <div className="mt-6 flex justify-end">
        <Link to="/checkout" className="bg-green-600 text-white px-6 py-2 rounded hover:bg-green-700 transition">
            Proceed to Checkout
        </Link>
    </div>
</div>
</div>
</section>
<Footer />
</>
)
}
