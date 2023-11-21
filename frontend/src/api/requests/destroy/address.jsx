/**
 * Deletes an address by its ID.
 *
 * @param {string} addressId - The ID of the address to be deleted.
 * @returns {Promise} A promise that resolves when the address is successfully deleted, or rejects with an error.
 * @throws {Error} If there is an error deleting the address.
 */
import destroy from '../helpers/destroy';

export default (addressId) => {
  const url = `http://localhost:8080/api/addresses/${addressId}`;
  return destroy(url).catch((error) => {
    throw new error("Error deleting address", error);
  });
};
