const db = require('../db/db');

class appointmentDao {
  async create(date, startTime, endTime, clientId, userId, appointmentRateCents, notes) {
    try {
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
    } catch (e) {
      console.error(e);
    }
  }

  async getById(id) {
    return await db('appointments').select('*').where({ id }).first();
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
  async confirmHours(id, confirmedHours) {
    return await db('appointments').where({ id }).update({ confirmed_hours: confirmedHours, reviewed: true });
  }
}

module.exports = new appointmentDao();
