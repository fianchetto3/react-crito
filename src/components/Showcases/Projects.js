import React from 'react'

import ArticleBox from '../Toolboxes/ArticleBox'
import { Link } from 'react-router-dom'

export default function Projects() {
  return (
    <>
        <section className="projects">
        <div className="container">
            <div className="title">
                <h3>Project & Cases Studies</h3>
                <h2>Let's Looks Our Global Projects</h2>
            </div>
            <div className="project-and-cases">

                    <ArticleBox title="Grow your Business" url="/readmore"/>
                    <ArticleBox title="Why your client needs a responsive website" url="/readmore"/>
                    <ArticleBox title="Educate your employees to get better results" url="/readmore"/>
                    <ArticleBox title="Business Insights is a important piece of your business" url="/readmore"/>
  
            </div>
             <div className="project-btn">
                 <Link to="/projects"><button className="btn-black"> All Recent Projects <i className="fa-regular fa-arrow-up-right"></i></button></Link>
             </div>   
        </div>
     </section>
    </>
  )
}
