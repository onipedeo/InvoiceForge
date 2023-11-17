import { useState } from 'react';
import './App.css';
import LandingPage from './components/Landingpage';
import SimpleAppointments from './components/SimpleAppointmets'
// import InvoiceGeneratedModal from './components/InvoiceGeneratedModal'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <LandingPage />
      {/* <InvoiceGeneratedModal/> */}
      <SimpleAppointments/>
    </>
  )
}

export default App
