import create from '../helpers/create';

export const appointment = (appointmentData) => {
  return create('/api/appointment', appointmentData);
};
