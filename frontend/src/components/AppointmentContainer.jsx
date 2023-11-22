import { useState, useEffect } from "react";
import ClientSelection from "./ClientSelection";
import AppointmentList from "./AppointmentList";
import InvoiceGenerator from "./InvoiceGenerator";
import requests from "../api/requests";

const AppointmentsContainer = ({ userId, standardRateCents }) => {
  const [selectedClient, setSelectedClient] = useState(null);
  const [checkedAppointments, setCheckedAppointments] = useState([]);
  const [clients, setClients] = useState([]);
  const [reviewedAppointments, setReviewedAppointments] = useState([]);
  const [clientRate, setClientRate] = useState(null);

  useEffect(() => {
    if (selectedClient) {
      requests.get.clientData(selectedClient).then((clientData) => {
        setReviewedAppointments(clientData.reviewed);
        setClientRate(clientData.client_rate_cents || null);
        
      });
    }
  }, [selectedClient]);

  useEffect(() => {
    requests.get.userData(userId).then((userData) => {
      setClients(userData.clients);
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
          selectedClient={selectedClient}
          reviewedAppointments={reviewedAppointments}
          checkedAppointments={checkedAppointments}
          clientRate={clientRate}
          standardRateCents={standardRateCents}
        />
      )}
    </div>
  );
};

export default AppointmentsContainer;
