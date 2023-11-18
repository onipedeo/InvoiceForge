import get from '../helpers/get.jsx';

export const getUserData = async (userId) => {
  const clients = await get(`/api/user/${userId}/clients`);
  const appointments = await get(`/api/user/${userId}/appointments`);
  const invoices = await get(`/api/user/${userId}/invoices`);
  const notInvoiced = await get(`/api/user/${userId}/not-invoiced`);
  const unreviewed = await get(`/api/user/${userId}/unreviewed`);
  return { clients, appointments, invoices, notInvoiced, unreviewed };
}
