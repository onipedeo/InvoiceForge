/**
 * Deletes an address by its ID.
 *
 * @param {string} addressId - The ID of the address to be deleted.
 * @returns {Promise} A promise that resolves when the address is successfully deleted, or rejects with an error.
 * @throws {Error} If there is an error deleting the address.
 */
import setDeleted from '../helpers/setDeleted';

export default (addressId) => {
  const url = `/api/addresses/${addressId}/delete`;
  return setDeleted(url).catch((error) => {
    throw new error("Error deleting address", error);
  });
};
