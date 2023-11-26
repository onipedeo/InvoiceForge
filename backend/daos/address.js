const db = require('../db/db');
const humps = require('humps');

class AddressDao {
  async create(idObj, line1, line2, city, province, country, postalCode) {
    const [returnObject] = await db('addresses').insert({
      line_1: line1,
      line_2: line2,
      city,
      province,
      country,
      postal_code: postalCode
    })
      .returning('id');
    const addressId = returnObject.id;
    const { userId, clientId } = idObj;

    if (userId) {
      await db('users').update("address_id", addressId).where({ id: userId });
    }
    if (clientId) {
      await db('clients').update('address_id', addressId).where({ id: clientId });
    }
    return addressId;

  }
  async getById(id) {
    const result = await db('addresses').select('*').where({ id }).first();
    return humps.camelizeKeys(result);

  }

  async delete(id) {
    return await db('addresses').where({ id }).del();
  }

  async edit({ id, line1, line2, city, province, country, postalCode }) {
    return await db('addresses').where({id}).update({
      line1,
      line2,
      city,
      province,
      country,
      postal_code: postalCode
    });
  }
}

module.exports = new AddressDao();
