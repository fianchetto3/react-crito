import React from 'react'
import FormInput from './FormInput'

function MessageBox() {
  return (
    <>
                    <section className="message-us">
                     <div className="container">
                            <div className="message-box">
                                <div className="headline"> <h2>Leave us a message for any information.</h2> </div>
                                <div className="search-bars">
                                    <FormInput className ="name-bar" placeholder="Name*"  />
                                    <FormInput className="email-bar" placeholder="Email*" />
                                    <FormInput className="message-bar" placeholder="Message*" />
                                </div>
                                <div className="send-btn">
                                    <a href=""> <button className="btn-yellow">Send Message <i className="fa-regular fa-arrow-up-right"></i></button> </a>
                             </div>
                    </div>
                </div>
            </section>
    
    
    
    </>
  )
}

export default MessageBox