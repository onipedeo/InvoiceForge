/**
 * Creates a new appointment.
 *
 * @param {Object} appointmentData - The data for the appointment.
 * @returns {Promise} A promise that resolves to the created appointment.
 */
import create from '../helpers/create';

export default (appointmentData) => {
  return create('/api/appointment', appointmentData);
};
