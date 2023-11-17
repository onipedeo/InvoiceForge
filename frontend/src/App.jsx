import { useState } from 'react'
import './App.css'
import LandingPage from './components/Landingpage'
import TopNavBar from './components/TopNavBar'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
     < TopNavBar/>
      <LandingPage />
     
    </>
  )
}

export default App
