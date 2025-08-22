import React from 'react'
import { MDBContainer,MDBRow } from 'mdb-react-ui-kit'
export default function ContainerApp() {
  return (
    <div>
     <MDBContainer>
     <h3>Container App</h3>
     <hr className='border border-dark border-2 w-50' />
        <MDBRow>
            <div className='col-md-4 bg-dark text-white p-5'>Hello</div>
            <div className='col-md-4 bg-danger text-white p-5'>Hello</div>
            <div className='col-md-4 bg-info text-white p-5'>Hello</div>
        </MDBRow>
     </MDBContainer>      
    </div>
  )
}
