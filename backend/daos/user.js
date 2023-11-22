const { Client } = require('knex');
const db = require('../db/db');

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

  async getById(id) {
    const user = await db('users').join('addresses', 'users.address_id', '=', 'address.id').where({ id }).first();
    const clients = await db('clients').where({ user_id: id });
    const appointments = await db('appointments').where({ user_id: id });
    const invoices = await db('invoices')
      .join('appointments', 'invoices.id', '=', 'appointments.invoice_id')
      .join('users', 'invoices.user_id', '=', 'users.id')
      .join('clients', 'invoices.client_id', '=', 'clients.id')
      .join('addresses', 'clients.address_id', '=', 'addresses.id')
      .where({ user_id: id });
    const reviewed = await db('appointments').where({ user_id: id, invoiced: false, reviewed: true });
    const unReviewed = await db('appointments').where({ user_id: id, reviewed: false });

    return { user, clients, appointments, invoices, reviewed, unReviewed };
  }

  async getByEmail(email) {
    return await db('users').where({ email }).first();
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
  const invoices = await db('invoices').where({ 'user_id': id });

  const results = await Promise.all(invoices.map(async (invoice) => {
    const { client_id, user_id, ...invoiceWithoutClientId } = invoice;
    const { address_id, user_id: discard,  ...client } = await db('clients').where({ 'id': client_id }).first();
    const address = await db('addresses').where({ 'id': address_id }).first();

    const dirtyAppointments = await db('appointments').where({ 'invoice_id': invoice.id });
    const appointments = dirtyAppointments.map((appointment) => {
      const { invoice_id, user_id, client_id, ...rest } = appointment;
      return rest;
    });

    return {
      ...invoiceWithoutClientId,
      client: {
        ...client,
        address
      },
      appointments,
    };
  }));

  return results;
}


}

module.exports = new UserDao();
