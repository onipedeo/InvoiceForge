import { useState } from 'react'
import './App.css'
import LandingPage from './components/Landingpage'
import Page from './components/Page'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      {/* <LandingPage /> */}
      <Page />
    </>
  )
}

export default App
