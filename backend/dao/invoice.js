import db from '../db/db';

class InvoiceDao {
  async create(userId, clientId, dueDate, totalCents) {
    const invoiceNumber = await this._getNextInvoiceNumber(userId);
    const [id, user_id] = await db('invoices').insert({
      user_id: userId,
      client_id: clientId,
      due_date: dueDate,
      total_cents: totalCents
    }).returning('id', 'user_id');

    await db('users').where({ id: userId }).increment('next_invoice_number');

    return id;
  }

  async setPaid(id) {
    await db('invoices').where({ id }).update({ paid: true });
  }


  _getNextInvoiceNumber(userId) {
    return db('users').where({ id: userId }).returning('next_invoice_number');
  }
}
