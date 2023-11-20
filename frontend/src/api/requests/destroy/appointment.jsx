import  destroy from "../helpers/destroy";

export const appointment = async (appointmentId) => {
  const url = `http://localhost:8080/api/appointments/${appointmentId}`;
  return await destroy(url).catch((error) => {
    throw new error("Error deleting appointment", error);
  });
}
