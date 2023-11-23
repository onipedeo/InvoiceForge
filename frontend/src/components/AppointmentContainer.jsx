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
  const [clientObj, setClientObj] = useState({});
  const [userData, setUserData] = useState({});

  useEffect(() => {
    requests.get.user(userId).object.then((data) => setUserData(data));
  },[]);

  useEffect(() => {
    if (selectedClient) {
      requests.get.clientData(selectedClient).then((clientData) => {
        setReviewedAppointments(clientData.reviewed);
        setClientRate(clientData.client_rate_cents || null);
        setClientObj(clientData);
        
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
          reviewedAppointments={reviewedAppointments}
          checkedAppointments={checkedAppointments}
          clientRate={clientRate}
          standardRateCents={standardRateCents}
          clientObj={clientObj}
          userId={userId}
          userData={userData}
        />
      )}
    </div>
  );
};

export default AppointmentsContainer;
