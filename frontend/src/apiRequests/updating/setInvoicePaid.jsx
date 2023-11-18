import put from '../helpers/put';

export const setInvoicePaid = async (invoiceId) => {
  return await put(`/api/invoice/${invoiceId}/paid`)
}
