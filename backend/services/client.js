const clientDao = require('../daos/client');

class ClientService {
  create(clientDto) {
    const { userId, name, companyName, email, phone, clientRateCents } = clientDto;
    return clientDao.create(userId, name, companyName, email, phone, clientRateCents)
      .catch((error) => { console.error(error); });
  }

  update(clientId, clientDto) {
    const { name, companyName, email, phone, clientRateCents } = clientDto;
    return clientDao.update(clientId, name, companyName, email, phone, clientRateCents)
      .catch((error) => { console.error(error); });
  }

  getById(clientId) {
    return clientDao.getById(clientId);
  }


  setAddressId(clientId, addressId) {
    return clientDao.setAddressId(clientId, addressId);
  }




}

module.exports = new ClientService();
