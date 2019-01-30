exports.up = function(knex, Promise) {
  return knex.schema.createTable('customers', function(table){
    table.increments()
    table.string('firstName').notNullable().defaultTo('')
    table.string('lastName').notNullable().defaultTo('')
    table.string('email').notNullable().defaultTo('')
    table.string('password').notNullable().defaultTo('')
    table.string('phone').notNullable().defaultTo('')
    table.string('gender').notNullable().defaultTo('')
    table.string('preference').notNullable().defaultTo('')
    table.date('birthday').notNullable()
    table.integer('zipcode').notNullable()
    table.string('referral').notNullable().defaultTo('')
    table.string('value1').notNullable().defaultTo('')
    table.string('value2').notNullable().defaultTo('')
    table.string('value3').notNullable().defaultTo('')
  })
}

exports.down = function(knex, Promise) {
  return knex.schema.dropTable('customers')
}
