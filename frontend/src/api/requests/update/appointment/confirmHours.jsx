import put from '../../helpers/put';

/**
 * Updates the confirmed hours for an appointment.
 *
 * @param {string} id - The ID of the appointment.
 * @param {number} hoursNum - The number of hours to be confirmed.
 * @returns {Promise} - A promise that resolves to the updated appointment.
 * @throws {Error} - If there is an error confirming the hours.
 */
export default (id, hoursNum) => {
  return put(`/api/appointment/${id}/hours`, { confirmedHours: hoursNum }).catch((error) => {
    throw new Error("Error confirming hours", error);
  });
};
