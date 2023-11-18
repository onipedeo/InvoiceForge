const yup = require('yup');

module.exports = yup.object().shape({
  line_1: yup.string().required().trim(),
  line_2: yup.string(),
  city: yup.string(),
  province: yup.string(),
  country: yup.string(),
  postalCode: yup.string().length(6)
});
