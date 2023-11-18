import get from '../helpers/get.jsx';

export const getUserData = async (userId) => {
  const { address, clients, appointments, invoices, notInvoiced, unreviewed }  = await get(`/api/user/${userId}`);
  return { address, clients, appointments, invoices, notInvoiced, unreviewed };
};
