import React from 'react'
import { 
    MDBContainer,
    MDBRow,
    MDBCard,
    MDBCardImage,
    MDBCardBody,

} from 'mdb-react-ui-kit'
export default function CardApp() {
  return (
    <div>
      <MDBContainer className='mt-4 p-4'>
        <MDBRow>
            <div className='col-md-4 mt-3'>
                <MDBCard className='border border-danger border-1'>
                    <MDBCardImage src='https://letsenhance.io/static/8f5e523ee6b2479e26ecc91b9c25261e/1015f/MainAfter.jpg' alt=''></MDBCardImage>
                    <MDBCardBody>
                        <p>This is examples of Card</p>
                        <p><button type='button' className='btn btn-danger text-white'>Click For More</button></p>
                    </MDBCardBody>
                </MDBCard>
            </div>

            <div className='col-md-4 mt-3'>
                <MDBCard className='border border-danger border-1'>
                    <MDBCardImage src='https://letsenhance.io/static/8f5e523ee6b2479e26ecc91b9c25261e/1015f/MainAfter.jpg' alt=''></MDBCardImage>
                    <MDBCardBody>
                        <p>This is examples of Card</p>
                        <p><button type='button' className='btn btn-danger text-white'>Click For More</button></p>
                    </MDBCardBody>
                </MDBCard>
            </div>

            <div className='col-md-4 mt-3'>
                <MDBCard className='border border-danger border-1'>
                    <MDBCardImage src='https://letsenhance.io/static/8f5e523ee6b2479e26ecc91b9c25261e/1015f/MainAfter.jpg' alt=''></MDBCardImage>
                    <MDBCardBody>
                        <p>This is examples of Card</p>
                        <p><button type='button' className='btn btn-danger text-white'>Click For More</button></p>
                    </MDBCardBody>
                </MDBCard>
            </div>

            <div className='col-md-4 mt-3'>
                <MDBCard className='border border-danger border-1'>
                    <MDBCardImage src='https://letsenhance.io/static/8f5e523ee6b2479e26ecc91b9c25261e/1015f/MainAfter.jpg' alt=''></MDBCardImage>
                    <MDBCardBody>
                        <p>This is examples of Card</p>
                        <p><button type='button' className='btn btn-danger text-white'>Click For More</button></p>
                    </MDBCardBody>
                </MDBCard>
            </div>

            
            <div className='col-md-4 mt-3'>
                <MDBCard className='border border-danger border-1'>
                    <MDBCardImage src='https://letsenhance.io/static/8f5e523ee6b2479e26ecc91b9c25261e/1015f/MainAfter.jpg' alt=''></MDBCardImage>
                    <MDBCardBody>
                        <p>This is examples of Card</p>
                        <p><button type='button' className='btn btn-danger text-white'>Click For More</button></p>
                    </MDBCardBody>
                </MDBCard>
            </div>

            
            <div className='col-md-4 mt-3'>
                <MDBCard className='border border-danger border-1'>
                    <MDBCardImage src='https://letsenhance.io/static/8f5e523ee6b2479e26ecc91b9c25261e/1015f/MainAfter.jpg' alt=''></MDBCardImage>
                    <MDBCardBody>
                        <p>This is examples of Card</p>
                        <p><button type='button' className='btn btn-danger text-white'>Click For More</button></p>
                    </MDBCardBody>
                </MDBCard>
            </div>
        </MDBRow>
      </MDBContainer>
    </div>
  )
}
