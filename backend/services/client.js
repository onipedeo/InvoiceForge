const clientDao = require('../daos/client');

class ClientService {
  create(clientDto) {
    const { userId, name, companyName, email, phone, clientRateCents } = clientDto;
    return clientDao.create(userId, name, companyName, email, phone, clientRateCents)

  }

  update(clientId, clientDto) {
    const { name, companyName, email, phone, clientRateCents } = clientDto;
    return clientDao.update(clientId, name, companyName, email, phone, clientRateCents)
      
  }

  getById(clientId) {
    return clientDao.getById(clientId);
  }


  setAddressId(clientId, addressId) {
    return clientDao.setAddressId(clientId, addressId);
  }

  getAppointments(clientId) {
    return clientDao.getAppointments(clientId);
  }

  getUnreviewed(clientId) {
    return clientDao.getUnreviewed(clientId);
  }

  getReviewed(clientId) {
    return clientDao.getReviewed(clientId);
  }




}

module.exports = new ClientService();
