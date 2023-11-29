import { ReviewAppointmentsContext } from "../../Context/UseReviewAppointmentsContext";
import { useContext } from "react";
import Appointment from "../Appointment/Appointment";

export default (mode, setDisplayPage) => {
  const { state, dispatch, actions } = useContext(ReviewAppointmentsContext);
  //get the appointments from the context based on the mode
  const appointments = mode === 'unreviewed' ? state.unreviewed : state.reviewed;


  // Make sure the appointments are not null or undefined
  if (appointments !== null && appointments !== undefined && appointments.length > 0) {
    //map the appointments to the Appointment component
    return appointments.map((appointment) => (
      <Appointment
        key={appointment.id}
        appointment={appointment}
      />
    ));
  }

  // if empty array, display a message
  if (Array.isArray(appointments) && appointments.length === 0) {
    return (
      <tr>
        <td className="text-center align-middle" colSpan="5">
          <h3>You have no {mode} appointments.</h3>
          <p> What next?</p>
          <span
            onClick={() => setDisplayPage(4)}
            className="btn btn-primary"
          >
            Generate Invoice
          </span>
          <p>Or</p>
          <span
            onClick={() => setDisplayPage(0)}
            className="btn btn-primary"
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
