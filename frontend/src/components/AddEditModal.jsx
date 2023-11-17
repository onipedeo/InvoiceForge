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