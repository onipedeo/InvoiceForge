const db = require('../db/db');

class ClientDao {
  async create(userId, name, companyName, email, phone, clientRateCents) {
    const id = await db('clients').insert({
      user_id: userId,
      name,
      company_name: companyName,
      email,
      phone,
      client_rate_cents: clientRateCents
    }).returning('id');

    return id;
  }

  async update(clientId, name, companyName, email, phone, clientRateCents) {
    const id = await db('clients').where({ id: clientId }).update({
      name,
      company_name: companyName,
      email,
      phone,
      client_rate_cents: clientRateCents
    }).returning('id');

    return id;
  }

  async getById(clientId) {
    const client = await db('clients').where({ id: clientId }).first();
    const address = await db('addresses').where({ id: client.address_id }).first();
    const appointments = await db('appointments').where({ client_id: clientId });
    const invoices = await db('invoices').where({ client_id: clientId });
    const invoiced = await db('appointments').where({ client_id: clientId, invoiced: true });
    const reviewed = await db('appointments').where({ client_id: clientId, invoiced: false, reviewed: true });
    const notReviewed = await db('appointments').where({ client_id: clientId, reviewed: false });
    return { client, address, appointments, invoices, invoiced, reviewed, notReviewed };
  }

  async setAddressId(clientId, addressId) {
    await db('clients').where({ id: clientId }).update({ address_id: addressId });
  }
}

module.exports = new ClientDao();
