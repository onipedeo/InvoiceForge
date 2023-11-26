const moment = require('moment');

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.seed = async function(knex) {
  // Deletes ALL existing invoices
  await knex('invoices').del();
  await knex.raw('ALTER SEQUENCE invoices_id_seq RESTART WITH 1');

  // Get the client ids
  const clientIds = await knex('clients').pluck('id');
  let invoice_number = 1;
  // Generate invoices for each client
  for (const clientId of clientIds) {
    // Get the first five reviewed appointments for the client
    const appointments = await knex('appointments')
      .where({ client_id: clientId, reviewed: true })
      .orderBy('date', 'asc')
      .limit(5);

    // Skip if there are no reviewed appointments for the client
    if (appointments.length === 0) {
      continue;
    }

    // Get the client rate
    const { client_rate_cents } = await knex('clients')
      .select('client_rate_cents')
      .where('id', clientId)
      .first();

    // Calculate the total cents for the invoice
    const total_cents = appointments.reduce((total, appointment) => {
      const { appointment_rate_cents } = appointment;

      // Set the rate conditionally
      let rate = 3500; // standard rate from 01_users_addresses.js
      if (!!appointment_rate_cents) {
        rate = appointment_rate_cents;
      } else if (!!client_rate_cents) {
        rate = client_rate_cents;
      }

      return total + (rate * appointment.confirmed_hours);
    }, 0);

    // Generate the invoice object
    const invoice = {
      invoice_number: invoice_number++,
      client_id: clientId,
      created: moment().format('YYYY-MM-DD'),
      total_cents
    };

    // Insert the new invoice into the database
    const { id: invoiceId } = await knex('invoices').insert(invoice).returning('id');

    // Update each appointment with invoiced = true and invoice_id
    await knex('appointments')
      .update({ invoiced: true, invoice_id: invoiceId })
      .whereIn('id', appointments.map(appointment => appointment.id));
  }
};
