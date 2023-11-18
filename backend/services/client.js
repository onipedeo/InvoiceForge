const clientDao = require('../daos/client');

class ClientService {
  create(clientDto) {
    const { userId, name, companyName, email, phone, clientRateCents } = clientDto;
    return clientDao.create(userId, name, companyName, email, phone, clientRateCents)
    .catch((error) => { console.error(error); });
  }

  getById(clientId) {
    return clientDao.getById(clientId);
  }

  getAppointments(clientId) {
    return clientDao.getAppointments(clientId);
  }

  getInvoices(clientId) {
    return clientDao.getInvoices(clientId);
  }

  setAddress(clientId, addressIdDto) {
    const { addressId } = addressIdDto;
    return clientDao.setAddress(clientId, addressId);
  }

  getReviewedAppointments(clientId) {
    return clientDao.getReviewedAppointments(clientId);
  }

  getAppointmentsInReview(clientId) {
    return clientDao.getAppointmentsInReview(clientId);
  }

}

module.exports = new ClientService();
