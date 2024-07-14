// seeds/01_roles_seed.js
/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.seed = function (knex) {
  // Deletes ALL existing entries
  return knex('roles')
    .del()
    .then(function () {
      // Inserts seed entries
      return knex('roles').insert([
        { id: 1, name: 'admin' },
        { id: 2, name: 'user' }
      ]);
    });
};
