import React from 'react'
import { NavLink } from 'react-router-dom'

function NotFound() {
  return (
    
    <div className='not-found' >
        <div className='container'>
          <h1> 404 Error </h1>
          <h2> Page Not Found </h2>
          <NavLink to="/"> <button className='btn-yellow'>Go back</button></NavLink>
        </div>

    
    </div>
  
  )
}

export default NotFound