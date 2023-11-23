import { useState } from 'react';
import "../styles/new-client-modal.scss";
import requests from '../api/requests';

export default function NewClientModal(props) {
  const { setClientModelOpen, user } = props;

  const [clientData, setClientData] = useState({
    user_id: user.id,
    name: '',
    email: '',
    phone: '',
    rate: 0,
   
  });

  const [addressData, setAddressData] = useState({
    line_1: '',
    line_2: '',
    city: '',
    province: '',
    country: '',
    postal_code: '',
  });

  const handleClientInputChange = (e) => {
    const { name, value } = e.target;
    setClientData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleAddressInputChange = (e) => {
    const { name, value } = e.target;
    setAddressData((prevData) => ({
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
      // Make a network request to send the form data to the backend
      await Promise.all([
        requests.create.client(clientData),
        requests.create.address(addressData),
      ]);

      // Close the modal after successful submission
      setClientModelOpen(false);
    } catch (error) {
      console.error('Error adding client:', error);
      // Handle error (e.g., show an error message to the user)
    }
  };

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
            <label htmlFor="company_name">Company Name:</label>
            <input
              type="text"
              id="company_name"
              name="company_name"
              value={clientData.company_name}
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
              id="rate"
              name="rate"
              value={clientData.rate}
              onChange={handleClientInputChange}
            />
          </div>

          {/* Address Table Data*/}
          <div className="address-group">
            <label>Address:</label>
            <input
              type="text"
              placeholder="Line 1 Required"
              name="line_1"
              value={addressData.line_1}
              onChange={handleAddressInputChange}
              required
            />
            <input
              type="text"
              placeholder="Line 2"
              name="line_2"
              value={addressData.line_2}
              onChange={handleAddressInputChange}
            />
            <input
              type="text"
              placeholder="City"
              name="city"
              value={addressData.city}
              onChange={handleAddressInputChange}
            />
            <input
              type="text"
              placeholder="Province"
              name="province"
              value={addressData.province}
              onChange={handleAddressInputChange}
            />
            <input
              type="text"
              placeholder="Country"
              name="country"
              value={addressData.country}
              onChange={handleAddressInputChange}
            />
            <input
              type="text"
              placeholder="Postal Code"
              name="postal_code"
              value={addressData.postal_code}
              onChange={handleAddressInputChange}
            />
          </div>

          <button type="submit">Add Client</button>
        </form>
      </div>
    </div>
  );
}

