/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.seed = async function(knex) {
  // Deletes ALL existing entries
  await knex('clients_users').del();
  await knex('users').del();
  await knex('addresses').del();
  // Reset the ID sequences
  await knex.raw('ALTER SEQUENCE users_id_seq RESTART WITH 1');
  await knex.raw('ALTER SEQUENCE addresses_id_seq RESTART WITH 1');
  // Create addresses
  await knex('addresses').insert([
    { line_1: "123 Main St", city: "Toronto", province: "ON", country: "Canada", postal_code: "M1M1M1" },
    { line_1: "456 Elm St", city: "Vancouver", province: "BC", country: "Canada", postal_code: "V5V5V5" },
    { line_1: "789 Oak St", city: "Montreal", province: "QC", country: "Canada", postal_code: "H1H1H1" },
    { line_1: "1011 Pine St", city: "Calgary", province: "AB", country: "Canada", postal_code: "T2T2T2" }
  ]);
  // Create users
  await knex('users').insert([
    { first_name: "Nathan", last_name: "Wiles", email: "nathanawiles@gmail.com", password: "password", standard_rate_cents: 3500, address_id: 1 },
    { first_name: "Andrew", last_name: "Li", email: "andrew.li.12138@gmail.com", password: "password", standard_rate_cents: 3500, address_id: 2 },
    { first_name: "Tobi", last_name: "Onipede", email: "tobionipede2021@gmail.com", password: "password", standard_rate_cents: 3500, address_id: 3 },
    { first_name: "Caroline", last_name: "Olagunju", email: "olamidejr21@yahoo.com", password: "password", standard_rate_cents: 3500, address_id: 4 },
  ]);
};
