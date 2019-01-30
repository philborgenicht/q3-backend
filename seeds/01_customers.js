exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('customers').del()
    .then(function () {
      // Inserts seed entries
      return knex('customers').insert([
        {id: 1, firstName: 'phil', lastName: 'borgenicht', email: 'philborgenicht@gmail.com', password: 'batman', phone:"555-555-5555", gender:"male", preference:"female", birthday:"1989-06-26", zipcode:"80501", referral:"Marriage Counselor", value1:"affection", value2:"recreation", value3:"quality time"},
        {id: 2, firstName: 'marc', lastName: 'wilk', email: 'mwilk@gmail.com', password: 'superman', phone:"333-333-3333", gender:"male", preference:"female", birthday:"1992-10-14", zipcode:"80303", referral:"Marriage Counselor", value1:"sex", value2:"thoughtful gestures", value3:"physical attraction"},
        {id: 3, firstName: 'tucker', lastName: 'nemceck', email: 'tnemceck@gmail.com', password: 'trucker', phone:"444-444-4444", gender:"male", preference:"female", birthday:"1993-11-29", zipcode:"80303", referral:"Marriage Counselor", value1:"support my interests", value2:"adoration", value3:"emotional intimacy"},
        {id: 4, firstName: 'Scarlett', lastName: 'Johansson', email: 'scarjo@gmail.com', password: 'blackwidow', phone:"222-222-2222", gender:"female", preference:"male", birthday:"1984-11-22", zipcode:"90210", referral:"Marriage Counselor", value1:"affection", value2:"recreation", value3:"quality time"},
        {id: 5, firstName: 'Jennifer', lastName: 'Lawrence', email: 'jlaw@gmail.com', password: 'katnisseverdeen', phone:"777-777-7777", gender:"female", preference:"male", birthday:"1990-08-15", zipcode:"90210", referral:"Marriage Counselor", value1:"affection", value2:"recreation", value3:"quality time"},
        {id: 6, firstName: 'Donald', lastName: 'Trump', email: 'potus@maga.com', password: 'ih8mel', phone:"666-666-6666", gender:"male", preference:"female", birthday:"1946-06-14", zipcode:"20001", referral:"Vladimir Putin", value1:"physical attraction", value2:"physical attraction", value3:"physical attraction"},
        {id: 7, firstName: 'Melania', lastName: 'Trump', email: 'flotus@maga.com', password: 'ih8don', phone:"999-999-9999", gender:"female", preference:"male", birthday:"1970-04-16", zipcode:"20001", referral:"Barack Obama", value1:"money", value2:"old-age", value3:"orange skin"},
      ])
    })
    .then(() => {
  return knex.raw(
    "SELECT setval('customers_id_seq', (SELECT MAX(id) FROM customers));"
  )
})
};
