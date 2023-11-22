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
    const appointments = await this.getAppointments(clientId);
    const invoices = await db('invoices').select('id','invoice_number').where({ client_id: clientId });
    const invoiced = await getAppointmentsByWhere({ client_id: clientId, invoiced: true });
    const reviewed = await this.getReviewed(clientId);
    const unReviewed = await this.getUnreviewed(clientId);
    return { client, appointments, invoices, invoiced, reviewed, unReviewed };
  }

  async setAddressId(clientId, addressId) {
    await db('clients').where({ id: clientId }).update({ address_id: addressId });
  }

  async getAppointments(clientId) {
    const appointments = await this.compileAppointmentsByWhere({ client_id: clientId });
    return appointments;
  }

  async getUnreviewed(clientId) {
    const appointments = await this.compileAppointmentsByWhere({ client_id: clientId, reviewed: false });
    return await appointments;
  }

  async getReviewed(clientId) {
    const appointments = await this.compileAppointmentsByWhere({ client_id: clientId, reviewed: true, invoiced: false });
    return await appointments;
  }
  async compileAppointmentsByWhere(where) {
    let appointments = await db('appointments').where(where);
    appointments = await appointments.map(async (appointment) => {
      appointment = await replacePropertyWithinObject('client', appointment);
      appointment.client = await replacePropertyWithinObject('address', appointment.client);
      appointment = await replacePropertyWithinObject('user', appointment);

      return appointment;
    });
  }
}

module.exports = new ClientDao();
