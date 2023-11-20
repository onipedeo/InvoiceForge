import put from '../../helpers/put';

export default async (invoiceId, bool) => {
  return await put(`/api/invoice/${invoiceId}/paid`, {bool}).catch((error) => {
    throw new error("Error setting invoice paid status", error);
  });
}