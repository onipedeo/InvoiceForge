const invoiceDao = require('../daos/invoice');
class InvoiceService {
  create(invoiceDto) {
    const { userId, clientId, dueDate, totalCents, appointmentIds } = invoiceDto;
    return invoiceDao.create(userId, clientId, dueDate, totalCents, appointmentIds);
  }

  setPaid(id) {
    return invoiceDao.setPaid(id);
  }

}

module.exports = new InvoiceService();
