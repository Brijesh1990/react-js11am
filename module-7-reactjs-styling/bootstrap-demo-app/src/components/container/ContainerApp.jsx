import React from 'react'
import { Container,Row,Button } from 'react-bootstrap'

export default function ContainerApp() {
  return (
    <>
         <Container fluid className='bg-secondary p-5 mt-0'>
            <Row>

             <div className='col-md-6'>  
             <h4 className='text-center text-white'>This is an examples of Container App</h4>
             <Button className='btn btn-white bg-white text-dark ms-5 mt-4'>Click Me <span className='bi bi-person fs-3'></span></Button>
             </div>
             <div className='col-md-6'>
                <p className='text-center text-white'>Welcome to Our website</p>
             </div>

            </Row>
         </Container>
      



         <Container className='bg-secondary p-5 mt-5'>
            <Row>

             <div className='col-md-6'>  
             <h4 className='text-center text-white'>This is an examples of Container App</h4>
             <Button className='btn btn-white bg-white text-dark ms-5 mt-4'>Click Me <span className='bi bi-person fs-3'></span></Button>
             </div>
             <div className='col-md-6'>
                <p className='text-center text-white'>Welcome to Our website</p>
             </div>

            </Row>
         </Container>
      
    </>
  )
}
