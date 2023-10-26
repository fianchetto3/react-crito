import React from 'react'
import img_backgroundlines from '../../assets/images/background-lines.svg'
import img_suitman from '../../assets/images/suit-man.png'
import { NavLink } from 'react-router-dom'


export default function Showcase() {
  return (
    <>
        <section className="showcase">
            <img className="background-lines" src={img_backgroundlines} alt="background-lines"/>
            <div className="container">
                    <div className="content">
                        <h1>We Provide The Best Business Solutions</h1>
                        <p>Establish your vision and value proposition and turn them into testable prototypes.</p>
                        <NavLink className="btn-yellow" to="consulting.html">Get Consutling <i className="fa-regular fa-arrow-up-right"></i></NavLink>
                        <NavLink className="btn-transparent" to="services.html">Learn More <i className="fa-regular fa-arrow-up-right"></i></NavLink>
                    </div>
                <img src={img_suitman} alt=""/>
            </div>
        
        </section>

    </>
  )
}
