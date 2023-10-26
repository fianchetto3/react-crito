import React from 'react'
import { NavLink } from 'react-router-dom'

function Bottomfooter() {
  return (
    <footer className='bottom-footer'>
          <div className="container">
            <div className="copy-right-text">
                <p>© 2023 Crito - Consulting Company Inc. All Rights Reserved. </p>
            </div>
            <div className="footer-social-media">
                <NavLink to="https://facebook.com"target="_blank"><i className="fa-brands fa-facebook"></i> </NavLink>
                <NavLink to="https://twitter.com" target="_blank"><i className="fa-brands fa-x-twitter"></i> </NavLink>
                <NavLink to="https://instagram.com" target="_blank"><i className="fa-brands fa-instagram"></i></NavLink>
                <NavLink to="https://linkedin.com" target="_blank"><i className="fa-brands fa-linkedin"></i></NavLink>
            </div>
        </div>



    </footer>
  )
}

export default Bottomfooter