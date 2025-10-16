import React from 'react'
import { Oval } from 'react-loader-spinner'
import { Navbar,Container } from 'react-bootstrap'
export default function App() {
  return (
    
    <> 
    <Navbar className='bg-warning w-50 mx-auto p-3 mt-5'>
      <h1 className='text-center fs-3 text-white'>Search my city weather Live</h1>
    </Navbar>
    <Container className='p-5 mt-0 w-50 shadow bg-white'>
    <div className='input-group'>
      <input type='text' placeholder='Enter your city Name *' className='form-control' />
      <button type='button' className='btn btn-primary fs-3 text-white'><span className='bi bi-search'></span></button>
    </div>

    </Container>


    </>

  )
}
