import React,{useState,useEffect} from 'react'
import axios from 'axios'
import { useNavigate,useParams } from 'react-router-dom'
import Swal from 'sweetalert2';
export default function DeleteTask() {
const[data,setData]=useState("");
const navigate=useNavigate();
const{id}=useParams();
useEffect(()=>{
Swal.fire({
title: "Do you want to Task ?",
showDenyButton: true,
confirmButtonText: "Yes",
denyButtonText: `No`
}).then((result) => {
/* Read more about isConfirmed, isDenied below */
if (result.isConfirmed) {
axios.delete(`http://localhost:3000/addtask/${id}`);
Swal.fire("Task successfully deleted", "", "success");
navigate('/');
} else if (result.isDenied) {
// Swal.fire("Something went wrong while deleting", "", "info");
navigate('/')

}
});

})
return (
<div>

</div>
)
}
