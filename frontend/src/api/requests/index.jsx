/**
 * This module exports functions for creating, getting, updating, and destroying data.
 * @module api/requests
 * @property {Object} create - The module for creating data.
 * @property {Object} get - The module for retrieving data.
 * @property {Object} update - The module for updating data.
 * @property {Object} destroy - The module for deleting data.
 */

import create from './create'
import get from './get'
import update from './update'
import destroy from './destroy'

export default {
  create,
  get,
  update,
  destroy,
}
