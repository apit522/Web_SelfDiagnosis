/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
const bcrypt = require('bcryptjs')

exports.seed = function (knex) {
  // Deletes ALL existing entries
  return knex('users')
    .del()
    .then(function () {
      // Inserts seed entries
      return knex('users').insert([
        {
          username: 'admin',
          email: 'admin@gmail.com',
          password: bcrypt.hashSync('password', 10),
          foto: 'default.jpg'
        },
        {
          username: 'user',
          email: 'user@gmail.com',
          password: bcrypt.hashSync('password', 10),
          foto: 'default.jpg'
        }
      ])
    })
}
