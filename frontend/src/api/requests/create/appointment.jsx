import create from '../helpers/create';

export default (appointmentData) => {
  return create('/api/appointment', appointmentData);
};
