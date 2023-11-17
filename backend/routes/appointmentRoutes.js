const appointmentController = require('../controllers/appointment');
const express = require('express');
const router = express.Router();

// GET appointment by ID
router.get('/:id', (req, res) => {
  appointmentController.getById(req, res);
});

// PUT edit appointment
router.put('/:id', (req, res) => {
  appointmentController.edit(req, res);
});

// POST create new appointment
router.post('/', (req, res) => {
  appointmentController.create(req, res);
});

// Put reviewed = true by id
router.put('/set-reviewed/:id', (req, res) => {
  appointmentController.reviewedById(req, res);
});

// Put invoiced = true by id
router.put('/set-invoiced/:id', (req, res) => {
  appointmentController.invoicedById(req, res);
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
