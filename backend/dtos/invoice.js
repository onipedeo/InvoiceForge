const yup = require('yup');

module.exports = yup.object().shape({
  userId: yup.number().required(),
  clientId: yup.number().required(),
  dueDate: yup.date().nullable().default(null),
  totalCents: yup.number().required(),
  appointmentIds: yup.array().of(yup.number()).required()
});
