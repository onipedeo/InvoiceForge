const invoiceService = require('../services/invoice');

class InvoiceController {
  async create(req, res) {
    try {
      const id = await invoiceService.create(req.body);
      res.status(201).json(id);
    } catch (e) {
      res.status(500).json({ error: 'Internal server error' });

    }
  }

  async setPaid(req, res) {
    try {
      const { id } = req.params;
      await invoiceService.setPaid(id);
      res.sendStatus(204);
    } catch (e) {
      res.status(500).json({ error: 'Internal server error' });

    }
  }

  async getById(req, res) {
    try {
      const { id } = req.params;
      const invoice = await invoiceService.getById(id);
      res.status(200).json(invoice);
    } catch (e) {
      if (e.statusCode) return res.status(e.statusCode).json({ error: e.message });
      res.status(500).json({ error: 'Internal server error', ...res.body });
      console.log(e);
    }
  }

}

module.exports = new InvoiceController();
