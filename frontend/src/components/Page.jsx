import { React, useState } from 'react';
import '../styles/page.scss';
import Schedule from './Schedule';
import AddEditModal from './AddEditModal';


const Page = (props) => {

  const [isModalOpen, setModalOpen] = useState(false);

  const openModal = () => {
    setModalOpen(true);
  };

  const closeModal = () => {
    setModalOpen(false);
  };

  return (
    <div>
      <div className='fullPage'>
        {isModalOpen ? (
          <>
            <AddEditModal isOpen={isModalOpen} onClose={closeModal} />
          </>
        ) : (
          <>
            <Schedule />
          </>
        )}
        <button id='floating-add-button' onClick={openModal}>➕</button>
      </div>
    </div>
  );
};

export default Page;