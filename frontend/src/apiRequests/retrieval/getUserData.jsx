import get from '../helpers/get.jsx';

export const getUserData = async (userId) => {
  const user = await get(`/api/user/${userId}`);
  const address = await get(`/api/address/${user.addressId}}`);
  const clients = await get(`/api/user/${userId}/clients`);
  const appointments = await get(`/api/user/${userId}/appointments`);
  const invoices = await get(`/api/user/${userId}/invoices`);
  const notInvoiced = await get(`/api/user/${userId}/not-invoiced`);
  const unreviewed = await get(`/api/user/${userId}/unreviewed`);
  return { user, address, clients, appointments, invoices, notInvoiced, unreviewed };
};
