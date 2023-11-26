import React, { useReducer, useEffect, createContext } from 'react';
import requests from '../../api/requests';

const initialState = {
  unreviewed: null,
  reviewed: null,
  isError: false,
  errMessage: '',
  modalIsOpen: false,
  modalAppointment: null,
};

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
 */
export const actions = {
  setUnreviewed: 'SET_UNREVIEWED',
  setReviewed: 'SET_REVIEWED',
  setErrMessage: 'SET_ERR_MESSAGE',
  openAlert: 'OPEN_ALERT',
  closeAlert: 'CLOSE_ALERT',
  openModal: 'OPEN_MODAL',
  closeModal: 'CLOSE_MODAL',
  setModalAppointment: 'SET_MODAL_APPOINTMENT',
  moveToReviewed: 'MOVE_TO_REVIEWED',
};

/**
 * Reducer function for managing state in the UseReviewAppointmentsContext.
 *
 * @param {Object} state - The current state.
 * @param {Object} action - The action object containing the type and payload.
 * @returns {Object} - The new state after applying the action.
 * @throws {Error} - If the action type is unsupported.
 */
function reducer(state, action) {
  switch (action.type) {
    case 'SET_UNREVIEWED':
      return { ...state, unreviewed: action.payload };
    case 'SET_REVIEWED':
      return { ...state, reviewed: action.payload };
    case 'SET_ERR_MESSAGE':
      return { ...state, errMessage: action.payload };
    case 'OPEN_ALERT':
      return { ...state, alertIsOpen: true };
    case 'CLOSE_ALERT':
      return { ...state, alertIsOpen: false };
    case 'OPEN_MODAL':
      return { ...state, modalIsOpen: true };
    case 'CLOSE_MODAL':
      return { ...state, modalIsOpen: false };
    case 'SET_MODAL_APPOINTMENT':
      return { ...state, modalAppointment: action.payload };
    case 'MOVE_TO_REVIEWED':
      requests.update.appointment(action.payload).then((res) => {
      const newReviewed = [action.payload, ...state.reviewed];
      const newUnreviewed = state.unreviewed.filter((item) => item.id !== action.payload.id);
      return { ...state, reviewed: newReviewed, unreviewed: newUnreviewed };
      }).catch((e) => {
        dispatch({ type: 'SET_ERR_MESSAGE', payload: "Sorry, there was an issue updating your appointment" });
        dispatch({ type: 'OPEN_ALERT' });
      });
    default:
      throw new Error(`Unsupported action type: ${action.type}`);
  }
}

const ReviewAppointmentsContext = createContext();


const ReviewAppointmentsProvider = ({ children, user }) => {
  const [state, dispatch] = useReducer(reducer, initialState);

  useEffect(() => {
    Promise.all([
      requests.get.user(user.id).unreviewed,
      requests.get.user(user.id).reviewed
    ])
      .then(([unreviewed, reviewed]) => {
        dispatch({ type: 'SET_UNREVIEWED', payload: unreviewed });
        dispatch({ type: 'SET_REVIEWED', payload: reviewed });
      })
      .catch((e) => {
        dispatch({ type: 'SET_ERR_MESSAGE', payload: "Sorry, there was an issue retrieving your appointments" });
        dispatch({ type: 'OPEN_ALERT' });
      });
  }, []);

  useEffect(() => {
    if (state.isError) {
      alert(state.errMessage);
    }
  }, [state.isError]);

  return (
    <ReviewAppointmentsContext.Provider value={{ state, dispatch, user }}>
      {children}
    </ReviewAppointmentsContext.Provider>
  );
};

export { ReviewAppointmentsContext, ReviewAppointmentsProvider };
