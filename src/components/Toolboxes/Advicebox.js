import React from 'react'

function Advicebox({title, description} ) {
    let iconClass = ""

    if (title === 'Business Advice'){
        iconClass = 'fa-solid fa-handshake'
    }else if(title === 'Startup Business'){
        iconClass = "fa-regular fa-lightbulb-exclamation-on"
    }else if (title === 'Finiacial Advice'){
        iconClass = "fa-solid fa-chart-mixed-up-circle-dollar"
    }else if (title === 'Risk Management'){
        iconClass = "fa-sharp fa-solid fa-box"
    }

  return (
    <div className="advice-text">
        <i className={iconClass}></i>
        <h3>{title} </h3>
        <p> {description}</p>
     </div>
  )
}

export default Advicebox