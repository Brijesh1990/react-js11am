import React from 'react';
import {
  MDBContainer,  
  MDBInput,
  MDBCol,
  MDBRow,
  MDBCheckbox,
  MDBBtn,
  MDBIcon
} from 'mdb-react-ui-kit';

export default function RegisterApp() {
  return (
    <MDBContainer className='p-5 mt-5 w-50 mx-auto shadow'>
    <h2>Register Form</h2>
    <hr />
    <form>
      <MDBRow className='mb-4'>
        <MDBCol>
          <MDBInput id='form3Example1' label='First name' />
        </MDBCol>
        <MDBCol>
          <MDBInput id='form3Example2' label='Last name' />
        </MDBCol>
      </MDBRow>
      <MDBInput className='mb-4' type='email' id='form3Example3' label='Email address' />
      <MDBInput className='mb-4' type='password' id='form3Example4' label='Password' />

      <MDBCheckbox
        wrapperClass='d-flex justify-content-center mb-4'
        id='form3Example5'
        label='Subscribe to our newsletter'
        defaultChecked
      />

      <MDBBtn type='submit' className='mb-4' block>
        Sign in
      </MDBBtn>

      <div className='text-center'>
        <p>
          Not a member? <a href='#!'>Register</a>
        </p>
        <p>or sign up with:</p>

        <MDBBtn floating color="secondary" className='mx-1'>
          <MDBIcon fab icon='facebook-f' />
        </MDBBtn>

        <MDBBtn floating color="secondary" className='mx-1'>
          <MDBIcon fab icon='google' />
        </MDBBtn>

        <MDBBtn floating color="secondary" className='mx-1'>
          <MDBIcon fab icon='twitter' />
        </MDBBtn>

        <MDBBtn floating color="secondary" className='mx-1'>
          <MDBIcon fab icon='github' />
        </MDBBtn>
      </div>
    </form>
    </MDBContainer>
  );
}