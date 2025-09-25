import React,{useEffect,useState} from 'react'
import axios from 'axios'
import Swal from 'sweetalert2'
import { useParams,useNavigate } from 'react-router-dom'
export default function DeleteTask() {
// delete data via axios
const navigate=useNavigate();
const {id}=useParams();

useEffect(()=>{
try
{
axios.delete(`http://localhost:8000/add-task/${id}`).then(()=>{
Swal.fire({
title: "",
text: "Your data successfully deleted!",
icon: "success"
}); 
navigate('/');
}) 
}
catch(error)
{
console.log('errors generated',error)    
}
})
return (
<div>

</div>
)
}
