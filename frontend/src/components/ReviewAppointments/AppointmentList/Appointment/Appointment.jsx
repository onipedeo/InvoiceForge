import { useState, useContext, useEffect } from 'react';
import { ReviewAppointmentsContext, actions } from '../../Context/UseReviewAppointmentsContext';
import moment from 'moment';
import './Appointment.scss';
import { FaCheck } from 'react-icons/fa';
import requests from '../../../../api/requests';

const Appointment = ({ appointment }) => {
  const { state, dispatch } = useContext(ReviewAppointmentsContext);
  const [hours, setHours] = useState(0);
  const increment = () => setHours(prevValue => ++prevValue);
  const decrement = () => setHours(prevValue => --prevValue);

  // Extract values from the appointment prop
  const { confirmedHours, date, client, notes, startTime, endTime, id } = appointment;
  const [refresh, setRefresh] = useState(false);
  useEffect(() => {
    if (refresh) setRefresh(false);
  }, [refresh]);

  useEffect(() => {
    if (typeof appointment === 'object' && Object.keys(appointment).length > 0) {
      if (confirmedHours) {
        const { startTime, endTime } = appointment;
        const estimatedHours = moment.duration(moment(endTime, "HH:mm:ss").diff(moment(startTime, "HH:mm:ss"))).asHours();
        const roundedEstimatedHours = Math.round(estimatedHours / 0.25) * 0.25;
        setHours(roundedEstimatedHours);
      }
    }
  }, [appointment]);

  const handleUpdate = () => {
    dispatch({ type: actions.setIsLoading, payload: true });
    const formObject = {
      ...appointment,
      confirmedHours: hours,
      clientId: appointment.client.id,
    };

    requests.update.appointment(id, formObject).then(() => {
      dispatch({ type: actions.moveToReviewed, payload: formObject });
      setRefresh(true);
    }).catch((e) => {
      console.log(e);
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
