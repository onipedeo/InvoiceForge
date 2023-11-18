import React from 'react';
import '../styles/addEditModal.scss';

const AddEditModal = () => {
  return (
    <div className='modal'>
      {/* <h2>Hello Add/Edit Modal</h2> */}
      <div className="appointment-modal">
        <form >
          <h2>Book an Appointment</h2>
          <button className="close-modal" type='submit'>❌</button>
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
          <button type="submit">Save Appointment</button>
        </form>
      </div>
    </div>
  );
};

export default AddEditModal;