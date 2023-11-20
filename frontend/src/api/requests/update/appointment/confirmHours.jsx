import put from '../../helpers/put';

export default confirmHours = async (id, hoursNum) => {
  return await put(`/api/appointment/${id}/hours`, {hoursNum}).catch((error) => {
    throw new error("Error confirming hours", error);
  });
}
