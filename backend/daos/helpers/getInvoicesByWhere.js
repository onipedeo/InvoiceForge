const getAppointmentsByWhere = require('./getAppointmentsByWhere');
const replacePropertyWithinObject = require('./replacePropertyWithinObject');
const db = require('../../db/db');


module.exports = async function (where) {
  try {
    const invoices = await db('invoices').where(where);

    const results = await Promise.all(invoices.map(async (invoice) => {
      const { client_id, user_id, ...invoiceWithoutClientId } = invoice;
      const { user_id: discard, ...client } = await db('clients').where({ 'id': client_id }).first();
      const appointments = getAppointmentsByWhere({ invoice_id: invoice.id });
      // replace address_id with address,  client_id
      return {
        ...invoiceWithoutClientId,
        client: replacePropertyWithinObject(client, 'client'),


        appointments
      };
    }));

    return results;
  } catch (error) {
    console.error(error);
  }
}
