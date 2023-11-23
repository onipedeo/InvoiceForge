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
      <h3>{clients.length > 0 ? `You have ${clients.length} Clients` : 'No Clients Yet'}</h3>

      {clients.length > 0 ? (
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
      </ul> ) : (
        <div>
        <h4>Please Add your first client using the "Add New Client" button.</h4>
        <h4>Your Client Information will showup here once is added as demonstrated below. </h4>
        </div>
      )}

      <button className="new-client-button" onClick={handleNewClientModalClick}>Add New Client</button>

      {isClientModalOpen && <NewClientModal setClientModelOpen={setClientModelOpen} />}
    </div>
  );
}
