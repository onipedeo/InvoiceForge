import React from 'react';
import '../styles/day.scss';
import Appointments from './Appointments';
import requests from "../api/requests";


const day = ["Sunday", "Monday", "Tuesday", "Wednessday", "Thursday", "Friday", "Saturday"];


const dayString = () => {
  requests.get.user(1).appointments.then((appointments) => {
    const dayFromDb = appointments.map((data) => {
      const dateObject = new Date(data.date);
      const dayOfTheWeek = dateObject.getDay();
      const day = ["Sunday", "Monday", "Tuesday", "Wednessday", "Thursday", "Friday", "Saturday"];
      const dayName = day[dayOfTheWeek]
      console.log(dayName);
      
    })
  })
    .catch((error) => {
      console.error('Error fetching data:', error);
    });
};


dayString();

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

const Day = (props) => {
  return (
    <>
      {dayList}
    </>


  );
};

export default Day;