import { useState } from 'react';
import "../styles/new-address-modal.scss";
import requests from '../api/requests';


export default function NewClientModal(props) {
  const { user, clientId } = props;

  const [addressData, setAddressData] = useState({
    userId: user.id,
    line_1: '',
    line_2: '',
    city: '',
    province: '',
    country: '',
    postalCode: '',
  });

  const handleAddressInputChange = (e) => {
    const { name, value } = e.target;
    setAddressData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };


  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      // Make routes requests to send the forms data to the backend
      const addressForm = {...addressData, clientId}
      await requests.create.address(addressForm)
      
    } catch (error) {
      console.error('Error adding client:', error);
    }
  };
  
    console.log("addressData", addressData)
  return (
    <div className="new-client-modal-container" id="newClientModal">
      <div className="new-client-modal-content">
        <span className="close">&times;</span>
        <h2>Add Address</h2>
        <form onSubmit={handleSubmit}>

          {/* Access Table Data*/}
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
              placeholder="Postal Code Required"
              name="postalCode"
              value={addressData.postalCode}
              onChange={handleAddressInputChange}
              required
            />
          </div>

          <button type="submit">Add Address</button>
        </form>
      </div>
    </div>
  );
}