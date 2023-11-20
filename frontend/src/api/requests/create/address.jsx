import create from '../helpers/create';
/**
 *
 * @param {*} addressData
 * @returns promise to new addressId
 *
 * @description
 * Assigning addresses to user or client can be handled by the api. Simply include "userId" or "clientId" key in the addressData object.
 */
export default (addressData) => {
  return create('/api/address', addressData);
};
