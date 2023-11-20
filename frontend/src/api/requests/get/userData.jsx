import get from '../helpers/get.jsx';

/**
 * Fetches user data from the server.
 * @param {string} userId - The ID of the user.
 * @returns {Promise<Object>} - A promise that resolves to an object containing user data.
 */
export const userData = async (userId) => {
  const { address, clients, appointments, invoices, reviewed, unreviewed } = await get(`/api/user/${userId}`);
  return { address, clients, appointments, invoices, reviewed, unreviewed };
};
