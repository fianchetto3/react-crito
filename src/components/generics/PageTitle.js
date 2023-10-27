import React from 'react'
import img_lines from '../../assets/images/background-lines.svg'
function PageTitle( {title, path} ) {
  return (
    <>
          <section className="headline-connect">
         <img className="connect-lines" src={img_lines} alt=""/>
         <div className="container">
            <div className="headline">  
                <div className="home-contact">
                <p>Home</p>
                <p> {path} </p>
                </div>
                <h2>
                    {title}
                </h2>
            </div>
        </div>
    </section>
    
    </>
  )
}

export default PageTitle