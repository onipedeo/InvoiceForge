const db = require('../../db/db');


module.exports = async function (where) {

  return await db('appointments').where(where);
};
