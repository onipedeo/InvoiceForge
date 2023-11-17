import React, { useState } from "react";
import "../styles/SimpleAppointments.scss"; // Import your CSS file for styling

const appointments = [
  { id: 1, appointment: "Tap repair" },
  { id: 2, appointment: "Light fix" },
  { id: 3, appointment: "Groceries Shopping" },
  { id: 4, appointment: "Doctor's Appointment" },
  { id: 5, appointment: "Go to the movies" },
];

const SimpleAppointments = () => {
  const [checkedItems, setCheckedItems] = useState([]);

  const handleCheckboxChange = (id) => {
    setCheckedItems((prevCheckedItems) =>
      prevCheckedItems.includes(id)
        ? prevCheckedItems.filter((item) => item !== id)
        : [...prevCheckedItems, id]
    );
  };

  const appointmentList = appointments.map((appointment) => (
    <li key={appointment.id} className="appointment-list-item">
      {appointment.appointment}
      <input
        type="checkbox"
        checked={checkedItems.includes(appointment.id)}
        onChange={() => handleCheckboxChange(appointment.id)}
      />
    </li>
  ));

  return <ul className="appointment-list">{appointmentList}</ul>;
};

export default SimpleAppointments;


