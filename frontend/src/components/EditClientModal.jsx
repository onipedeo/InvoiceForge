import { useState } from 'react';
import "../styles/edit-client-modal.scss";
import requests from '../api/requests';

export default function NewClientModal(props) {
  const {selectedClientIdtoEdit, user, selectedAddressIdtoEdit} = props
  console.log(" selectedClientIdtoEdit", selectedClientIdtoEdit)
  console.log("selectedAddressIdtoEdit", selectedAddressIdtoEdit)

    {/* states */ }
    const [clientEditData, setClientEditData] = useState({
      userId: user.id,
      name: '',
      companyName: '',
      email: '',
      phone: '',
      clientRateCents: 4000,
    });
  
    const [addressEditData, setAddressEditData] = useState({
      userId: user.id,
      line1: '',
      line2: '',
      city: '',
      province: '',
      country: '',
      postalCode: '',
    });
    
    const handleClientEditInputChange = (e) => {
      const { name, value } = e.target;
      setClientEditData((prevData) => ({
        ...prevData,
        [name]: value,
      }));
    };
  
    const handleAddressEditInputChange = (e) => {
      const { name, value } = e.target;
      setAddressEditData((prevData) => ({
        ...prevData,
        [name]: value,
      }));
    };
    
    console.log("clientEditData", clientEditData)
    console.log("addressEditData", addressEditData)


    const handleClientEditSubmit = async (e) => {
      e.preventDefault();
  
      try {
  
        const clientEditResponse = await requests.update.client(selectedClientIdtoEdit, clientEditData); 
   
        console.log("clientEditResponse", clientEditResponse);
  
      } catch (error) {
        console.error('Error adding client:', error);
      }
    };

    const handleAddressEditSubmit = async (e) => {
      e.preventDefault();
  
      try {

        const AddressEditResponse = await requests.update.address(selectedAddressIdtoEdit, addressEditData);
        console.log("AddressEditResponse", AddressEditResponse);
  
      } catch (error) {
        console.error('Error adding client:', error);
      }
    };
  
  return (
    <div className="edit-client-modal-container" id="editClientModal">
      <span className="edit-client-close">&times;</span>
     
      <div className="edit-client-modal-content">
      
        
        <form onSubmit={handleClientEditSubmit}>
            <h2>Edit Client Info</h2>

          {/* New Client Table*/}

          <div className="form-group-edit-client">
            <label htmlFor="name">Name:</label>
            <input
              type="text"
              id="name"
              name="name"
              value={clientEditData.name}
              onChange={handleClientEditInputChange}
              placeholder='required'
              required
            />
          </div>
          <div className="form-group-edit-client">
            <label htmlFor="email">Email:</label>
            <input
              type="email"
              id="email"
              name="email"
              value={clientEditData.email}
              onChange={handleClientEditInputChange}
              placeholder='required'
              required
            />
          </div>
          <div className="form-group-edit-client">
            <label htmlFor="rate">Rate(¢):</label>
            <input
              type="number"
              id="clientRateCents"
              name="clientRateCents"
              value={clientEditData.clientRateCents}
              onChange={handleClientEditInputChange}
              required
            />
          </div>
          <div className="form-group-edit-client">
            <label htmlFor="phone">Phone:</label>
            <input
              type="phone"
              id="phone"
              name="phone"
              value={clientEditData.phone}
              onChange={handleClientEditInputChange}
              placeholder='optional'
            />
          </div>
          <div className="form-group-new-client">
            <label htmlFor="companyName">Business:</label>
            <input
              type="text"
              id="companyName"
              name="companyName"
              value={clientEditData.companyName}
              onChange={ handleClientEditInputChange }
              placeholder='optional'
            />
          </div>
          

          <button type="submit" className='edit-client-button'>Edit Client Info</button>
        </form>

        {/* Edit Address Table*/}

          <form onSubmit={handleAddressEditSubmit}>
            <div className="address-group-edit">
              <label><h2>Edit Client Address</h2></label>
              <input className="address-input-edit"
                type="text"
                placeholder="Line 1 (required)"
                name="line1"
                value={addressEditData.line1}
                onChange={handleAddressEditInputChange}
                required
              />
              <input className="address-input-edit"
                type="text"
                placeholder="Line 2 (optional)"
                name="line2"
                value={addressEditData.line2}
                onChange={handleAddressEditInputChange}
              />
              <input className="address-input-edit"
                type="text"
                placeholder="City (optional)"
                name="city"
                value={addressEditData.city}
                onChange={handleAddressEditInputChange}
              />
              <input className="address-input-edit"
                type="text"
                placeholder="Province (optional)"
                name="province"
                value={addressEditData.province}
                onChange={handleAddressEditInputChange}
              />
              <input className="address-input-edit"
                type="text"
                placeholder="Country (optional)"
                name="country"
                value={addressEditData.country}
                onChange={handleAddressEditInputChange}
              />
              <input className="address-input-edit"
                type="text"
                placeholder="Postal Code (required)"
                name="postalCode"
                value={addressEditData.postalCode}
                onChange={handleAddressEditInputChange}
                required
              />
            </div>
            <button type="submit" className='edit-client-button'>Change Address</button>
            
         
          </form>

              {/* Close msg and button*/}
            
              <div>
                <h3>Client Address Changed</h3>
                <button className='edit-client-button'>Close</button>
              </div>
            

      </div>
    </div>
  );
}