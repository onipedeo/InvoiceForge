import get from '../helpers/get.jsx';

export const userData = async (userId) => {
  const { address, clients, appointments, invoices, reviewed, unreviewed } = await get(`/api/user/${userId}`);
  return { address, clients, appointments, invoices, reviewed, unreviewed };
};
