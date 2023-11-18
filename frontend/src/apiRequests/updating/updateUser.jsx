import put from '../helpers/put';
/**
 *
 * @param {obj} userData contains the form data for creating a new user
 * @returns new userId
 */
export const createUser = async (userId, userData) => {
  return await put(`/api/user/${userId}`, userData);
};
