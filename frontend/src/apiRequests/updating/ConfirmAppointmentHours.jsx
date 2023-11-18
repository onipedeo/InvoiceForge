import put from '../helpers/put';

export const confirmAppointmentHours = (id, confirmedHours) => {
  return put(`/api/appointment/${id}/hours`, {confirmedHours});
}
