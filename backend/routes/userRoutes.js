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
// GET /api/user/idByEmail - Get user by email
router.put('/idByEmail', validateDto(emailDto), (req, res) => {
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

router.get('/:id/object', (req, res) => {
  userController.getObject(req, res);
});

router.get('/:id/invoices', (req, res) => {
  userController.getInvoices(req, res);
});

router.get('/:id/appointments', (req, res) => {
  userController.getAppointments(req, res);
});

router.get('/:id/clients', (req, res) => {
  userController.getClients(req, res);
});

router.get('/:id/unreviewed/', (req, res) => {
  userController.getUnreviewed(req, res);
});

router.get('/:id/reviewed/', (req, res) => {
  userController.getReviewed(req, res);
});



module.exports = router;
