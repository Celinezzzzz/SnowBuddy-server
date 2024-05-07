/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> } 
 */
const bcrypt = require('bcrypt');

exports.seed = async function(knex) {
  await knex('users').del()
  
  await knex('users').insert([
    { username: 'john', name: 'John Doe', password: await bcrypt.hash('password123', 10) },
    { username: 'jane', name: 'Jane Doe', password: await bcrypt.hash('password123', 10) }
  ]);
};
