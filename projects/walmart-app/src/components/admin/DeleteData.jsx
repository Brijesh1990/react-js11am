import React,{useState,useEffect} from 'react'
import axios from 'axios'
import { useNavigate,useParams } from 'react-router-dom'
import Swal from 'sweetalert2';
export default function DeleteData() {
const[data,setData]=useState("");
const navigate=useNavigate();
const{id}=useParams();
useEffect(()=>{
Swal.fire({
title: "Do you want to delete data ?",
showDenyButton: true,
confirmButtonText: "Yes",
denyButtonText: `No`
}).then((result) => {
/* Read more about isConfirmed, isDenied below */
if (result.isConfirmed) {
axios.delete(`http://localhost:8000/contactus/${id}`);
Swal.fire("data successfully deleted", "", "success");
navigate('/admin-login/manage-contact');
} else if (result.isDenied) {
// Swal.fire("Something went wrong while deleting", "", "info");
navigate('/admin-login/manage-contact')

}
});

})
return (
<div>

</div>
)
}
