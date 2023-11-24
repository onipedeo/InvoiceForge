const knex = require('knex');
const knexfile = require('./knexfile.js');


// TO DO: use dependancy injection to create knex instance so db access can be mocked in tests
// TO DO: use environment variable to determine which knexfile to use
const db = knex(knexfile.development);


module.exports = db;
