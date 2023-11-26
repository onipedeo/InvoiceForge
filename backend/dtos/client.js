const yup = require('yup');

module.exports = yup.object().shape({
  userId: yup.number().integer().positive().required(),
  name: yup.string().max(50).required(),
  companyName: yup.string().max(50).nullable().default(null),
  email: yup.string().email().required(),
  phone: yup.string().max(15).nullable().default(null),
  clientRateCents: yup.number().integer().positive().nullable().default(null),
});
