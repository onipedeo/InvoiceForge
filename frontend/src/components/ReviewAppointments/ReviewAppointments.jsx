import { useContext} from 'react';
import './ReviewAppointments.scss';

import AppointmentList from './AppointmentList/AppointmentList';
// import ReviewModal from './ReviewModal';
import { ReviewAppointmentsContext } from './UseReviewAppointmentsContext';

const ReviewAppointments = ({ setDisplayPage }) => {
  const { state, dispatch, actions } = useContext(ReviewAppointmentsContext);
  const { unreviewed, reviewed, modalIsOpen, modalAppointment } = state;

  return (
    <section className='lists-container'>

      <article className='appointment-list unreviewed'>
        <h2>Confirm Your Hours</h2>
        <AppointmentList key={1} appointments={unreviewed} />
      </article>



      <article className='appointment-list reviewed'>
        <h2>Confirmed and Pending </h2>
        <AppointmentList key={2} appointments={reviewed} />
      </article>


      {modalIsOpen && <ReviewModal closeModal={closeModal} addToReviewed={addToReviewed} modalAppointment={modalAppointment} />}

    </section>

  );
};

export default ReviewAppointments;
