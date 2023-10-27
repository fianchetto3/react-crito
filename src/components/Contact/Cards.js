import React from 'react'
import Card from '../Toolboxes/Card'

function Cards() {
  return (
    <>
        <section  className="info-cards">
            <div className="container">
                <div className="cards">
                     <Card className="visit" title="Visit Us" description="Sveavägen 31" info="111 34 STOCKHOLM" />   
                     <Card className="call" title="Call Us" description="+46 (8) 121 470 50" info="+46 (8) 121 470 51" />   
                     <Card className="email" title="Email Us" description="info@crito.com" info="support@crito.com" />   
                    </div>
                </div>
        </section>
        
    </>
  )
}

export default Cards