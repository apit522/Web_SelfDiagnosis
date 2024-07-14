/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.up = function (knex) {
    return knex.schema.createTable('articles', table => {
        table.increments('id').primary();
        table.string('title', 255).notNullable();
        table.text('content').notNullable();
        table.string('image', 255);
    });
};

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.down = function (knex) {
    return knex.schema.dropTable('articles');
};
