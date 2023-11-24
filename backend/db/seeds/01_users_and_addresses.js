/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.seed = async function(knex) {
  // Deletes ALL existing entries
  await knex('users').del()
  // Deletes ALL existing entries
  await knex('addresses').del()
  // Create addresses
  await knex('addresses').insert([
    {id: 1, line_1: "123 Main St", city: "Toronto", province: "ON", country: "Canada", postal_code: "M1M1M1" },
    {id: 2, line_1: "456 Elm St", city: "Vancouver", province: "BC", country: "Canada", postal_code: "V5V5V5" },
    {id: 3, line_1: "789 Oak St", city: "Montreal", province: "QC", country: "Canada", postal_code: "H1H1H1" }
  ]);
  // Create users
  await knex('users').insert([
    {id: 1, first_name: "Kevin", last_name: "Contractor", email: "nathanwilespainting@gmail.com", password: "password", standard_rate_cents: 4000 },
    {id: 2, first_name: "John", last_name: "Doe", email: "johndoe@gmail.com", password: "password", standard_rate_cents: 3500 },
    {id: 3, first_name: "Jane", last_name: "Smith", email: "janesmith@gmail.com", password: "password", standard_rate_cents: 3000, address_id: 1 }
  ]);

  // Update users with address_id
  await knex('users').update({address_id: 1}).where({id: 1});
  await knex('users').update({address_id: 2}).where({id: 3});
  await knex('users').update({address_id: 3}).where({id: 3});

  // Reset the ID sequence in the users table
  await knex.raw('ALTER SEQUENCE users_id_seq RESTART WITH 4');
};
