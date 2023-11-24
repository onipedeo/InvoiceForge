require('dotenv').config({path: '../.env'});
const types = require('pg').types;
// override parsing date column to Date()
types.setTypeParser(1082, val => val);
module.exports = {

  development: {
    client: 'postgresql',
    connection: {
      host: process.env.PG_HOST,
      user: process.env.PG_USER,
      password: process.env.PG_PASSWORD,
      database: process.env.PG_DATABASE,
      port: process.env.PG_PORT || 5432,
      ssl: process.env.PG_SSL ? { rejectUnauthorized: false } : false,
    },
    migrations: {
      directory: (__dirname + '/migrations'),
      tableName: 'migrations',
    },
    seeds: {
      directory: (__dirname + '/seeds')
    },
  },

  production: {
    client: 'postgresql',
    connection: process.env.DATABASE_URL + '?ssl=true',
    pool: {
      min: 2,
      max: 10,
    },
    migrations: {
      tableName: 'migrations',
    },
  },

};
