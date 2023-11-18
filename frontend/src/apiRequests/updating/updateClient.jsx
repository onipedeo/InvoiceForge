import put from '../helpers/put';

export const updateClient = (clientId) => {
  return put(`/api/client/${clientId}`, clientData);
};
