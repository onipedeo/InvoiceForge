import get from "../helpers/get";

export const getClientData = async (clientId) => {
  const { client, address, appointments, invoices, invoiced, reviewed, notReviewed} = await get(
    `/api/client/${clientId}`
  );
  return { appointments, invoiced, reviewed, notReviewed, invoices, client, address };
};
