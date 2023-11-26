import { useState } from 'react';
import "../styles/edit-client-modal.scss";
import requests from '../api/requests';

export default function EditClientModal(props) {

  const {selectedClientIdtoEdit, user, selectedAddressIdtoEdit, setClientEditModelOpen} = props
  console.log("selectedClientIdtoEdit", selectedClientIdtoEdit)
  console.log("selectedAddressIdtoEdit", selectedAddressIdtoEdit)
    

    {/*states*/}
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
    
    const [isClientEditFormOpen, setClientEditFormOpen] = useState(false);
    const [isAddressEditFormOpen, setAddressEditFormOpen] = useState(false);
    
    {/*states end here*/}
    {/*functions for handling routes for put requests*/}

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

     {/*functions for conditional rendering*/}

    const handleEditClientFormShow = () => {
      setClientEditFormOpen(true);
    }

    const handleEditAddresssFormShow = () => {
      setAddressEditFormOpen(true)
    }

    const handleEditClientModalClose = () => {
      setClientEditModelOpen(false)
    }
    
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
        const addressEditForm = { ...addressEditData, selectedClientIdtoEdit };
        const AddressEditResponse = await requests.update.address(selectedAddressIdtoEdit, addressEditForm);
        console.log("AddressEditResponse", AddressEditResponse);
      } catch (error) {
        console.error('Error adding client:', error);
      }
    };
  
  return (
    <div className="edit-client-modal-container" id="editClientModal">
      <span className="edit-client-close">&times;</span>
     
      <div className="edit-client-modal-content">
      
      <h2 onClick ={handleEditClientFormShow}>+ Edit Client Info</h2>
       {/* Edit Client Table*/}
       {isClientEditFormOpen &&
        <form onSubmit={handleClientEditSubmit}>
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
          

          <button type="submit" className='edit-client-button'>Change Client Info</button>
        </form>}

        {/* Edit Address Table*/}
        <h3>Client Info has been changed</h3>
        <h2 onClick ={handleEditAddresssFormShow}> + Edit Address Info</h2>
        {isAddressEditFormOpen &&
          <form onSubmit={handleAddressEditSubmit}>
            <div className="address-group-edit">
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
          </form>}

         {isAddressEditFormOpen && <div>
          <h3>Client address has been changed</h3>
          <button onClick={handleEditClientModalClose}>Close</button>
          </div>
         }
      </div>
    </div>
  );
}