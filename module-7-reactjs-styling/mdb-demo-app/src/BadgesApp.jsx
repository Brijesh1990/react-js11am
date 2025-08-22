import React from 'react';
import { MDBContainer,MDBBadge, MDBBtn } from 'mdb-react-ui-kit';

export default function BadgesApp() {
  return (
    <MDBContainer className='mt-0 p-5 w-75 mx-auto'>
    <MDBBtn>
      Notifications
      <MDBBadge className='ms-2' color='danger'>
        8
      </MDBBadge>
    </MDBBtn>

    <MDBBtn className='ms-5'>
      Profile
      <MDBBadge className='ms-2' color='danger'>
        9
      </MDBBadge>
      <span className='visually-hidden'>unread messages</span>
    </MDBBtn>
    </MDBContainer>
  );
}