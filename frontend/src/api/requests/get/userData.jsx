import get from '../helpers/get.jsx';

/**
 * Fetches user data from the server.
 * @param {string} userId - The ID of the user.
 * @returns {Promise<Object>} - A promise that resolves to an object containing user data.
 */
export default function  (userId) {
  return get(`/api/user/${userId}`);

};

