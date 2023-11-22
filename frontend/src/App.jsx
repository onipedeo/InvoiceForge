import { useEffect, useState } from 'react'
import './App.css'
import LandingPage from './components/Landingpage'

import TopNavBar from './components/TopNavBar'
import Footer from './components/footer'
import requests from './api/requests'
function App() {
  const [user, setUser] = useState(null)

 

  return (
    <>
        {/* {user} */}
     < TopNavBar user={user} setUser={setUser}/>
      <LandingPage />
      <Footer/>

    </>
  )
}

export default App
