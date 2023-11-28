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
  const componentAppointments = renderAppointments(mode);

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
          {componentAppointments}
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
