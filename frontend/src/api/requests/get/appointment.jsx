import get from "../helpers/get";

/**
 * Fetches appointment data from the server.
 *
 * @param {string} appointmentId - The ID of the appointment to fetch.
 * @returns {Promise<Object>} - A promise that resolves to the appointment data.
 */
<<<<<<< HEAD
const appointment = async (appointmentId) => {
  const data = await get(
=======
export default (appointmentId) => {
  const data = get(
>>>>>>> master
    `/api/appointment/${appointmentId}`
  );
    
  return data;
};

export default appointment
