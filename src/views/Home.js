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
        
      </main> 
      
    </>
  )
}

export default Home