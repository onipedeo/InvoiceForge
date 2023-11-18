import { get } from "../helpers/get";

export const getInvoicesByUserId = (userId) => {
  return get(`/api/user/${userId}/invoices`);

};
