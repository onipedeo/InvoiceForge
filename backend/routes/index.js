const BodyParser = require('body-parser');

const express = require('express');
const morgan = require('morgan');


// Import sub routers
const user = require('./userRoutes');
const client = require('./clientRoutes');
const appointment = require('./appointmentRoutes');
const invoice = require('./invoiceRoutes');
const address = require('./addressRoutes');
const sendEmail = require('./sendEmailRoutes');
const runDbReset = require('../services/dbReset');

const router = express.Router();

router.use((req, res, next) => {
  res.setHeader('Content-Type', 'application/json');
  next();
});

router.use(BodyParser.urlencoded({ extended: false }));
router.use(BodyParser.json());
router.use(morgan('dev'));
router.use('/user', user);
router.use('/client', client);
router.use('/appointment', appointment);
router.use('/invoice', invoice);
router.use('/address', address);
router.use('/send_email', sendEmail);

// test GET route
router.get('/test', (req, res) => res.json({
  message: "Seems to work!",
}));

// database reset route
router.get('/reset', (req, res) => {
  runDbReset()
    .then(() => res.status(200).send('Database reset'))
    .catch(() => res.status(500).send('Database reset failed'));
});








module.exports = router;
