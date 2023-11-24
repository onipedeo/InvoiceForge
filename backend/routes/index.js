const BodyParser = require('body-parser');

const express = require('express');
const morgan = require('morgan');

// Import sub routers
const user = require('./userRoutes');
const client = require('./clientRoutes');
const appointment = require('./appointmentRoutes');
const invoice = require('./invoiceRoutes');
const address = require('./addressRoutes');

const router = express.Router();

router.use(BodyParser.urlencoded({ extended: false }));
router.use(BodyParser.json());

router.use(morgan('dev'));
router.use('/user', user);
router.use('/client', client);
router.use('/appointment', appointment);
router.use('/invoice', invoice);
router.use('/address', address);

// test GET route
router.get('/test', (req, res) => res.json({
  message: "Seems to work!",
}));






module.exports = router;
