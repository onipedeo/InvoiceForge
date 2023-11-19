import put from '../helpers/put';

export const createUser = async (userId, userData) => {
  return await put(`/api/user/${userId}`, userData);
};
