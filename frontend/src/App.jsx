import ReviewAppointments from "./components/ReviewAppointments/ReviewAppointments";
import AppointmentContainer from "./components/AppointmentContainer";
import { useState, useEffect } from "react";
import "./App.scss";
import LandingPage from "./components/Landingpage";
import TopNavBar from "./components/TopNavBar";
import Footer from "./components/footer";
import ClientList from "./components/ClientList";
import { ReviewAppointmentsProvider } from "./components/ReviewAppointments/UseReviewAppointmentsContext";

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
      <section className="page-content">
        {displayPage === 0 && <LandingPage />}
        {displayPage === 2 && <ClientList user={user} />}
        {displayPage === 3 &&
          <ReviewAppointmentsProvider user={user}>
            <ReviewAppointments setDisplayPage={setDisplayPage} />
          </ReviewAppointmentsProvider>
        }
        {displayPage === 4 && (
          <AppointmentContainer user={user} />
        )}
      </section>
      <Footer />
    </>
  );
}

export default App;
