import { useState, useEffect } from "react";
import ClientSelection from "./ClientSelection";
import AppointmentList from "./AppointmentList";
import InvoiceGenerator from "./InvoiceGenerator";
import requests from "../api/requests";

const AppointmentsContainer = ({ user }) => {
  const [selectedClient, setSelectedClient] = useState(null);
  const [checkedAppointments, setCheckedAppointments] = useState([]);
  const [clients, setClients] = useState([]);
  const [reviewedAppointments, setReviewedAppointments] = useState([]);
  const [clientRate, setClientRate] = useState(null);
  const [clientObj, setClientObj] = useState({});

  useEffect(() => {
    if (selectedClient) {
      requests.get.client(selectedClient).allData.then((data) => {
        setReviewedAppointments(data.reviewed);
        setClientRate(data.client.clientRateCents || null);
        setClientObj(data.client);
      });
    }
  }, [selectedClient]);

  useEffect(() => {
    requests.get.user(user.id).clients.then((clients) => {
      setClients(clients);
    });
  }, []);

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
      {selectedClient && (
        <AppointmentList
          selectedClient={selectedClient}
          reviewedAppointments={reviewedAppointments}
          handleAppointmentCheck={handleAppointmentCheck}
          checkedAppointments={checkedAppointments}
        />
      )}
      {selectedClient && (
        <InvoiceGenerator
          reviewedAppointments={reviewedAppointments}
          checkedAppointments={checkedAppointments}
          clientRate={clientRate}
          clientObj={clientObj}
          user={user}
        />
      )}
    </div>
  );
};

export default AppointmentsContainer;
