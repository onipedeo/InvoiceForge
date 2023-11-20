/**
 * Updates an address with the given addressId and addressData.
 * @param {string} addressId - The ID of the address to be updated.
 * @param {object} addressData - The updated address data.
 * @returns {Promise} - A promise that resolves to the updated address.
 */
import put from '../helpers/put';

export default async (addressId, addressData) => {
  return await put(`/api/address/${addressId}`, addressData);
};
