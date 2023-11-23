import { useState, useEffect } from 'react';
import requests from '../api/requests'; // Import your requests module
import "../styles/client-list.scss";
import NewClientModal from "./NewClientModal";

export default function ClientList(props) {
  const [isClientModalOpen, setClientModelOpen] = useState(false);
  const [clients, setClients] = useState([]); 
  const { user } = props;

  useEffect(() => {
    fetchClients();
  }, []); 

  const fetchClients = async () => {
    try {
      const clientData = await requests.get.user(user.id).clients
      console.log('Clients Data:', clientData);

      setClients(clientData);
      console.log('Clients State:', clients);

    } catch (error) {
      console.error('Error fetching user data:', error);
    }
  };

  const handleNewClientModalClick = () => {
    setClientModelOpen(true);
  };

  return (
    <div className="client-list-container">
      <p>Client List Content</p>

      <ul>
        {clients.map((client) => (
          <li key={client.id}>
          <span> Client's Name: {client.name}</span>
          <span>Client's Email: {client.email}</span> 
          <span>Client's Company: {client.company}</span>
          </li>
        ))}
      </ul>

      <button onClick={handleNewClientModalClick}>Add New Client</button>

      {isClientModalOpen && <NewClientModal setClientModelOpen={setClientModelOpen} />}
    </div>
  );
}
