import React from 'react';
import '../styles/schedule.scss';
import Day from './Day';

const Schedule = (props) => {
  return (
    <div className='full-scheduler'>
      <Day />
      <button id='floating-add-button'>➕</button>
    </div>
  );
};

export default Schedule;