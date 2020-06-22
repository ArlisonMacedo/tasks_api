// eslint-disable-next-line
import Knex from 'knex'

export async function up (knex: Knex) {
  return knex.schema.createTable('tasks', table => {
    table.increments('id').primary()
    table.string('title').notNullable()
    table.string('description').notNullable()
    table.boolean('completed')

    table.integer('user_id').notNullable().references('id').inTable('users')
  })
}

export async function down (knex: Knex) {
  return knex.schema.dropTable('tasks')
}
