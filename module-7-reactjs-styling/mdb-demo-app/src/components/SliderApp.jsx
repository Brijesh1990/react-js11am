import React from 'react';
import {MDBContainer,MDBCarousel, MDBCarouselItem } from 'mdb-react-ui-kit';

export default function SliderApp() {
  return (
    <MDBContainer className='w-100 mx-auto mt-4'>
    <MDBCarousel showControls showIndicators>
      <MDBCarouselItem itemId={1}>
        <img src='https://mdbootstrap.com/img/new/slides/041.jpg' className='d-block w-100' alt='...' style={{width:"100%",height:"320px"}} />
      </MDBCarouselItem>
      <MDBCarouselItem itemId={2}>
        <img src='https://mdbootstrap.com/img/new/slides/042.jpg' className='d-block w-100' alt='...'  style={{width:"100%",height:"320px"}}/>
      </MDBCarouselItem>
      <MDBCarouselItem itemId={3}>
        <img src='https://mdbootstrap.com/img/new/slides/043.jpg' className='d-block w-100' alt='...' style={{width:"100%",height:"320px"}} />
      </MDBCarouselItem>
    </MDBCarousel>
    </MDBContainer>
  );
}