import { useState, useContext, useEffect } from 'react';
import { ReviewAppointmentsContext, actions } from '../../Context/UseReviewAppointmentsContext';
import moment from 'moment';
import './Appointment.scss';
import { FaCheck } from 'react-icons/fa';
import request from '../../../../api/requests';

const Appointment = ({ appointment }) => {
  const { state, dispatch } = useContext(ReviewAppointmentsContext);
  const [hours, setHours] = useState(0);
  const increment = () => setHours(prevValue => ++prevValue);
  const decrement = () => setHours(prevValue => --prevValue);

  // Extract values from the appointment prop
  const { confirmedHours, date, client, notes, startTime, endTime, id } = appointment;

  // helper for setting loading state
  const setloading = (bool) => {
    dispatch({ type: actions.setIsLoading, payload: bool });
  }


  // Set the hours to the confirmed hours if they exist
  useEffect(() => {
    if (typeof appointment === 'object') {
      if (confirmedHours === null || confirmedHours === undefined) {
        const { startTime, endTime } = appointment;
        const estimatedHours = moment.duration(moment(endTime, "HH:mm:ss").diff(moment(startTime, "HH:mm:ss"))).asHours();
        const roundedEstimatedHours = Math.round(estimatedHours / 0.25) * 0.25;
        setHours(roundedEstimatedHours);
        console.log(roundedEstimatedHours);
      }
    }
  }, [appointment]);

  // Handle updating the appointment
  const handleUpdate = () => {

    setloading(true);

    request.update.confirmHours(id, hours).then((res) => {
      // If the response is not 200, throw an error
      if (res.status !== 200) {
        setloading(false);
        throw new Error("Error updating appointment");
      }
      // set the appointment to reviewed
      dispatch({ type: actions.moveToReviewed, payload: formObject });

    }).catch((e) => {
      // Set the error message and open the alert
      setloading(false);
      dispatch({ type: actions.setErrMessage, payload: "Sorry, there was an issue updating your appointment" });
      dispatch({ type: actions.openAlert });
    });
  };

  return (
    <tr key={id} className="appointment-list-item">
      <td>{client.name}</td>
      <td>{date}</td>
      <td>{notes}</td>
      <td className='col-auto'>{
        confirmedHours ||
        <input type="number" className='number-input' name="confirmedHours" min="0.25" step="0.25" value={hours} onChange={(e) => {
          setHours(e.target.value);
        }} />
      }</td>
      <td>
        <button
          className="btn check-btn"
          onClick={
            () => {
              handleUpdate();
            }
          }
        >
          <FaCheck />
        </button>
      </td>
    </tr>
  );
};

export default Appointment;
