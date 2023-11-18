import React from 'react';
import '../styles/leftSideBar.scss'

const LeftSideBar = (props) => {
  return (
    <div className='container'>
      <sidebar className='sidebar'>
        {/* <h1>Hello left side bar</h1> */}

        <div>
          <h1>Weeks</h1>
        </div>
        <div>
          <p>Jan 20 - Jan 27</p>
        </div>
        <div>
          <p>Jan 20 - Jan 27</p>
        </div>
        <div>
          <p>Jan 20 - Jan 27</p>
        </div>
        <div>
          <p>Jan 20 - Jan 27</p>
        </div>
        <div>
          <p>Jan 20 - Jan 27</p>
        </div>
        <div>
          <p>Jan 20 - Jan 27</p>
        </div>
        {/* <table className='sidebar-list'>
       <tr>
       <th>Weeks</th>
       </tr>
       <tr>
       <td>Jan 20 - Jan 27</td>
       </tr>
       
       <tr>
       <td>Jan 20 - Jan 27</td>
       </tr>
       
       <tr>
       <td>Jan 20 - Jan 27</td>
       </tr>
       
       <tr>
       <td>Jan 20 - Jan 27</td>
       </tr>
       
       <tr>
       <td>Jan 20 - Jan 27</td>
       </tr>
       
      </table> */}

      </sidebar>
    </div>
  );
};

export default LeftSideBar;