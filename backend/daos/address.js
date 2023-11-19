const db = require('../db/db');

class AddressDao {
  async create(userId, clientId, line_1, line_2, city, province, country, postalCode) {
    const [addressId] = await db('addresses').insert({
      line_1,
      line_2,
      city,
      province,
      country,
      postal_code: postalCode
    })
      .returning('id');

    if (userId) {
      const { id } = addressId;
      await db('users').update("address_id",  id).where({ id: userId });
    }
    if (clientId) {
      const { id } = addressId;
      await db('clients').update('address_id', id).where({ id: clientId });
    }
    return addressId;

  }
  async getById(id) {
    return await db('addresses').select('*').where({ id });

  }

  async delete(id) {
    return await db('addresses').where({ id }).del();
  }

  async edit(id, { line_1, line_2, city, province, country, postalCode }) {
    return await db('addresses').where({ id }).update({
      line_1,
      line_2,
      city,
      province,
      country,
      postal_code: postalCode
    });
  }
}

module.exports = new AddressDao();