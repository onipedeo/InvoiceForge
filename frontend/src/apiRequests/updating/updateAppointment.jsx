import put from '../helpers/put';

export const updateAppointment = (appointmentData) => {
  return put(`/api/appointment/${appointmentId}`, appointmentData);
};

