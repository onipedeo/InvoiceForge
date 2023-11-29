import get from '../helpers/get'
/**
 * Represents a user's data.
 * @class
 */
class UserData {
  /**
   * Creates a new instance of UserData.
   * @constructor
   * @param {string} id - The user's ID.
   */
  constructor(id) {
    this.id = id;
  }

  /**
   * Retrieves the user's appointments.
   * @returns {Promise} - A promise that resolves to the user's appointments.
   */
  get appointments() {
    return get(`/api/user/${this.id}/appointments`);
  }

  /**
   * Retrieves all data related to the user.
   * @returns {Promise} - A promise that resolves to all user data.
   */
  get allData() {
    return get(`/api/user/${this.id}`);
  }

  /**
   * Retrieves the user's clients.
   * @returns {Promise} - A promise that resolves to the user's clients.
   */
  get clients() {
    return get(`/api/user/${this.id}/clients`);
  }

  /**
   * Retrieves the user's object.
   * @returns {Promise} - A promise that resolves to the user's object.
   */
  get object() {
    return get(`/api/user/${this.id}/object`);
  }

  /**
   * Retrieves the user's unreviewed data.
   * @returns {Promise} - A promise that resolves to the user's unreviewed appointments.
   */
  get unreviewed() {
    return get(`/api/user/${this.id}/unreviewed`);
  }

  /**
   * Retrieves the user's reviewed data.
   * @returns {Promise} - A promise that resolves to the user's reviewed appointments.
   */
  get reviewed() {
    return get(`/api/user/${this.id}/reviewed`);
  }

  /**
   * Retrieves the user's invoices.
   * @returns {Promise} - A promise that resolves to the user's invoices.
   */
  get invoices() {
    return get(`/api/user/${this.id}/invoices`);
  }

}

/**
 * Creates a new instance of UserData.
 * @param {string} id - The user's ID.
 * @returns {UserData} - The UserData instance.
 */
export default function(id) {
  return new UserData(id);
}
