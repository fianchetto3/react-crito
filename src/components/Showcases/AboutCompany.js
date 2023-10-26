import React from 'react'
import img_samantha from '../../assets/images/samantha.png'
import { NavLink } from 'react-router-dom'


function AboutCompany() {
  return (
    <>
         < section className="about-company">
            <div className="container">
                <div className="samantha">
                <img src={img_samantha} alt="Founder of company"/>
                    <div className="info-box">
                        <div className="founder-name">
                            <h3>Samantha Brown, </h3> <p>Founder</p>
                        </div>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Natus nemo iusto iste perspiciatis</p>
                    </div>
                </div>
                <div className="text-box">
                    <h3>About Company</h3>
                    <h2>We Are Business Counsulting & Credit Repair Experts</h2>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam officiis quas assumenda esse obcaecati? Ex esse error voluptates iure vel totam eos.
                    </p>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Omnis esse quasi incidunt adipisci accusantium libero provident voluptate amet.</p>
                    <div className="about-company-buttons">
                        <NavLink to="*"><button className="btn-black">Learn More</button ></NavLink>  
                        <NavLink to="*"> <i className="fa-regular fa-circle-play"></i> Intro video</NavLink> 
                    </div>
                </div>
            </div>
         </section> 
    </>
  )
}

export default AboutCompany