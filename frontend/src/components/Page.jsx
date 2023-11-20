import { React, useState } from 'react';
import '../styles/page.scss';
import Schedule from './Schedule';
import AddEditModal from './AddEditModal';
import Day from './Day';


const Page = (props) => {

  const [isModalOpen, setModalOpen] = useState(false);

  const openModal = () => {
    setModalOpen(true);
  };

  const closeModal = () => {
    setModalOpen(false);
  };

  return (

    <div className='fullPage'>
      {isModalOpen ? (
        <>
          <AddEditModal isOpen={isModalOpen} onClose={closeModal} />
        </>
      ) : (
        <>
          <Day />
        </>
      )}
      <button id='floating-add-button' onClick={openModal}>➕</button>
    </div>

  );
};

export default Page;