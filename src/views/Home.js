import React from 'react'
import Header from '../components/Header'
import Footer from '../components/Footer/Footer'
import Bottomfooter from '../components/Footer/Bottomfooter'
import Showcase from '../components/Showcases/Showcase'
import Logos from '../components/Logos'
import Features from '../components/Showcases/Features'
import AboutCompany from '../components/Showcases/AboutCompany'

const Home = () => {
  return (
    <>
      
      <Header/>
      <main>  
          <Showcase/>
          <Logos/>
          <Features/>
          <AboutCompany/>
        
      </main> 
      
    </>
  )
}

export default Home