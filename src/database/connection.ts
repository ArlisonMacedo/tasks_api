import knex from 'knex'
// import path from 'path'

const connection = knex({
  client: 'pg',
  connection: {
    // filename: path.resolve(__dirname, 'database.sqlite')
    // host: 'ruby.db.elephantsql.com',
    // database: 'vmecbbnk',
    // port: Number(5432),
    // user: 'vmecbbnk',
    // password: 'zcx3SJXkDCdxu4HCVZqeXljDsU5CIjDH'
    host: 'localhost',
    port: Number(5433),
    database: 'tasks_api',
    user: 'postgres',
    password: 'root'
  },
  useNullAsDefault: true
})

export default connection
