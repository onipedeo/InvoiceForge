class InvoiceService {
  create(invoiceDto) {
    const { userId, clientId, dueDate, totalCents } = invoiceDto;
    return invoiceDao.create(userId, clientId, dueDate, totalCents);
  }

  setPaid(id) {
    return invoiceDao.setPaid(id);
  }

}

module.exports = new InvoiceService();
