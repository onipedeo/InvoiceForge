// const SimpleAppointments = () => {
//   const [checkedAppointments, setCheckedAppointments] = useState([]);
//   const [selectedClient, setSelectedClient] = useState(null);

//   const handleAppointmentCheck = (id) => {
//     setCheckedAppointments((checkedAppointments) =>
//       checkedAppointments.includes(id)
//         ? checkedAppointments.filter((item) => item !== id)
//         : [...checkedAppointments, id]
//     );
//   };

//   const handleClientSelect = (clientId) => {
//     setSelectedClient(clientId);
//   };

//   const filteredAppointments = appointments.filter(
//     (appointment) =>
//       appointment.client_id === selectedClient && !appointment.invoiced
//   );

//   const appointmentList = filteredAppointments.map((appointment) => (
//     <tr key={appointment.id} className="appointment-list-item">
//       <td>{appointment.notes}</td>
//       <td>{appointment.date}</td>
//       <td>{appointment.confirmed_hours} hours</td>
//       <td>
//         <input
//           type="checkbox"
//           checked={checkedAppointments.includes(appointment.id)}
//           onChange={() => handleAppointmentCheck(appointment.id)}
//         />
//       </td>
//     </tr>
//   ));

//   const handleReviewButton = () => {

//   }

//   return (
//     <div>
//     <label>Client List</label>
//     <select onChange={(e) => handleClientSelect(parseInt(e.target.value))}>
//       <option value={null}>Select a client</option>
//       {clients.map((client) => (
//         <option key={client.id} value={client.id}>
//           {client.name}
//         </option>
//       ))}
//     </select>

//     {selectedClient && (
//       <>
//         <table className="appointment-list">
//           <thead>
//             <tr>
//               <th>Appointment</th>
//               <th>Date</th>
//               <th>Hours</th>
//               <th>Checkbox</th>
//             </tr>
//           </thead>
//           <tbody>{appointmentList}</tbody>
//         </table>
//         <div onClick={handleReviewButton}>Generate Invoice</div>
//       </>
//     )}
//   </div>
//   );
// };



import React, { useState } from "react";
import jsPDF from "jspdf";
import "jspdf-autotable";
import Modal from "react-modal";
import "../styles/SimpleAppointments.scss";

const appointments = [
  {
    id: 1,
    user_id: 1,
    client_id: 1,
    date: "2023-11-13",
    start_time: "09:00:00",
    end_time: "17:00:00",
    confirmed_hours: 8,
    reviewed: true,
    invoiced: false,
    appointment_rate_cents: 2000,
    notes: "finish repairs.",
  },
  {
    id: 2,
    user_id: 1,
    client_id: 1,
    date: "2023-11-14",
    start_time: "09:00:00",
    end_time: "17:00:00",
    confirmed_hours: 8,
    reviewed: true,
    invoiced: false,
    notes: "paint",
  },
  {
    id: 3,
    user_id: 1,
    client_id: 2,
    date: "2023-11-15",
    start_time: "09:00:00",
    end_time: "17:00:00",
    confirmed_hours: 8,
    reviewed: true,
    invoiced: false,
    appointment_rate_cents: 3000,
    notes: "demo and begin rebuild",
  },
  {
    id: 4,
    user_id: 1,
    client_id: 2,
    date: "2023-11-16",
    start_time: "09:00:00",
    end_time: "17:00:00",
    confirmed_hours: 8,
    reviewed: true,
    invoiced: false,
    notes: "finish rebuild",
  },
];

const clients = [
  {
    id: 1,
    user_id: 1,
    name: "Sally Parker",
    email: "nathanwilespainting@gmail.com",
    client_rate_cents: 5000,
  },
  {
    id: 2,
    user_id: 1,
    name: "Jeff Jetson",
    email: "nathanwilespainting@gmail.com",
  },
];

const clientsAddress = [
  {
    id: 2,
    line_1: "123 Main St",
    city: "Toronto",
    province: "ON",
    country: "Canada",
    postal_code: "M1M1M1",
  },
  {
    id: 3,
    line_1: "456 Main St",
    city: "Toronto",
    province: "ON",
    country: "Canada",
    postal_code: "M1M1M1",
  },
];

