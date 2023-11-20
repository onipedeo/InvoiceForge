import React from 'react';
import '../styles/leftSideBar.scss'

const week = [
  "Nov-20 - Nov-26",
  "Nov-26 - Dec-03",
  "Dec-04 - Dec10",
  "Dec-11 - Dec-16",
  "Dec-17 - Dec-24",
  "Dec-25 - Dec-31"
];

const iterateWeek = week.map((week, index) => (
  < li key={index}>
    {week}
  </li >
)
);


const LeftSideBar = (props) => {
  return (
    
      <div className='sidebar'>
        <ul>
          {iterateWeek}
        </ul>
      </div>
    
  );
};

export default LeftSideBar;