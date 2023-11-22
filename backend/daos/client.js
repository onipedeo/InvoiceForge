const { replacePropertyWithinObject, getAppointmentsByWhere, getInvoicesByWhere } = require('./helpers');
const db = require('../db/db');

class ClientDao {
  async create(userId, name, companyName, email, phone, clientRateCents) {
    const id = await db('clients')
      .insert({
        user_id: userId,
        name,
        company_name: companyName,
        email,
        phone,
        client_rate_cents: clientRateCents
      })
      .returning('id');

    return id;
  }

  async update(clientId, name, companyName, email, phone, clientRateCents) {
    const id = await db('clients')
      .where({ id: clientId })
      .update({
        name,
        company_name: companyName,
        email,
        phone,
        client_rate_cents: clientRateCents
      })
      .returning('id');

    return id;
  }

  async getById(clientId) {
    let client = await db('clients')
      .where({ id: clientId })
      .first();
    client = await replacePropertyWithinObject('address', client, 'client');
    const appointments = await this.getAppointments(clientId);
    const invoices = await db('invoices')
      .select('id', 'invoice_number')
      .where({ client_id: clientId });
    const invoiced = await getAppointmentsByWhere({ client_id: clientId, invoiced: true });
    const reviewed = await this.getReviewed(clientId);
    const unReviewed = await this.getUnreviewed(clientId);
    return { client, appointments, invoices, invoiced, reviewed, unReviewed };
  }

  async setAddressId(clientId, addressId) {
    await db('clients')
      .where({ id: clientId })
      .update({ address_id: addressId });
  }

  async getAppointments(clientId) {
    const appointments = await this.simpleAppoiontmentByWhere({ client_id: clientId });
    return await appointments;
  }

  async getUnreviewed(clientId) {
    const appointments = await this.simpleAppoiontmentByWhere({ client_id: clientId, reviewed: false });
    return await appointments;
  }

  async getReviewed(clientId) {
    const appointments = await this.simpleAppoiontmentByWhere({ client_id: clientId, reviewed: true, invoiced: false });
    return await appointments;
  }

  async simpleAppoiontmentByWhere(where) {
    return await db('appointments').where(where);
  }
}

module.exports = new ClientDao();
