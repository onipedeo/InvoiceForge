import AppointmentContainer from "./components/AppointmentContainer";
import { useState, useEffect } from "react";
import "./App.css";
import LandingPage from "./components/Landingpage";
import requests from './api/requests'

import TopNavBar from './components/TopNavBar'
import Footer from './components/footer'

function App() {
  const [userId, setUserId] = useState(1);
  const [standardRateCents, setStandardRateCents] = useState(4000)

  
  return (
    <>
      <TopNavBar />
      <LandingPage />
      <Footer />

    </>
  );
}

export default App;