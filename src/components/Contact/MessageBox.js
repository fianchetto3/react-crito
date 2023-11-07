import React, { useState } from 'react'

function MessageBox() {
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [message, setMessage] = useState('')
  const [errorMessage, setErrorMessage ] = useState ('')
 
    const handleSubmit = async (e) => {
      e.preventDefault()
      setErrorMessage('')

        const user = {name, email, message}
        const json = JSON.stringify(user)
        
        const result = await fetch( 'https://win23-assignment.azurewebsites.net/api/contactform', {
          method:'post',
          headers: {
            'content-type' : 'application/json'
          },
          body: json
        } )

     

        switch (result.status){
          case 200:
            clearForm()
              alert('Meddelandet Skickades')
              break
          case 400:
            setErrorMessage('Något gick snett, Kontrollera dina uppgifter')
            
            break
        }

    }

    const clearForm = () => {
      setName ('')
      setEmail ('')
      setMessage ('')
    }

  return (
  
    <>
      <form onSubmit={handleSubmit} noValidate className="message-us">
        <div className="container">
            <div className="message-box">
                 <div className="headline"> <h2>Leave us a message for any information.</h2> </div>
                 <p className='error-message'> {errorMessage} </p>

                     <div className="search-bars">
                        <label className="name-bar" action="">
                        <input type="text" placeholder="Name*" value={name} onChange={(e) => setName(e.target.value) } />
                        </label>

                        <label className="email-bar" action="">
                        <input type="email" placeholder="Email*"  value={email} onChange={(e) => setEmail(e.target.value) }  />
                        </label>

                        <label className="message-bar" action="">
                        <input type="text" placeholder="Your Message*"  value={message} onChange={(e) => setMessage(e.target.value) } />
                         </label>
                       </div>

                       <div className="send-btn">
                       <button className="btn-yellow">Send Message <i className="fa-regular fa-arrow-up-right"></i></button> 
                       </div>
              </div>
           </div>
       </form>
    
    
    
    </>
  )
}

export default MessageBox