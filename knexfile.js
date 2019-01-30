module.exports = {

  development: {
    client: 'pg',
    connection: 'postgresql://localhost:5432/keeptheglow'
  },
  test: {
    client: 'pg',
    connection: 'postgresql://localhost:5432/db_name'
  },
  production: {
    client: 'pg',
    connection: process.env.DATABASE_URL
  },
}
