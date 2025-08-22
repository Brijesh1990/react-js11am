import React from 'react'
import AOS from 'aos';
import 'aos/dist/aos.css';
export default function Content() {
// used aos
AOS.init();
return (
<>
{/* banners  */}
<section id='banner' className='container mx-auto'>
<img src='https://www.creativehatti.com/wp-content/uploads/edd/2021/04/Delivery-services-free-delivery-on-all-orders-banner-design-06-large.jpg' alt='banner' className='w-full mt-5 h-100'/>
</section>

{/* content section  */}
<section id='content' className='container mx-auto mt-16'>
<h1 className='animate-pulse text-4xl text-center font-mono'>Hurry Up 50% discount on selected Items</h1>   
<hr className='w-96 mx-auto border-1'/>
{/* products items */}
<div className='products-app flex flex-row mt-10' data-aos="fade-up"
data-aos-duration="2000">

<div className='product-grid w-1/2'>
<p className='text-center p-10'><img src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQKFWXB9GrlD0Kb2ced4afiyB2TCIGjeag1BQ&s' className='w-80 h-80 mx-auto'/></p>
<p className='text-center text-3xl'>Flowers</p>
<p className='text-center text-xl'>Rs.25-/ <del>35-/</del></p> 
<p className='text-center text-3xl'><button type='button' className='bg-green-500 w-25 mt-5'><span className='bi bi-plus'></span></button></p>
</div> 
<div className='product-grid w-1/2'>
<p className='text-center p-10'><img src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQYQSyCzAO7rpCOqa35Rbv3b2HAnOuObw56diZUBaBQ28TZaF_zG3jJHl1kxwnFr4nTLfg&usqp=CAU' className='w-80 h-80 mx-auto'/></p>
<p className='text-center text-3xl'>Flowers</p>
<p className='text-center text-xl'>Rs.25-/ <del>35-/</del></p> 
<p className='text-center text-3xl'><button type='button' className='bg-green-500 w-25 mt-5'><span className='bi bi-plus'></span></button></p>
</div> 
<div className='product-grid w-1/2'>
<p className='text-center p-10'><img src='https://freepngimg.com/thumb/fruit/4-2-fruit-png-image-thumb.png' className='w-80 h-80 mx-auto'/></p>
<p className='text-center text-3xl'>Flowers</p>
<p className='text-center text-xl'>Rs.25-/ <del>35-/</del></p> 
<p className='text-center text-3xl'><button type='button' className='bg-green-500 w-25 mt-5'><span className='bi bi-plus'></span></button></p>
</div> 
<div className='product-grid w-1/2'>
<p className='text-center p-10'><img src='https://static.vecteezy.com/system/resources/thumbnails/044/571/251/small/illustration-of-fruit-mix-png.png' className='w-80 h-80 mx-auto'/></p>
<p className='text-center text-3xl'>Flowers</p>
<p className='text-center text-xl'>Rs.25-/ <del>35-/</del></p> 
<p className='text-center text-3xl'><button type='button' className='bg-green-500 w-25 mt-5'><span className='bi bi-plus'></span></button></p>
</div> 

</div>


<div className='products-app flex flex-row mt-10' data-aos="fade-up"
data-aos-duration="2000">

<div className='product-grid w-1/2'>
<p className='text-center p-10'><img src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQKFWXB9GrlD0Kb2ced4afiyB2TCIGjeag1BQ&s' className='w-80 h-80 mx-auto'/></p>
<p className='text-center text-3xl'>Flowers</p>
<p className='text-center text-xl'>Rs.25-/ <del>35-/</del></p> 
<p className='text-center text-3xl'><button type='button' className='bg-green-500 w-25 mt-5'><span className='bi bi-plus'></span></button></p>
</div> 
<div className='product-grid w-1/2'>
<p className='text-center p-10'><img src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQYQSyCzAO7rpCOqa35Rbv3b2HAnOuObw56diZUBaBQ28TZaF_zG3jJHl1kxwnFr4nTLfg&usqp=CAU' className='w-80 h-80 mx-auto'/></p>
<p className='text-center text-3xl'>Flowers</p>
<p className='text-center text-xl'>Rs.25-/ <del>35-/</del></p> 
<p className='text-center text-3xl'><button type='button' className='bg-green-500 w-25 mt-5'><span className='bi bi-plus'></span></button></p>
</div> 
<div className='product-grid w-1/2'>
<p className='text-center p-10'><img src='https://freepngimg.com/thumb/fruit/4-2-fruit-png-image-thumb.png' className='w-80 h-80 mx-auto'/></p>
<p className='text-center text-3xl'>Flowers</p>
<p className='text-center text-xl'>Rs.25-/ <del>35-/</del></p> 
<p className='text-center text-3xl'><button type='button' className='bg-green-500 w-25 mt-5'><span className='bi bi-plus'></span></button></p>
</div> 
<div className='product-grid w-1/2'>
<p className='text-center p-10'><img src='https://static.vecteezy.com/system/resources/thumbnails/044/571/251/small/illustration-of-fruit-mix-png.png' className='w-80 h-80 mx-auto'/></p>
<p className='text-center text-3xl'>Flowers</p>
<p className='text-center text-xl'>Rs.25-/ <del>35-/</del></p> 
<p className='text-center text-3xl'><button type='button' className='bg-green-500 w-25 mt-5'><span className='bi bi-plus'></span></button></p>
</div> 

</div>


<div className='products-app flex flex-row mt-10' data-aos="fade-up"
data-aos-duration="2000">

<div className='product-grid w-1/2'>
<p className='text-center p-10'><img src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQKFWXB9GrlD0Kb2ced4afiyB2TCIGjeag1BQ&s' className='w-80 h-80 mx-auto'/></p>
<p className='text-center text-3xl'>Flowers</p>
<p className='text-center text-xl'>Rs.25-/ <del>35-/</del></p> 
<p className='text-center text-3xl'><button type='button' className='bg-green-500 w-25 mt-5'><span className='bi bi-plus'></span></button></p>
</div> 
<div className='product-grid w-1/2'>
<p className='text-center p-10'><img src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQYQSyCzAO7rpCOqa35Rbv3b2HAnOuObw56diZUBaBQ28TZaF_zG3jJHl1kxwnFr4nTLfg&usqp=CAU' className='w-80 h-80 mx-auto'/></p>
<p className='text-center text-3xl'>Flowers</p>
<p className='text-center text-xl'>Rs.25-/ <del>35-/</del></p> 
<p className='text-center text-3xl'><button type='button' className='bg-green-500 w-25 mt-5'><span className='bi bi-plus'></span></button></p>
</div> 
<div className='product-grid w-1/2'>
<p className='text-center p-10'><img src='https://freepngimg.com/thumb/fruit/4-2-fruit-png-image-thumb.png' className='w-80 h-80 mx-auto'/></p>
<p className='text-center text-3xl'>Flowers</p>
<p className='text-center text-xl'>Rs.25-/ <del>35-/</del></p> 
<p className='text-center text-3xl'><button type='button' className='bg-green-500 w-25 mt-5'><span className='bi bi-plus'></span></button></p>
</div> 
<div className='product-grid w-1/2'>
<p className='text-center p-10'><img src='https://static.vecteezy.com/system/resources/thumbnails/044/571/251/small/illustration-of-fruit-mix-png.png' className='w-80 h-80 mx-auto'/></p>
<p className='text-center text-3xl'>Flowers</p>
<p className='text-center text-xl'>Rs.25-/ <del>35-/</del></p> 
<p className='text-center text-3xl'><button type='button' className='bg-green-500 w-25 mt-5'><span className='bi bi-plus'></span></button></p>
</div> 
</div>

<div className='products-app flex flex-row mt-10' data-aos="fade-up"
data-aos-duration="2000">

<div className='product-grid w-1/2'>
<p className='text-center p-10'><img src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQKFWXB9GrlD0Kb2ced4afiyB2TCIGjeag1BQ&s' className='w-80 h-80 mx-auto'/></p>
<p className='text-center text-3xl'>Flowers</p>
<p className='text-center text-xl'>Rs.25-/ <del>35-/</del></p> 
<p className='text-center text-3xl'><button type='button' className='bg-green-500 w-25 mt-5'><span className='bi bi-plus'></span></button></p>
</div> 
<div className='product-grid w-1/2'>
<p className='text-center p-10'><img src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQYQSyCzAO7rpCOqa35Rbv3b2HAnOuObw56diZUBaBQ28TZaF_zG3jJHl1kxwnFr4nTLfg&usqp=CAU' className='w-80 h-80 mx-auto'/></p>
<p className='text-center text-3xl'>Flowers</p>
<p className='text-center text-xl'>Rs.25-/ <del>35-/</del></p> 
<p className='text-center text-3xl'><button type='button' className='bg-green-500 w-25 mt-5'><span className='bi bi-plus'></span></button></p>
</div> 
<div className='product-grid w-1/2'>
<p className='text-center p-10'><img src='https://freepngimg.com/thumb/fruit/4-2-fruit-png-image-thumb.png' className='w-80 h-80 mx-auto'/></p>
<p className='text-center text-3xl'>Flowers</p>
<p className='text-center text-xl'>Rs.25-/ <del>35-/</del></p> 
<p className='text-center text-3xl'><button type='button' className='bg-green-500 w-25 mt-5'><span className='bi bi-plus'></span></button></p>
</div> 
<div className='product-grid w-1/2'>
<p className='text-center p-10'><img src='https://static.vecteezy.com/system/resources/thumbnails/044/571/251/small/illustration-of-fruit-mix-png.png' className='w-80 h-80 mx-auto'/></p>
<p className='text-center text-3xl'>Flowers</p>
<p className='text-center text-xl'>Rs.25-/ <del>35-/</del></p> 
<p className='text-center text-3xl'><button type='button' className='bg-green-500 w-25 mt-5'><span className='bi bi-plus'></span></button></p>
</div> 
</div>

{/* contact us sections */}
<div className='contact-us flex flex-row mt-16' data-aos="fade-up"
data-aos-duration="2000">
<div className='address p-16 w-1/2'>
<h1 className='text-5xl'>Get in Touch with Us</h1>
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
<input type='submit' placeholder='Name *' className='mt-3 border-0 bg-black w-50 p-3 text-white text-xl' value="Send" />
<input type='submit' placeholder='Name *' className='mt-3 border-0 bg-red-500 w-50 p-3 text-white text-xl ms-4' value="Reset" />
</form>
</div>
</div>

<div className='help-desk  mt-16 w-full' data-aos="fade-up"
data-aos-duration="2000">
<h1 className='text-5xl text-center font-mono'>Any help contact with Us!</h1>
<hr className='w-128 mx-auto border-1' />
<div className='w-1/2 p-5 mt-5 mx-auto'>
<p className='text-center'><img src='https://media0.giphy.com/media/lebpnk3qVPAjBxIKKc/giphy.gif?cid=6c09b952gnsx8cn97w1jl5oewe3ieu10i72l3ek9igb7agow&ep=v1_internal_gif_by_id&rid=giphy.gif&ct=g' alt='help' /></p>
<p className='text-center animate-bounce text-4xl mt-3'>Call Us : <span className='bi bi-telephone'></span> (+91)-1800-3500-180</p>
</div>
</div>
</section>
</>
)
}
