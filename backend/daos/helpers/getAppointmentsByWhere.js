const db = require('../../db/db');
const humps = require('humps');


module.exports = async function (where) {
  if (!!where.user_id) {
    const {user_id, ...newWhere} = where;
    const clientIds = await db('clients_users').where({ user_id }).pluck('client_id');
   // generate array of unique client ids
   const uniqueClientIds = [...new Set(clientIds)];
   console.log('uniqueClientIds', uniqueClientIds);

   // retrieve appointments for each client
   const appointments = await Promise.all(uniqueClientIds.map(async (clientId) => {
     const thisWhere = { ...newWhere, client_id: clientId };
     return await db('appointments').where(thisWhere);

   }));

    const flattenedAppointments = appointments.reduce((acc, val) => acc.concat(val), []);
  //  console.log('flattenedAppointments', flattenedAppointments);

  return flattenedAppointments
  } else {
    const appointments = await db('appointments').where(where);
    return humps.camelizeKeys(appointments);
  }
};
