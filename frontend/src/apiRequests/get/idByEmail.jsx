import get from "../helpers/get";
// send email in request body
export const idByEmail = async (email) => {

  const url = `api/user/idByEmail`;

  return await get(url, email).catch((error) => {
    throw new error("Error retrieving user id");
  });
}
