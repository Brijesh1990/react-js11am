import React,{useRef} from 'react'
import { Container } from 'react-bootstrap'
import Swal from 'sweetalert2';
export default function FormAdd() {
// using uncontrolled components 
const name=useRef("");
// create a formHandeling function 
const addFormData=(e)=>{
e.preventDefault();
var insert={
name:name.current.value
}
// pass a messages
Swal.fire({
title: "",
text: "Your nickname is "+insert.name,
icon: "success"
}); 
}
return (
<>
<Container className='p-5 mt-5 w-50 shadow'>
<form onSubmit={ addFormData}>
<div className='form-group mt-3'>
<input type='text' placeholder='Name *' ref={name} required className='form-control' />
</div>
<div className='form-group mt-3'>
<input type='submit' value="Submit" />
</div>
</form>
</Container>

</>
)
}
