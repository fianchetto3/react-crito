import React from 'react'
import img_backgroundlines from '../../assets/images/background-lines.svg'
import img_suitman from '../../assets/images/suit-man.png'


export default function Showcase() {
  return (
    <>
        <section className="showcase">
            <img className="background-lines" src={img_backgroundlines} alt="background-lines"/>
            <div className="container">
                    <div className="content">
                        <h1>We Provide The Best Business Solutions</h1>
                        <p>Establish your vision and value proposition and turn them into testable prototypes.</p>
                        <a className="btn-yellow" href="consulting.html">Get Consutling <i className="fa-regular fa-arrow-up-right"></i></a>
                        <a className="btn-transparent" href="services.html">Learn More <i className="fa-regular fa-arrow-up-right"></i></a>
                    </div>
                <img src={img_suitman} alt=""/>
            </div>
        
        </section>

    </>
  )
}
