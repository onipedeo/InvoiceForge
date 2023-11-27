import { useState, useContext, useEffect } from 'react';
import { ReviewAppointmentsContext, actions } from '../../Context/UseReviewAppointmentsContext';
import moment from 'moment';

const Appointment = ({ appointment }) => {
  const { state, dispatch } = useContext(ReviewAppointmentsContext);
  const [hours, setHours] = useState(0);
  const increment = () => setHours(prevValue => ++prevValue);
  const decrement = () => setHours(prevValue => --prevValue);

  // Extract values from the appointment prop
  const { confirmedHours, date, client, client: { id: client_id }, startTime, endTime, id } = appointment;

  useEffect(() => {
    if (typeof appointment === 'object' && Object.keys(appointment).length > 0) {
      if (appointment.confirmedHours) {
        setHours(appointment.confirmedHours);
      } else {
        const { startTime, endTime } = appointment;
        const estimatedHours = moment.duration(moment(endTime, "HH:mm:ss").diff(moment(startTime, "HH:mm:ss"))).asHours();
        const roundedEstimatedHours = Math.round(estimatedHours / 0.25) * 0.25;
        setHours(roundedEstimatedHours);
      }
    }
  }, [appointment]);

  return (
    <tr key={id} className="appointment-list-item">
      <td>{client.name}</td>
      <td>{date}</td>
      <td>{startTime}</td>
      <td>{endTime}</td>
      <td className='col-auto'>{
        confirmedHours ||
        <input type="number" className='number-input' name="confirmedHours" min="0.25" step="0.25" value={hours} onChange={(e) => {
          setHours(e.target.value);
        }} />
      }</td>
      <td>
        <button
          onClick={
            () => {
              dispatch({ type: actions.setIsLoading, payload: true });
              dispatch({ type: actions.moveToReviewed, payload: { formData } });

            }
          }
        >
          confirm
        </button>
      </td>
    </tr>
  );
};

export default Appointment;
