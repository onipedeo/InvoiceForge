import create from '../helpers/create';
/**
 *
 * @param {obj} userData contains the form data for creating a new user
 * @returns promise to new userId
 */
export const createUser = (userData) => {
  return create('/api/user', userData);
};
