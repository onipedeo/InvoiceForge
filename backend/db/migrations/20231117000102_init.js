/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.up = function(knex) {
  return knex.schema.
    createTable('adresses', (table) => {
      table.increments('id').primary();
      table.string('line-1', 255).notNullable();
      table.string('line-2', 255).nullable();
      table.string('city', 255).notNullable();
      table.string('province', 255).notNullable();
      table.string('country', 255).notNullable();
      table.string('postal_code', 255).notNullable();
      table.timestamps(true, true);
    })
    .createTable('users', (table) => {
      table.increments('id').primary();
      table.integer('address_id').references('id').inTable('adresses').nullable().defaultTo(null);
      table.string('first_name', 25).notNullable();
      table.string('last_name', 25).notNullable();
      table.string('company_name', 50).nullable().defaultTo(null);
      table.string('email', 255).notNullable();
      table.string('phone', 15).nullable();
      table.string('password', 255).notNullable();
      table.integer('standard_rate_cents').notNullable();
      table.integer('next_invoice_number').notNullable().defaultTo(1);
      table.timestamps(true, true);
    })
    .createTable('clients', (table) => {
      table.increments('id').primary();
      table.integer('user_id').references('id').inTable('users').notNullable();
      table.string('name', 50).notNullable();
      table.string('company_name', 50).nullable().defaultTo(null);
      table.string('email', 255).notNullable();
      table.string('phone', 15).nullable();
      table.integer('client_rate_cents').nullable().defaultTo(null);
      table.timestamps(true, true);
    })
    .createTable('invoices', (table) => {
      table.increments('id').primary();
      table.integer('user_id').references('id').inTable('users').notNullable();
      table.integer('client_id').references('id').inTable('clients').notNullable();
      table.integer('invoice_number').notNullable();
      table.date('created').defaultTo(knex.fn.now()).notNullable();
      table.date('due_date').defaultTo(null).nullable();
      table.integer('total_cents').notNullable();
      table.boolean('paid').notNullable().defaultTo(false);
      table.timestamps(true, true);
    })
    .createTable('appointments', (table) => {
      table.increments('id').primary();
      table.integer('user_id').references('id').inTable('users').notNullable();
      table.integer('client_id').references('id').inTable('clients').notNullable();
      table.date('date').notNullable();
      table.time('start_time').notNullable();
      table.time('end_time').notNullable();
      table.integer('confirmed_hours').nullable().defaultTo(null);
      table.boolean('reviewed').notNullable().defaultTo(false);
      table.boolean('invoiced').notNullable().defaultTo(false);
      table.integer('appointment_rate_cents').nullable();
      table.text('notes').nullable();
      table.timestamps(true, true);
    })
};

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.down = function(knex) {
  return knex.schema
    .dropTable('appointments')
    .dropTable('invoices')
    .dropTable('clients')
    .dropTable('users')
    .dropTable('adresses')
};
