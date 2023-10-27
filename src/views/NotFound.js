import React from 'react'
import { NavLink } from 'react-router-dom'
import NotFoundHeader from '../components/generics/NotFoundHeader'

function NotFound() {
  return (
    
    <div className='not-found' >
        <NotFoundHeader/>
        <div className='container'>
          <h1> 404 Error </h1>
          <h2> Page Not Found </h2>
          <NavLink to="/"> <button className='btn-yellow'>Go back</button></NavLink>
        </div>
    </div>

  )
}

export default NotFound