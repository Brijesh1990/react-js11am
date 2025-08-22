import React from 'react'
import { Container,Row } from 'react-bootstrap'
import Navbar from './Navbar'
export default function Contact() {
return (
<>
<Navbar/>    
<Container className='p-5 w-75 mx-auto mt-5'>
<Row>
<div className='col-md-4'>
<img src='https://miro.medium.com/1*TVd_sNhpc7JDPBHAsAOQZg.jpeg' alt='routing-app' className='img-fluid' />
</div>
<div className='col-md-7 ms-5'>
<h1>Contact us</h1>
<p>React Router DOM is a popular library used in React.js applications to manage client-side routing. It enables the creation of Single Page Applications (SPAs) where different components or "pages" are rendered dynamically based on the URL, without requiring a full page reload. 
Key aspects of React Router DOM:
</p>
</div>
</Row>

</Container>
</>
)
}
