import React from 'react'
import { Container,Row } from 'react-bootstrap'
import Navbar from './Navbar'
import { Link } from 'react-router-dom'
export default function PageNotFound() {
return (
<>
<Navbar /> 
<Container className='p-5 w-75 mx-auto mt-5'>
<Row>
<div className='col-md-10 ms-5'>
<img src='https://assets-v2.lottiefiles.com/a/6915cc2c-1178-11ee-a783-6b784bd85af7/vUmMyG7Nho.gif' alt='404' className='img-fluid w-25' />
<h1>Page Not Found (404 error)</h1>
<Link to="/"><button type='button' className='btn btn-md btn-dark text-white mt-4'>Go to Home Page</button></Link>
</div>
</Row>

</Container>
</>
)
}
