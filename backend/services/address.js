const addressDao = require('../daos/address');

class AddressService {
  create(addressDto) {

    const { clientId, userId, line1, line2, city, province, country, postalCode } = addressDto;
    return addressDao.create({ clientId, userId }, line1, line2, city, province, country, postalCode);

  }

  getById(id) {
    return addressDao.getById(id);
  }

  delete(id) {
    return addressDao.delete(id);
  }

  edit(id, addressDto) {
    const { line1, line2, city, province, country, postalCode } = addressDto;
    return addressDao.edit(id, line1, line2, city, province, country, postalCode);
  }
}

module.exports = new AddressService();
