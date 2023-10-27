import React from 'react'
import { Link } from 'react-router-dom'
import TeamBox from '../Toolboxes/TeamBox'
import Dots from '../generics/Dots'

function OurTeam() {
  return (

    <>
     <section className="team-members">
        <div className="container">
            <div className="headline">
                <div className="title">
                    <h3>Meet Our Team</h3>
                    <h2>Experience Team Members</h2>
                </div>
                <div className="browse-team">
                    <Link to="/services/team"><button className="btn-yellow">Browse Team <i className="fa-regular fa-arrow-up-right"></i></button></Link>
                </div>
            </div>
            <div className="members">
                    <TeamBox name='Kristine Palmer' title='Chef Operation Officer' />
                    <TeamBox name='Mark Aburi' title='Senior Consultant' />
                    <TeamBox name='Kimberly Hansen' title='Senior Consultant' />
                    <TeamBox name='Justin Willoman' title='Senior Tech Consultant' />
            </div>
             <Dots/>
        </div>
     </section>
    
    
    
    
    </>
        

  )
}

export default OurTeam