/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.up = function(knex) {
    return knex.schema.createTable('resorts', (table) => {
        table.increments('id').primary();
        table.string('resort_name').notNullable();
        table.string('city').notNullable();
        table.string('province').notNullable();
        table.string('country').notNullable();
        table.integer('trail_count').notNullable();
        table.integer('base_altitude').notNullable();
        table.integer('summit_altitude').notNullable();
        table.integer('vertical').notNullable();
        table.string('website').notNullable();
        table.string('map_url').notNullable();
        table.timestamp('created_at').defaultTo(knex.fn.now());
        table.timestamp('updated_at').defaultTo(knex.raw('CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP'))
    });
};

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.down = function(knex) {
    return knex.schema.dropTable('resorts');
};
