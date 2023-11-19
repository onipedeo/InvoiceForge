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
    const user = await db('users').where({ id }).first();
    const clients = await db('clients').where({ user_id: id });
    const appointments = await db('appointments').where({ user_id: id });
    const invoices = await db('invoices').where({ user_id: id });
    const address = await db('addresses').where({ id: user.addressId }).first();
    const reviewed = await db('appointments').where({ user_id: id, invoiced: false, reviewed: true });
    const unReviewed = await db('appointments').where({ user_id: id, reviewed: false });

    return { clients, appointments, invoices, address, reviewed, unReviewed };
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

  getInvoiceByNumber(id, number) {
    return db('invoices').where({ user_id: id, invoice_number: number }).first();
  }

}

module.exports = new UserDao();
