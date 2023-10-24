import './NavSection.css'
import React from 'react'
import img_logo from '../../assets/images/Logo.svg'

const NavSection = () => {
  return (
    <section className="header-home">
    <div className="container">
       <a href="index.html"> <img src={img_logo} alt="" /> </a> 
        <div className="menu">
            <div className="top-menu">
                <div className="contact-info">    
                   <div className="content-box">
                    <i className="fa-solid fa-phone-volume"></i>
                      +46 (8) 121 470 50
                   </div> 
                   <div className="content-box">
                    <i className="fa-regular fa-envelope"></i>
                      info@crito.com
                   </div> 
                   <div className="content-box last">
                    <i className="fa-regular fa-location-dot"></i>
                      Sveavägen 31,111 35 STOCKHOLM 
                   </div> 
                </div>
                <div className="social-media">  
                    <a href="https://facebook.com"target="_blank"><i className="fa-brands fa-facebook"></i> </a>
                    <a href="https://twitter.com" target="_blank"><i className="fa-brands fa-x-twitter"></i> </a>
                    <a href="https://instagram.com" target="_blank"><i className="fa-brands fa-instagram"></i></a>
                    <a href="https://linkedin.com" target="_blank"><i className="fa-brands fa-linkedin"></i></a>
                </div>
            </div>
            <div className="main-menu">
                <nav>
                    <a className="active" href="index.html">Home</a>
                    <a href="services.html">Service</a>
                    <a href="news.html">News</a>
                    <a href="contacts.html">Contact</a>
                </nav>
                <a className="btn-yellow btn-login" href="login.html">Login <i className="fa-regular fa-arrow-up-right"></i></a>
            </div>
        </div>
    </div>
</section>
  )
}

export default NavSection