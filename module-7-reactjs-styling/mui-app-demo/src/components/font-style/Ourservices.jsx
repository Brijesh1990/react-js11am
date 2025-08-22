import React from 'react'
import { Container,Button,Card } from '@mui/material'
import { Delete,Person } from '@mui/icons-material'

export default function Ourservices() {
  return (
    <div>
      <Container>
      <h1>Our services</h1>
      <hr />
      <p>List of Our services</p>
      <p><Button variant='contained'>Click Me</Button></p>
      <Button variant="text">Text</Button>
      <Button variant="contained">Contained</Button>
      <Button variant="outlined">Outlined</Button>
      <Button variant="contained" color="success" size='large'>Success</Button>

      <p><Button variant='contained' color='success' endIcon={<Person />}>Login here</Button></p>
      </Container>
     
    </div>
  )
}
