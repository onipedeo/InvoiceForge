const db = require('../db/db');
const { replacePropertyWithinObject, getAppointmentsByWhere, getInvoicesByWhere } = require('./helpers');

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
    let client = await db('clients').where({ id: clientId }).first();
    client = await replacePropertyWithinObject('address', client, 'client');
    const appointments = await getAppointmentsByWhere({ client_id: clientId });
    const invoices = await getInvoicesByWhere({ client_id: clientId });
    const invoiced = await getAppointmentsByWhere({ client_id: clientId, invoiced: true });
    const reviewed = await getAppointmentsByWhere({ client_id: clientId, invoiced: false, reviewed: true });
    const unReviewed = await getAppointmentsByWhere({ client_id: clientId, reviewed: false });
    return { client, appointments, invoices, invoiced, reviewed, unReviewed };
  }

  async setAddressId(clientId, addressId) {
    await db('clients').where({ id: clientId }).update({ address_id: addressId });
  }
}

module.exports = new ClientDao();
