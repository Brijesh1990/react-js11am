import React,{useEffect} from 'react'
import axios from 'axios'
import { useNavigate,useParams } from 'react-router-dom'
import Swal from 'sweetalert2';
export default function DeleteData() {
const{id}=useParams();
const navigate=useNavigate();
// delete data
useEffect(()=>{
try 
{
Swal.fire({
title: "Do you want to delete Data ?",
showDenyButton: true,
confirmButtonText: "Yes",
denyButtonText: `No`
}).then((result) => {
/* Read more about isConfirmed, isDenied below */
if (result.isConfirmed) {
axios.delete(`http://localhost:4000/attendance/${id}`).then(()=>{
Swal.fire("Data successfully Deleted", "", "success");
});
navigate('/')
} 

else if (result.isDenied) {
navigate('/');
}


});
}
catch(error)
{
console.log('error generated',error); 
}
});

return (
<div>

</div>
)
}
