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
    return await db('users').where({ id }).first();
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

  getClients(id) {
    return db('clients').where({ user_id: id });
  }

  getAppointments(id) {
    return db('appointments').where({ user_id: id }.sort({ start_time: 'desc' }));
  }

  getAppointmentsInReview(id) {
    return db('appointments').where({ user_id: id, reviewed: false }.sort({ start_time: 'asc' }));
  }

  getInvoices(id) {
    return db('invoices').where({ user_id: id });
  }

  getInvoiceByNumber(id, number) {
    return db('invoices').where({ user_id: id, invoice_number: number }).first();
  }

}

module.exports = new UserDao();
