import setPaid from './setPaid';

/**
 * Updates the invoice with the specified ID using the provided form data.
 * If the 'paid' property is present in the form data, it updates the paid status of the invoice.
 *
 * @param {string} id - The ID of the invoice to be updated.
 * @param {object} formData - The form data containing the updated invoice details.
 * @returns {Promise} - A promise that resolves when the update is successful.
 * @throws {Error} - If the 'paid' property is not present in the form data.
 */
export default (id, formData) => {
  if (formData.paid !== undefined && formData.paid !== null) {
    return setPaid(id, formData.paid);
  }
  throw new Error("No update method for whole invoice, only for paid status");
};
