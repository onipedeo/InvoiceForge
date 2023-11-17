const db = require('../db/db');

class appointmentDao {
  async create(date, startTime, endTime, clientId, userId, appointmentRateCents, notes) {
    const [id] = await db('appointments').insert({
      date,
      start_time: startTime,
      end_time: endTime,
      client_id: clientId,
      user_id: userId,
      appointment_rate_cents: appointmentRateCents,
      notes
    })
    .returning('id');

    return id;
  }

  async getById(id) {
    return await db('appointments').select('*').where({ id });
  }

  async delete(id) {
    return await db('appointments').where({ id }).del();
  }

  async edit(id, date, startTime, endTime, clientId, userId, appointmentRateCents, notes) {
    return await db('appointments').where({ id }).update({
      date,
      start_time: startTime,
      end_time: endTime,
      client_id: clientId,
      user_id: userId,
      appointment_rate_cents: appointmentRateCents,
      notes
    });
  }

  async reviewedById(id) {
    return await db('appointments').where({ id }).update({ reviewed: true });
  }

  async invoicedById(id) {
    return await db('appointments').where({ id }).update({ invoiced: true });
  }

  async confirmHours(id, confirmedHours) {
    return await db('appointments').where({ id }).update({ confirmed_hours: confirmedHours });
  }
}

module.exports = new appointmentDao();
