import { useState, useEffect } from 'react';
import requests from '../api/requests'; 
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
      <button className="new-client-button" onClick={handleNewClientModalClick}>Add New Client</button>

      {clients.length > 0 ? (
        <div className="client-list-container">
      <ul className="client-list">
        {clients.map((client) => (<div>
          <li key={client.id} className="client-item">
            <div className="client-details">
              <span className='client-id'>Client ID: {client.id}</span>
              <span>{client.name}</span>
              <span>{client.address.line_1}</span>
              <span>{client.email}</span>
              {client.company && <span>Company: {client.company}</span>}
            </div>
           </li>
         </div>
        ))}
      </ul> 
    </div>) : (
        <div>
        <h4>Please Add your first client using the "Add New Client" button.</h4>
        <h4>Your client info will display when you finish adding new client. Here is an exmaple:</h4>
        <img style={{ maxWidth: '45%' }}
         src="/clientExample.jpg" alt="example" />
        </div>
      )}

      {isClientModalOpen && <NewClientModal setClientModelOpen={setClientModelOpen} user={ user } />}
    </div>
  );
}
