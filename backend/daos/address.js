const db = require('../db/db');

class AddressDao {
  async create(line_1, line_2, city, province, country, postalCode) {
   const [id] = await db('addresses').insert({
      line_1,
      line_2,
      city,
      province,
      country,
      postal_code: postalCode
    })
    .returning('id');

    return id;
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
