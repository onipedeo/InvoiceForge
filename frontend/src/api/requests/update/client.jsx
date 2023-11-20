import put from '../helpers/put';

export default client = async (clientId, clientData) => {
  return await put(`/api/client/${clientId}`, clientData);
};
