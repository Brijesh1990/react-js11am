import React from 'react'
import { Container,Row } from 'react-bootstrap'
import Navbar from './Navbar'
import { Link } from 'react-router-dom'
export default function ProductsApp() {
return (
<>
<Navbar /> 
<Container className='p-5 w-75 mx-auto mt-5'>
<Row>
<h1 className='ms-5'>50% of on selected Items</h1>
<div className='col-md-4 ms-5 shadow-lg p-5'>
<img src='https://m.media-amazon.com/images/I/61BgEfmZC8L._UF1000,1000_QL80_.jpg' alt='products' className='w-75 img-fluid' />
<p className='fs-3'>samsung fold 6</p>
<p className='fs-5'>Rs. 165000</p>
</div>
</Row>

</Container>
</>
)
}
