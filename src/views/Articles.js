import { useState } from "react"
import Bottomfooter from "../components/Footer/Bottomfooter"
import Footer from "../components/Footer/Footer"
import Header from "../components/Header"
import SignUp from "../components/Showcases/SignUp"
import PageTitle from "../components/generics/PageTitle"




// API articles

const Articles = () => {

  const [articles, setArticles] = useState([])


    const getArticles = async () => {
        const result = await fetch ('url')

        if (result.status === 200)
              setArticles(await result.json())

    }




    return (
      <>
      <Header/>
        <main>
          <PageTitle title='News & Articles' path ='News' />
          



            <SignUp/>
        </main>
        <Footer/>
        <Bottomfooter/>
      
      
      </>
  
    )
  }
  
  export default Articles