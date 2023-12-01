const appointmentDao = require('../daos/appointment');
class AppointmentService {

  create(appointmentDto) {
    const { date, startTime, endTime, clientId, userId, appointmentRateCents, notes } = appointmentDto;
    return appointmentDao.create(date, startTime, endTime, clientId, appointmentRateCents, notes);
  }

  getById(appointmentId) {
    return appointmentDao.getById(appointmentId);
  }

  edit(id, appointmentDto) {
    const { date, startTime, confirmedHours, endTime, clientId, appointmentRateCents, notes } = appointmentDto;
    return appointmentDao.edit({id, date, startTime, confirmedHours, endTime, clientId, appointmentRateCents, notes});
  }

  delete(appointmentId) {
    return appointmentDao.delete(appointmentId);
  }

  confirmHours(appointmentId, {confirmedHours}) {
    return appointmentDao.confirmHours(appointmentId, confirmedHours);
  }
}

module.exports = new AppointmentService();
