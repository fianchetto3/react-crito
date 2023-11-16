import React, { useState } from 'react'

function MessageBox() {
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [message, setMessage] = useState('')
  const [errorMessage, setErrorMessage ] = useState ('')
  const [validationErrorName, setvalidationErrorName] = useState ('')
  const [validationErrorEmail, setvalidationErrorEmail ] = useState ('')
  const [validationErrorSend, setvalidationErrorSend] = useState ('')


 
    const handleSubmit = async (e) => {
      e.preventDefault()
      setErrorMessage('')

      
      // Checkar validering, om rätt, anropa API annars anropas de ej 
      if (validateForm()){

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
              alert('Message sent')
              break
          case 400:
            setErrorMessage('Something went Wrong, Check your details')
            break
          }
        }

    }

    const clearForm = () => {
      setName ('')
      setEmail ('')
      setMessage ('')
    }

    const clearNameEmail = () => {
      setName ('')
      setEmail ('')
    }

      // Validerar, kräver att fälten måste ha ett värde för attt kunna skickas
    
    function validateForm (){
      let isValid = true;

      if (name.length == 0){
        setvalidationErrorName('You must Enter A Name')
        clearNameEmail ()
        isValid = false;
      }

      if (email.length == 0){
        setvalidationErrorEmail('You must Enter an Email')
        clearNameEmail()
        isValid = false;
      }
      if (message.length == 0){
        setvalidationErrorSend ('You must type a Message')
        isValid = false;
      }

       return isValid;
      

    }

    

  return (
  
    <>
      <form onSubmit={handleSubmit} noValidate className="message-us">
        <div className="container">
            <div className="message-box">
                 <div className="headline"> <h2>Leave us a message for any information.</h2> </div>
                 <p className='error-message'> {errorMessage} </p>

                     <div className="search-bars">
                      <p className='validation-error-message'> {validationErrorName} </p>
                        <label className="name-bar" action="">
                        <input type="text" placeholder="Name*" value={name} onChange={(e) => setName(e.target.value) } />
                        </label>
                        <p className='validation-error-message' > {validationErrorEmail} </p>
                        <label className="email-bar" action="">
                        <input type="email" placeholder="Email*"  value={email} onChange={(e) => setEmail(e.target.value) }  />
                        </label>
                        <p className='validation-error-message'  > {validationErrorSend} </p>
                        <label className="message-bar" action="">
                        <input type="text" placeholder="Your Message*"  value={message} onChange={(e) => setMessage(e.target.value) } />
                         </label>
                       </div>

                       <div className="send-btn">
                       <button type="submit" onClick={() => { validateForm() }}  className="btn-yellow">Send Message <i className="fa-regular fa-arrow-up-right"></i></button> 
                       </div>
              </div>
           </div>
       </form>
    
    
    
    </>
  )
}

export default MessageBox