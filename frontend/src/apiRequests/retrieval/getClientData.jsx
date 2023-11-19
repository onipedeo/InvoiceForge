import { ACTIONS } from "../../hooks/useClientData";
import { get } from "../helpers/get";

export const getClientData = async (clientId) => {
  const client = await get(
    `/api/client/${clientId}`
  )
  const address = await get(
    `api/address/${client.addressId}`
  )

  const notInvoiced = await get(
    `/api/client/${clientId}/not-invoiced`
  )

  const unreviewed = await get(
    `/api/client/${clientId}/unreviewed`
  )

  const invoices = await get(
    `/api/client/${clientId}/invoices`
  )

  return {notInvoiced, unreviewed, invoices, client, address};
};
