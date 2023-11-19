import create from '../helpers/create';
// updating appointments is handled by the api. Simply include an array "appointmentIds" in the invoiceData object.
export const createInvoice = (invoiceData) => {
  return create('/api/invoice', invoiceData);
};
