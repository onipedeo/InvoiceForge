import create from '../helpers/create';

// updating appointments is handled by the api. Simply include an array "appointmentIds" in the invoiceData object.
export const createInvoice = async (invoiceData) => {
  return await create('/api/invoice', invoiceData);
};
