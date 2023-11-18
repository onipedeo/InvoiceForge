const appointmentController = require('../controllers/appointment');
const express = require('express');
const router = express.Router();

// For validating the request body
const validateDto = require('../middleware/validate-dto');
const appointmentDto = require('../dtos/appointment');

// GET appointment by ID
router.get('/:id', (req, res) => {
  appointmentController.getById(req, res);
});

// PUT edit appointment
router.put('/:id', validateDto(appointmentDto), (req, res) => {
  try {
  appointmentController.edit(req, res);
  } catch (e) {
    console.error(e, "error in appointmentRoutes.js");
  }
});

// POST create new appointment
router.post('/', validateDto(appointmentDto), (req, res) => {
  appointmentController.create(req, res);
});

// Put reviewed = true by id
router.put('/set-reviewed/:id', (req, res) => {
  appointmentController.setReviewedById(req, res);
});

// Put invoiced = true by id
router.put('/set-invoiced/:id', (req, res) => {
  appointmentController.setInvoicedById(req, res);
});

// DELETE appointment by ID
router.delete('/:id', (req, res) => {
  appointmentController.delete(req, res);
});

// PUT confirmed hours by ID
router.put('/confirm-hours/:id', (req, res) => {
  appointmentController.confirmHours(req, res);
});

module.exports = router;