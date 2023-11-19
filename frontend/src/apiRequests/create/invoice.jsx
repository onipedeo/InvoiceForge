import create from '../helpers/create';
// updating appointments is handled by the api. Simply include an array "appointmentIds" in the invoiceData object.
export const invoice = (invoiceData) => {
  return create('/api/invoice', invoiceData);
};
