

import './App.css';

import SimpleAppointments from './components/SimpleAppointmets'
import InvoiceGeneratedModal from './components/InvoiceGeneratedModal'
import InvoicePreview from './components/InvoicePreview';
import { PDFViewer } from '@react-pdf/renderer';

import { useState } from 'react'
import './App.css'
import LandingPage from './components/Landingpage'

import TopNavBar from './components/TopNavBar'


import Footer from './components/footer'



function App() {

  return (
    <>

    {/* <PDFViewer>
      <InvoicePreview/>
    </PDFViewer> */}
      {/* <LandingPage /> */}
      <InvoiceGeneratedModal/>

      {/* <SimpleAppointments/> */}
      

     < TopNavBar/>
      <LandingPage />
      <Footer/>
     

    </>
  )
}

export default App
