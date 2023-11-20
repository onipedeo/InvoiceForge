import put from '../helpers/put';

export default async (userId, userData) => {
  return await put(`/api/user/${userId}`, userData);
};
