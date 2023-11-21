import get from "../helpers/get";

/**
 * Fetches appointment data from the server.
 *
 * @param {string} appointmentId - The ID of the appointment to fetch.
 * @returns {Promise<Object>} - A promise that resolves to the appointment data.
 */
const appointment = async (appointmentId) => {
  const data = await get(
    `/api/appointment/${appointmentId}`
  );
    
  return data;
};

export default appointment
