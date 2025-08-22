import React from 'react'
import { Stack,Button } from '@mui/material'

export default function ButtonApp() {
  return (
    <>
    <Stack spacing={4} direction="row" width={450}>

        <Button variant="text">text</Button>
        <Button variant="contained">contained</Button>
        <Button variant="outlined">outlined</Button>
        <Button variant="contained" value="submit">Submit</Button>
    
    </Stack>    
    </>
  )
}
