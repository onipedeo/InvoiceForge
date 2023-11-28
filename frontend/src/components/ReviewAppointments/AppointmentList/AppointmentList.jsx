import { useEffect, useState, useContext } from 'react';
import Appointment from "./Appointment/Appointment";
import "./AppointmentList.scss";
import { ReviewAppointmentsContext } from '../Context/UseReviewAppointmentsContext';
import renderAppointments from './helpers/renderAppointments';

const AppointmentList = ({ mode }) => {
  const { state, dispatch, actions } = useContext(ReviewAppointmentsContext);
  //get the appointments from the context based on the mode
  const appointments = mode === 'unreviewed' ? state.unreviewed : state.reviewed;

  useEffect(() => {
    const timeout = setInterval(() => {
      //if the appointments are not null or undefined, then we can set loading to false and clear the interval
      if (appointments !== null && appointments !== undefined) {
        dispatch({ type: actions.setIsLoading, payload: false });
        clearInterval(timeout);
      }
    }, 2000);
    return () => clearInterval(timeout);
  }, [appointments, dispatch]);

  // function to render the appointments
  const componentAppointments = () => {
    // check if appointments is null or undefined.
    if (appointments !== null && appointments !== undefined && appointments.length > 0) {
      // if not, then map the appointments to the Appointment component
      return appointments.map((appointment) => (
        <Appointment
          key={appointment.id}
          appointment={appointment}
        />
      ));
      // if empty array, display a message
    }
    if (Array.isArray(appointments) && appointments.length === 0) {
      return (
        <tr>
          <td className="text-center align-middle" colSpan="5">
            <h3>You have no {mode} appointments.</h3>
            <p> What next?</p>
            <span className="btn btn-primary">Generate Invoice</span>
            <p>Or</p>
            <span className="btn btn-primary">Schedule more appointments</span>


          </td>
        </tr>
      );
    }
    // if appointments is null or undefined, then display a spinner
    return (
      <tr>
        {state.isLoading && (
          <div className="spinner-border text-primary" role="status">
            <span className="sr-only">Loading...</span>
          </div>
        )}
        <td colSpan="5">Loading...</td>
      </tr>
    );
  };

  return (
    <>
      <table className="table table-striped">
        <thead className="thead-dark">
          <tr>
            <th>Client</th>
            <th>Notes</th>
            <th>Date</th>
            <th>Hours</th>
            <th></th>
          </tr>
        </thead>
        <tbody>
          {componentAppointments()}
        </tbody>
      </table>
      {state.isLoading && (
        <div className="spinner-border text-primary" role="status">
          <span className="sr-only">Loading...</span>
        </div>
      )}
    </>
  );
};

export default AppointmentList;
