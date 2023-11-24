const clientService = require('../services/client');

class ClientController {
  async create(req, res) {
    try {
      const id = await clientService.create(req.body);
      res.status(201).json(id);
    } catch (error) {
      res.status(500).json({ error: 'Internal server error' });
    }
  }

  async update(req, res) {
    try {
      const id = await clientService.update(req.params.id, req.body);
      res.status(200).json({ message: 'Client updated successfully' });
    } catch (e) {
      res.status(500).json({ error: 'Internal server error' });
    }
  }

  async getById(req, res) {
    try {
      const client = await clientService.getById(req.params.id);
      res.status(200).json(client);
    } catch (e) {
      res.status(500).json({ error: 'Internal server error' });
    }
  }

  async setAddressId(req, res) {
    try {
      const id = await clientService.setAddressId(req.params.id, req.perams.addressId);
      res.status(200).json({ message: 'Address updated successfully', id: id });
    } catch (e) {
      res.status(500).json({ error: 'Internal server error' });
    }
  }

  async getAppointments(req, res) {
    try {
      const appointments = await clientService.getAppointments(req.params.id);
      res.status(200).json(appointments);
    } catch (e) {
      res.status(500).json({ error: 'Internal server error' });
    }
  }

  async getUnreviewed(req, res) {
    try {
      const appointments = await clientService.getUnreviewed(req.params.id);
      res.status(200).json(appointments);
    } catch (e) {
      res.status(500).json({ error: 'Internal server error' });
    }
  }

  async getReviewed(req, res) {
    try {
      const appointments = await clientService.getReviewed(req.params.id);
      res.status(200).json(appointments);
    } catch (e) {
      res.status(500).json({ error: 'Internal server error' });
      console.error(e);
    }
  }

  async getObject(req, res) {
    try {
      const client = await clientService.getObject(req.params.id);
      res.status(200).json(client);
    } catch (e) {
      res.status(500).json({ error: 'Internal server error' });
    }
  }

}
module.exports = new ClientController();
