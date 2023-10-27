import React from 'react'
import img_Cassandra from '../../assets/images/Warren.svg'
import img_Amandda from '../../assets/images/Amanda.svg'
import img_Jack from '../../assets/images/Jack.svg'

function Reviews( {name, title, description} ) {
    let image = ''
    if(name === 'Cassandra Warren'){
        image = img_Cassandra
    }else if (name === 'Amanda Tulling'){
        image = img_Amandda
    }else if (name === 'Jack McDogglas'){
        image = img_Jack
    }


  return (
    <div className="review-wrapper">
    <i className="fa-solid fa-star"></i><i className="fa-solid fa-star"></i><i className="fa-solid fa-star"></i><i className="fa-solid fa-star"></i><i className="fa-solid fa-star"></i>
    <p> {description} </p>        
        <div className="profile">
            <img src= {image}  alt="review-profile"/>
            <div className="profile-title" >
                 <p className="client-name"> {name} </p>
                 <p className="client-titel"> {title} </p>
            </div>
        </div>
  </div>
  )
}

export default Reviews