const db = require('../db/db');

class ClientDao {
  async create(userId, name, companyName, email, phone, clientRateCents) {
    const [id] = await db('clients').insert({
      user_id: userId,
      name,
      company_name: companyName,
      email,
      phone,
      client_rate_cents: clientRateCents
    }).returning('id');
    return clientId;
  }

  async getById(clientId) {
    const client = await db('clients').where({ id: clientId }).first();
    return client;
  }

  async getAppointments(clientId) {
    const appointments = await db('appointments').where({ client_id: clientId });
    return appointments;
  }

  async getInvoices(clientId) {
    const invoices = await db('invoices').where({ client_id: clientId });
    return invoices;
  }

  async setAddress(clientId, addressId) {
    await db('clients').where({ id: clientId }).update({ address_id: addressId });
  }

}

module.exports = new ClientDao();
