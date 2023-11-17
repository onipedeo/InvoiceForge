import React from 'react';
import '../styles/addEditModal.scss';

const AddEditModal = () => {
  return (
    <div className='modal'>
      {/* <h2>Hello Add/Edit Modal</h2> */}
      <div className="appointment-modal">
        <h2>Book an Appointment</h2>
        <form >
          <button type='submit'>X</button>
          <label htmlFor="Title">
            Title:
          </label>
          <input
            type="text"
            name="title"
          />
          <label>
            Start Time:
          </label>
          <input
            type="datetime-local"
            name="startTime"
          />
          <label>
            End Time:
          </label>
          <input
            type="datetime-local"
            name="endTime"
          />
          <label>
            Confirmed Hours:
          </label>
          <input
            type="number"
            name="confirmedHours"
          />
          <label>
            Reviewed:
            <input
              type="checkbox"
              name="reviewed"
            />
          </label>
          <label>
            Invoiced:
            <input
              type="checkbox"
              name="invoiced"
            />
          </label>
          <label>
            Appointment Rate :
          </label>
          <select>
            <option value="standard">Standard</option>
            <option value="pro">Pro</option>
            <option value="premium">Premium</option>
          </select>
          <label>
            Notes:
          </label>
          <textarea
            name="notes"
          />
          <br />
          <button type="submit">Save Appointment</button>
        </form>
      </div>
    </div>
  );
};

export default AddEditModal;
import React, { useEffect, useState } from 'react';
import '../styles/addEditModal.scss';
import requests from '../api/requests';

const AddEditModal = (props) => {
  const [formData, setFormData] = useState({});

  const handleChange = (event) => {
    setFormData({
      ...formData,
      [event.target.name]: event.target.value,
    });
  };


  const handleSubmit = async (event) => {
    event.preventDefault();
    console.log(formData);
    try {
      const response = await requests.create.appointment(formData);

      if (!response.ok) {
        throw new Error(`Failed to send data: ${response.statusText}`);
      }

      // Handle the response
      const responseData = await response.json();
      console.log('Data sent successfully', responseData);

      // Close the modal
      props.onClose();
    } catch (error) {
      console.error('Error sending data', error);
    }
  };




  return (
    props.isOpen && (

      <div className='addEditModal'>
        <h2>Book an Appointment</h2>

        <form >
          <button className="close-modal" type='submit' onClick={props.onClose}>❌</button>
          <label htmlFor="Title">
            Client Name:
          </label>
          <select name="clientName" id="">
            <option value=""></option>
          </select>
          <input
            type="text"
            name="clientName"
            value={formData.clientName}
            onChange={handleChange}
          />
          <label>
            Date:
          </label>
          <input
            type="date"
            name="date"
            value={formData.date}
            onChange={handleChange}
          />
          <label>
            Start Time:
          </label>
          <input
            type="time"
            name="startTime"
            value={formData.startTime}
            onChange={handleChange}
          />
          <label>
            End Time:
          </label>
          <input
            type="time"
            name="endTime"
            value={formData.endTime}
            onChange={handleChange}
          />
          <label>
            Appointment Rate (cents) :
          </label>
          <input type="number" step={100} name='appointment_rate_cents' value={formData.appointment_rate_cents}
            onChange={handleChange} />
          <label>
            Notes:
          </label>
          <textarea
            name="notes"
            value={formData.notes}
            onChange={handleChange}
          />
          <br />
          <button className='addEditModalBtn' type="submit" onClick={handleSubmit}>Save Appointment</button>
        </form>

      </div>
    )
  );
};

export default AddEditModal;