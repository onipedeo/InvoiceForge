import put from '../helpers/put';

export default async (clientId, clientData) => {
  return await put(`/api/client/${clientId}`, clientData);
};
