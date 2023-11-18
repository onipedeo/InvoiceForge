const userController = require('../controllers/user');
const express = require('express');
const router = express.Router();

// Validation middleware
const validateDto = require('../middleware/validate-dto');
const userDto = require('../dtos/user');
const emailDto = require('../dtos/email');


// POST /api/user/ - Create a new user
router.post('/', validateDto(userDto), (req, res) => {
  userController.create(req, res);
});
// GET /api/user/:email - Get user by email
router.get('/email', validateDto(emailDto), (req, res) => {
  userController.getByEmail(req, res);
});
// GET /api/user/:id - Get user by ID
router.get('/:id', (req, res) => {
  userController.getById(req, res);
});

// PUT /api/user/:id - Edit user by ID
router.put('/:id', validateDto(userDto), (req, res) => {
  userController.edit(req, res);
});

// GET /api/user/:id/invoice/:number - Get invoice by user_id and invoice_number.
router.get('/:id/invoice/:number', (req, res) => {
  userController.getInvoiceByNumber(req, res);
});

module.exports = router;