const userAddress = [
  {
    id: 1,
    line_1: "123 Main St",
    city: "Toronto",
    province: "ON",
    country: "Canada",
    postal_code: "M1M1M1",
  },
];


const SimpleAppointments = () => {
  const [checkedAppointments, setCheckedAppointments] = useState([]);
  const [selectedClient, setSelectedClient] = useState(null);
  const [generatedPDF, setGeneratedPDF] = useState(null);

  const handleAppointmentCheck = (id) => {
    setCheckedAppointments((checkedAppointments) =>
      checkedAppointments.includes(id)
        ? checkedAppointments.filter((item) => item !== id)
        : [...checkedAppointments, id]
    );
  };

  const handleClientSelect = (clientId) => {
    setSelectedClient(clientId);
  };

  const filteredAppointments = appointments.filter(
    (appointment) =>
      appointment.client_id === selectedClient && !appointment.invoiced
  );

  const appointmentList = filteredAppointments.map((appointment) => (
    <tr key={appointment.id} className="appointment-list-item">
      <td>{appointment.notes}</td>
      <td>{appointment.date}</td>
      <td>{appointment.confirmed_hours} hours</td>
      <td>
        <input
          type="checkbox"
          checked={checkedAppointments.includes(appointment.id)}
          onChange={() => handleAppointmentCheck(appointment.id)}
        />
      </td>
    </tr>
  ));

  const handleReviewButton = () => {
    // Create a new jsPDF instance
    const pdf = new jsPDF();

    // Add content to the PDF
    pdf.text("Invoice", 20, 20);

    // Add user and client details
    const userDetails = userAddress.find((user) => user.id === 1); // Assuming there's only one user for simplicity
    const clientDetails = clientsAddress.find(
      (client) => client.id === parseInt(selectedClient)
    );

    

    pdf.text(
      `User Details:\n${userDetails.line_1}\n${userDetails.city}, ${userDetails.province}\n${userDetails.country}\n${userDetails.postal_code}`,
      20,
      30
    );
    pdf.text(
      `Client Details:\n${clientDetails.line_1}\n${clientDetails.city}, ${clientDetails.province}\n${clientDetails.country}\n${clientDetails.postal_code}`,
      20,
      50
    );

    // Add appointment details
    pdf.text("Appointment Details", 20, 70);
    pdf.autoTable({
      head: [["Appointment", "Date", "Hours"]],
      body: appointments
        .filter((appointment) => checkedAppointments.includes(appointment.id))
        .map((appointment) => [
          appointment.notes,
          appointment.date,
          appointment.confirmed_hours,
        ]),
      startY: 80,
    });
   

    // Calculate and add the total amount
    const totalAmount = appointments
      .filter((appointment) => checkedAppointments.includes(appointment.id))
      .reduce(
        (total, appointment) => total + appointment.appointment_rate_cents,
        0
      );

      console.log("TotalAmount", totalAmount)

    pdf.text(
      `Total Amount: ${totalAmount} cents`,
      20,
      pdf.autoTable.previous.finalY + 10
    );

    // Save the PDF
    const generatedPDFData = pdf.output("blob");
    setGeneratedPDF(URL.createObjectURL(generatedPDFData));
  };

  const handleConfirmAndSend = () => {
  alert("invoice sent");}

  return (
    <div>
      <label>Client List</label>
      <select onChange={(e) => handleClientSelect(parseInt(e.target.value))}>
        <option value={null}>Select a client</option>
        {clients.map((client) => (
          <option key={client.id} value={client.id}>
            {client.name}
          </option>
        ))}
      </select>

      {selectedClient && (
        <>
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
          <div onClick={handleReviewButton}>Generate Invoice</div>
        </>
      )}

      {generatedPDF && (
        <div className="pdf-modal">
          <iframe
            title="Invoice PDF"
            src={generatedPDF}
            width="100%"
            height="500px"
          ></iframe>
          <button onClick={handleConfirmAndSend}>Confirm and Send</button>
        </div>
      )}
    </div>
  );
};

export default SimpleAppointments;
