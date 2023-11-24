/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */

exports.seed = async function(knex) {
  // Deletes ALL existing entries
  await knex('clients').del();
  // Create clients
  await knex('clients').insert([
    { id: 1, user_id: 1, name: "Sally Parker", email: "nathanwilespainting@gmail.com", client_rate_cents: 5000 },
    { id: 2, user_id: 1, name: "Jeff Jetson", email: "nathanwilespainting@gmail.com" },
    { id: 3, user_id: 1, name: "John Doe", email: "johndoe@example.com" },
    { id: 4, user_id: 1, name: "Jane Smith", email: "janesmith@example.com" },
    { id: 5, user_id: 1, name: "Mike Johnson", email: "mikejohnson@example.com" },
    { id: 6, user_id: 1, name: "Emily Brown", email: "emilybrown@example.com" },
    { id: 7, user_id: 1, name: "David Wilson", email: "davidwilson@example.com" },
    { id: 8, user_id: 1, name: "Sarah Thompson", email: "sarahthompson@example.com" },
    { id: 9, user_id: 1, name: "Michael Davis", email: "michaeldavis@example.com" },
    { id: 10, user_id: 1, name: "Jessica Lee", email: "jessicalee@example.com" },
  ]);

  // Create addresses
  await knex('addresses').insert([
    { id: 4, line_1: "123 Main St", city: "Toronto", province: "ON", country: "Canada", postal_code: "M1M1M1" },
    { id: 5, line_1: "456 Main St", city: "Toronto", province: "ON", country: "Canada", postal_code: "M1M1M1" },
    { id: 6, line_1: "789 Main St", city: "Toronto", province: "ON", country: "Canada", postal_code: "M1M1M1" },
    { id: 7, line_1: "987 Main St", city: "Toronto", province: "ON", country: "Canada", postal_code: "M1M1M1" },
    { id: 8, line_1: "654 Main St", city: "Toronto", province: "ON", country: "Canada", postal_code: "M1M1M1" },
    { id: 9, line_1: "321 Main St", city: "Toronto", province: "ON", country: "Canada", postal_code: "M1M1M1" },
    { id: 10, line_1: "111 Main St", city: "Toronto", province: "ON", country: "Canada", postal_code: "M1M1M1" },
    { id: 11, line_1: "222 Main St", city: "Toronto", province: "ON", country: "Canada", postal_code: "M1M1M1" },
    { id: 12, line_1: "333 Main St", city: "Toronto", province: "ON", country: "Canada", postal_code: "M1M1M1" },
    { id: 13, line_1: "444 Main St", city: "Toronto", province: "ON", country: "Canada", postal_code: "M1M1M1" },
  ]);

  // Update clients with address_ids
  for (let i = 1; i < 9; i++) {
     await knex('clients').update({ address_id: i + 3 }).whereNot({ id: i });
  };
    // Reset the ID sequence in the clients table
    await knex.raw('ALTER SEQUENCE clients_id_seq RESTART WITH 11');
    await knex.raw('ALTER SEQUENCE addresses_id_seq RESTART WITH 14');
};
