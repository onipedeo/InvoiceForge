/**
 * Represents a client request object.
 * @class
 */
class clientRequests {
  /**
   * Creates a new client request object.
   * @constructor
   * @param {number} id - The client ID.
   */
  constructor(id) {
    this.id = id;
  }

  /**
   * Get the appointments for the client.
   * @returns {Promise} - A promise that resolves to the appointments data.
   */
  get appointments() {
    return get(`/api/client/${this.id}/appointments`);
  }

  /**
   * Get all data for the client.
   * @returns {Promise} - A promise that resolves to the client data.
   */
  get allData() {
    return get(`/api/client/${this.id}`);
  }

  /**
   * Get the client object.
   * @returns {Promise} - A promise that resolves to the client object.
   */
  get object() {
    return get(`/api/client/${this.id}/object`);
  }

  /**
   * Get the unreviewed data for the client.
   * @returns {Promise} - A promise that resolves to the unreviewed data.
   */
  get unreviewed() {
    return get(`/api/client/${this.id}/unreviewed`);
  }

  /**
   * Get the reviewed data for the client.
   * @returns {Promise} - A promise that resolves to the reviewed data.
   */
  get reviewed() {
    return get(`/api/client/${this.id}/reviewed`);
  }

  /**
   * Get the invoices for the client.
   * @returns {Promise} - A promise that resolves to the invoices data.
   */
  get invoices() {
    return get(`/api/client/${this.id}/invoices`);
  }
}

/**
 * Creates a new client request object.
 * @param {number} id - The client ID.
 * @returns {clientRequests} - The client request object.
 */
export default function(id) {
  return new clientRequests(id);
}
