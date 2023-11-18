const appointmentDao = require('../daos/appointment');
class AppointmentService {

  create(appointmentDto) {
    console.log("appointmentDto", appointmentDto)
    const { date, startTime, endTime, clientId, userId, appointmentRateCents, notes } = appointmentDto;
    return appointmentDao.create(date, startTime, endTime, clientId, userId, appointmentRateCents, notes);
  }

  getById(appointmentId) {
    return appointmentDao.getById(appointmentId);
  }

  edit(appointmentId, appointmentDto) {
    const { date, startTime, endTime, clientId, userId, appointmentRateCents, notes } = appointmentDto;
    return appointmentDao.edit(appointmentId, date, startTime, endTime, clientId, userId, appointmentRateCents, notes);
  }

  delete(appointmentId) {
    return appointmentDao.delete(appointmentId);
  }

  setReviewedById(appointmentId) {
    return appointmentDao.reviewedById(appointmentId);
  }

  setInvoicedById(appointmentId) {
    return appointmentDao.invoicedById(appointmentId);
  }

  confirmHours(appointmentId, confirmedHours) {
    return appointmentDao.confirmHours(appointmentId, confirmedHours);
  }
}

module.exports = new AppointmentService();
