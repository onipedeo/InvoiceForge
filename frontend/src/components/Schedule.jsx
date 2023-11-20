import React  from 'react';
import '../styles/schedule.scss';
import Day from './Day';



const Schedule = (props) => {
  
  return (
    <div className='full-scheduler'>
      <Day />
    </div>
  );
};

export default Schedule;