import put from '../helpers/put';


export const updateAddress = async (addressId, addressData) => {
  return await put(`/api/address/${addressId}`, addressData);
};
