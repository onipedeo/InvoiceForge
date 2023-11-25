const moment = require('moment');

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.seed = async function(knex) {
  // Deletes ALL existing entries
  await knex('invoices').del()

  // INVOICES
  // Get the first ten user appointments from the database
  const firstTenAppointments = await knex('appointments').select().where({ id: user_id }).orderBy('date', 'asc').limit(10);

  // get the client ids from the appointments, ignoring duplicates
  const clientIds = firstTenAppointments.map(appointment => appointment.client_id);
  const uniqueClientIds = [...new Set(clientIds)];

  // organize the appointments by client
  const appointmentsByClientId = uniqueClientIds.map(clientId => {
    return firstTenAppointments.filter(appointment => appointment.client_id === clientId);
  });

  // Procedurally create new invoice for each client present in the first ten appointments
};
/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.seed = async function(knex) {
  // Deletes ALL existing invoices
  await knex('invoices').del();

  // INVOICES
  // Get the first ten user appointments from the database
  //get client ids from the clients_users table
  const firstTenAppointments = await knex('appointments').orderBy('date', 'asc').limit(10);

  // get the client ids from the appointments, ignoring duplicates
  const clientIds = firstTenAppointments.map(appointment => appointment.client_id);
  const uniqueClientIds = [...new Set(clientIds)];

  // organize the appointments by client
  const appointmentsByClientId = uniqueClientIds.map(clientId => {
    return firstTenAppointments.filter(appointment => appointment.client_id === clientId);
  });

  // Procedurally create new invoice for each client present in the first ten appointments
  appointmentsByClientId.map(async clientsAppointments => {

    // get the client id from the first appointment
    const client_id = await clientsAppointments[0].client_id;

    // get the client rate from the client
    const { client_rate_cents } = await knex('clients').select('client_rate_cents').where('id', client_id).first();
    const created = clientsAppointments[clientsAppointments.length - 1].date;

    // generate the total cents
    const total_cents = clientsAppointments.reduce((total, appointment) => {
      const { appointment_rate_cents } = appointment;

      // set the rate conditionally
      let rate = standard_rate_cents;
      if (!!appointment_rate_cents) {
        rate = appointment_rate_cents;
      } else if (!!client_rate_cents) {
        rate = client_rate_cents;
      }

      return total + (rate * appointment.confirmed_hours);
    }, 0);


    const invoice = {
      invoice_number,
      client_id,
      created,
      total_cents
    };

    console.log(invoice);
    // Insert the new invoices into the database
    const invoiceId = await knex('invoices').insert(invoice).returning('id');
    // update each appointment invoiced = true and invoice_id
    await knex('appointments').update({ invoiced: true, invoice_id: invoiceId }).whereIn('id', clientsAppointments.map(appointment => appointment.id));
    // update the next invoice number
    await knex('users').update({ next_invoice_number: invoice_number + 1 });

  });
};
