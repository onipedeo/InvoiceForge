import { useState } from 'react'
import './App.css'
import LandingPage from './components/Landingpage'
import TopNavBar from './components/TopNavBar'
import Footer from './components/footer'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
     < TopNavBar/>
      <LandingPage />
      <Footer/>
     
    </>
  )
}

export default App
