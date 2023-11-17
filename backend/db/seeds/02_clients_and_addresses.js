/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.seed = async function(knex) {
  // Deletes ALL existing entries
  await knex('clients').del()
  // Create clients
  await knex('clients').insert([
    {id: 1, user_id: 1, name: "Sally Parker", email: "nathanwilespainting@gmail.com", client_rate_cents: 5000 },
    {id: 2, user_id: 1, name: "Jeff Jetson", email: "nathanwilespainting@gmail.com"},
  ]);

  // Create addresses
  await knex('addresses').insert([
    {id: 2, line_1: "123 Main St", city: "Toronto", province: "ON", country: "Canada", postal_code: "M1M1M1" },
    {id: 3, line_1: "456 Main St", city: "Toronto", province: "ON", country: "Canada", postal_code: "M1M1M1" },
  ]);

  // Update clients with address_ids
  await knex('clients').update({address_id: 2}).where({id: 1});
  await knex('clients').update({address_id: 3}).where({id: 2});
};
