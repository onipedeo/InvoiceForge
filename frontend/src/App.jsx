import { useState } from 'react';
import './App.css';
import LandingPage from './components/Landingpage';
import SimpleAppointments from './components/SimpleAppointmets'
import InvoiceGeneratedModal from './components/InvoiceGeneratedModal'
import InvoicePreview from './components/InvoicePreview';
import { PDFViewer } from '@react-pdf/renderer';

function App() {

  return (
    <>
    {/* <PDFViewer>
      <InvoicePreview/>
    </PDFViewer> */}
      {/* <LandingPage /> */}
      <InvoiceGeneratedModal/>

      {/* <SimpleAppointments/> */}
      
    </>
  )
}

export default App
