import React from 'react'
import Advicebox from '../Toolboxes/Advicebox'

function Features() {
  return (

    <>
        <section className='showcase-features'>   
            <div className="container">
                      <div className="features">
                       <p>Features</p>
                        <h2>Our Accounting is trusted by thousand of companies</h2>
                        <a className="btn-yellow" href="#">Learn More<i className="fa-regular fa-arrow-up-right"></i></a>
                     </div>
              
                    <div className="Advice-container">
                        <Advicebox title="Business Advice" description="Lorem ipsum, dolor sit amet consectetur adipisicing elit."   />
                        <Advicebox title="Startup Business" description="Lorem ipsum, dolor sit amet consectetur adipisicing elit."   />
                        <Advicebox title="Finiacial Advice" description="Lorem ipsum, dolor sit amet consectetur adipisicing elit."   />
                        <Advicebox title="Risk Management" description="Lorem ipsum, dolor sit amet consectetur adipisicing elit."   />
                    </div>
            </div>
        </section>

        </>
    
  )
}

export default Features