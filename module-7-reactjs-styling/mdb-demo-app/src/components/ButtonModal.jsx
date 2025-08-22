import React from 'react'
import { MDBBtn,MDBContainer,MDBRow,MDBModal } from 'mdb-react-ui-kit'
export default function ButtonModal() {
  return (
    <div>
    <MDBContainer className='w-75 mx-auto p-5'>
        <h2>Load Login here</h2>
        <hr className='border border-1 border-danger w-25' />
        <MDBBtn className='btn btn-lg btn-danger text-white' data-bs-toggle="modal" data-bs-target="#login">Load Login</MDBBtn>
        <MDBBtn className='btn btn-lg btn-info text-white ms-5'>Load Contact</MDBBtn>

        {/* load modal */}
        <div className='modal fade' role="dialog" id='login'>
        <div className='modal-dialog'>
        <div className='modal-content p-5'>
            <h2>Login Form</h2>
        </div>
        </div>
        </div>
    </MDBContainer>
      
    </div>
  )
}
