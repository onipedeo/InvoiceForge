import { useEffect, useState } from 'react'
import './App.css'
import LandingPage from './components/Landingpage'

import TopNavBar from './components/TopNavBar'
import Footer from './components/footer'
import requests from './api/requests'
function App() {
  const [user, setUser] = useState(0)

  useEffect(() =>  {
    //example how to use the api
    const email = "nathanwilespainting@gmail.com"

     requests
      .get
      .idByEmail(email).then((user) => {
        console.log(user)
        setUser(user.id)
      });


  },[])
  return (
    <>
        {user}
     < TopNavBar/>
      <LandingPage />
      <Footer/>

    </>
  )
}

export default App
