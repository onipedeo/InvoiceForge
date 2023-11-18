const invoiceService = require('../services/invoice');

class InvoiceController {
  async create(req, res) {
    try {
      req.body = invoiceDto;
      const [id] = await invoiceService.create(invoiceDto);
      res.status(201).json(id);
    } catch (e) {
      res.status(500).json({ error: 'Internal server error' });
      console.error(e);
    }
  }

  async setPaid(req, res) {
    try {
      const { id } = req.params;
      await invoiceService.setPaid(id);
      res.sendStatus(204);
    } catch (e) {
      res.status(500).json({ error: 'Internal server error' });
      console.error(e);
    }
  }

}

module.exports = new InvoiceController();
