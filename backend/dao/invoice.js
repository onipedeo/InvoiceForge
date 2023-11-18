import db from '../db/db';

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

    await db('users').where({ id: userId }).increment('next_invoice_number');

    return id;
  }

  async setPaid(id) {
    await db('invoices').where({ id }).update({ paid: true });
  }


  async _getNextInvoiceNumber(userId) {
    return await db('users').where({ id: userId }).returning('next_invoice_number').first();
  }
}

module.exports = new InvoiceDao();
