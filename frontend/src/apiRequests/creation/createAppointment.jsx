import create from '../helpers/create';

export const createAppointment = (appointmentData) => {
  return create('/api/appointment', appointmentData);
};
