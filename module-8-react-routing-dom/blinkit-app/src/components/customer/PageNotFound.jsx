import React from 'react'
import AOS from 'aos';
import 'aos/dist/aos.css';
import { Link } from 'react-router-dom';
import Header from './Header';
import Footer from './Footer';
export default function PageNotFound() {
// used aos
AOS.init();
return (
<>
<Header />
{/* content section  */}
<section id='content' className='container mx-auto mt-16'>
<div className='w-1/2 mx-auto text-center'>      
<img src='https://cdn.dribbble.com/userupload/24450589/file/original-7a69eb5b87401ce59325c3291535aebc.gif' alt='404' className='w-100 ms-30' />
<h1 className='animate-pulse text-4xl  font-mono'>Page not Found (404 error)</h1>   
<Link to="/"><button type='button' className='bg-green-500 w-50 p-2 mt-5'>Go to Home page</button></Link>
</div>
</section>
<Footer />
</>
)
}
