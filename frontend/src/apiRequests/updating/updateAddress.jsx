import put from '../helpers/put';
/**
 *
 * @param {*} addressData
 * @returns promise to update addressId
 *
 * @description
 * This function is used to update an address.
 */
export const createAddress = (addressData) => {
  return put('/api/address', addressData);
};
