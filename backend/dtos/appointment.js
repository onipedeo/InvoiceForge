const yup = require('yup');
moment = require('moment');
moment().format();

module.exports = yup.object().shape({
  invoiceId: yup.number().integer().positive().nullable().default(null),
  userId: yup.number().integer().positive().required(),
  clientId: yup.number().integer().positive().required(),
  date: yup.date().required(),
  startTime: yup.string().required(),
  endTime: yup.string()
    .required()
    .test('is-after-start-time', "cannot-end-before-start", function(value) {
      const { startTime } = this.parent;
      return moment(value, 'HH:mm a').isSameOrAfter(moment(startTime, 'HH:mm a').add(1, 'hours'))
    }),
  confirmedHours: yup.number().integer().positive().nullable().default(null),
  reviewed: yup.boolean().required().default(false),
  invoiced: yup.boolean().required().default(false),
  appointmentRateCents: yup.number().integer().positive().nullable().default(null),
  notes: yup.string().nullable().default(null)
});
