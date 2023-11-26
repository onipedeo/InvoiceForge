const getAppointmentsByWhere = require('./getAppointmentsByWhere');
const replacePropertyWithinObject = require('./replacePropertyWithinObject');
const db = require('../../db/db');
const humps = require('humps');


module.exports = async function(where) {
  try {
    // get all clients for user
    const clients = await db('clients_users').where({ user_id: where.user_id });

    // generate array of unique client ids
    const clientIds = clients.map(client => client.client_id);
    const uniqueClientIds = [...new Set(clientIds)];

    // retrieve all invoices for each client
    const invoices = await Promise.all(uniqueClientIds.map(async (clientId) => {
      return await db('invoices').where({ client_id: clientId });
    }));

    // if no invoices, return empty array
    if (!invoices.length) {
      return [];
    }
    // flatten the array of invoice arrays into one larger array
    const allInvoices = invoices.reduce((acc, val) => acc.concat(val), []);

    const results = await Promise.all(allInvoices.map(async (invoice) => {
      invoice = await replacePropertyWithinObject('client', invoice);
      invoice.client = await replacePropertyWithinObject('address', invoice.client);
      const appointments = await getAppointmentsByWhere({ invoice_id: invoice.id });
      invoice.appointments = await appointments;
      return invoice;
    }));

    return humps.camelizeKeys(results);
  } catch (error) {
    throw error;
  }
};
