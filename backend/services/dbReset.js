const knex = require('knex');
const config = require('../db/knexfile');


// Initialize knex.
const db = knex(config.development); // Use the correct configuration for your environment

// Run migrations and then seeds.
const runDbReset = () => {
  return new Promise((resolve, reject) => {
    db.migrate.latest()
      .then(() => db.seed.run())
      .then(() => {
        console.log('Migrations and seeds run successfully');
        resolve();
      })
      .catch(error => {
        console.error(`Error running migrations or seeds: ${error.message}`);
        reject(error);
      });
  });
};

module.exports = runDbReset;
