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

  getInvoices(id, number) {
    return userDao.getInvoices(id);
  }

}

module.exports = new UserService();
