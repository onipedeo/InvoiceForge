import SimpleAppointments from "./components/SimpleAppointmets";
import { useState, useEffect } from "react";
import "./App.css";
import LandingPage from "./components/Landingpage";
import requests from './api/requests'

import TopNavBar from './components/TopNavBar'
import Footer from './components/footer'

function App() {
  const [user, setUser] = useState(0);
  useEffect(() =>  {
    //example how to use the api
    const email = "nathanwilespainting@gmail.com"

     requests
      .get
      .idByEmail(email).then((userData) => {
        setUser(userData.user.id)
      });
  },[]);


  return (
    <>
      {user}
      {/* <TopNavBar />
      <LandingPage />
      <Footer /> */}
      <SimpleAppointments/>

    </>
  );
}

export default App;