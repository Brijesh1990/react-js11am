import React,{useState,useRef,useEffect} from 'react'
import axios from 'axios'
import {Link,useNavigate, useParams} from 'react-router-dom'
import { FaArrowCircleRight,FaCartPlus } from 'react-icons/fa';
import Navbar from './Navbar';
import Footer from './Footer';
import Swal from 'sweetalert2';
export default function ProductDetails() {
const[data,setData]=useState([]); 
const  categoryname=useRef(""); 
const  imgurl=useRef("");
const  photo=useRef("");
const  productname=useRef("");
const  oldprice=useRef("");
const  newprice=useRef("");
const  addeddate=useRef("");
const  qty=useRef("");
const  descriptions=useRef("");
const  navigate=useNavigate();
const{id}=useParams();
// fetch data via axios.get() using useEffect hooks
useEffect(()=>{
axios.get(`http://localhost:8000/products/${id}`).then((response)=>{
setData(response.data);
categoryname.current.value=response.data.categoryname;
imgurl.current.src=response.data.photo;
photo.current.value=response.data.photo;
productname.current.value=response.data.productname;
oldprice.current.value=response.data.oldprice;
newprice.current.value=response.data.newprice;
addeddate.current.value=response.data.addeddate;
qty.current.value=response.data.qty;
descriptions.current.value=response.data.descriptions;

})
},[]);

// add products in cart 
const addCartData=((e)=>{
e.preventDefault();
// stored all data in object
var insert={
categoryname:categoryname.current.value,
imgurl:photo.current.value,
photo:photo.current.value,
productname:productname.current.value,
oldprice:oldprice.current.value,
newprice:newprice.current.value,
addeddate:addeddate.current.value,
qty:qty.current.value,
descriptions:descriptions.current.value
}
axios.post(`http://localhost:8000/cart`,insert).then(()=>{
// pass flash messages 
    // pass insert messages 
  Swal.fire({
  title: "Good!",
  text: "Products added in Cart!",
  icon: "success"
});
// e.target.reset();
navigate('/view-cart');
 });

})


return (
<>
<Navbar />
<h1 className='text-3xl mt-5 ms-8'>Products - details</h1>
<hr className='w-35 ms-8' />
<div className='flex flex-wrap m-1 p-1'>

<div className='w-100 p-5'>
<input type='hidden' ref={photo} readOnly className='border-0 text-black' />
<img src={imgurl} ref={imgurl} style={{width:"100%", height:"430px"}} />
</div>
<div className='w-1/2 p-2 ms-0'>
<p className='mt-5 text-lg'><input type='text' ref={categoryname} readOnly className='border-0 text-black' /></p>


<p className='mt-5 text-lg'><input type='text' ref={productname} readOnly className='border-0 text-black' /></p>


<p className='mt-5 text-lg'><input type='text' ref={oldprice} readOnly className='border-0' /></p>


<p className='mt-5 text-lg'><input type='text' ref={newprice} readOnly className='border-0' /></p>

<p className='mt-5 text-lg'><input type='text' ref={addeddate} readOnly className='border-0' /></p>


<p className='mt-5 text-lg'><input type='text' ref={qty} readOnly className='border-0' /></p>


<p className='mt-5 text-lg'><input type='text' ref={descriptions} readOnly className='border-0' /></p>


<p className='mt-5 text-lg'>

<Link to='/'><button type='button'  className='bg-green-600 p-2 text-white rounded-2xl'>Continue shopping <FaArrowCircleRight className='inline-flex ms-2' /></button></ Link>

<button type='button' onClick={addCartData}  className='bg-blue-600 p-2 ms-2 text-white rounded-2xl'>AddToCart <FaCartPlus className='inline-flex ms-2' /></button>

</p>

</div>
</div>
<Footer />
</>
)
}
