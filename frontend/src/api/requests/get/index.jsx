/**
 * This module exports an object containing various API request functions for retrieving data.
 * @module api/requests/get
 * @property {Object} appointmentData - The module for retrieving appointment data.
 * @property {Object} clientData - The module for retrieving client data.
 * @property {Object} userData - The module for retrieving user data.
 * @property {Object} idByEmail - The module for retrieving user IDs by email.
 */

import appointmentData from './appointment';
import clientData from './clientData';
import userData from './userData';
import idByEmail from './idByEmail';

export default {
  appointmentData,
  clientData,
  userData,
  idByEmail,
};
