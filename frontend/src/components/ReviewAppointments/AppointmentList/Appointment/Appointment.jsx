import { useState, useContext, useEffect } from 'react';
import './Appointment.scss';
import { ReviewAppointmentsContext, actions } from '../../UseReviewAppointmentsContext';
import moment from 'moment';

const Appointment = ({ appointment }) => {
  const { state, dispatch } = useContext(ReviewAppointmentsContext);

  const [hours, setHours] = useState(0);
  const increment = () => setHours(prevValue => ++prevValue);
  const decrement = () => setHours(prevValue => --prevValue);
  let confirmedHours;
  let date;
  let clientName;
  let notes;
  let id;



  useEffect(() => {
    if (typeof appointment === 'object') {
      if (appointment.confirmedHours) {
        setHours(appointment.confirmedHours);

      }
      else {
        const { startTime, endTime } = appointment;
        const estimatedHours = moment(endTime).diff(moment(startTime), 'hours');
        const roundedEstimatedHours = Math.round(estimatedHours / 0.25) * 0.25;
        setHours(roundedEstimatedHours);
      }
    }
  }, [appointment]);
  return (
    <tr key={id} className="appointment-list-item">
      <td>{clientName}</td>
      <td>{notes}</td>
      <td>{date}</td>
      <td>{
        confirmedHours ||
        <div className="hours-input">
          <input type="number" value={hours} onChange={(e) => {
            setHours(e.target.value);
          }} />
        </div>
      }</td>
      <td>
        <button
          onClick={
            () => {
              dispatch({ type: actions.moveToReviewed, payload: appointment });
            }
          }
        >
          <i className="fas fa-clock icon-white"></i>
        </button>
      </td>
    </tr>
  );
};


export default Appointment;
