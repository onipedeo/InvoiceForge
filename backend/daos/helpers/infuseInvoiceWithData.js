const replacePropertyWithinObject = require('./replacePropertyWithinObject');
const getAppointmentsByWhere = require('./getAppointmentsByWhere');
const humps = require('humps');

module.exports = async function(invoice) {
  invoice = await replacePropertyWithinObject('client', invoice);
  invoice.client = await replacePropertyWithinObject('address', invoice.client);
  const appointments = await getAppointmentsByWhere({ invoice_id: invoice.id });
  invoice.appointments = await appointments;
  return humps.camelizeKeys(invoice);
}
