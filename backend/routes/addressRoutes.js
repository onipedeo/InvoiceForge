
const express = require('express');
const router = express.Router();
const addressController = require('../controllers/address');

// GET address by ID
router.get('/:id', (req, res) => {
  addressController.getById(req, res);
});

// POST create new address
router.post('/', (req, res) => {
  addressController.create(req, res);
});

// DELETE address by ID
router.delete('/:id', (req, res) => {
  addressController.delete(req, res);
});

// PUT edit address by ID
router.put('/:id', (req, res) => {
  addressController.edit(req, res);
});

module.exports = router;
