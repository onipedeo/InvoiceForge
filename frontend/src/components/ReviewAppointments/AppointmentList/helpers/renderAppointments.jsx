import { UseReviewAppointmentsContext } from "../../Context/UseReviewAppointmentsContext";
import { useContext } from "react";
import Appointment from "../Appointment/Appointment";

export default (mode, setDisplayPage) => {
  const { state, dispatch, actions } = UseReviewAppointmentsContext();
  //get the appointments from the context based on the mode
  const appointments = mode === 'unreviewed' ? state.unreviewed : state.reviewed;


  // Make sure the appointments are not null or undefined
  if (appointments && appointments.length > 0) {
    //map the appointments to the Appointment component
    return appointments.map((appointment) => (
      <Appointment
        key={appointment.id}
        appointment={appointment}
      />
    ));
  }

  const handleOnClick = (pageNumber) => {
    setDisplayPage(pageNumber);
    dispatch({ type: actions.closeModal });
  }

  // if empty array, display a message
  if (Array.isArray(appointments) && appointments.length === 0) {
    return (
      <tr>
        <td className="text-center align-middle empty-list" colSpan="5">
          <h3>You have no {mode} appointments.</h3>
          <p> What next?</p>
          <span
            onClick={() => {handleOnClick(4)}}
            className="btn nav-btn"
          >
            Generate Invoice
          </span>
          <span
            onClick={() => handleOnClick(1)}
            className="btn nav-btn"
          >
            Schedule more appointments
          </span>

        </td>
      </tr>
    );
  }
  // if appointments is null or undefined, then display a spinner
  if (state.isLoading) {
    return (
      <tr>
        <td colSpan="5">
          <div className="spinner-border text-primary justify-content-center" role="status">
            <span className="sr-only"></span>
          </div>
        </td>
      </tr>
    );
  }

};
