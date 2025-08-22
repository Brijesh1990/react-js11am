import React from 'react'
import AOS from 'aos';
import 'aos/dist/aos.css';
import { Link } from 'react-router-dom';
import Header from './Header';
import Footer from './Footer';
export default function CartApp() {
// used aos
AOS.init();
return (
<>
<Header />
{/* content section  */}
<section id='content' className='container mx-auto mt-16'>
<div className='w-1/2 mx-auto text-center'>  
<h1 className='animate-pulse text-4xl  font-mono'>Cart (0)</h1> 

<img src='https://rukminim2.flixcart.com/www/800/800/promos/16/05/2019/d438a32e-765a-4d8b-b4a6-520b560971e8.png?q=90' alt='404' className='w-100 img-fluid ms-30' />

<h1>Missing Cart items?</h1>
<p>Login to see the items you added previously</p>
<Link to="/create-account"><button type='button' className='bg-green-500 w-50 p-2 mt-5'>Login</button></Link>
</div>  
</section>
<Footer />
</>
)
}
