const db = require('../../db/db');
const humps = require('humps');


module.exports = async function (where) {

  const invoices = await db('appointments').where(where);
  return humps.camelizeKeys(invoices);
};
