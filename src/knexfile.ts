import path from 'path'
module.exports = {
  client: 'pg',
  connection: {
    host: 'ruby.db.elephantsql.com',
    database: 'vmecbbnk',
    port: Number(5432),
    user: 'vmecbbnk',
    password: 'zcx3SJXkDCdxu4HCVZqeXljDsU5CIjDH'
    // host: 'localhost',
    // port: Number(5433),
    // database: 'tasks_api',
    // user: 'postgres',
    // password: 'root'
  },
  migrations: {
    directory: path.resolve(__dirname, 'database', 'migrations')
  },
  useNullAsDefault: true
}
