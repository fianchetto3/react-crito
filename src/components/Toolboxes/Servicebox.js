import React from 'react'
import { Link } from 'react-router-dom'

function Servicebox({ className ,title, description, url,}) {

  return (

     <div className={className} >
        <div className="test"></div>
          <h3> {title} </h3>
           <p> {description} </p>
            <Link className="btn-advice" to={url}> <button className="square-button" ><i className="fa-solid fa-arrow-right"></i></button></Link>
    </div>
  )
}

export default Servicebox