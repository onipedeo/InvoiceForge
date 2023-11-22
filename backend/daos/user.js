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
    let user = await db('users').where({ id }).first();
    const address = await db('addresses').where({ id: user.address_id }).first();
    //replace address_id with address
    user = { ...user, address };
    const { address_id: discard, ...rest } = user;
    user = rest;
    const clients = await this.getClients(id);
    const appointments = await this.getAppointments(id);
    const invoices = await this.getInvoices(id);
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

  async appointmentsByWhere(where) {
    const sanitizeAppointments = (appointments) => {
      return appointments.map((appointment) => {
        const { invoice_id, user_id, client_id, ...rest } = appointment;
        return rest;
      });
    };
    return sanitizeAppointments(await db('appointments').where(where));
  }

  async getReviewed(id) { }

  async getInvoices(id) {
    try {
      const invoices = await db('invoices').where({ 'user_id': id });

      const results = await Promise.all(invoices.map(async (invoice) => {
        const { client_id, user_id, ...invoiceWithoutClientId } = invoice;
        const { address_id, user_id: discard, ...client } = await db('clients').where({ 'id': client_id }).first();
        const address = await db('addresses').where({ 'id': address_id }).first();
        const appointments = this.appointmentsByWhere({ invoice_id: invoice.id });
        return {
          ...invoiceWithoutClientId,
          client: {
            ...client,
            address
          },
          appointments
        };
      }));

      return results;
    } catch (error) {
      console.error(error);
    }
  }

  async getClients(id) {
    const dirtyClients = await db('clients').where({ user_id: id });
    const clients = await Promise.all(dirtyClients.map(async (client) => {
      const { address_id, user_id, ...rest } = client;
      const address = await db('addresses').where({ id: client.address_id }).first();
      return { ...rest, address };
    }));
    return clients;
  }

  async getAppointments(id) {
    this.appointmentsByWhere({ user_id: id });
  }

  async getUnreviewed(id) {
    this.appointmentsByWhere({ user_id: id, reviewed: false });
  }

  async getReviewed(id) {
    this.appointmentsByWhere({ user_id: id, reviewed: true, invoiced: false });
  }
}

module.exports = new UserDao();
