import get from "../helpers/get";

export const getAppointmentData = async (appointmentId) => {
  const appointment = await get(
    `/api/appointment/${appointmentId}`
  );

  return { appointment };
};
