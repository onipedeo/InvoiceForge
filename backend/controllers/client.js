const clientService = require('../services/client');

class ClientController {
  async create(req, res) {
    try {
      const [id] = await clientService.create(req.body);
      res.status(201).json(id);
    } catch (error) {
      res.status(500).json({ error: 'Internal server error' });
    }
  }

  async getById(req, res) {
    try {
      const client = await clientService.getById(req.params.id);
      res.status(200).json(client);
    } catch (e) {
      res.status(500).json({ error: 'Internal server error' });
      console.error(e);
    }
  }

  async getAppointments(req, res) {
    try {
      const appointments = await clientService.getAppointments(req.params.id);
      res.status(200).json(appointments);
    } catch (e) {
      res.status(500).json({ error: 'Internal server error' });
      console.error(e);
    }
  }

  async getInvoices(req, res) {
    try {
      const invoices = await clientService.getInvoices(req.params.id);
      res.status(200).json(invoices);
    } catch (e) {
      res.status(500).json({ error: 'Internal server error' });
      console.error(e);
    }
  }

  async setAddress(req, res) {
    try {
      const id = await clientService.setAddress(req.params.id, req.body);
      res.status(200).json({ message: 'Address updated successfully' });
    } catch (e) {
      res.status(500).json({ error: 'Internal server error' });
      console.error(e);
    }
  }

  async getReviewedAppointments(req, res) {
    try {
      const appointments = await clientService.getReviewedAppointments(req.params.id);
      res.status(200).json(appointments);
    } catch (e) {
      res.status(500).json({ error: 'Internal server error' });
      console.error(e);
    }
  }

  async getUnreviewedAppointments(req, res) {
    try {
      const appointments = await clientService.getUnreviewedAppointments(req.params.id);
      res.status(200).json(appointments);
    } catch (e) {
      res.status(500).json({ error: 'Internal server error' });
      console.error(e);
    }
  }

}
module.exports = new ClientController();
