import { useContext, useEffect } from 'react';
import AppointmentList from './AppointmentList/AppointmentList';
import { UseReviewAppointmentsContext } from './Context/UseReviewAppointmentsContext';
import { Modal } from 'react-bootstrap';

import 'bootstrap/dist/css/bootstrap.min.css';
import './ReviewAppointments.scss';

/**
 * Renders the ReviewAppointments component.
 *
 * @param {Object} props - The component props.
 * @param {Function} props.setDisplayPage - The function to set the display page.
 * @returns {JSX.Element} The rendered ReviewAppointments component.
 */
const ReviewAppointments = ({ setDisplayPage }) => {
  const { state, dispatch, actions } = UseReviewAppointmentsContext();
  const { modalIsOpen } = state;

  useEffect(() => {
    dispatch({ type: actions.setIsLoading, payload: true });
  }, []);

  return (
    <Modal className="review-appointments" show={modalIsOpen} onHide={() => dispatch({ type: actions.closeModal })}>
      <Modal.Header closeButton>
        <Modal.Title>Confirm Your Hours</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <div className='col'>
          <article className='row card table-container'>
            <AppointmentList key={1} mode={'unreviewed'} setDisplayPage={setDisplayPage} />
          </article>
        </div>
      </Modal.Body >
    </Modal >
  );
};

export default ReviewAppointments;
