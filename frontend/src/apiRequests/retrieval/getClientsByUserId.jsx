import get from '../helpers/get.jsx';

export const getClientsByUserId = (userId) => {
  return get(`/api/user/${userId}/clients}`)
};
