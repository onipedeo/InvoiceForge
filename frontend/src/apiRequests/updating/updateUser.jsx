import put from '../helpers/put';
/**
 *
 * @param {obj} userData contains the form data for creating a new user
 * @returns promise to new userId
 */
export const createUser = (userId, userData) => {
  return put(`/api/user/${userId}`, userData);
};
