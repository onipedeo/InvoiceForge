const invoiceController = require('../controllers/invoice');
const express = require('express');
const validateDto = require('../middleware/validate-dto');
const invoiceDto = require('../dtos/invoice');
const router = express.Router();

// POST api/invoice/ - create invoice
router.post('/', validateDto(invoiceDto), (req, res) => {
  invoiceController.create(req, res);
});

// PUT api/invoice/id/paid - set paid = true
router.put('/:id/paid', (req, res) => {
  invoiceController.setPaid(req, res);
});

// GET api/invoice/id - get invoice by id
router.get('/:id', (req, res) => {
  invoiceController.getById(req, res);
});



module.exports = router;
