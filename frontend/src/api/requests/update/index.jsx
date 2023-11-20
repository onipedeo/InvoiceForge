/**
 * This module exports an object containing update request functions for various entities.
 * @module api/requests/update
 * @property {Object} address - The module for updating address data.
 * @property {Object} appointment - The module for updating appointment data.
 * @property {Object} client - The module for updating client data.
 * @property {Object} invoice - The module for updating invoice data.
 * @property {Object} user - The module for updating user data.
 * 
 */

import address from "./address";
import appointment from "./appointment";
import client from "./client";
import user from "./user";
import invoice from "./invoice";

export default {
  address,
  appointment,
  client,
  user,
  invoice,
};
