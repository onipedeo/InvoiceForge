import React, { useReducer, useEffect, createContext } from 'react';
import requests from '../../../api/requests';
import reducer from './reducer';

/**
 * Actions for the ReviewAppointments context.
 * @typedef {Object} Actions
 * @property {string} setUnreviewed - Action to set an appointment as unreviewed.
 * @property {string} setReviewed - Action to set an appointment as reviewed.
 * @property {string} setErrMessage - Action to set an error message.
 * @property {string} openAlert - Action to open an alert.
 * @property {string} closeAlert - Action to close an alert.
 * @property {string} openModal - Action to open a modal.
 * @property {string} closeModal - Action to close a modal.
 * @property {string} setModalAppointment - Action to set the modal appointment.
 * @property {string} moveToReviewed - Action to move an appointment to reviewed.
 * @property {string} setIsLoading - Action to set the loading state.
 */
export const actions = {
  setUnreviewed: 'SET_UNREVIEWED',
  setReviewed: 'SET_REVIEWED',
  setErrMessage: 'SET_ERR_MESSAGE',
  openAlert: 'OPEN_ALERT',
  closeAlert: 'CLOSE_ALERT',
  openModal: 'OPEN_MODAL',
  closeModal: 'CLOSE_MODAL',
  moveToReviewed: 'MOVE_TO_REVIEWED',
  setIsLoading: 'SET_IS_LOADING',
};

const initialState = {
  unreviewed: null,
  reviewed: null,
  isError: false,
  errMessage: '',
  modalIsOpen: false,
  modalAppointment: null,
  isLoading: false,
};

const ReviewAppointmentsContext = createContext();
const ReviewAppointmentsProvider = ({ children, user }) => {
  const [state, dispatch] = useReducer(reducer, initialState);

  useEffect(() => {
    dispatch({ type: 'SET_IS_LOADING', payload: true });
    Promise.all([
      requests.get.user(user.id).unreviewed,
      requests.get.user(user.id).reviewed
    ])
      .then(([unreviewed, reviewed]) => {
        dispatch({ type: actions.setReviewed, payload: reviewed });
        dispatch({ type: actions.setUnreviewed, payload: unreviewed });
      })
      .catch((e) => {
        dispatch({ type: actions.setErrMessage, payload: "Sorry, there was an issue retrieving your appointments" });
        dispatch({ type: actions.openAlert });
      });
  }, []);

  useEffect(() => {
    if (state.unreviewed && state.reviewed) {
      dispatch({ type: actions.setIsLoading, payload: false });
      dispatch({ type: actions.closeAlert });
    }
  }
    , [state.unreviewed, state.reviewed]);
    
  return (
    <ReviewAppointmentsContext.Provider value={{ state, dispatch, actions, user }}>
      {children}
    </ReviewAppointmentsContext.Provider>
  );
};

export { ReviewAppointmentsContext, ReviewAppointmentsProvider };
