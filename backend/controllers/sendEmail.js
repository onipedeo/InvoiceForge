const sendInvoice = require('./sendInvoice');

class SendEmailController {
  async invoice(req, res) {
    try {
      sendInvoice({pdfAttachment: req.file, ...req.body});
      
    } catch (e) {
      res.status(500).json({ error: 'Internal server error' });

    }
  }

}

module.exports = new SendEmailController();
