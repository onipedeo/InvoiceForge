import put from '../helpers/put';

export default user = async (userId, userData) => {
  return await put(`/api/user/${userId}`, userData);
};
