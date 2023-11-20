import get from "../helpers/get";

export const clientData = async (clientId) => {
  const { client, address, appointments, invoices, invoiced, reviewed, unReviewed } = await get(
    `/api/client/${clientId}`
  );
  return { client, address, appointments, invoices, invoiced, reviewed, unReviewed };
};
