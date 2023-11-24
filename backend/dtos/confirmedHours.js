const yup = require('yup');

module.exports = yup.object().shape({
  confirmedHours: yup.number().positive().required()
});
