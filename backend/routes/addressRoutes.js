
const express = require('express');
const router = express.Router();
const addressController = require('../controllers/address');
const addressDto = require('../dtos/address');
const validateDto = require('../middleware/validate-dto');

// GET address by ID
router.get('/:id', (req, res) => {
  addressController.getById(req, res);
});

// POST create new address
router.post('/', validateDto(addressDto), (req, res) => {
  addressController.create(req, res);
});

// DELETE address by ID
router.delete('/:id', (req, res) => {
  addressController.delete(req, res);
});

// PUT edit address by ID
router.put('/:id', validateDto(addressDto), (req, res) => {
  addressController.edit(req, res);
});

module.exports = router;
