import { useEffect, useState, useContext } from 'react';
import Appointment from "./Appointment/Appointment";
import "./AppointmentList.scss";
import { ReviewAppointmentsContext } from '../Context/UseReviewAppointmentsContext';

const AppointmentList = ({ mode }) => {
  const { state, dispatch, actions } = useContext(ReviewAppointmentsContext);
  //get the appointments from the context based on the mode
  const appointments = mode === 'unreviewed' ? state.unreviewed : state.reviewed;

  useEffect(() => {
    const timeout = setInterval(() => {
      //if the appointments are not null or undefined, then we can stop the loading spinner
      if (appointments !== null && appointments !== undefined) {
        dispatch({ type: actions.setIsLoading, payload: false });
        clearInterval(timeout);
      }
    }, 2000);
    return () => clearInterval(timeout);
  }, [appointments, dispatch]);

  const componentAppointments = () => {
    if (appointments !== null && appointments !== undefined && appointments.length > 0) {
      return appointments.map((appointment) => (
        <Appointment
          key={appointment.id}
          appointment={appointment}
        />
      ));
    } else {
      return (
        <tr>
          <td colSpan="5">Up to date, nothing to see here.</td>
        </tr>
      );
    }
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
