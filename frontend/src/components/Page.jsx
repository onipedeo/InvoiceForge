import React from 'react';
import LeftSideBar from './LeftSideBar';
import '../styles/page.scss';
import AddEditModal from './AddEditModal';
import Schedule from './Schedule';



const Page = (props) => {
  return (
    <div>
      {/* <LeftSideBar/> */}
      <AddEditModal/>
      {/* <Schedule /> */}
    </div>
  );
};

export default Page;