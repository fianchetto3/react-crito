import React from 'react'
import Servicebox from '../Toolboxes/Servicebox'
import img_rightlines from '../../assets/images/right-lines.svg'
import { Link } from 'react-router-dom'

function Services() {
  return (
    <section className="our-services" >
    <img className="right-lines" src= {img_rightlines} alt="background-lines"/>
    <div className="container">
        <div className="headline">
            <h3>Our Services</h3>
            <h2>We Provide The Best Service For Consulting</h2>
        </div>
        <div className="squares">           
            <Servicebox title="Business Advice" description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Recusandae ipsum animi dolores?" url="/services/business" />
            <Servicebox title="Startup Advice" description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Recusandae ipsum animi dolores?" url="/services/startup" backgroundColor ="startup-advice"/>
            <Servicebox title="Financial Advice" description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Recusandae ipsum animi dolores?" url="/services/financialadvices" />
            <Servicebox title="Risk Management" description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Recusandae ipsum animi dolores?" url="/services/riskmanagement" />
        </div>
          <Link className="btn-browse-services" to="/services"> <button className="btn-transparent"> Browse Services <i className="fa-regular fa-arrow-up-right"></i> </button></Link>
    </div>
 </section>
  )
}

export default Services