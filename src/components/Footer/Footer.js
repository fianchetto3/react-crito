import React from 'react'
import img_footerLines from '../../assets/images/footer-lines.svg'
import img_logoWhite from '../../assets/images/Logo-white.svg'
function Footer() {
  return (

    <div className='footer'>
     
        <img className="footer-lines" src={img_footerLines} alt=""/>
        <div className="container">
                 <div className="nav-container">
                            <div className="footer-logo">
                                <img src={img_logoWhite} alt="footer logo"/>
                                <p className="logo-text">Lorem ipsum dolor sit amet consectetur adipisicing elit. Quam quo temporibus hic ex aliquam iste natus eligendi repellendus totam, numquam explicabo vitae neque sequi quidem labore quia sunt quae et.</p>
                            </div>
                        <div className="nav-wrapper">
                            <nav>
                                <ul>  
                                <p className="nav-title">Company</p>
                                     <li className="nav-items">
                                         <a href="#"> Home </a>
                                         <a href="#">Features</a>
                                         <a href="#">Works</a>
                                         <a href="#">Career</a>
                                     </li>        
                                </ul>
                            </nav>

                        </div>
                        <div className="nav-wrapper">
                            <nav>
                                <ul> 
                                        <p className="nav-title">Help</p>
                                        <li className="nav-items">
                                            <a href="#">Customer Support</a>
                                            <a href="#">Delivery Details</a>
                                            <a href="#">Terms & Conditions</a>
                                            <a href="#">Privacy Policy</a>
                                    </li>
                                </ul>
                            </nav>

                        </div>
                        <div className="nav-wrapper">
                            <nav>
                                <ul>    
                                        <p className="nav-title">Resources</p>
                                        <li className="nav-items">
                                            <a href="#">Free eBooks</a>
                                            <a href="#">Development Tutorial</a>
                                            <a href="#">How to - Blog</a>
                                            <a href="#">Youtube Playlist</a>
                                    </li>
                                </ul>
                            </nav>
                        </div>
                        <div className="nav-wrapper">
                            <nav>
                                <ul>    
                                        <p className="nav-title">Link</p>
                                        <li className="nav-items">
                                            <a href="#">Free eBooks</a>
                                            <a href="#">Development Tutorial</a>
                                            <a href="#">How to - Blog</a>
                                            <a href="#">Youtube Playlist</a>
                                    </li>
                                </ul>
                            </nav>
                            </div>
                </div>
         </div>
       <div/>
    </div>
  )
}

export default Footer