const clientController = require('../controllers/client');
const express = require('express');
const { client } = require('../db/db');
const router = express.Router();


// GET /api/client/:id - serves object - client
router.get('/:id', (req, res) => {
  clientController.getById(req, res);
});

// GET /api/client/:id/appointments - serves array: client appointments
router.get('/:id/appointments', (req, res) => {
  clientController.getAppointments(req, res);
});

// GET /api/client/:id/reviewed - serves array: client uninvoiced appointments
router.get('/:id/reviewed', (req, res) => {
  clientController.getReviewedAppointments(req, res);
});

// Get /api/client/:id/unreviewed - serves array: client unreviewed appointments
router.get('/:id/unreviewed', (req, res) => {
  clientController.getUnreviewedAppointments(req, res);
});

// GET /api/client/:id/invoices - serves array: client invoices
router.get('/:id/invoices', (req, res) => {
  clientController.getInvoices(req, res);
});

// PUT /api/client/:id/address
router.put('/:id/address', (req, res) => {
  clientController.setAddress(req, res);
});

// POST /api/client/ - takes params for new client
router.post('/', (req, res) => {
  clientController.create
});

module.exports = router;
