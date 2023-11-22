import AppointmentContainer from "./components/AppointmentContainer";
import { useState, useEffect } from "react";
import "./App.css";
import LandingPage from "./components/Landingpage";
import TopNavBar from "./components/TopNavBar";
import Footer from "./components/footer";


function App() {
  const [user, setUser] = useState(null);

  return (
    <>
      <TopNavBar user={user} setUser={setUser} />
      <LandingPage />
      <Footer />
      {/* <AppointmentContainer userId={user.id} standardRateCents={user.standard_rate_cents}/> */}
    </>
  );
}

export default App;
