const invoiceController = require('../controllers/invoice');
const express = require('express');
const router = express.Router();

// POST api/invoice/ - create invoice
router.post('/', (req, res) => {
  invoiceController.create(req, res);
});

// PUT api/invoice/id/paid - set paid = true
router.put('/:id/paid', (req, res) => {
  invoiceController.setPaid(req, res);
});
module.exports = router;
