const addressService = require('../services/address');

class AddressController {
  async getById(req, res) {
    try {
      const address = await addressService.getById(req.params.id);
      res.status(200).json(address);
    } catch (e) {
      res.status(500).json({ error: 'Internal server error' });

    }
  }
  async create(req, res) {
    try {
      const id = await addressService.create(req.body);
      res.status(201).json(id);
    } catch (e) {
      res.status(500).json({ error: 'Internal server error' });
      console.log(e)
    }
  }
  async delete(req, res) {
    try {
      const id = await addressService.delete(req.params.id);
      res.status(200).json({ message: 'Address deleted successfully' });
    } catch (e) {
      res.status(500).json({ error: 'Internal server error' });

    }

  }

  async edit(req, res) {
    try {
      const id = await addressService.edit(req.params.id, req.body);
      res.status(200).json({ message: 'Address updated successfully' });
    } catch (e) {
      res.status(500).json({ error: 'Internal server error' });

    }
  }
}

module.exports = new AddressController();
