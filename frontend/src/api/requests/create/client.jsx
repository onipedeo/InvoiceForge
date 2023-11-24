/**
 * Creates a new client.
 *
 * @param {Object} clientData - The data of the client to be created.
 * @returns {Promise} A promise that resolves to the created client.
 */
import create from '../helpers/create';

export default (clientData) => {
  return create('/api/client', clientData);
};
