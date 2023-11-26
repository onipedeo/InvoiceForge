import React from 'react';
import '../styles/addEditModal.scss';

const AddEditModal = (props) => {
  

  return (
    props.isOpen && (

      <div className='addEditModal'>
        <h2>Book an Appointment</h2>

        <form >
          <button className="close-modal" type='submit' onClick={props.onClose}>❌</button>
          <label htmlFor="Title">
            Client Name:
          </label>
          <input
            type="text"
            name="name"
          />
          <label>
            Date:
          </label>
          <input
            type="date"
            name="date"
          />
          <label>
            Start Time:
          </label>
          <input
            type="time"
            name="startTime"
          />
          <label>
            End Time:
          </label>
          <input
            type="time"
            name="endTime"
          />
          <label>
            Appointment Rate :
          </label>
          <select>
            <option value=""></option>
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
          <button className='addEditModalBtn' type="submit" >Save Appointment</button>
        </form>

      </div>
    )
  );
};

export default AddEditModal;