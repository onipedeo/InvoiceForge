const clientController = require('../controllers/client');
const express = require('express');
const router = express.Router();
const validateDto = require('../middleware/validate-dto');
const clientDto = require('../dtos/client');


router.post('/', validateDto(clientDto), (req, res) => {
  clientController.create(req, res);
});
// GET /api/client/:id - serves object - client
router.get('/:id', (req, res) => {
  clientController.getById(req, res);
});

router.get('/:id/object', (req, res) => {
  clientController.getObject(req, res);
});

// PUTS /api/client/:id
router.put('/:id', validateDto(clientDto), (req, res) => {
  clientController.update(req, res);
});
// POST /api/client/ - takes params for new client

router.get('/:id/appointments', (req, res) => {
  clientController.getAppointments(req, res);
});

router.get('/:id/unreviewed', (req, res) => {
  clientController.getUnreviewed(req, res);
});

router.get('/:id/reviewed', (req, res) => {
  clientController.getReviewed(req, res);
});

// PUT /api/client/:id/address - adds address_id to client
router.put('/:id/address/:addressId', (req, res) => {
  clientController.setAddressId(req, res);
});

router.put('/:id/delete', (req, res) => {
  clientController.delete(req, res);
});

module.exports = router;
