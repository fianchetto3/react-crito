import React from 'react'

function MessageBox() {
  return (
    
    <>
                    <section className="message-us">
                     <div className="container">
                            <div className="message-box">
                                <div className="headline"> <h2>Leave us a message for any information.</h2> </div>
                                <div className="search-bars">
                                     <form class="name-bar" action="">
                                         <input type="text" placeholder="Name*"/>
                                     </form>
                                      <form class="email-bar" action="">
                                          <input type="text" placeholder="Email*"/>
                                      </form>
                                        <form class="message-bar" action="">
                                         <input type="text" placeholder="Your Message*"/>
                                       </form>
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