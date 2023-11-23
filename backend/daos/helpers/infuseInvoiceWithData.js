const replacePropertyWithinObject = require('./replacePropertyWithinObject');
const getAppointmentsByWhere = require('./getAppointmentsByWhere');

module.exports = async function(invoice) {
  invoice = await replacePropertyWithinObject('client', invoice);
  invoice = await replacePropertyWithinObject('user', invoice);
  invoice.client = await replacePropertyWithinObject('address', invoice.client);
  invoice.user = await replacePropertyWithinObject('address', invoice.user);
  const appointments = await getAppointmentsByWhere({ invoice_id: invoice.id });
  invoice.appointments = await appointments;
  return invoice;
}
