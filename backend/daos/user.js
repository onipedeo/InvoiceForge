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

  async getUser(id) {
    let user = await db('users').where({ id }).first();
    user = this.replaceAddressIdWithObject(user, 'user');
    return user;
  }

  async getById(id) {
    const user = await this.getUser(id);
    const clients = await this.getClients(id);
    const appointments = await this.getAppointmentsByWhere({ user_id: id });
    const invoices = await this.getInvoices(id);
    const reviewed = await this.getAppointmentsByWhere({ user_id: id, reviewed: true, invoiced: false });
    const unReviewed = await this.getAppointmentsByWhere({ user_id: id, reviewed: false });

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

  async getAppointmentsByWhere(where) {
    const sanitizeAppointments = (appointments) => {
      return appointments.map((appointment) => {
        const { invoice_id, user_id, client_id, ...rest } = appointment;
        return rest;
      });
    };
    return sanitizeAppointments(await db('appointments').where(where));
  }

  async getInvoices(id) {
    try {
      const invoices = await db('invoices').where({ 'user_id': id });

      const results = await Promise.all(invoices.map(async (invoice) => {
        const { client_id, user_id, ...invoiceWithoutClientId } = invoice;
        const { user_id: discard, ...client } = await db('clients').where({ 'id': client_id }).first();
        const appointments = this.getAppointmentsByWhere({ invoice_id: invoice.id });
        // replace address_id with address,  client_id
        return {
          ...invoiceWithoutClientId,
          client: this.replaceAddressIdWithObject(client, 'client'),


          appointments
        };
      }));

      return results;
    } catch (error) {
      console.error(error);
    }
  }
  async replaceAddressIdWithObject(object, objectName) {
    const { address_id, [objectName + '_id']: id, ...rest } = object;
    const address = async () => {
      if (!address_id) return null;
      await db('addresses').where({ id: address_id }).first();
    };
    return { ...rest, address };
  }


  async getClients(id) {
    const dirtyClients = await db('clients').where({ user_id: id });


    const clients = await Promise.all(dirtyClients.map(async (client) => {
      return await this.replaceAddressIdWithObject(client, 'client');
    }
    ));

    return clients;
  }
}

module.exports = new UserDao();
