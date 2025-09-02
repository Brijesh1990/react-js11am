import React from 'react'
import AOS from 'aos';
import 'aos/dist/aos.css';
import { Link } from 'react-router-dom';
import Header from './Header';
import Navigation from './Navigation';
import Footer from './Footer';
export default function CreateAccount() {
// used aos
AOS.init();
return (
<>
<Header />
<Navigation />
{/* content section  */}
<section id='content' className='container mx-auto mt-16'>

<div className='contact-us flex flex-row mt-16' data-aos="fade-up"
data-aos-duration="2000">
<div className='address p-16 w-1/2'>
<h1 className='text-5xl'>Create Account with Us</h1>
<hr className='border-1 w-50'/> 
<p className='mt-16'><b>Address : </b> Ground Floor, Pioneer Square, Sector 62, Golf Course Extension Road, Gurugram-122098, Haryana, India</p>
<p className='mt-3'><b>Registered Office :</b>Ground Floor, Tower A, Pioneer Square Building, Golf Course Extension Road, Sector 62, Gurugram-122098, Haryana.</p>
<p className='mt-3'><b>Cin :</b>U52609UP2021PTC157461</p>
<p className='mt-3'><b>Email Us :</b> <a href='mailto:blinkit2021@gmail.com'>blinkit2021@gmail.com</a></p>
<p className='mt-3'>
<iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d59075.463026054276!2d70.68915472167966!3d22.269789600000006!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3959cb000e507455%3A0xf0cd3e17d20e1b1e!2sBlinkit%20store!5e0!3m2!1sen!2sin!4v1743395044069!5m2!1sen!2sin" width="100%" height="250" style={{border:0}}  loading="lazy"></iframe>
</p>
</div>
<div className='contact-form w-1/2 p-16'>
<form className='mt-16'>
<input type='text' placeholder='Name *' className='mt-3 border-b-1 w-full' />
<input type='text' placeholder='Email *' className='mt-10 border-b-1 w-full' />
<input type='text' placeholder='Phone *' className='mt-10 border-b-1 w-full' />
<input type='text' placeholder='Subject *' className='mt-10 border-b-1 w-full' />
<textarea type='text' placeholder='Message *' className='mt-10 border-b-1 w-full h-25'></textarea>
<input type='submit' placeholder='Name *' className='mt-3 border-0 bg-black w-50 p-3 text-white text-xl' value="Register here" />
<input type='submit' placeholder='Name *' className='mt-3 border-0 bg-red-500 w-50 p-3 text-white text-xl ms-4' value="Reset" />

</form>
</div>
</div>

</section>
<Footer />
</>
)
}
