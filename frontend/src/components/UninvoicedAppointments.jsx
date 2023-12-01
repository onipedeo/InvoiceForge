// const AppointmentList = ({
//   reviewedAppointments,
//   handleAppointmentCheck,
//   checkedAppointments,
// }) => {
//   const appointmentList = reviewedAppointments.map((appointment) => (
//     <tr key={appointment.id} className="appointment-list-item">
//       <td>{appointment.notes}</td>
//       <td>{appointment.date}</td>
//       <td>{appointment.confirmedHours} hours</td>
//       <td>
//         <input
//           type="checkbox"
//           checked={checkedAppointments.includes(appointment.id)}
//           onChange={() => handleAppointmentCheck(appointment.id)}
//         />
//       </td>
//     </tr>
//   ));

//   return (
//     <div>
//       <table className="appointment-list">
//         <thead>
//           <tr>
//             <th>Appointment</th>
//             <th>Date</th>
//             <th>Hours</th>
//             <th>Checkbox</th>
//           </tr>
//         </thead>
//         <tbody>{appointmentList}</tbody>
//       </table>
//     </div>
//   );
// };

// export default AppointmentList;


import React from "react";
import "../styles/uninvoicedAppointments.scss";

const UninvoicedAppointmentItem = ({
  appointment,
  handleAppointmentCheck,
  isChecked,
}) => {
  return (
    <div
      className={`uninvoiced-appointment-list-item ${isChecked ? "selected" : ""}`}
      onClick={() => handleAppointmentCheck(appointment.id)}
    >
      <div className="uninvoiced-appointment-info">
        <p>📝 {appointment.notes}</p>
        <p>📆 {appointment.date}</p>
        <p>⏱ {appointment.confirmedHours} hours</p>
      </div>
      {/* <input
        type="checkbox"
        checked={isChecked}
        onChange={() => handleAppointmentCheck(appointment.id)}
      /> */}
    </div>
  );
};

const UninvoicedAppointments = ({
  reviewedAppointments,
  handleAppointmentCheck,
  checkedAppointments,
}) => {
  return (
    <div className="uninvoiced-appointment-list">
      {reviewedAppointments.map((appointment) => (
        <UninvoicedAppointmentItem
          key={appointment.id}
          appointment={appointment}
          handleAppointmentCheck={handleAppointmentCheck}
          isChecked={checkedAppointments.includes(appointment.id)}
        />
      ))}
    </div>
  );
};

export default UninvoicedAppointments;

