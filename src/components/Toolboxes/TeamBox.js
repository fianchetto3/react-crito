import React from 'react'
import img_Kristine from '../../assets/images/Palmer.png'
import img_Mark from '../../assets/images/Aburi.png'
import img_Hansen from '../../assets/images/Hansen.png'
import img_Justin from '../../assets/images/Willoman.png'

function TeamBox( {name , title } ) {
    let image = ''
    if (name === 'Kristine Palmer' ){
        image = img_Kristine
    }else if (name === 'Mark Aburi'){
        image = img_Mark
    }else if (name === 'Kimberly Hansen'){
        image = img_Hansen
    }else if ( name === 'Justin Willoman'){
        image = img_Justin
    }
  return (
    <article>
         <img src={image} alt="member in the team"/>
         <h3> {name} </h3>
         <p> {title} </p>
    </article>
  )
}

export default TeamBox