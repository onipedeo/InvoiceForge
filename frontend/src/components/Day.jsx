import React from 'react';
import '../styles/day.scss';
import Appointments from './Appointments';


const day = ["Sunday", "Monday", "Tuesday", "wednessday", "Thursday", "Friday", "Saturday"];


const dayList = day.map((day, index) => {

  return (
    <div key={index} className='day-container'>
      <div className='day-housing'>
        {/* <h4>Hello Day Component</h4> */}
        <div className='single-day'>
          <div className='days-bar'>
            {day}
          </div>
          <Appointments />
        </div>
      </div>
    </div>
  )
})

const Day = () => {
  return (
    <div className='day-container'>
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


    </div>

  );
};

export default Day;