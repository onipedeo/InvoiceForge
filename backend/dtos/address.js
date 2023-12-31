const yup = require('yup');

module.exports = yup.object().shape({
  // must have one of either userId or clientId but not both
  userId: yup.number().integer().min(1).notRequired().default(null),
  clientId: yup.number().integer().min(1).notRequired().default(null),
  line1: yup.string().required().trim(),
  line2: yup.string(),
  city: yup.string(),
  province: yup.string(),
  country: yup.string(),
  postalCode: yup.string().length(6)
}).test(
  'userId-clientId',
  'Must have either a userId or a clientId',
  function(value) {
    return !!(value.userId || value.clientId);
  }
);
