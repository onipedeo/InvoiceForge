const invoiceController = require('../controllers/invoice');
const express = require('express');
const router = express.Router();

// POST create invoice
router.post('/', (req, res) => {
  invoiceController.create(req, res);
});

// PUT set paid = true
router.put('/:id', (req, res) => {
  invoiceController.setPaid(req, res);
});
module.exports = router;
