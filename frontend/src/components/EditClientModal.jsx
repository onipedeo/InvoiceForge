import { useState } from 'react';
import "../styles/edit-client-modal.scss";
import requests from '../api/requests';

export default function NewClientModal(props) {
  const {selectedClientIdtoEdit, user} = props
  console.log("state in edit modal", selectedClientIdtoEdit)

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
  
  return (
    <div className="edit-client-modal-container" id="editClientModal">
      <span className="edit-client-close">&times;</span>
     
      <div className="edit-client-modal-content">
      
        
        <form>
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

        {/* Transition*/}
       
          <div >
            <h3>Client Info Edited</h3>
            <p>Would you like to edit client address now?</p>
            <div className='info-address-transition-edit'>
            <button className='edit-client-button'>Yes</button>
            <button className='edit-client-button'>No</button>
            </div>
          </div>

        {/* Edit Address Table*/}

          <form>
            <div className="address-group-edit">
            <h3>Client Info Edited</h3>
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