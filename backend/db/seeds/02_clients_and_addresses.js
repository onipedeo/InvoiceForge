/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */

exports.seed = async function(knex) {
  // Deletes ALL existing entries
  await knex('clients').del();
  // Reset the ID sequences
  await knex.raw('ALTER SEQUENCE clients_id_seq RESTART WITH 1');

  // Create addresses
  await knex('addresses').insert([
    { line_1: "123 Main St", city: "Toronto", province: "ON", country: "Canada", postal_code: "M1M1M1" },
    { line_1: "456 Main St", city: "Toronto", province: "ON", country: "Canada", postal_code: "M1M1M1" },
    { line_1: "789 Main St", city: "Toronto", province: "ON", country: "Canada", postal_code: "M1M1M1" },
    { line_1: "987 Main St", city: "Toronto", province: "ON", country: "Canada", postal_code: "M1M1M1" },
  ]);
  await knex('clients')
  .insert([
    { name: "Nadia Willhelm", email: "nathanwilespainting@gmail.com", client_rate_cents: 5000, address_id: 5 },
      { name: "Anthony Lester", email: "andrew.li.12138@gmail.com", client_rate_cents: 4500, address_id: 6 },
      { name: "Tanya Olereno", email: "tobionipede2021@gmail.com", address_id: 7 },
      { name: "Caspar Opal", email: "olamidejr21@yahoo.com", address_id: 8 },
    ]);



  // recycle clients for each of the 4 users
  for (let userId = 1; userId <= 4; userId++) {
    for (let clientId = 1; clientId <= 4; clientId++) {
      await knex('clients_users').insert({ user_id: userId, client_id: clientId });
    }
  }

};
