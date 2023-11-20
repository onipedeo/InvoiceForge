
/**
 * This module exports an object containing various API request functions for creating data.
 * Each property of the exported object represents a specific API request.
 * @module api/requests/create
 * @property {Object} address - The module for creating address data.
 * @property {Object} appointment - The module for creating appointment data.
 * @property {Object} client - The module for creating client data.
 * @property {Object} invoice - The module for creating invoice data.
 * @property {Object} user - The module for creating user data.
 */

import address from './address';
import appointment from './appointment';
import client from './client';
import invoice from './invoice';
import user from './user';

export default {
  address,
  appointment,
  client,
  invoice,
  user,
};
