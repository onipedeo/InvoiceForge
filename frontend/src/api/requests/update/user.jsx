import put from '../helpers/put';

/**
 * Updates a user's data.
 *
 * @param {string} userId - The ID of the user.
 * @param {object} userData - The updated user data.
 * @returns {Promise} - A promise that resolves to the updated user data.
 */
export default async (userId, userData) => {
  return await put(`/api/user/${userId}`, userData);
};
