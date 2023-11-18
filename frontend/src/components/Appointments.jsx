import React from 'react';
import '../styles/appointments.scss';

const fakeAppiontments = [
  { id: 1, appointmentTitle: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Aut at voluptates dolorem dolorum, tenetur minus accusantium, debitis, mollitia amet voluptatum perspiciatis enim sit non cum est nulla! At, minus quasi", start_time: '09:00:00' },
  { id: 2, appointmentTitle: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Aut at voluptates dolorem dolorum, tenetur minus accusantium, debitis, mollitia amet voluptatum perspiciatis enim sit non cum est nulla! At, minus quasi", start_time: '09:00:00' },
  { id: 3, appointmentTitle: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Aut at voluptates dolorem dolorum, tenetur minus accusantium, debitis, mollitia amet voluptatum perspiciatis enim sit non cum est nulla! At, minus quasi", start_time: '09:00:00' },
  { id: 4, appointmentTitle: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Aut at voluptates dolorem dolorum, tenetur minus accusantium, debitis, mollitia amet voluptatum perspiciatis enim sit non cum est nulla! At, minus quasi", start_time: '09:00:00' },
  { id: 5, appointmentTitle: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Aut at voluptates dolorem dolorum, tenetur minus accusantium, debitis, mollitia amet voluptatum perspiciatis enim sit non cum est nulla! At, minus quasi", start_time: '09:00:00' }
]

const appointmentList = fakeAppiontments.map((app) => {
  return (
    <div key={app.id} className='appointment'>
      <div className='add-edit'>
        <h2>{app.start_time}</h2>
        <div>
          <button type='submit'>❌</button>
          <button>✏️</button>
        </div>
      </div>
      <p>{app.appointmentTitle}</p>
    </div>
  )
})


const Appointments = () => {
  return (
    <div >
      {appointmentList}
      {/* <h1>Hello Appointments</h1> */}
    </div>
  );
};

export default Appointments;