import React from 'react'

function FormInput( {className , placeholder} ) {
  return (
    <>
<       form className={className} action="">
         <input type="text" placeholder={placeholder} />
         </form>
    </>
  )
}

export default FormInput