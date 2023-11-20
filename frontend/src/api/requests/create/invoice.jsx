import create from '../helpers/create';
// updating appointments is handled by the api. Simply include an array "appointmentIds" in the invoiceData object.

export default (appointmentIds) => {
  return create('/api/invoice', appointmentIds);
};
