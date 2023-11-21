import SimpleAppointments from "./components/SimpleAppointmets";
import { useState } from "react";
import "./App.css";
import LandingPage from "./components/Landingpage";

import TopNavBar from "./components/TopNavBar";
import Footer from "./components/footer";

function App() {
  return (
    <>
      {/* <TopNavBar />
      <LandingPage />
      <Footer /> */}
      <SimpleAppointments/>
    </>
  );
}

export default App;