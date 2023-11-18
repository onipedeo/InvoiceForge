const userDao = require('../daos/user');
class UserService {
  create(userDto) {
    const { firstName, lastName, companyName, email, phone, password, passwordConfirmation, standardRateCents } = userDto;
    return userDao.create(firstName, lastName, companyName, email, phone, password, standardRateCents);
  }

  getById(id) {
    return userDao.getById(id);
  }

  getByEmail(emailDto) {
    const { email } = emailDto;
    return userDao.getByEmail(email);
  }

  edit(id, userDto) {
    const { firstName, lastName, companyName, email, phone, password, standardRateCents } = userDto;
    return userDao.edit(id, firstName, lastName, companyName, email, phone, password, standardRateCents);
  }

  getInvoiceByNumber(id, number) {
    return userDao.getInvoiceByNumber(id, number);
  }

}

module.exports = new UserService();
