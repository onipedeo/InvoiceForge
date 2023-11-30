// standard imports
import "./App.scss";
import { useState, useEffect, useContext } from "react";

// import contexts and providers
import { UseReviewAppointmentsContext } from "./components/ReviewAppointments/Context/UseReviewAppointmentsContext";
import { useUserContext } from "./contextProviders/useUserContext";

// import components
import ReviewAppointmentsModal from "./components/ReviewAppointments/ReviewAppointments";
import AppointmentContainer from "./components/AppointmentContainer";
import AlertModal from "./Modals/AlertModal";
import ClientList from "./components/ClientList";
import TopNavBar from "./components/TopNavBar";
import LandingPage from "./components/Landingpage";
import Footer from "./components/footer";
import Page from "./components/Page";

function App() {

  const handleLinkClick = (pageNumber) => {
    // adjust so that modal doesn't redirect to blank background
    if (pageNumber === 3) {
      openReviewModal();
    }
    else {
      setDisplayPage(pageNumber);
    }
  };

  // user is now retriver from the context provider
  const { user, setUser } = useUserContext();
  const { openReviewModal } = UseReviewAppointmentsContext();
  const [displayPage, setDisplayPage] = useState(0);




  //handle redirect to client list if no clients
  useEffect(() => {
    if (user) {
      fetch(`/api/user/${user.id}/clients`)
        .then((res) => res.json())
        .then((data) => {
          console.log(data);
          if (data.length === 0) {
            setDisplayPage(2);
          } else {
            setDisplayPage(1); //change 1 to your page numbet to redirect on login for debugging
          }
        })
        .catch((err) => console.log(err));
    }
  }, [user]);

  // Auto login for testing. set the userId to whichever user you want to login as:
  // 1: "Nathan"
  // 2: "Andrew"
  // 3: "Tobi"
  // 4: "Caroline"
  useEffect(() => {
    const id = 1;
    fetch(`/api/user/${id}/object`)
      .then((res) => res.json())
      .then((data) => {
        setUser(data);
      });
  }, []);




  return (
    <>
      <TopNavBar
        handleLinkClick={handleLinkClick}
      />
      <section className="page-content">
        {displayPage === 0 && <LandingPage />}

        {displayPage === 1 && <Page user={user} />}
        {displayPage === 2 && <ClientList user={user} />}
        {displayPage === 4 && (
          <AppointmentContainer user={user} />
        )}
        <ReviewAppointmentsModal setDisplayPage={setDisplayPage} />
        <AlertModal />
      </section>
      <Footer />
    </>
  );
}

export default App;
