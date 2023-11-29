/**
 * Deletes an appointment from the server.
 *
 * @param {string} appointmentId - The ID of the appointment to be deleted.
 * @returns {Promise} A promise that resolves when the appointment is successfully deleted, or rejects with an error.
 * @throws {Error} If there is an error deleting the appointment.
 */
import setDeleted from "../helpers/setDeleted";
export default (appointmentId) => {
  const url = `/api/appointment/${appointmentId}`;
  return setDeleted(url).catch((error) => {
    throw new Error("Error deleting appointment", error);
  });
};
