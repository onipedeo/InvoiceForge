import { useContext, useEffect } from 'react';
import AppointmentList from './AppointmentList/AppointmentList';
import { ReviewAppointmentsContext } from './Context/UseReviewAppointmentsContext';
import AlertModal from './Modals/AlertModal';
import { Modal } from 'react-bootstrap';

import 'bootstrap/dist/css/bootstrap.min.css';
import './ReviewAppointments.scss';

const ReviewAppointments = ({ setDisplayPage }) => {
  const { state, dispatch, actions } = useContext(ReviewAppointmentsContext);
  const { unreviewed, modalIsOpen, modalAppointment, alertIsOpen, errMessage } = state;

  useEffect(() => {
    dispatch({ type: actions.openModal, payload: true });
    dispatch({ type: actions.setIsLoading, payload: true });
  }, []);

  return (
    <Modal className="review-appointments" show={modalIsOpen} onHide={() => dispatch({ type: actions.closeModal })}>
      <Modal.Header closeButton>
        <Modal.Title>Confirm Your Hours</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <div className='col'>
          <article className='row card'>
            <AppointmentList key={1} mode={'unreviewed'} />

          </article>
        </div>
        <AlertModal />

      </Modal.Body >
    </Modal >
  );
};

export default ReviewAppointments;
