import confirmHours from "./confirmHours";

import put from '../../helpers/put';

export default async (id, formData) => {

  // If the form has confirmed hours, use the confirmHours function
  if (formData.confirmedHours) {
    return await confirmHours(id, formData.confirmedHours);
  }
  // Otherwise, update the appointment with the formData
  return await put(`/api/appointment/${id}`, formData).catch((error) => {
    throw new error("Error updating appointment", error);
  });
};
