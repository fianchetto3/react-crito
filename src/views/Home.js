import React from 'react'
import Header from '../components/Header'
import Footer from '../components/Footer/Footer'
import Bottomfooter from '../components/Footer/Bottomfooter'
import Showcase from '../components/Showcases/Showcase'
import Logos from '../components/Logos'
import Features from '../components/Showcases/Features'
import AboutCompany from '../components/Showcases/AboutCompany'
import Services from '../components/Showcases/Services'
import ChooseUs from '../components/Showcases/ChooseUs'
import Projects from '../components/Showcases/Projects'
import OurTeam from '../components/Showcases/OurTeam'
import Testimonial from '../components/Showcases/Testimonial'
import ArticleCase from '../components/Showcases/ArticleCase'
import SignUp from '../components/Showcases/SignUp'

const Home = () => {
  return (
    <>
      
      <Header/>
      <main>  
          <Showcase/>
          <Logos/>
          <Features/>
          <AboutCompany/>
          <Services/>
          <ChooseUs/>
          <Projects/>
          <OurTeam/>
          <Testimonial/>
          <ArticleCase/>
          <SignUp/>
      </main> 
      <Footer/>
      <Bottomfooter/>
      
    </>
  )
}

export default Home