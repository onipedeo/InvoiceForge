import get from "../helpers/get";

export const appointment = async (appointmentId) => {
  const data = await get(
    `/api/appointment/${appointmentId}`
  );

  return data;
};
