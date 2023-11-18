const userController = require('../controllers/user');
const express = require('express');
const router = express.Router();

// Validation middleware
const validateDto = require('../middleware/validate-dto');
const userDto = require('../dtos/user');


// POST /api/user/ - Create a new user
router.post('/', validateDto(userDto), (req, res) => {
  userController.create(req, res);
});
// GET /api/user/:email - Get user by email
router.get('/email', (req, res) => {
  userController.getByEmail(req, res);
});
// GET /api/user/id/:id - Get user by ID
router.get('/:id', (req, res) => {
  userController.getById(req, res);
});

// PUT /api/user/:id - Edit user by ID
router.put('/:id', validateDto(userDto), (req, res) => {
  userController.edit(req, res);
});

// GET /api/user/:id/clients - Get user's clients
router.get('/:id/clients', (req, res) => {
  userController.getClients(req, res);
});

// GET /api/user/:id/appointments - Get user's appointments
router.get('/:id/appointments', (req, res) => {
  userController.getAppointments(req, res);
});

// GET /api/user/:id/in-review - Get in-review appointments of a user
router.get('/:id/in-review', (req, res) => {
  userController.getAppointmentsInReview(req, res);
});

// GET /api/user/:id/invoices - Get user's invoices
router.get('/:id/invoices', (req, res) => {
  userController.getInvoices(req, res);
});

// GET /api/user/:id/invoice/:number - Get invoice by number for a user
router.get('/:id/invoice/:number', (req, res) => {
  userController.getInvoiceByNumber(req, res);
});

module.exports = router;
