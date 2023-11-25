const db = require('../db/db');
const { replacePropertyWithinObject, getAppointmentsByWhere, getInvoicesByWhere } = require('./helpers');
const humps = require('humps');
class UserDao {
  async create(firstName, lastName, companyName, email, phone, password, standardRateCents) {
    const [id] = await db('users').insert({
      first_name: firstName,
      last_name: lastName,
      company_name: companyName,
      email,
      phone,
      password,
      standard_rate_cents: standardRateCents
    }).returning('id');

    return id;
  }

  async getObject(id) {
    let user = await db('users').where({ id }).first();
    user = await replacePropertyWithinObject('address', user);
    return humps.camelizeKeys(user);
  }

  async getById(id) {
    const user = await this.getObject(id);
    const clients = await this.getClients(id);
    const appointments = await getAppointmentsByWhere({ user_id: id });
    const invoices = await this.getInvoices(id);
    const reviewed = await getAppointmentsByWhere({ user_id: id, reviewed: true, invoiced: false });
    const unreviewed = await this.getUnreviewed(id);

    return { user, clients, appointments, invoices, reviewed, unreviewed };
  }

  async getByEmail(email) {
    let user = await db('users').where({ email }).first();
    user = await replacePropertyWithinObject('address', user);
    return humps.camelizeKeys(user);
  }

  async edit(id, firstName, lastName, companyName, email, phone, password, standardRateCents) {
    await db('users').where({ id }).update({
      first_name: firstName,
      last_name: lastName,
      company_name: companyName,
      email,
      phone,
      password,
      standard_rate_cents: standardRateCents
    });
  }

  async getInvoices(id) {
    const invoices = await getInvoicesByWhere({ 'user_id': id });
    return humps.camelizeKeys(invoices);
  }

  async getUnreviewed(id) {
    const unreviewed = await getAppointmentsByWhere({ user_id: id, reviewed: false });
    return humps.camelizeKeys(unreviewed);
  }

  async getAppointments(id) {
    let appointments = await db('appointments').where({ user_id: id });
    console.log(appointments)
    appointments = await Promise.all(appointments.map(async (appointment) => {
      console.log(appointment.client_id)
      appointment = await replacePropertyWithinObject('client', appointment);
      appointment.client = await replacePropertyWithinObject('address', appointment.client);
      return appointment;


    }));
    return humps.camelizeKeys(appointments);
  }

  async getReviewed(id) {
    const reviewed = await getAppointmentsByWhere({ user_id: id, reviewed: true, invoiced: false })
    return humps.camelizeKeys(reviewed);
  }

  async getClients(id) {
    const dirtyClients = await db('clients').where({ user_id: id, deleted: false }).orderBy('updated_at', 'desc');
    const clients = await Promise.all(dirtyClients.map(async (client) => {
      return await replacePropertyWithinObject('address', client);
    }
    ));

    return humps.camelizeKeys(clients);
  }
}
module.exports = new UserDao();
