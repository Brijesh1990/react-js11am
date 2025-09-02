import React,{useState} from 'react'
import { Container } from 'react-bootstrap'
import Swal from 'sweetalert2';
export default function FormApp() {
//  destructured data 
const[value,setValue]=useState("");
const[result,setResult]=useState("");
// create a formHandeling function 
const addFormSubmit=(e)=>{
 e.preventDefault();
 setResult("");
//  pass a message 
// console.log('Thanks form form successfully submitted',value);

// pass messages via sweetAlert
Swal.fire({
  title: "Good !",
  text: "Your name is :"+value,
  icon: "success"
});
}
// create a formChange function 
const onChangeData=(e)=>{
      setValue(e.target.value);
}
  return (
    <>
    <Container className='w-50 mt-5 p-5 shadow'>
        <form onSubmit={addFormSubmit}>
            <div className='form-group mt-2'>
                <input type='text' placeholder='Name *' className='form-control' onChange={onChangeData} value={value} />
            </div>

            <div className='form-group mt-2'>
                <input type='submit' placeholder='Name *' className='btn btn-dark text-white' value="Submit" />
            </div>

            
            {/* <div className='form-group mt-2'>
                {value}
            </div> */}

            
        </form>
    </Container>
    </>
  )
}
