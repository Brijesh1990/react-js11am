import React from 'react'
import { Link } from 'react-router-dom'
export default function PageNotFound() {
  return (
    <div className='text-center mt-20 shadow-lg p-10 rounded-lg'>
      <h1>404 - Page Not Found</h1>
        <p>The page you are looking for does not exist.</p>
        <Link to="/">Go back to Home</Link>
    </div>
  )
}
