/**
 * This file exports an object containing destructuring assignments of various request modules.
 * Each module represents a specific API request for 'deleting' data.
 * @module setDeleted
 * @property {Object} address - The module for destroying address data.
 * @property {Object} appointment - The module for destroying appointment data.
 * @property {Object} client - The module for destroying client data.
 */
import address from './address';
import appointment from './appointment';
import client from './client';

export default {
  address,
  appointment,
  client,
};
