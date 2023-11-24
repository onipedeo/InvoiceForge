import AppointmentContainer from "./components/AppointmentContainer";
import { useState, useEffect } from "react";
import "./App.css";
import LandingPage from "./components/Landingpage";
import TopNavBar from "./components/TopNavBar";
import Footer from "./components/footer";
import ClientList from "./components/ClientList";
import Page from "./components/Page";

function App() {
  const handleLinkClick = (pageNumber) => {
    setDisplayPage(pageNumber);
  };


  const [user, setUser] = useState(null);
  const [displayPage, setDisplayPage] = useState(0);




  return (
    <>

      <TopNavBar
        user={user}
        setUser={setUser}
        handleLinkClick={handleLinkClick}
      />
      {displayPage === 0 && <LandingPage />}
      {displayPage === 1 && <Page />}
      {displayPage === 2 && <ClientList user={user} />}
      {displayPage === 4 && (
        <AppointmentContainer user={user} />
      )}
      <Footer />

    </>
  );
}

export default App;
