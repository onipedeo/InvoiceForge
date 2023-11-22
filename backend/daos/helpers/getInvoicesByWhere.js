const getAppointmentsByWhere = require('./getAppointmentsByWhere');
const replacePropertyWithinObject = require('./replacePropertyWithinObject');
const db = require('../../db/db');


module.exports = async function (where) {
  try {
    const invoices = await db('invoices').where(where);

    const results = await Promise.all(invoices.map(async (invoice) => {
      invoice = await replacePropertyWithinObject('client', invoice);
      invoice = await replacePropertyWithinObject('user', invoice);
      invoice.client = await replacePropertyWithinObject('address', invoice.client);
      invoice.user = await replacePropertyWithinObject('address', invoice.user);
      const appointments = await getAppointmentsByWhere({ invoice_id: invoice.id });
      invoice.appointments = await appointments;
      return invoice;
    }));

    return results;
  } catch (error) {
    console.error(error);
  }
}
