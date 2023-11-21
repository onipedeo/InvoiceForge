import { useState } from "react";
import ClientSelection from "./ClientSelection";
import AppointmentList from "./AppointmentList";
import InvoiceGenerator from "./InvoiceGenerator";

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

const AppointmentsContainer = () => {
  const [selectedClient, setSelectedClient] = useState(null);
  const [checkedAppointments, setCheckedAppointments] = useState([]);

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

  return (
    <div>
      <ClientSelection
        selectedClient={selectedClient}
        handleClientSelect={handleClientSelect}
        clients={clients}
      />
      {selectedClient && (<AppointmentList selectedClient={selectedClient} appointments={appointments} handleAppointmentCheck={handleAppointmentCheck} checkedAppointments={checkedAppointments}/>)}
      { selectedClient && (<InvoiceGenerator selectedClient={selectedClient} appointments={appointments} checkedAppointments={checkedAppointments}/>) }
    </div>
  );
};

export default AppointmentsContainer;
