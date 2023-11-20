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
      console.error(e);
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

  async setAddressId(req, res) {
    try {
      const id = await clientService.setAddressId(req.params.id, req.perams.addressId);
      res.status(200).json({ message: 'Address updated successfully' });
    } catch (e) {
      res.status(500).json({ error: 'Internal server error' });
      console.error(e);
    }
  }

}
module.exports = new ClientController();
