const db = require('../db/db');
const infuseInvoiceWithData = require('./helpers/infuseInvoiceWithData');

class InvoiceDao {
  async create(userId, clientId, dueDate, totalCents) {
    const invoiceNumber = await this._getNextInvoiceNumber(userId);
    const [id] = await db('invoices').insert({
      invoice_number: invoiceNumber,
      user_id: userId,
      client_id: clientId,
      due_date: dueDate,
      total_cents: totalCents
    }).returning('id');

    appointmentIds.map(async appointmentId => {
      await db('appointments').where({ id: appointmentId }).update({ invoiced: true, invoice_id: id });
    });

    await db('users').where({ id: userId }).increment('next_invoice_number', 1);

    return id;
  }

  async setPaid(id) {
    await db('invoices').where({ id }).update({ paid: true });
  }

  async getById(id) {
    let invoice = await db('invoices').select('*').where({ id }).first();
    if (!invoice) throw { statusCode: 404, message: 'Invoice not found' };
    return await infuseInvoiceWithData(invoice)
  }

  async _getNextInvoiceNumber(userId) {
    return await db('users').select('next_invoice_number').where({ id: userId }).first().then(user => user.next_invoice_number);
  }
}

module.exports = new InvoiceDao();
