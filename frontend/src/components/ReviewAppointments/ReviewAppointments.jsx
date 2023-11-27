import { useContext, useEffect } from 'react';
import AppointmentList from './AppointmentList/AppointmentList';
import { ReviewAppointmentsContext } from './Context/UseReviewAppointmentsContext';
import ConfirmationWizard from './Modals/confirmationWizard/confirmationWizard';
import AlertModal from './Modals/AlertModal';

import 'bootstrap/dist/css/bootstrap.min.css';
import './ReviewAppointments.scss';

const ReviewAppointments = ({ setDisplayPage }) => {
  const { state, dispatch, actions } = useContext(ReviewAppointmentsContext);
  const { unreviewed, reviewed, modalIsOpen, modalAppointment, isError, errMessage} = state;

  useEffect(() => {
    dispatch({ type: actions.setIsLoading, payload: { isLoading: true } });
  }, []);
    return(
      <section className='container'>
        <div className='col'>
          <article className='row card'>
            <h2>Confirm Your Hours</h2>
            <div className="table-container">
              <AppointmentList key={1} mode={'unreviewed'} />
            </div>
          </article>
          <article className='row card'>
            <h2>Confirmed and Pending </h2>
            <div className="table-container">
              <AppointmentList key={2} mode={'reviewed'} />
            </div>
          </article>
        </div>
        {modalIsOpen && <ReviewModal modalAppointment={modalAppointment} />}
        {isError && <AlertModal errMessage={errMessage} />}
      </section>
    );
};

export default ReviewAppointments;
