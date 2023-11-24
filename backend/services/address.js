const addressDao = require('../daos/address');

class AddressService {
  create(addressDto) {

    const { clientId, userId, line_1, line_2, city, province, country, postalCode } = addressDto;
    return addressDao.create({clientId, userId}, line_1, line_2, city, province, country, postalCode);

  }

  getById(id) {
    return addressDao.getById(id);
  }

  delete(id) {
    return addressDao.delete(id);
  }

  edit(id, addressDto) {
    const { line_1, line_2, city, province, country, postalCode } = addressDto;
    return addressDao.edit(id, line_1, line_2, city, province, country, postalCode);
  }
}

module.exports = new AddressService();
