import "./AppointmentList.scss";
import { useEffect, useState } from 'react';
// import ReviewModal from '../childComponents/ReviewModal';
import Appointment from "./Appointment/Appointment";

const AppointmentList = ({ appointments }) => {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    if (Array.isArray(appointments) && appointments.length > 0) {
      setIsLoading(false);
    }
    else {
      setIsLoading(true);
    }
  }, [appointments]);

  const Appointments = () => appointments.map((appointment) => (
    <Appointment
      key={appointment.id}
      props={{
        appointment,
      }}
    />
  ));


  return (
    <section className='list-envelope'>
      <table className="appointment-list">
        <thead className="header-row">
          <tr>
            <th>Client</th>
            <th>Notes</th>
            <th>Date</th>
            <th>Hours</th>
            <th></th>
          </tr>
        </thead>
        {!isLoading &&
          <tbody>
            {Appointments()}
          </tbody>
        }
      </table>
      {isLoading &&  <div className="spinner"></div>}
    </section>
  );
};

export default AppointmentList;
