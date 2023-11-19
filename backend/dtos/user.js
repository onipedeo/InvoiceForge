const yup = require('yup');

module.exports = yup.object().shape({
  firstName: yup.string().required(),
  lastName: yup.string().required(),
  companyName: yup.string().nullable().default(null),
  email: yup.string().email().required(),
  phone: yup.string().max(15).nullable().default(null),
  password: yup.string().required(),
  standardRateCents: yup.number().required()
});
