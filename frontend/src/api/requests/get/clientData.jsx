import get from "../helpers/get";

/**
 * Fetches client data from the server.
 *
 * @param {string} clientId - The ID of the client.
 * @returns {Promise<Object>} - A promise that resolves to an object containing client data.
 */
const clientData = async (clientId) => {
  const { client, address, appointments, invoices, invoiced, reviewed, unReviewed } = await get(
    `/api/client/${clientId}`
  );
  return { client, address, appointments, invoices, invoiced, reviewed, unReviewed };
};

export default clientData