import React from 'react'
import Header from './Header'
import Navigation from './Navigation'
import Footer from './Footer'
import { Link } from 'react-router-dom'
export default function ProductsApp() {
  return (
    <>
    
   <Header />
   <Navigation /> 
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
<p className='text-center text-3xl'><Link to="/products-details"><button type='button' className='bg-green-500 w-25 mt-5'><span className='bi bi-plus'></span></button></Link></p>
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
</section>

<Footer />

    </>
  )
}
