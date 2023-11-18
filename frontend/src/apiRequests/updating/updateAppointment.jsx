import put from '../helpers/put';

export const updateAppointment = async (appointmentData) => {
  return await put(`/api/appointment/${appointmentId}`, appointmentData);
};
