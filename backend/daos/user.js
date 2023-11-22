const db = require('../db/db');
const { replacePropertyWithinObject, getAppointmentsByWhere, getInvoicesByWhere } = require('./helpers');
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

  async getUser(id) {
    let user = await db('users').where({ id }).first();
    user = replacePropertyWithinObject('address', user);
    return user;
  }

  async getById(id) {
    const user = await this.getUser(id);
    const clients = await this.getClients(id);
    const appointments = await getAppointmentsByWhere({ user_id: id });
    const invoices = await this.getInvoices(id);
    const reviewed = await getAppointmentsByWhere({ user_id: id, reviewed: true, invoiced: false });
    const unReviewed = await getAppointmentsByWhere({ user_id: id, reviewed: false });

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
    return await getInvoicesByWhere({ 'user_id': id });
  }


  async getClients(id) {
    const dirtyClients = await db('clients').where({ user_id: id });


    const clients = await Promise.all(dirtyClients.map(async (client) => {
      return await replacePropertyWithinObject('address', client);
    }
    ));

    return clients;
  }
}
module.exports = new UserDao();
