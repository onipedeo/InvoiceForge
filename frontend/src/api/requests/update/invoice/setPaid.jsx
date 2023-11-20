import put from '../../helpers/put';

/**
 * Sets the paid status of an invoice.
 *
 * @param {string} invoiceId - The ID of the invoice.
 * @param {boolean} bool - The paid status to be set.
 * @returns {Promise} A promise that resolves to the updated invoice object.
 * @throws {Error} If there is an error setting the paid status.
 */
export default async (invoiceId, bool) => {
  return await put(`/api/invoice/${invoiceId}/paid`, {bool}).catch((error) => {
    throw new Error("Error setting invoice paid status", error);
  });
}
