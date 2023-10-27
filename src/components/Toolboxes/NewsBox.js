import React from 'react'
import img_classroom from '../../assets/images/article-classroom.png'
import img_gpt from '../../assets/images/article-gpt.png'
import img_cssbook from '../../assets/images/article-cssbook.png'

function NewsBox( {title, description} ) {
    let image= ''
    
    if (title === 'How To Use Digitalization In The Classroom'){
        image =  img_classroom
    }else if (title === 'How To Implement Chat GPT In Your Projects' ){
        image = img_gpt
    }else if (title === 'The Guide To Support Modern CSS Design'){
        image = img_cssbook
    }



  return (
    <div className="article-image">  
     <div className="date-box"> <h3>25</h3> <p>Mar</p> </div>
        <img src={image} alt="digitalizaton in the Classroom"/>
        <div className="article-text">
        <p>Business</p>
        <h3> {title} </h3>
        <p> {description} </p>
    </div>
</div>
  )
}

export default NewsBox