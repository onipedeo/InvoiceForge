const clientDao = require('../dao/client');

class ClientService {
  create(clientDto) {
    const { userId, name, companyName, email, phone, clientRateCents } = clientDto;
    return clientDao.create(userId, name, companyName, email, phone, clientRateCents);
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

  getUnreviewedAppointments(clientId) {
    return clientDao.getUnreviewedAppointments(clientId);
  }

}

module.exports = new ClientService();