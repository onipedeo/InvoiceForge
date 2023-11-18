import put from '../helpers/put';

export const updateClient = (clientId, clientData) => {
  return put(`/api/client/${clientId}`, clientData);
};
