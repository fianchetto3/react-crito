import React from 'react'
import img_logotpye from '../assets/images/Logo.svg'
import { NavLink, Link } from 'react-router-dom'

function Header() {
  return (
    <header>
                      <div className="header-home">
                    <div className="container">
                    <Link to="/"> <img src={img_logotpye} alt=""/></Link> 
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
                                    <NavLink to="https://facebook.com"target="_blank"><i className="fa-brands fa-facebook"></i> </NavLink>
                                    <NavLink to="https://twitter.com" target="_blank"><i className="fa-brands fa-x-twitter"></i> </NavLink>
                                    <NavLink to="https://instagram.com" target="_blank"><i className="fa-brands fa-instagram"></i></NavLink>
                                    <NavLink to="https://linkedin.com" target="_blank"><i className="fa-brands fa-linkedin"></i></NavLink>
                                </div>
                            </div>
                            <div className="main-menu">
                                <nav>
                                    <NavLink to="/">Home</NavLink>
                                    <NavLink to="/services">Services</NavLink>
                                    <NavLink to="/news">News</NavLink>
                                    <NavLink to="/contacts">Contacts</NavLink>
                                </nav>
                                <NavLink className="btn-yellow btn-login" to="login.html">Login <i className="fa-regular fa-arrow-up-right"></i></NavLink>
                            </div>
                        </div>
                    </div>
                </div>
    </header>
  )
}

export default Header