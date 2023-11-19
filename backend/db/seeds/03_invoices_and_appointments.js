/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.seed = async function(knex) {
  // Deletes ALL existing appointments and invoices
  await knex('appointments').del();
  await knex('invoices').del();

  await knex('appointments').insert([
    { id: 1, user_id: 1, client_id: 1, date: "2023-11-13", start_time: "09:00:00", end_time: "17:00:00", confirmed_hours: 8, reviewed: true, invoiced: false, appointment_rate_cents: 2000, notes: "finish repairs." },
    { id: 2, user_id: 1, client_id: 1, date: "2023-11-14", start_time: "09:00:00", end_time: "17:00:00", confirmed_hours: 8, reviewed: true, invoiced: false, notes: "paint" },
    { id: 3, user_id: 1, client_id: 2, date: "2023-11-15", start_time: "09:00:00", end_time: "17:00:00", confirmed_hours: 8, reviewed: true, invoiced: false, appointment_rate_cents: 3000, notes: "demo and begin rebuild" },
    { id: 4, user_id: 1, client_id: 2, date: "2023-11-16", start_time: "09:00:00", end_time: "17:00:00", confirmed_hours: 8, reviewed: true, invoiced: false, notes: "finish rebuild" },
  ]);

  await knex('invoices').insert([
    { id: 1, user_id: 1, client_id: 1, invoice_number: 1, created: "2023-11-13", due_date: "2023-11-13", total_cents: 48000, paid: true },
    { id: 2, user_id: 1, client_id: 2, invoice_number: 2, created: "2023-11-15", due_date: "2023-11-15", total_cents: 56000, paid: false },
  ]);

  await knex('users').update({ next_invoice_number: 3 }).where({ id: 1 });

  await knex('appointments').update({ invoice_id: 1, invoiced: true}).where({ client_id: 1, invoiced: false, reviewed: true });
  await knex('appointments').update({ invoice_id: 2, invoiced: true}).where({ client_id: 2, invoiced: false, reviewed: true });

  await knex('appointments').insert([
    { id: 5, user_id: 1, client_id: 1, date: "2023-11-17", start_time: "09:00:00", end_time: "17:00:00", reviewed: false, invoiced: false, notes: "prime" },
    { id: 6, user_id: 1, client_id: 2, date: "2023-11-18", start_time: "09:00:00", end_time: "17:00:00", reviewed: false, invoiced: false, notes: "paint" },
    { id: 7, user_id: 1, client_id: 1, date: "2023-11-19", start_time: "09:00:00", end_time: "17:00:00", reviewed: false, invoiced: false, notes: "paint" },
  ]);
};
