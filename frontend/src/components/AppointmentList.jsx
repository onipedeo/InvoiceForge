const AppointmentList = ({
  reviewedAppointments,
  handleAppointmentCheck,
  checkedAppointments,
}) => {
  const appointmentList = reviewedAppointments.map((appointment) => (
    <tr key={appointment.id} className="appointment-list-item">
      <td>{appointment.notes}</td>
      <td>{appointment.date}</td>
      <td>{appointment.confirmedHours} hours</td>
      <td>
        <input
          type="checkbox"
          checked={checkedAppointments.includes(appointment.id)}
          onChange={() => handleAppointmentCheck(appointment.id)}
        />
      </td>
    </tr>
  ));

  return (
    <div>
      <table className="appointment-list">
        <thead>
          <tr>
            <th>Appointment</th>
            <th>Date</th>
            <th>Hours</th>
            <th>Checkbox</th>
          </tr>
        </thead>
        <tbody>{appointmentList}</tbody>
      </table>
    </div>
  );
};

export default AppointmentList;
