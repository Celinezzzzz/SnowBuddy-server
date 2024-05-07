/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.up = function (knex) {
  return knex.schema.createTable('ski_diary', function (table) {
    table.increments('id').primary();
    table.integer('user_id').unsigned().notNullable().references('id').inTable('users');
    table.integer('resort_id').unsigned().notNullable().references('id').inTable('resorts');
    table.date('date').notNullable();
    table.integer('number_of_runs').unsigned().notNullable();
    table.time('start_time').notNullable();
    table.time('end_time').notNullable();
    table.timestamps(true, true);
  });
};

exports.down = function (knex) {
  return knex.schema.dropTableIfExists('ski_diary');
};
  