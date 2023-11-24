const db = require('../../db/db');
/**
 * Replaces a property within an object with its resolved value.
 * @param {string} propertyName - The name of the property to replace.
 * @param {object} objectWithProp - The object containing the property to replace.

 * @returns {Promise<object>} - The modified object with the property replaced by its resolved value.
 */
module.exports = async function(propertyName, objectWithProp) {
  //helper function
  try {
    const makeTableName = (propertyName) => {
      return propertyName.endsWith('s') ? propertyName + 'es' :
      propertyName.endsWith('y') ? propertyName.slice(0, -1) + 'ies' :
      propertyName + 's';
    };

    const propertyName_Id = propertyName + '_id';
    const { [propertyName_Id]: _, ...rest } = objectWithProp;


    const propertyId = objectWithProp[propertyName_Id];

    const propertyObject = async () => {
      if (!propertyId) return null;
      const tableName = makeTableName(propertyName);
      const result = await db(tableName).where({ id: propertyId }).first();
      return result;
    };

    const resolvedPropertyObject = await propertyObject();

    return { ...rest, [propertyName]: resolvedPropertyObject };
  } catch (err) {
    err.statusCode = 404;
    err.message = err.message || `Could not find ${propertyName}`;
    throw err;
  }
};
