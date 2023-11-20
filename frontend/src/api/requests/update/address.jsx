import put from '../helpers/put';


export default async (addressId, addressData) => {
  return await put(`/api/address/${addressId}`, addressData);
};
