import get from '../helpers/get.jsx';

export const getAppointmentsByUserId = (userId) => {
  return get(`/api/user/${userId}/appointments`);
};
