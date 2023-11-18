/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.seed = async function(knex) {
  // Deletes ALL existing entries
  await knex('users').del()
  // Create users
  await knex('users').insert([
    {id: 1, first_name: "Kevin", last_name: "Contractor", email: "nathanwilespainting@gmail.com", password: "password", standard_rate_cents: 4000 },
  ]);
  // Deletes ALL existing entries
  await knex('addresses').del()
  // Create addresses
  await knex('addresses').insert([
    {id: 1, line_1: "123 Main St", city: "Toronto", province: "ON", country: "Canada", postal_code: "M1M1M1" },
  ]);

  // Update users with address_id
  await knex('users').update({address_id: 1}).where({id: 1});

};
