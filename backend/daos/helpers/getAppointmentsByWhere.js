const db = require('../../db/db');
const humps = require('humps');


module.exports = async function (where) {
  if (!!where.user_id) {
    const {user_id, ...where} = where;
    const clients = await db('clients_users').where({ user_id });
   // generate array of unique client ids
   const clientIds = clients.map(client => client.client_id);
   const uniqueClientIds = [...new Set(clientIds)];

   // retrieve all invoices for each client
   const appointments = await Promise.all(uniqueClientIds.map(async (clientId) => {
     return await db('appointments').where({ client_id: clientId });
   }));

  return humps.camelizeKeys(appointments);
  } else {
    const appointments = await db('appointments').where(where);
    return humps.camelizeKeys(appointments);
  }
};
