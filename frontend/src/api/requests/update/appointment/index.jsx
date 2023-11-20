import confirmHours from "./confirmHours";

import put from '../../helpers/put';

/**
 * Updates an appointment with the given ID using the provided form data.
 * If the form has confirmed hours, it uses the confirmHours function.
 * Otherwise, it updates the appointment with the formData.
 *
 * @param {string} id - The ID of the appointment to update.
 * @param {object} formData - The form data to update the appointment with.
 * @returns {Promise} - A promise that resolves to the updated appointment.
 * @throws {Error} - If there is an error updating the appointment.
 */
export default async (id, formData) => {
  if (formData.confirmedHours) {
    return await confirmHours(id, formData.confirmedHours);
  }
  return await put(`/api/appointment/${id}`, formData).catch((error) => {
    throw new Error("Error updating appointment", error);
  });
};
