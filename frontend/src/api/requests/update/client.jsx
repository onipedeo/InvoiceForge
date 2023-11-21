import put from '../helpers/put';

/**
 * Updates a client with the given client ID and data.
 *
 * @param {string} clientId - The ID of the client to update.
 * @param {object} clientData - The updated data for the client.
 * @returns {Promise} - A promise that resolves to the updated client data.
 */
export default (clientId, clientData) => {
  return put(`/api/client/${clientId}`, clientData);
};
