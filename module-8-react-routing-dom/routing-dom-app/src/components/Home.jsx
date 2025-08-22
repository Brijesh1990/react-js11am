import React from 'react'
import { Container,Row } from 'react-bootstrap'
export default function Home() {
return (
<Container className='p-5 w-75 mx-auto mt-5'>
<Row>
<div className='col-md-4'>
<img src='https://miro.medium.com/1*TVd_sNhpc7JDPBHAsAOQZg.jpeg' alt='routing-app' className='img-fluid' />
</div>
<div className='col-md-7 ms-5'>
<h1>React routing DOM App(Home Page)</h1>
<p>React Router DOM is a popular library used in React.js applications to manage client-side routing. It enables the creation of Single Page Applications (SPAs) where different components or "pages" are rendered dynamically based on the URL, without requiring a full page reload. 
Key aspects of React Router DOM:

Declarative Routing:
It allows you to define your application's routes using React components, making the routing logic integrated with your UI.
Browser-Specific Components:
Installation:
You typically install it using npm or yarn:
Code
npm install react-router-dom
# or
yarn add react-router-dom</p>
</div>
</Row>

</Container>
)
}
