import get from "../helpers/get";

/**
 * Retrieves the user ID by email.
 * @param {string} email - The email of the user.
 * @returns {Promise<number>} - A promise that resolves to the user ID.
 * @throws {Error} - If there is an error retrieving the user ID.
 */
export const idByEmail = async (email) => {

  const url = `api/user/idByEmail`;

  return await get(url, { email }).catch((error) => {
    throw new error("Error retrieving user id");
  });
}
