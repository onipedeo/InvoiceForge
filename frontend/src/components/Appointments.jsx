import React from 'react';
import '../styles/appointments.scss';

const fakeAppiontments = [
  { id: 1, appointmentTitle: "Lorem ipsum dolor sit amet is a very long ", start_time: '09:00:00' },
  { id: 2, appointmentTitle: "Lorem ipsum dolor sit amet is a very long ", start_time: '09:00:00' },
  { id: 3, appointmentTitle: "Lorem ipsum dolor sit amet is a very long ", start_time: '09:00:00' },
  { id: 4, appointmentTitle: "Lorem ipsum dolor sit amet is a very long ", start_time: '09:00:00' },
  { id: 5, appointmentTitle: "Lorem ipsum dolor sit amet is a very long ", start_time: '09:00:00' }
]

const appointmentList = fakeAppiontments.map((app) => {
  return (
    <div key={app.id} className='appointment'>
      <div className='add-edit'>
        <h2>{app.start_time}</h2>
        <div className='button-container'>
          <button type='button' className='delete-button'>❌</button>
          <button type='button' className='edit-button'>✏️</button>
        </div>
      </div>
      <p>{app.appointmentTitle}</p>
    </div>
  )
})


const Appointments = (props) => {
  return (
    <div >
      {appointmentList}
      {/* <h1>Hello Appointments</h1> */}
    </div>
  );
};

export default Appointments;