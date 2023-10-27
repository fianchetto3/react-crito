import React from 'react'
import Dots from '../generics/Dots'
import NewsBox from '../Toolboxes/NewsBox'
import { Link } from 'react-router-dom'

function ArticleCase() {
  return (
    <>
         <section className="article-news">
        <div className="container">
            <div className="headline">
                <div className="title">
                    <h3>Article & News</h3>
                    <h2>Get Every Single Articles & News</h2>
                </div>
                <div className="browse-team">
                    <Link to="/news">
                        <button className="btn-transparent">Browse Articles <i className="fa-regular fa-arrow-up-right"></i></button>
                    </Link>
                </div>
            </div>
            <div className="article-grid-news">
                <NewsBox title="How To Use Digitalization In The Classroom" description="Lorem, ipsum dolor sit amet consectetur adipisicing elit. Architecto sed hic libero." />
                <NewsBox title="How To Implement Chat GPT In Your Projects" description="Lorem, ipsum dolor sit amet consectetur adipisicing elit. Architecto sed hic libero." />
                <NewsBox title="The Guide To Support Modern CSS Design" description="Lorem, ipsum dolor sit amet consectetur adipisicing elit. Architecto sed hic libero." />
            </div>
              <Dots/>
        </div>
     </section>
    
    </>
  )
}

export default ArticleCase