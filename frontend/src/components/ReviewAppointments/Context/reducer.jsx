/**
* Reducer function for managing state in the UseReviewAppointmentsContext.
*
* @param {Object} state - The current state.
* @param {Object} action - The action object containing the type and payload.
* @returns {Object} - The new state after applying the action.
* @throws {Error} - If the action type is unsupported.
*/
export default function reducer(state, action) {
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
   case 'SUMBIT_PUT_REQUEST':
     requests.update.appointment(action.payload).then((res) => {
     }).catch((e) => {
       dispatch({ type: 'SET_ERR_MESSAGE', payload: "Sorry, there was an issue updating your appointment" });
       dispatch({ type: 'OPEN_ALERT' });
     });
   case 'MOVE_TO_REVIEWED':
     const newReviewed = [action.payload, ...state.reviewed];
     const newUnreviewed = state.unreviewed.filter((item) => item.id !== action.payload.id);
     return { ...state, reviewed: newReviewed, unreviewed: newUnreviewed, isLoading: false };
    case 'SET_IS_LOADING':
      return { ...state, isLoading: action.payload };
   default:
     throw new Error(`Unsupported action type: ${action.type}`);
 }
}
