// standard imports
import "./App.scss";
import { useState, useEffect, useContext } from "react";

// import contexts and providers
import { ReviewAppointmentsProvider, ReviewAppointmentsContext } from "./components/ReviewAppointments/Context/UseReviewAppointmentsContext";

// import components
import ReviewAppointments from "./components/ReviewAppointments/ReviewAppointments";
import AppointmentContainer from "./components/AppointmentContainer";
import AlertModal from "./components/ReviewAppointments/Modals/AlertModal";
import ClientList from "./components/ClientList";
import TopNavBar from "./components/TopNavBar";
import LandingPage from "./components/Landingpage";
import Footer from "./components/footer";
import ClientList from "./components/ClientList";
import Page from "./components/Page";

function App() {
  const handleLinkClick = (pageNumber) => {
    setDisplayPage(pageNumber);
  };

  const [user, setUser] = useState(null);
  const [displayPage, setDisplayPage] = useState(0);

  useEffect(() => {
    if (displayPage === 3) {
      ReviewAppointmentsContext.openModal = true;
      ReviewAppointmentsContext.setIsLoading = true;
    };
  }, [displayPage]);




  return (
    <>
      <TopNavBar
        user={user}
        setUser={setUser}
        handleLinkClick={handleLinkClick}
      />
      <section className="page-content">
        {displayPage === 0 && <LandingPage />}

        {displayPage === 1 && <Page user={user}/>}
      {displayPage === 2 && <ClientList user={user}  />}
        {displayPage === 3 &&

            <ReviewAppointmentsProvider user={user}>
              <ReviewAppointments setDisplayPage={setDisplayPage} />
              <AlertModal context={ReviewAppointmentsContext} />
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
