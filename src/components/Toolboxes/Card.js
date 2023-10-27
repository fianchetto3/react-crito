import React from 'react'

function Card( {className, title, description, info} ) {
    let iconClass = ""

    if (title === 'Visit Us'){
        iconClass='fa-solid fa-location-dot'
    }else if (title === 'Call Us'){
        iconClass ='fa-light fa-phone'
    }else if (title === 'Email Us'){
        iconClass = 'fa-regular fa-envelope'
    }

  return (
    <>
         <div className={className}>
              <div className="headline"><i className={iconClass}></i></div>
                <div className="text">
                    <h3> {title} </h3>
                    <p> {description} </p>
                    <p> {info} </p>
                </div>
         </div>

    
    
    </>

  )
}

export default Card