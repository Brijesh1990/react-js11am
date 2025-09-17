import React,{useRef} from 'react'
import axios from 'axios'
import Swal from 'sweetalert2'
import { FaBars,FaUsers,FaCircle } from 'react-icons/fa'
import { Link,useNavigate } from 'react-router-dom'
import emailjs from '@emailjs/browser';
import NavbarApp from './NavbarApp'
export default function ContactUs() {
//store all input data  inside of variables 
const  name=useRef("");
const  email=useRef("");
const  phone=useRef("");
const  subject=useRef("");
const  message=useRef("");
const navigate=useNavigate();

// stored all email serviceId | PublicId | templateId
const serviceId="service_k4bodyj";
const templateId="template_95b13bh";
const publicKey="I3OKeIkWPY2_W0BsP";

// stored all data in object for post via axios.post()
const addFormData=async(e)=>{
e.preventDefault();
// stored current data in api via object
var insert={
name:name.current.value,
email:email.current.value,
phone:phone.current.value,
subject:subject.current.value,
message:message.current.value,   
}
// call api vai axios.post
try 
{
//send email method   //  
emailjs.sendForm(serviceId,templateId,e.target,publicKey);
axios.post(`http://localhost:3000/contactus`,insert).then(()=>{
// pass insert messages 
Swal.fire({
title: "Good!",
text: "Thanks for contact with us we will contact with you Soon!",
icon: "success"
});
e.target.reset();
// navigate('/');
document.getElementById("dialog").close();
navigate('/contact-us');

})
}
catch(error)
{
console.log('error generating',error)
}

}
return (
<>
<NavbarApp /> 
<div className='container mx-auto mt-15 p-15 shadow-lg rounded-lg w-150'>
<h1 className='text-xl font-bold'>Contact Us </h1>
<hr className='border-gray-500 w-15' /> 

<div className="bg-white px-4 pt-5 pb-4 sm:p-6 sm:pb-4">

<div className="mt-2">
<form onSubmit={addFormData}>
<div className="mb-4">
<label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="task"> Name</label>
<input className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="task" type="text" ref={name} name="name" placeholder="Enter Name" />

</div>

<div className="mb-4">
<label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="dueDate">  Email</label>
<input className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="dueDate" type="text" ref={email} name="email" />
</div>

<div className="mb-4">
<label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="dueDate"> Phone</label>
<input className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="dueDate" type="text" ref={phone} name="phone" />
</div>

<div className="mb-4">
<label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="dueDate">  subject</label>
<input className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="dueDate" type="text" ref={subject} name="subject" />
</div>

<div className="mb-4">
<label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="details">  Message</label>
<textarea className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="details" placeholder="Enter task details" ref={message} name="message"></textarea>
</div>

<div className="flex items-center justify-between">
<button type="submit" className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline">
Send
</button>
</div>
</form>
</div>
</div>
</div>

</>
)
}

