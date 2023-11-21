/**
 * Deletes a client from the server.
 * @param {string} clientId - The ID of the client to be deleted.
 * @returns {Promise} - A promise that resolves when the client is successfully deleted, or rejects with an error.
 * @throws {Error} - If there is an error deleting the client.
 */
import destroy from "../helpers/destroy";

export default (clientId) => {
  const url = `/api/clients/${clientId}`;
  return destroy(url).catch((error) => {
    throw new error("Error deleting client");
  });
};
