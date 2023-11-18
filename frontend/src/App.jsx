import AppointmentContainer from "./components/AppointmentContainer";
import { useState, useEffect } from "react";
import "./App.css";
import LandingPage from "./components/Landingpage";
import TopNavBar from "./components/TopNavBar";
import Footer from "./components/footer";
import ClientList from "./components/ClientList";

function App() {
  const handleLinkClick = (pageNumber) => {
    setDisplayPage(pageNumber);
  };


  const [user, setUser] = useState(null);
  const [displayPage, setDisplayPage] = useState(0);




  return (
    <>
      {/* <LandingPage /> */}
      <Page />
    </>
  );
}

export default App;
