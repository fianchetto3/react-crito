import Bottomfooter from "../components/Footer/Bottomfooter"
import Footer from "../components/Footer/Footer"
import Header from "../components/Header"
import SignUp from "../components/Showcases/SignUp"
import PageTitle from "../components/generics/PageTitle"




const Articles = () => {
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