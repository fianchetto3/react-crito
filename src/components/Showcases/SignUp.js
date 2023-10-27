import React from 'react'
import SearchBox from '../generics/SearchBox'
import img_lines from '../../assets/images/search-lines.svg'

function SignUp() {
  return (
    <>
        <section className="signup">
        <img className="signup-lines" src={img_lines} alt=""/>
        <div className="container">
            <div className="headline">
                <h2>Get News Updates By Signup</h2>
            </div>
            <SearchBox/> 
        </div>
     </section>
    </>
  )
}

export default SignUp