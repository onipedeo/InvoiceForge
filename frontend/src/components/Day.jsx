<<<<<<< HEAD
import React, { useEffect, useState } from 'react';
import '../styles/day.scss';
import requests from "../api/requests";
import { Calendar, momentLocalizer, DateLocalizer } from 'react-big-calendar'
import moment from 'moment'
import "react-big-calendar/lib/css/react-big-calendar.css"


const localizer = momentLocalizer(moment);


const Day = () => {

  const [events, setevents] = useState([]);
  const [clientData, setClientData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const appointments = await requests.get.user(1).appointments;
        const sortedEvents = [];
        const clients = await requests.get.user(1).clients;

        console.log('clients', clients);

        const appointmentEvents = appointments.map((app) => {

          const evt = {
            start: moment(`${app.date}T${app.startTime}`).toDate(),
            end: moment(`${app.date}T${app.endTime}`).toDate(),
            title: `${app.notes}`
          }
          sortedEvents.push(evt);

        })
        setevents(sortedEvents)

      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchData();
  }, [])

  const minTime = new Date();
  minTime.setHours(5, 30, 0);
  const maxTime = new Date();
  maxTime.setHours(20, 30, 0);

  return (
    <div className="myCustomHeight" style={{ height: "80vh" }}>
      <Calendar
        localizer={localizer}
        events={events}
        startAccessor="start"
        endAccessor="end"
        defaultView='week'
        views={['month', 'week', 'day']}
        min={minTime}
        max={maxTime}
      />
=======
import React from 'react';
import '../styles/day.scss';
import Appointments from './Appointments';


const day = ["Sunday", "Monday", "Tuesday", "wednessday", "Thursday", "Friday", "Saturday"];


const dayList = day.map((day, index) => {

  return (
    <div key={index} className='day-housing'>
      <div>
        {day}
      </div>
      <Appointments />
    </div>
  )
})

const Day = () => {
  return (
    <>
      {dayList}
      {/* <div className='day-housing'>
       
        <div className='single-day'>
          <div className='days-bar'>
            Sunday
          </div>
          <Appointments />
        </div>
        <div className='single-day'>
          <div className='days-bar'>
            Monday
          </div>
          <div>
            <div className='add-edit'>
              <h4>time</h4>
              <div>
                <button type='submit'>❌</button>
                <button>✏️</button>
              </div>
            </div>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Aut at voluptates dolorem dolorum, tenetur minus accusantium, debitis, mollitia amet voluptatum perspiciatis enim sit non cum est nulla! At, minus quasi.</p>
          </div>
        </div>
        <div className='single-day'>
          <div className='days-bar'>
            Tuesday
          </div>
          <div>
            <div className='add-edit'>
              <h4>time</h4>
              <div>
                <button type='submit'>❌</button>
                <button>✏️</button>
              </div>
            </div>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Aut at voluptates dolorem dolorum, tenetur minus accusantium, debitis, mollitia amet voluptatum perspiciatis enim sit non cum est nulla! At, minus quasi.</p>
          </div>
        </div>
        <div className='single-day'>
          <div className='days-bar'>
            Wednessday
          </div>
          <div>
            <div className='add-edit'>
              <h4>time</h4>
              <div>
                <button type='submit'>❌</button>
                <button>✏️</button>
              </div>
            </div>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Aut at voluptates dolorem dolorum, tenetur minus accusantium, debitis, mollitia amet voluptatum perspiciatis enim sit non cum est nulla! At, minus quasi.</p>
          </div>
        </div>
        <div className='single-day'>
          <div className='days-bar'>
            Thursday
          </div>
          <div>
            <div className='add-edit'>
              <h4>time</h4>
              <div>
                <button type='submit'>❌</button>
                <button>✏️</button>
              </div>
            </div>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Aut at voluptates dolorem dolorum, tenetur minus accusantium, debitis, mollitia amet voluptatum perspiciatis enim sit non cum est nulla! At, minus quasi.</p>
          </div>
        </div>
        <div className='single-day'>
          <div className='days-bar'>
            Friday
          </div>
          <div>
            <div className='add-edit'>
              <h4>time</h4>
              <div>
                <button type='submit'>❌</button>
                <button>✏️</button>
              </div>
            </div>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Aut at voluptates dolorem dolorum, tenetur minus accusantium, debitis, mollitia amet voluptatum perspiciatis enim sit non cum est nulla! At, minus quasi.</p>
          </div>
        </div>
        <div className='single-day'>
          <div className='days-bar'>
            Saturday
          </div>
          <div>
            <div className='add-edit'>
              <h4>time</h4>
              <div>
                <button type='submit'>❌</button>
                <button>✏️</button>
              </div>
            </div>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Aut at voluptates dolorem dolorum, tenetur minus accusantium, debitis, mollitia amet voluptatum perspiciatis enim sit non cum est nulla! At, minus quasi.</p>
          </div>
        </div>

      </div> */}


>>>>>>> render appointment component in day component
    </div>

  );
};

export default Day;