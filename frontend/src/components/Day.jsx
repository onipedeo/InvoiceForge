import React, { useEffect, useState } from 'react';
import '../styles/day.scss';
import requests from "../api/requests";
import { Calendar, momentLocalizer, DateLocalizer } from 'react-big-calendar'
import moment from 'moment'
import "react-big-calendar/lib/css/react-big-calendar.css"


const localizer = momentLocalizer(moment);


const Day = () => {

  const [events, setevents] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const appointments = await requests.get.user(1).appointments;
        const sortedEvents = [];

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

  return (
    <>
      <div className="myCustomHeight" style={{ height: "80vh" }}>
        <Calendar
          localizer={localizer}
          events={events}
          startAccessor="start"
          endAccessor="end"
        />
      </div>
    </>
  );
};

export default Day;