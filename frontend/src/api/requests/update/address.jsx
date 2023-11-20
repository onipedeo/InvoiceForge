import put from '../helpers/put';


export default address = async (addressId, addressData) => {
  return await put(`/api/address/${addressId}`, addressData);
};
