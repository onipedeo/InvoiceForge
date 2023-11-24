import { useState } from 'react';
import "../styles/new-client-modal.scss";
import requests from '../api/requests';
import NewAddressModal from './NewAddressModal'


export default function NewClientModal(props) {
  const { setClientModelOpen, user } = props;

  const [clientData, setClientData] = useState({
    userId: user.id,
    name: '',
    companyName: '',
    email: '',
    phone: '',
    clientRateCents: 0,
  });

  const [clientId, setClientId] = useState(null);

  const handleClientInputChange = (e) => {
    const { name, value } = e.target;
    setClientData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleClientModelClose = () => {
    setClientModelOpen(false);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      // Make routes requests to send the forms data to the backend
      const response = await requests.create.client(clientData) //return client id
      const newClientId = response[0].id
      console.log("response", response)
      console.log(newClientId)
      setClientId(newClientId);
      
      // Close the modal after successful submission
      setClientModelOpen(false);
    } catch (error) {
      console.error('Error adding client:', error);
    }
  };
   
    console.log("clientData", clientData)

  return (
    <div className="new-client-modal-container" id="newClientModal">
      <div className="new-client-modal-content">
        <span className="close" onClick={handleClientModelClose}>&times;</span>
        <h2>Add Client</h2>
        <form onSubmit={handleSubmit}>
          {/* Client Table Data*/}
          <div className="form-group">
            <label htmlFor="name">Name:</label>
            <input
              type="text"
              id="name"
              name="name"
              value={clientData.name}
              onChange={handleClientInputChange}
              placeholder='required'
              required
            />
          </div>
          <div className="form-group">
            <label htmlFor="companyName">Company Name:</label>
            <input
              type="text"
              id="companyName"
              name="companyName"
              value={clientData.companyName}
              onChange={handleClientInputChange}
            />
          </div>
          <div className="form-group">
            <label htmlFor="email">Email:</label>
            <input
              type="email"
              id="email"
              name="email"
              value={clientData.email}
              onChange={handleClientInputChange}
              placeholder='required'
              required
            />
          </div>
          <div className="form-group">
            <label htmlFor="phone">Phone:</label>
            <input
              type="phone"
              id="phone"
              name="phone"
              value={clientData.phone}
              onChange={handleClientInputChange}
            />
          </div>
          <div className="form-group">
            <label htmlFor="rate">Rate:</label>
            <input
              type="number"
              id="clientRateCents"
              name="clientRateCents"
              value={clientData.clientRateCents}
              onChange={handleClientInputChange}
              placeholder='required'
              required
            />
          </div>
          <button type="submit">Add Client</button>
        </form>
        { <NewAddressModal setClientModelOpen={setClientModelOpen} user={user} clientId={clientId}/>}
      </div>
    </div>
  );
}

