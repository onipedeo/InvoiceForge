const db = require('../../db/db');


module.exports = async function (where) {
  const sanitizeAppointments = (appointments) => {
    return appointments.map((appointment) => {
      const { invoice_id, user_id, client_id, ...rest } = appointment;
      return rest;
    });
  };
  return sanitizeAppointments(await db('appointments').where(where));
};
