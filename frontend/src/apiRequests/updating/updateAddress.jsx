import put from '../helpers/put';


export const updateAddress = (addressId, addressData) => {
  return put(`/api/address/${addressId}`, addressData);
};
