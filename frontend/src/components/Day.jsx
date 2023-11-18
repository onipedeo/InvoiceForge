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

const Day = (props) => {
  return (
    <>
      {dayList}
    </>


  );
};

export default Day;