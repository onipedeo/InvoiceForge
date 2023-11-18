import put from '../helpers/put';

export const confirmAppointmentHours = async (id, confirmedHours) => {
  return await put(`/api/appointment/${id}/hours`, {confirmedHours});
}
