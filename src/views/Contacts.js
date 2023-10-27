import React from 'react'
import Header from '../components/Header'
import Footer from '../components/Footer/Footer'
import Bottomfooter from '../components/Footer/Bottomfooter'
import PageTitle from '../components/generics/PageTitle'
import Cards from '../components/Contact/Cards'
import MessageBox from '../components/Contact/MessageBox'
import Map from '../components/Contact/Map'


const Contacts = () => {
  return (
    <>
    <Header/>
      <main>
        <PageTitle title='Lets Connect' path ='Contact' />
        <Cards/>
        <MessageBox/>
        <Map/>
      </main>
      <Footer/>
      <Bottomfooter/>
    
    
    </>

  )
}

export default Contacts