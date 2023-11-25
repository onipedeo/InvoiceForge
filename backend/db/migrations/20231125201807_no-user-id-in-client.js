/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.up = function(knex) {
  return knex.schema
    .createTable('clients_users', function(table) {
      table.integer('user_id').references('id').inTable('users').notNullable();
      table.integer('client_id').references('id').inTable('clients').notNullable();

    })
    .table('clients', function(table) {
      table.dropColumn('user_id');
    })
    .table('appointments', function(table) {
      table.dropColumn('user_id');
    });

};

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.down = function(knex) {
  return knex.schema
    .table('clients', function(table) {
      table.integer('user_id').references('id').inTable('users').notNullable().defaultTo(1);
    })
    .table('appointments', function(table) {
      table.integer('user_id').references('id').inTable('users').notNullable().defaultTo(1);
    })
    .dropTable('clients_users');
};
