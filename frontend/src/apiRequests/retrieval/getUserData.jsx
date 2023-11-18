import get from '../helpers/get.jsx';

export const getUserData = async (userId) => {
  //exctract userId and addressId from user object

  const { address, clients, appointments, invoices, notInvoiced, unreviewed }  = await get(`/api/user/${userId}`);
  return { address, clients, appointments, invoices, notInvoiced, unreviewed };
};
