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
    <div>
      <h3>Client List</h3>
      <ul className="client-list">
        {clients.map((client) => (
          <li key={client.id} className="client-item">
            <div className="client-details">
              <span className='client-id'>Client ID: {client.id}</span>
              <span>Client Name: {client.name}</span>
              <span>Client Email: {client.email}</span>
              <span>Client Company: {client.company || 'Not specified'}</span>
            </div>
          </li>
        ))}
      </ul>

      <button className="new-client-button" onClick={handleNewClientModalClick}>Add New Client</button>

      {isClientModalOpen && <NewClientModal setClientModelOpen={setClientModelOpen} />}
    </div>
  );
}
