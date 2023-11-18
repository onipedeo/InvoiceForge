import put from '../helpers/put';

export const updateClient = async (clientId, clientData) => {
  return await put(`/api/client/${clientId}`, clientData);
};
