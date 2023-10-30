import React from 'react'

function Iframe() {
  return (
    <>
         <section className="map">
            <div className="map-img">
            <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d4069.615567075767!2d18.056175840458852!3d59.336162909152456!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x465f9d6799554e87%3A0x6562d2c842903003!2sSveav%C3%A4gen%2031%2C%20111%2034%20Stockholm!5e0!3m2!1ssv!2sse!4v1695125237005!5m2!1ssv!2sse" 
            width="600" height="450"  allowFullScreen='' loading="lazy" referrerPolicy="no-referrer-when-downgrade"></iframe>
            </div>
         </section>
    </>
    
  )
}

export default Iframe