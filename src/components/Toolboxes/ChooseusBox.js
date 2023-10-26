import React from 'react'

function ChooseusBox({title, description}) {
    let iconClass = ""

    if(title === 'Process Exellence'){
        iconClass = 'fa-regular fa-thumbs-up'
    }else if(title === 'Strategic Planning'){
        iconClass = 'fa-solid fa-hexagon-image'
    }else if (title === 'Experience Design'){
        iconClass = 'fa-solid fa-pen-nib'
    }else if (title === 'Artificial Inteligence'){
        iconClass = 'fa-regular fa-head-side-gear'
    }


  return (
    <div className="reasons-child">
        <div className="icon"><i className={iconClass}></i> </div>
         <div className="text-box">
         <h3> {title} </h3>
            <p> {description} </p>
        </div>
    </div>
  )
}

export default ChooseusBox