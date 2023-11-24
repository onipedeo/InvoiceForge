import get from "../helpers/get";

/**
 * Fetches appointment data from the server.
 *
 * @param {string} appointmentId - The ID of the appointment to fetch.
 * @returns {Promise<Object>} - A promise that resolves to the appointment data.
 */
export default (appointmentId) => {
  const data = get(
    `/api/appointment/${appointmentId}`
  );
    
  return data;
};


