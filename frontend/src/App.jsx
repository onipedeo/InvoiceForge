import { useState } from 'react'
import './App.css'
import LandingPage from './components/Landingpage'

import TopNavBar from './components/TopNavBar'
import Footer from './components/footer'

function App() {
  const [count, setCount] = useState(0)

  const [userData, setUserData] = useState(null);

  return (
    <>
     < TopNavBar setUserData={setUserData} userData={userData}/>
      <LandingPage />
      <Footer/>
     
    </>
  )
}

export default App
