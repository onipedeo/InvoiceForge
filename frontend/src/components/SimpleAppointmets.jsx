import React, { useState } from "react";
import "../styles/SimpleAppointments.scss"; // Import your CSS file for styling

const appointments = [
  { id: 1, appointment: "Tap repair", date: "2023-11-10", hours: 2 },
  { id: 2, appointment: "Light fix", date: "2023-11-22", hours: 4 },
  { id: 3, appointment: "Groceries Shopping", date: "2023-10-10", hours: 1 },
  { id: 4, appointment: "Doctor's Appointment", date: "2024-01-2", hours: 4.5 },
  { id: 5, appointment: "Go to the movies", date: "2024-02-03", hours: 6 },
];

const SimpleAppointments = () => {
  const [checkedAppointments, setCheckedAppointments] = useState([]);

  const handleAppointmentCheck = (id) => {
    setCheckedAppointments((checkedAppointments) =>
      checkedAppointments.includes(id)
        ? checkedAppointments.filter((item) => item !== id)
        : [...checkedAppointments, id]
    );
  };

  const appointmentList = appointments.map((appointment) => (
    <tr key={appointment.id} className="appointment-list-item">
    <td>{appointment.appointment}</td>
    <td>{appointment.date}</td>
    <td>{appointment.hours} hours</td>
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
);
};

export default SimpleAppointments;
