/**
 * Deletes an appointment from the server.
 *
 * @param {string} appointmentId - The ID of the appointment to be deleted.
 * @returns {Promise} A promise that resolves when the appointment is successfully deleted, or rejects with an error.
 * @throws {Error} If there is an error deleting the appointment.
 */
import destroy from "../helpers/destroy";
export default async (appointmentId) => {
  const url = `http://localhost:8080/api/appointments/${appointmentId}`;
  return await destroy(url).catch((error) => {
    throw new Error("Error deleting appointment", error);
  });
}
