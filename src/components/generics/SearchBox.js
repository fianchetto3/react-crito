import React from 'react'
import { Link } from 'react-router-dom'

function SearchBox() {
  return (
    <div className="search-subscribe">
    <form action="#">
        <input type="text" placeholder="username@domain.com"/>
    </form>
    <Link to="/subscribe"><button className="btn-yellow"> Subscribe <i className="fa-regular fa-arrow-up-right"></i></button></Link>
</div>
  )
}

export default SearchBox