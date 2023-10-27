import React from 'react'
import Reviews from '../Toolboxes/Reviews'
import { Link } from 'react-router-dom'

function Testimonial() {
  return (
    <section className="testimonial">
    <div className="container">
        <div className="headline">
            <h3>Testimonial</h3>
            <h2>What Our Client Says</h2>
        </div>
       <div className="reviews">
            <Reviews name="Cassandra Warren" title="Bussnies Manager, Dorufs" description="Lorem ipsum dolor sit amet consectetur, adipisicing elit. Fugit nam error voluptates ducimus sit impedit inventore repellat harum exercitationem? Est totam labore facilis. Nostrum dignissimos aut minus ex amet earum.!" />
            <Reviews name="Amanda Tulling" title="Senior Developer, Square" description="Lorem ipsum dolor sit amet consectetur, adipisicing elit. Fugit nam error voluptates ducimus sit impedit inventore repellat harum exercitationem? Est totam labore facilis. Nostrum dignissimos aut minus ex amet earum.!" />
            <Reviews name="Jack McDogglas" title="Key Account Manager, Gobona" description="Lorem ipsum dolor sit amet consectetur, adipisicing elit. Fugit nam error voluptates ducimus sit impedit inventore repellat harum exercitationem? Est totam labore facilis. Nostrum dignissimos aut minus ex amet earum.!" />
      </div>
      <div className="review-button">
          <Link to="/reviews">
            <button className="btn-black"> All Reviews <i className="fa-regular fa-arrow-up-right"></i></button>
        </Link>
      </div>
    </div>
 </section>
  )
}

export default Testimonial